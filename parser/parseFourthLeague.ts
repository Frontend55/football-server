import { contentCalendarLeague } from './utils/parseCalendarMatches';
import { contentTableLeague } from './utils/parseTableLeague';

const URL_TABLE_FOURTH_LEAGUE = 'http://gorod.mfcup.ru/index.php?option=com_joomleague&func=showRanking&p=109&Itemid=179';
const URL_CALENDAR_FOURTH_LEAGUE = 'http://gorod.mfcup.ru/index.php?option=com_joomleague&func=showPlan&mode=1&p=109&Itemid=181';

export const parseCalendarFourthLeague = async () => {
  const calendar = await contentCalendarLeague(URL_CALENDAR_FOURTH_LEAGUE);

  return {
    idLeague: 'fourth',
    calendar
  };
}

export const parseTableFourthLeague = async () => {
  const table = await contentTableLeague(URL_TABLE_FOURTH_LEAGUE);

  return {
    url: 'fourth',
    sortId: 5,
    ...table
  };
}