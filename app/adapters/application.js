import DS from 'ember-data';


export default DS.RESTAdapter.extend({
  host: 'http://127.0.0.1:5000',
  namespace: 'api',

  query(store, type, options) {
    let url_snippet = options.url;
    let query_params = options.query;
    let url = `${this.host}/${this.namespace}/${url_snippet}`;
    return this.ajax(
      url,
      'GET',
      {
        data: query_params
      },
    )
  },
});
