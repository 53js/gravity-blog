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

		gravityBlog.view = new gravityBlog.Views.applicationView({
			collection : articleList,
		});
	}
};

$(document).ready(function(){
	gravityBlog.init();
});
