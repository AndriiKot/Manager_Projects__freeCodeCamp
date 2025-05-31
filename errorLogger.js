"use strict";

const logParsingErrorAndRethrow = (url, id, error) => {
  console.error(`Error parsing data for URL: ${url}`);
  console.error(`Error parsing data for ID: ${id}`);
  console.error(error.message);
  throw error;
};

module.exports = {
  logParsingErrorAndRethrow,
};
