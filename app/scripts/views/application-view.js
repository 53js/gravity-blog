'use strict';
gravityBlog.Views.applicationView = Backbone.View.extend({

	el: $('#container'),

	events: {
		'click #new-article': 'createArticle',
		'click #add-article': 'showTools'
	},

	initialize: function() {
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
	},

	createArticle: function(){
		var inputVal = $('#new-title').val() || null,
			textareaVal= $('#new-content').val() || null;
		this.collection.create({title:inputVal, content:textareaVal });
		this.resetTools();
		this.hideTools();
	},

	reset : function(){
		this.collection.each(this.addOne, this);
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
