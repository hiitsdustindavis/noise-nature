import Ember from 'ember';

export default Ember.Component.extend({
  isFormShowing: false,
  actions: {
    formShow: function() {
      this.set('isFormShowing', true);
    },
    formHide: function() {
      this.set('isFormShowing', false);
    },
    deletePost(post) {
      if(confirm('Delete Post?')) {
        this.sendAction('destroyPost', post);
      }
    },
    updatePost(post) {
      var params = {
        title: this.get('title'),
        natureType: this.get('natureType'),
        trevorSong: this.get('trevorSong'),
        dustinSong: this.get('dustinSong'),
        tileImage: this.get('tileImage'),
        images: this.get('images')
      };
      this.setAction('updatePost', post, params);
    }
  }
});
