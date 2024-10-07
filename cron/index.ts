//@ts-ignore
import { CronJob } from 'cron';
import { parseSiteInfo } from '../parser/index';

export const job = new CronJob(
  '20 * * * *', // cronTime
  async function () {
    await parseSiteInfo();
    console.log('Я спарсил!');
  }, // onTick
  null, // onComplete
  true, // start
  'America/Los_Angeles' // timeZone
);