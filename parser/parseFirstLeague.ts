import { contentCalendarLeague } from './utils/parseCalendarMatches';
import { contentTableLeague } from './utils/parseTableLeague';

const URL_TABLE_FIRST_LEAGUE = 'http://gorod.mfcup.ru/index.php?option=com_joomleague&func=showRanking&p=106&Itemid=40';
const URL_CALENDAR_FIRST_LEAGUE = 'http://gorod.mfcup.ru/index.php?option=com_joomleague&func=showPlan&mode=1&p=106&Itemid=43';

export const parseCalendarFirstLeague = async () => {
  const calendar = await contentCalendarLeague(URL_CALENDAR_FIRST_LEAGUE);

  return {
    idLeague: 'first',
    calendar,
  };
}

export const parseTableFirstLeague = async () => {
  const table = await contentTableLeague(URL_TABLE_FIRST_LEAGUE);

  return {
    url: 'first',
    sortId: 2,
    ...table,
  };
}