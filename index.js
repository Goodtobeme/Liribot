

var Twitter = require ("twitter");

var config = require("require");
var T = new Twitter(require);

var params = {
  q: "my-tweets",
  count: 20

}

t.get("search/tweets", params, gotData);

function gotData(err, data, response) {
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}