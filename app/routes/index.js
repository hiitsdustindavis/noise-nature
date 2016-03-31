import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      post: this.store.findAll('post'),
      images: this.store.findAll('images')
    });
  },

  actions: {
    newPost3(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }

}
});
