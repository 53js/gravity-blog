gravityBlog.Views.applicationView = Backbone.View.extend({

   el: $("#container"), 

  	events: {
      "click #new-article":  "createArticle",
      "click #add-article" : "showTools" 
   },

  	initialize: function() {
      //this.collection appel la collection passée en paramètre dans le main.js
  		this.addCollectionListener(this.collection);
   },

   addCollectionListener: function(collection) {
	   collection.on('add', this.addOne, this);
	   collection.on('remove', this.removeOne, this);
	   collection.on('reset', this.reset, this);
	},

	addOne : function(article){
      var view = new gravityBlog.Views.articleView({
         model : article
      });
      //on ajoute la vue au DOM
		this.$el.find("#blog").prepend(view.render().el);
		return false;
	},

	remove : function(){
	},

	reset : function(){
	},

   createArticle: function(){
      var articleObj = {},
    	    input_val = $("#new-title").val(),
    	    textarea_val= $("#new-content").val();

      if(input_val){
         articleObj.title=input_val;
      }
      if(textarea_val){
         articleObj.content = textarea_val;
      }
    	//if(input_val && textarea_val){
    	this.collection.add(articleObj);
      this.resetTools();
    	this.hideTools();
      //}

   },

   resetTools :function(){
      $("#new-title").val("");
      $("#new-content").val("");      
   },

   hideTools : function(){
      $("#createTool").hide();
      $("#add-article").show();
   },

   showTools : function(){
    	$("#add-article").hide();
    	$("#createTool").fadeIn();
   }

});
