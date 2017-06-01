var VideoListView = Backbone.View.extend({
  
  el : '#videoList',

  initialize: function() {
    /* Backbone events bubble up through collections,
     * so monitoring a model in a collection is easy! */
    // this.collection.on('change:votes', this.render, this);
    this.render();
  },
  
  // render: function() {
  //   console.log("hgfsj");
  //   // this.$el.children().detach();
  //   this.$el.html(this.template());
  //   return this;
  // },
  render: function() {

    var html = [
      '<ul>',
      '</ul>',
      '<span class="votes">',
        // The total number of votes
        this.$el.append(this.collection.map((video) => $('<div>' + video.get('kind') + '</div>'))),
        '</span>'
    ].join('');

    this.$el.html(html);

    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
