import { contentCalendarLeague } from './utils/parseCalendarMatches';
import { contentTableLeague } from './utils/parseTableLeague';

const URL_TABLE_MAJOR_LEAGUE = 'http://gorod.mfcup.ru/index.php?option=com_joomleague&func=showRanking&p=105&Itemid=60';
const URL_CALENDAR_MAJOR_LEAGUE = 'http://gorod.mfcup.ru/index.php?option=com_joomleague&func=showPlan&mode=1&p=105&Itemid=65';

export const parseCalendarMajorhLeague = async () => {
  const calendar = await contentCalendarLeague(URL_CALENDAR_MAJOR_LEAGUE);

  return {
    idLeague: 'major',
    calendar
  };
}

export const parseTableMajorLeague = async () => {
  const table = await contentTableLeague(URL_TABLE_MAJOR_LEAGUE);

  return {
    url: 'major',
    sortId: 1,
    ...table
  };
}