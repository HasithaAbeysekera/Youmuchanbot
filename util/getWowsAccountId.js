/*
Get a user's Wargaming Account ID
*/
var request = require("request");
module.exports = (region, username) => {
  var apiURL = `https://api.worldofwarships.${region}/wows/account/list/?application_id=682fc0fd90551e7e6ee67aa0d40e2db8&search=${username}`;

  request({
    url: apiURL,
    json: true
  }, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // var nickname = body["data"][0].nickname;
      var accountId = body["data"][0].account_id;
      return accountId;
    }
  });
  return;
}
