"use strict";

const webParser = async (url, id) => {
  const puppeteer = require("puppeteer");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  await page.waitForSelector(id);

  const description = await page.$eval(id, (element) => element.outerHTML);
  await browser.close();
  return description;
};

module.exports = {
  webParser,
};
