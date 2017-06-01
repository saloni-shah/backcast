var VideoListView = Backbone.View.extend({
  
  el : '.list',

  initialize: function() {
    this.collection.on('all', this.render, this);
    /* Backbone events bubble up through collections,
     * so monitoring a model in a collection is easy! */
    // this.collection.on('change:votes', this.render, this);
    // this.render();
  },

  render: function() {

    // this.collection.model.forEa
    // debugger;
    // debugger;
    let count = 1;
    console.log(this.collection.length);
    this.collection.models.forEach(video => {
      console.log(count++);
      // debugger;

      new VideoListEntryView(video).render();
      // this.$el.append($('<div>' + video.get('kind') + '</div>'));
    });

    return this;
  },

  // template: templateURL('src/templates/videoList.html')

});
