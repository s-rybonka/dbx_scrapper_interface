import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    path: {
      refreshModel: true,
      replace: true,
    }
  },
  buildBreadcrumbs() {
    let breadcrumbs = [];
    let params = this.paramsFor(this.routeName);
    let home_page = {
      title: 'Home',
      related_path: '',
    };
    params.path.split('/').forEach(function (val, index) {
      if (val) {
        breadcrumbs.push({
          title: val.charAt(0).toUpperCase() + val.slice(1),
          related_path: '/' + val,
        })
      }
      if (breadcrumbs.length >= 1 && !breadcrumbs.includes(home_page)) {
        breadcrumbs.unshift(home_page)
      }
    });
    return breadcrumbs
  },
  setupController(controller, model) {
    let breadcrumbs = this.buildBreadcrumbs();
    controller.set('breadcrumbs', breadcrumbs);
    controller.set('current', breadcrumbs[breadcrumbs.length - 1]);
    controller.set('queryParams', this.paramsFor(this.routeName));
    return this._super(...arguments)
  },

  model(params) {
    let options = {
      url: 'd-box-items',
      query: params,
    };
    return this.store.query('dbx-item', options)
  },

});
