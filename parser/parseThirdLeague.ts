import { contentCalendarLeague } from './utils/parseCalendarMatches';
import { contentTableLeague } from './utils/parseTableLeague';

const URL_TABLE_THIRD_LEAGUE = 'http://gorod.mfcup.ru/index.php?option=com_joomleague&func=showRanking&p=108&Itemid=42';
const URL_CALENDAR_THIRD_LEAGUE = 'http://gorod.mfcup.ru/index.php?option=com_joomleague&func=showPlan&mode=1&p=108&Itemid=49';

export const parseCalendarThirdLeague = async () => {
  const calendar = await contentCalendarLeague(URL_CALENDAR_THIRD_LEAGUE);

  return {
    idLeague: 'third',
    calendar
  };
}

export const parseTableThirdLeague = async () => {
  const table = await contentTableLeague(URL_TABLE_THIRD_LEAGUE);

  return {
    url: 'third',
    sortId: 4,
    ...table
  };
}