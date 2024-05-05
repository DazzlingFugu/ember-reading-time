import readingTime from 'reading-time';
import humanizeDuration from 'humanize-duration';

export default function helperReadingTime(value, options) {
  const stats = readingTime(String(value));
  const userOptions = options ?? {};

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
}
