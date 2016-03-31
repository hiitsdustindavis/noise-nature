import DS from 'ember-data';

export default DS.Model.extend({
  images: DS.belongsTo('post', {async: true})
});
