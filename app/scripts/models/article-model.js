'use strict';
gravityBlog.Models.ArticleModel = Backbone.Model.extend({

	defaults: {
		title: 'titre par défaut',
		content: 'content par défaut'
	},

	initialize: function() {
		console.log('New article: ', this);
    }

});
