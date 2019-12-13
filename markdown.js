const fs = require("fs");
const datetime = new Date();
const json = require("./pocket-data.json");


  const md = new Promise(function(resolve, reject) {
    fs.readFile("./all-my-tags.md", "utf8", function(err, contents) {
      resolve(contents);
    });
  });

//   const json = new Promise(function(resolve, reject) {
//     fs.readFile("./pocket-data.json", "utf8", function(err, contents) {
//       resolve(contents);
//     });
//   });
// let prReadmd = message => {
//   return new Promise(function(resolve, reject) {
//     fs.readFile("./all-my-tags.md", "utf8", function(err, contents) {
//       resolve(contents);
//     });
//   });
// };

// let prReadjson = message => {
//   return new Promise(function(resolve, reject) {
//     fs.readFile("./pocket-data.json", "utf8", function(err, contents) {
//       resolve(contents);
//     });
//   });
// };
// Promise.all([prReadjson(), prReadmd()]).then(function(values) {
//   console.log(values);
// });
Promise.all([md]).then(function(contents) {
  const outputList = json.map(x => ' "' + x.tag + '"').toString();
  const token = "__TAGS__";
  const token2 = "__DATE__";
  const res = contents[0].replace(token, outputList).replace(token2, datetime.toISOString());
  console.log(res);
//   console.log(outputList);
});

// fs.readFile('./all-my-tags.md', 'utf8', function(err, contents) {
//  const token = "__TAGS__";
// const res = contents.replace(token, "W3Schools");
// console.log(res);
// });
