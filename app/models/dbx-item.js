import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  path_lower: DS.attr('string'),
  download_link: DS.attr('string'),
  type: DS.attr('string'),
  size: DS.attr('number')
});
