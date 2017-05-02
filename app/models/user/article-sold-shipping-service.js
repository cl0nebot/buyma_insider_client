import DS from "ember-data";

const { belongsTo } = DS;

export default DS.Model.extend({
  article:         belongsTo('article'),
  shippingService: belongsTo('shippingService'),
});
