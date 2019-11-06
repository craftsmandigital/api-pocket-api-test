// const babel = require("@babel/core");

// babel.transform("code", optionsObject);

// const config = require('./credentials.js');
// https://medium.com/@pativancarrasco/why-your-es6-syntax-doesnt-work-in-node-js-and-how-to-fix-it-161f0708f1ad
// import { TAGS_TO_IGNORE, UNTAGED, data } from './config.js';
const config = require("./config.js");

// Get an easier list to work with (array)
const entries = Object.values(config.data.list);

// sorting data on date bookmarks creatded
// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
entries.sort((a, b) =>
  a.time_updated > b.time_updated ? -1 : b.time_updated > a.time_updated ? 1 : 0
);

// ordering array to our needings
const mapped = entries.map(bookmark => {
  // If object don't have tags then giv it a tag of name UNTAGED constant.
  let tagList;
  if (typeof bookmark.tags === "undefined") {
    tagList = [config.UNTAGED];
  } else {
    tagList = Object.keys(bookmark.tags);
  }

  // Convert from unix date to normal date
  // https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
  const it = new Date(Number(bookmark.time_added) * 1000);
  const ut = new Date(Number(bookmark.time_updated) * 1000);

  // Return fields that is nessesary for this purpose.
  return {
    item_id: bookmark.item_id,
    time_added: it,
    time_updated: ut,
    given_url: bookmark.given_url,
    given_title: bookmark.given_title,
    favorite: bookmark.favorite,
    excerpt: bookmark.excerpt,
    word_count: bookmark.word_count,
    top_image_url: bookmark.top_image_url,
    tags: tagList
  };
});

// Remove objects that have tags that are in the TAGS_TO_IGNORE list
// https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript/29447130
const filtered = mapped.filter(bookmark => {
  return !bookmark.tags.some(r => config.TAGS_TO_IGNORE.includes(r));
});

let tagList = [];
let objList = [];
filtered.forEach((ielement, index) => {
  ielement.tags.forEach(inner_element => {
    if (!tagList.includes(inner_element)) {
      tagList.push(inner_element);
      // objList.push(inner_element);

      




      // console.log(ielement);
      // console.log(index);
      objList.push({
        tag: inner_element,
        items: [ielement]
      });
    } else {
      // const record = tagList.map(ta)
      // console.log(record);
    }
  });
});

console.log(objList.map(x => x.tag));
// console.log(objList);
