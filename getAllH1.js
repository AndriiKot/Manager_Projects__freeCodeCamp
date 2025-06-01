import { RELATIVE_URLS } from "./relativeUrls.js";
import { webParser } from "./parserWeb.js";

export const allH1 = [];

const baseUrl =
  "https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/";

const h1 = "[id='content-start']";

async function fetchAllH1() {
  for (let i = 0; i < RELATIVE_URLS.length; i++) {
    RELATIVE_URLS[i] = baseUrl + RELATIVE_URLS[i];
    const h1Value = await webParser(RELATIVE_URLS[i], h1);
    allH1[i] = h1Value.toString();
  }
  return allH1;
}

async function main() {
  await fetchAllH1();
  console.log(allH1);
}

main();
