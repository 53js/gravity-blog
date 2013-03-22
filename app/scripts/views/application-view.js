'use strict';
gravityBlog.Views.applicationView = Backbone.View.extend({

	el: $('#container'),

	events: {
		'click #new-article': 'createArticle',
		'click #add-article': 'showTools'
	},

	initialize: function() {
		this.collection.on('add',this.addOne, this);
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
		this.collection.add({title:inputVal, content:textareaVal });
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
