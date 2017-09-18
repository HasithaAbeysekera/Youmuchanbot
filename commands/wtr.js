const Discord = require("discord.js");
var request = require("request");
const fs = require('fs');
var validRegions = ["sea", "na", "eu", "ru"];
exports.run = function(client, message, args) {

  if (!args[0] || !args[1]) {
    return message.channel.send("Invalid input, use the help commands for more details");
  } else {
    if (validRegions.indexOf(args[0].toLowerCase()) == -1) {
      return console.log(`Invalid region, the valid regions are : ${validRegions}`);
    } else {
      regionURL = args[0].toLowerCase();
      username = args[1].toLowerCase();
      if (args[0].toLowerCase() == "sea") {
        regionURL = "asia";
      }
      if (args[0].toLowerCase() == "na") {
        regionURL = "com";
      }

      var apiURL = `https://api.worldofwarships.${regionURL}/wows/account/list/?application_id=682fc0fd90551e7e6ee67aa0d40e2db8&search=${username}`;
      message.channel.send(apiURL);

      request({
        url: apiURL,
        json: true
      }, function(error, response, body) {
        if (!error && response.statusCode === 200) {
          //console.log(body) // Print the json response
          var nickname = body["data"][0].nickname;
          var accountId = body["data"][0].account_id;
          message.channel.send(`Nickname: ${nickname}`);
          message.channel.send(`account ID: ${accountId}`);
          picURL = `https://${regionURL}.warshipstoday.com/signature/${accountId}/dark.png`
          message.channel.send(`WTR image: ${picURL}`);
          message.channel.send(new Discord.Attachment(picURL, 'dark.png'));
        }
      });
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'wtr',
  description: 'Test function for WoWs commands',
  usage: 'wtr [region] [username]'
};
