import { helper } from '@ember/component/helper';
import readingTime from 'reading-time';

export default helper((params /*, hash*/) => {
  return readingTime(params[0]);
});
