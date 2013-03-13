gravityBlog.Collections.ArticleCollection = Backbone.Collection.extend({

	model: gravityBlog.Models.ArticleModel,

	url: 'http://localhost:1337/article/'

});
