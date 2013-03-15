'use strict';

window.gravityBlog = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	init: function() {
		console.log('| Gravity Blog Initialisation');

		var articleList = new gravityBlog.Collections.ArticleCollection();
		articleList.fetch();

		var view = gravityBlog.view = new gravityBlog.Views.applicationView({
			collection : articleList,
		});
		view.debug();
	}
};

$(document).ready(function(){
	gravityBlog.init();
});
