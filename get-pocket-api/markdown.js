const fs = require("fs");
const datetime = new Date();
const json = require("./pocket-data.json");

let content;
try {
  contents = fs.readFileSync('./all-my-tags-template.md', { encoding: 'utf8' });
} catch(err) {
  // An error occurred
  console.error(err);
}


  const outputList = json.map(x => ' "' + x.tag + '"').toString();
  const token = "__TAGS__";
  const token2 = "__DATE__";
  const res = contents.replace(token, outputList).replace(token2, datetime.toISOString());
//   console.log(res);

try {
  fs.writeFileSync('./all-my-tags.md', res, { encoding: 'utf8' });
} catch(err) {
  // An error occurred
  console.error(err);
}