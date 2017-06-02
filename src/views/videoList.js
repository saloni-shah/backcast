var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.children().detach();
    let children = this.collection.map(video => new VideoListEntryView({ model: video }).render().$el);

    this.$el.html(this.template());
    this.$el.append(children);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
