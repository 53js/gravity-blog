'use strict';
gravityBlog.Views.applicationView = BackboneGravity.Views.WorldView.extend({

	el: $('#container'),

	events: {
		'click #new-article': 'createArticle',
		'click #add-article': 'showTools',
		'click #toggle-debug': 'debug'
	},

	initialize: function() {
		BackboneGravity.Views.WorldView.prototype.initialize.call(this);
		this.addCollectionListener(this.collection);
	},

	addCollectionListener: function(collection) {
		collection.on('add', this.addOne, this);
		collection.on('remove', this.removeOne, this);
		collection.on('reset', this.reset, this);
	},

	addOne: function(article) {
		var view = new gravityBlog.Views.articleView({
			model : article
		});
		//on ajoute la vue au DOM
		this.$el.find('#blog').prepend(view.render().el);
		this.$el.height(this.$el.height() + view.$el.height())
		if (this.debugCanvas)
			this.debugCanvas.height = this.$el.height();
		this.bodies['ground'].setPosition({y: this.$el.height()});
		this.createBody(view, {
			x: view.$el.width() / 2,
			y: view.$el.height() / 2
		});
		return false;
	},

	remove: function() {
	},

	reset: function() {
		console.log($(window).width())
		this.createBody({
			cid: 'ground',
			width: $(window).width() * 2,
			height: 10,
			x: 560 / 2,
			y: this.$el.height(),
			angle: 0,
			dynamic: false
		});
		var self = this;
		console.log(self.collection.models.length)
		function loop(i) {
			if (!self.collection.models[i])
				return;
			self.addOne(self.collection.models[i]);
			i++;
			window.setTimeout(function() {
				loop(i);
			}, 2000);
		}
		loop(0);
		this.update();
	},

	createArticle: function(){
		var articleObj = {},
			inputVal = $('#new-title').val(),
			textareaVal= $('#new-content').val();

		if(inputVal){
			articleObj.title=inputVal;
		}
		if(textareaVal){
			articleObj.content = textareaVal;
		}
		this.collection.create(articleObj);
		this.resetTools();
		this.hideTools();
	},

	resetTools: function() {
		$('#new-title').val('');
		$('#new-content').val('');
	},

	hideTools: function() {
		$('#createTool').hide();
		$('#add-article').show();
	},

	showTools: function() {
		$('#add-article').hide();
		$('#createTool').fadeIn();
	}

});
