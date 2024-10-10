import puppeteer from "puppeteer";
import cherio from "cherio";

export const contentCalendarLeague = async (url) => {
  try {
    const calendar = [];
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);


    const content = await page.content();
    const $ = cherio.load(content);

    $('.matchdaytitle').each((i, element) => {
      const matchesDay = [];
      const tableMathes = $(element).next();
      let dateMatches = '';

      $(tableMathes).find('tr').each((i, element) => {
        const isDate = $(element).attr('class') === 'sectiontableheader';

        if (isDate) {
          dateMatches = $(element).text().trim().replaceAll(' ', '');
          return;
        }

        const date = dateMatches;
        const place = $(element).find('td:nth-child(1) a').text();
        const time = $(element).find('td:nth-child(2)').text();
        const teamFirstImg = $(element).find('td:nth-child(3) img').attr('src');
        const teamFirstHref = $(element).find('td:nth-child(4) a').attr('href');
        const teamFirstName = $(element).find('td:nth-child(4) a').text().trim();
        const teamSecondImg = $(element).find('td:nth-child(6) img').attr('src');
        const teamSecondHref = $(element).find('td:nth-child(7) a').attr('href');
        const teamSecondName = $(element).find('td:nth-child(7) a').text().trim();
        const scoreFirst = $(element).find('td:nth-child(8)').text();
        const scoreSecond = $(element).find('td:nth-child(10)').text();

        matchesDay.push({
          date,
          place,
          time,
          teamFirstImg,
          teamFirstHref,
          teamFirstName,
          teamSecondImg,
          teamSecondHref,
          teamSecondName,
          scoreFirst,
          scoreSecond,
        });
      })
      calendar.push({
        matcheDay: $(element).text().trim(),
        listMatches: matchesDay,
      });
    });
    await browser.close();
    return calendar;
  } catch (err) {
    console.log(err)
    if (err) {
      contentCalendarLeague(url);
    }
    return;
  }
}