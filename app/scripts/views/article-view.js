'use strict';
gravityBlog.Views.articleView = Backbone.View.extend({

	tagName: 'article',

	className: 'article-view',


	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html('<label>'+this.model.get('title')+'</label>'+'<p>'+this.model.get('content')+'</p>');
		return this;
	},


});
