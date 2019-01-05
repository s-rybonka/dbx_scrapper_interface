import { helper } from '@ember/component/helper';

export function truncateTitle(title) {
  if (title[0].length > 7) {
    title = title[0].substring(0, 7) + ' ...';
  }
  return title;
}

export default helper(truncateTitle);
