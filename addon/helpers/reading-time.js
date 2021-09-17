import { helper } from '@ember/component/helper';
import readingTime from 'reading-time';
import humanizeDuration from 'humanize-duration';

export default helper((params /*, hash*/) => {
  let stats = readingTime(params[0] ?? '');
  let options = params[1];
  return humanizeDuration(
    stats.time < 60000 ? 60000 : stats.time,
    Object.assign(
      {
        round: true,
        units: ['m'],
        language: 'en',
      },
      options
    )
  );
});
