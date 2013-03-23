'use strict';

window.gravityBlog = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	init: function() {
		console.log('| Gravity Blog Initialisation');

		console.log('| Models \n');

		var unArticle = new gravityBlog.Models.ArticleModel(); // attributs par defaut
		//get
		console.log('unArticle.get(title)>>' , unArticle.get('title'));
		//set
		unArticle.set('title', 'un titre personalisé');
		//get
		console.log('unArticle.get(title)>>',unArticle.get('title'));
		//set a new attribut for this object
		unArticle.set('subtitle','yeah ! ');
		//print all my attributs
		console.log('unArticle.attributes>>' , unArticle.attributes ,'\n');

		var unAutre = new gravityBlog.Models.ArticleModel({title: 'Tuto Backbone', content: 'PART 1 : models'});

		console.log('| Collection\n');

		var articleList = new gravityBlog.Collections.ArticleCollection();
		articleList.add(unArticle);
		articleList.add([unAutre , {title:'Tricks', content:'on peut faire ça ! '}]);
		console.log(articleList);

	}
};

$(document).ready(function(){
	gravityBlog.init();
});
