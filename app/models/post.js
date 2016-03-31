import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  natureType: DS.attr(),
  trevorSong: DS.attr(),
  dustinSong: DS.attr(),
  tileImage: DS.attr(),
  images: DS.hasMany('image', {async:true})
});
