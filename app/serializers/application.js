import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, modelClass, payload, id, regType) {
    let prop_name = modelClass.modelName;
    payload[prop_name] = payload.results;
    return this._super(store, modelClass, payload, id, regType)
  },
});
