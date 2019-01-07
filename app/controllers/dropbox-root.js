import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  search_token: '',
  queryParams: ['path', 'token', 'ordering'],
  path: '',
  ordering: '',
  actions: {
    searchBy() {
      let options = {
        url: 'd-box-search',
        query: {},
      };
      if (this.search_token) {
        options.query['token'] = this.search_token;
      } else {
        delete options.query;
        options['url'] = 'd-box-items'
      }
      this.store.query('dbx-item', options).then(
        (SearchedData) => this.set('model', SearchedData)
      )
    },
    sortBy: function () {
      let selected_option = $('#sort-select').val();
      let path = this.get('queryParams').path;
      let options = {
        url: 'd-box-items',
        query: {
          ordering: selected_option,
          path: path,
        },
      };
      this.store.query('dbx-item', options).then(
        (SortedData) => this.set('model', SortedData)
      )
    },
    openFolder(path) {
      this.transitionToRoute('dropbox-root', {queryParams: {path: path}})
    }
  },

});
