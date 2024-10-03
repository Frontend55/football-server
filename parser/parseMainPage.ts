import puppeteer from "puppeteer";
import cherio from "cherio";

const url = 'http://gorod.mfcup.ru/';

export const contentPageMain = async () => {
  const date = [];
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'load' });
  const content = await page.content();
  const $ = cherio.load(content);

  $('.moduletable_menu > .menu > li.parent > a > span').each((i, element) => {
    date.push({ nameLeagues: $(element).text() });
  });

  return date;
}