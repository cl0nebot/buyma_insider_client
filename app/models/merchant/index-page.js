import DS from "ember-data";

const { attr } = DS;

export default DS.Model.extend({
  fullUrl:      attr(),
  relativePath: attr(),
  health:       attr(),
  lastSyncedAt: attr('datetime'),
});
