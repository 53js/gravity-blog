'use strict';
gravityBlog.Views.articleView = Backbone.View.extend({

	tagName: 'article',

	className: 'article-view',

	template: _.template($('#article-template').html()),

	events: {
		'dblclick p,label': 'showEditTools',
		'click .edit-article': 'save'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		this.trigger('resize', {
			width: this.$el.outerWidth(),
			height: this.$el.outerHeight()
		});
		return this;
	},

	save: function() {

		var inputVal = this.$el.find('.edit-title').val();
		var textareaVal = this.$el.find('.edit-content').val();

		if (inputVal !== '' && textareaVal !== '') {
			this.model.set({
				'title': inputVal,
				'content': textareaVal
			});
			this.model.save();
			this.hideEditTools();
			this.render();
		}
	},

	showEditTools: function() {
		this.$el.find('label').hide();
		this.$el.find('p').hide();
		this.$el.find('.tools').show();
		this.trigger('resize', {
			width: this.$el.outerWidth(),
			height: this.$el.outerHeight()
		});
	},

	hideEditTools: function() {
		this.$el.find('label').show();
		this.$el.find('p').show();
		this.$el.find('.tools').hide();
		this.trigger('resize', {
			width: this.$el.outerWidth(),
			height: this.$el.outerHeight()
		});
	},

	update: function () {
		var position = this.getPosition();
		this.$el.css({
			//left: position.x - this.$el.outerWidth() / 2,
			//top: position.y - this.$el.outerHeight() / 2,
			transform:
				'translate(' +  (position.x - this.$el.outerWidth() / 2) + 'px, ' + (position.y - this.$el.outerHeight() / 2) + 'px) ' +
				'rotate(' + this.getAngle() + 'deg)'
		});
	}

});
