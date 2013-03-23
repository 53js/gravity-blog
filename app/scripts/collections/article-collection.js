gravityBlog.Collections.ArticleCollection = Backbone.Collection.extend({

	model: gravityBlog.Models.ArticleModel,

	url: 'http://gravityblog.cloudfoundry.com/article'

});
