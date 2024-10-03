import { contentCalendarLeague } from './utils/parseCalendarMatches';
import { contentTableLeague } from './utils/parseTableLeague';

const URL_TABLE_SECOND_LEAGUE = 'http://gorod.mfcup.ru/index.php?option=com_joomleague&func=showRanking&p=107&Itemid=41';
const URL_CALENDAR_SECOND_LEAGUE = 'http://gorod.mfcup.ru/index.php?option=com_joomleague&func=showPlan&mode=1&p=107&Itemid=48';

export const parseCalendarSecondLeague = async () => {
  const calendar = await contentCalendarLeague(URL_CALENDAR_SECOND_LEAGUE);

  return {
    idLeague: 'second',
    calendar
  };
}

export const parseTableSecondLeague = async () => {
  const table = await contentTableLeague(URL_TABLE_SECOND_LEAGUE);

  return {
    url: 'second',
    sortId: 3,
    ...table,
  };
}