gravityBlog.Views.articleView = Backbone.View.extend({


    tagName:  "div",

    className: "article-view",

    template:  _.template($('#article-template').html()),

    events: {
      "dblclick p,label"  : "showEditTools",
      "click .edit-article" : "save"
    },

	initialize: function() {
	 	this.render();
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    save : function(event){

    	var input_val = this.$el.find(".edit-title").val();
    	var textarea_val= this.$el.find(".edit-content").val();

        if(input_val!="" && textarea_val!=""){
    	    this.model.set("title", input_val);
    	    this.model.set("content", textarea_val);
            this.hideEditTools();
    	    this.render();
        }
    },

    showEditTools : function(){

        this.$el.find('label').hide()
        this.$el.find('p').hide();
        this.$el.find('.tools').show()
    },

    hideEditTools : function(){

        this.$el.find('label').show()
        this.$el.find('p').show();
        this.$el.find('.tools').hide()
    }

});
