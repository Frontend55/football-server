import puppeteer from "puppeteer";
import cherio from "cherio";

export const contentTableLeague = async (url) => {
  try {
    const teams = [];
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(url);
    const content = await page.content();
    const $ = cherio.load(content);


    $('.rankingtable  tr').each((i, element) => {
      if (i < 1) return;

      const teamImgSrc = $(element).find('td:nth-child(4) img').attr('src');
      const teamName = $(element).find('td:nth-child(5) a').text();
      const teamUrl = $(element).find('td:nth-child(5) a').attr('href');
      const teamGeams = $(element).find('td:nth-child(6)').text().trim();
      const teamWinners = $(element).find('td:nth-child(7)').text();
      const teamDraw = $(element).find('td:nth-child(8)').text();
      const teamLooses = $(element).find('td:nth-child(9)').text();
      const teamGoals = $(element).find('td:nth-child(10)').text();
      const teamDifference = $(element).find('td:nth-child(11)').text();
      const teamPoints = $(element).find('td:nth-child(12)').text();

      teams.push({
        teamImgSrc,
        teamName,
        teamUrl,
        teamGeams,
        teamWinners,
        teamDraw,
        teamLooses,
        teamGoals,
        teamDifference,
        teamPoints,
      })
    });
    await browser.close();
    return { nameLeagues: $('.componentheading').text().trim(), teams };
  } catch (err) {
    console.log(err);
    if (err) {
      contentTableLeague(url);
    }
    return;
  }
}