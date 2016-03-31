import Ember from 'ember';

export default Ember.Component.extend({
  someNewName: false,
  actions: {
    editPost: function() {
      this.set('someNewName', true);
    },
    updatePost(post) {
      var params = {
        title: this.get('title'),
        natureType: this.get('natureType'),
        trevorSong: this.get('trevorSong'),
        dustinSong: this.get('dustinSong'),
        tileImage: this.get('tileImage'),
        images: this.get('images')
      }; debugger;
      this.set('editPost', false);
      this.sendAction('updatePost', post, params);
    }
  }
});
