import { helper } from '@ember/component/helper';

export function checkIsActive([current, listed]) {
  if (current === listed){
    return '<';
  }
}

export default helper(checkIsActive);
