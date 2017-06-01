var VideoListEntryView = Backbone.View.extend({

  events : {
    'click .video-list-entry-title' : 'handleClick'
  },
  // initialize : function() {
  // },

  handleClick : function() {
    debugger;
    console.log('click handle fired');

  },

  render: function() {

    debugger;
    // debugger;
    this.$el.append($('<div>' + this.model + '</div>'));
    // this.$el.append(this.template(this.model.attributes)))
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
