const data = require('./test.json');
const entries = Object.values(data.list)

const mapped = entries.map((bookmark) => {


// const tagList = Object.keys(entries[0].tags);
// const tagList = typeof(bookmark.tags)
// const tagList = Object.keys(bookmark.tags);
// for (const key of entries) {
//   console.log(key.sort_id)
// }
let tagList;
if (typeof bookmark.tags === 'undefined') {
  tagList = ['untaged'];
} else {
  tagList = Object.keys(bookmark.tags);
}
  return {
    item_id: bookmark.item_id,
    given_url: bookmark.given_url,
    given_title: bookmark.given_title,
    favorite: bookmark.favorite,
    excerpt: bookmark.excerpt,
    word_count: bookmark.word_count,
    top_image_url: bookmark.top_image_url,
    tags: tagList
    // tags: Object.values(tagsList)

  };

});
console.log(mapped);