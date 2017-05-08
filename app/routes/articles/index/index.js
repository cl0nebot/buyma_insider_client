import Ember from "ember";

const { merge, RSVP: { hash } } = Ember;

export default Ember.Route.extend({
  model(params) {
    // If we pass {{#link-to 'articles' article}} to
    // link-to and to the route, then Ember do not
    // call adapter again to refetch the model
    // If we pass id, then it will automatically
    // call adapter to refetch.
    const applicationModels  = this.modelFor('application');
    const articleIndexModels = this.modelFor('articles.index');

    return hash(merge(applicationModels, articleIndexModels));
  },

  setupController(controller, models) {
    this._super(...arguments);
    controller.setProperties(models);
  }
});
