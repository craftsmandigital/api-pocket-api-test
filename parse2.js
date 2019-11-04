const data = require('./test.json');
const entries = Object.values(data.list)

// for (const key of entries) {
//   console.log(key.sort_id)
// }

// console.log(entries[0].given_title);

const mapped = entries.map(bookmark => {
  // let's remove the artist property
  const { item_id, given_url, given_title, favorite, excerpt, word_count, top_image_url, tags } = bookmark;
  
  return {
    item_id: item_id,
    given_url: given_url,
    given_title: given_title,
    favorite: favorite,
    excerpt: excerpt,
    word_count: word_count,
    top_image_url: top_image_url,
    tags: tags

  };
});

console.log(mapped);