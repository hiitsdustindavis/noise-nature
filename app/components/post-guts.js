import Ember from 'ember';

export default Ember.Component.extend({
  isFormShowing: false,
  actions: {
    formHide: function() {
      this.set('isFormShowing', false);
    },
    deletePost(post) {
      if(confirm('Delete Post?')) {
        this.sendAction('destroyPost', post);
      }
    },
    updatePost(post, params){
      this.sendAction('updatePost', post, params);
    }
  }
});
