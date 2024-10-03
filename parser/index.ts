

import { parseCalendarFirstLeague, parseTableFirstLeague } from './parseFirstLeague';
import { parseTableMajorLeague, parseCalendarMajorhLeague } from './parserMajorLeague';
import { parseTableSecondLeague, parseCalendarSecondLeague } from './parseSecondLeague';
import { parseTableThirdLeague, parseCalendarThirdLeague } from './parseThirdLeague';
import { parseTableFourthLeague, parseCalendarFourthLeague } from './parseFourthLeague';

import { contentPageMain } from './parseMainPage';

const sendDateServer = async ({ res, url }) => {
  await fetch(`http://localhost:3333${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: 'POST',
    body: JSON.stringify(res),
  })
}


export const parseSiteInfo = async () => {
  await parseTableMajorLeague().then(res => {
    sendDateServer({ res, url: '/leagues' });
  });

  await parseTableFirstLeague().then(res => {
    sendDateServer({ res, url: '/leagues' });
  });

  await parseTableSecondLeague().then(res => {
    sendDateServer({ res, url: '/leagues' });
  });

  await parseTableThirdLeague().then(res => {
    sendDateServer({ res, url: '/leagues' });
  });

  await parseTableFourthLeague().then(res => {
    sendDateServer({ res, url: '/leagues' });
  });

  await parseCalendarMajorhLeague().then(res => {
    sendDateServer({ res, url: '/calendar' });
  });

  await parseCalendarFirstLeague().then(res => {
    sendDateServer({ res, url: '/calendar' });
  })

  await parseCalendarSecondLeague().then(res => {
    sendDateServer({ res, url: '/calendar' });
  })

  await parseCalendarThirdLeague().then(res => {
    sendDateServer({ res, url: '/calendar' });
  })

  await parseCalendarFourthLeague().then(res => {
    sendDateServer({ res, url: '/calendar?league=fourth' });
  })
}
