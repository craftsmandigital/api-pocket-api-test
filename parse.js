// configuration

// If object contain some of the tags in list,
// then output of the given object is ignored.
const TAGS_TO_IGNORE = [
  "nav",
  "hide",
  "job",
  "favorits job",
  "helse",
  "job-har-sokt",
  "jobb-har-sokt",
  "jobb-ikke-relevant",
  "midlertidig",
  "personal",
  "uft"
];

// If object is untaged then objec get the tag with this string.
const UNTAGED = "untaged";

// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------

// fetching json and convert to js object
const data = require("./test.json");

// Get an easier list to work with (array)
const entries = Object.values(data.list);

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
    tagList = [UNTAGED];
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
    tags: tagList,
  };
});

// Remove objects that have tags that are in the TAGS_TO_IGNORE list
// https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript/29447130
const filtered = mapped.filter(bookmark => {
  return !bookmark.tags.some(r => TAGS_TO_IGNORE.includes(r));
});

console.log(filtered);