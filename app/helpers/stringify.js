import { helper } from '@ember/component/helper';

export default helper(function stringify(params/*, hash*/) {
  let obj = params[0];
  return JSON.stringify(obj, null, 2);
});
