// configuration

// If object contain some of the tags in list,
// then output of the given object is ignored.

// const data = require("./test.json");

module.exports = {
  UNTAGED: "untaged",
  TAGS_TO_IGNORE: [
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
  ],
  // data: require("./test.json")
  input:  "./test.json",
  output: "./pocket-data.json"
};
// If object is untaged then objec get the tag with this string.
// const UNTAGED = "untaged";

// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------

// fetching json and convert to js object

// module.exports = {
//     consumer_key: '88255-60c41713130a78bbdfced6ce',
//     access_token: 'e1989cbe-91d3-016c-6439-f33d3a'
// };
