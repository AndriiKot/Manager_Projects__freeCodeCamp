'use strict';

const removeAttributes = (htmlString, element) => {
  const regex = new RegExp(`<${element}[^>]*>`, 'g');
  return htmlString.replace(regex, `<${element}>`);
}

module.exports = {
  removeAttributes,
}