'use strict';
gravityBlog.Views.applicationView = Backbone.View.extend({

	el: $('#container'),

	events: {
		'click #new-article': 'createArticle',
		'click #add-article': 'showTools'
	},

	initialize: function() {
		//on attache la méthode addOne de l'objet courant
		//à l'evenement add de notre liste d'article
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
		//on récupère les valeurs des inputs
		var inputVal = $('#new-title').val() || null,
			textareaVal= $('#new-content').val() || null;
		//On ajoute à notre collection directement un objet 
		//qui sera transformé en model Article automatiquement par notre collection
		this.collection.add({title:inputVal, content:textareaVal });
		//on reset les inputs
		this.resetTools();
		//on hide les inputs
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
