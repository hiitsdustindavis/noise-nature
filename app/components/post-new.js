import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    newPostFormShow() {
      this.set('addNewPost', true);
    },

    newPost1() {
      var params = {
        title: this.get('title'),
        natureType: this.get('natureType'),
        trevorSong: this.get('trevorSong'),
        dustinSong: this.get('dustinSong'),
        tileImage: this.get('tileImage'),
        images: this.get('images')
      };
      this.set('addNewPost', false);
      this.sendAction('newPost2', params);
    }
  }
});
