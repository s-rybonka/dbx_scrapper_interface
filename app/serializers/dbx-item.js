import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  modelNameFromPayloadKey(payloadKey) {
    return this._super(payloadKey.replace('results', 'dbx-item'));
  }
});
