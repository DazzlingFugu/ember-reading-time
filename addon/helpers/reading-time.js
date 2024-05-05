import { helper } from '@ember/component/helper';
import readingTime from 'reading-time';
import humanizeDuration from 'humanize-duration';

export default helper(function helperReadingTime(positional /*, named*/) {
  const stats = readingTime(String(positional[0]));
  const userOptions = positional[1];

  const defaultOptions = {
    round: true,
    /** @type {['m']} */
    units: ['m'],
    language: 'en',
  };

  return humanizeDuration(
    stats.time < 60000 ? 60000 : stats.time,
    Object.assign({}, defaultOptions, userOptions),
  );
});
