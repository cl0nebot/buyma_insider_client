import DS from 'ember-data';
import numericDecimalRound from '../utils/numeric/decimal-round';

const Currency = DS.Transform.extend({
  deserialize(serialized) {
    return numericDecimalRound(serialized, 2);
  },

  serialize(deserialized) {
    return deserialized;
  }
});

export default Currency;
