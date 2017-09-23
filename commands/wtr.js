const Discord = require("discord.js");
const fs = require('fs');
var validRegions = ["sea", "na", "eu", "ru"];
var getWowsAccountId = require('../util/getWowsAccountId.js');
exports.run = function(client, message, args) {

  if (!args[0] || !args[1]) {
    return message.channel.send("Invalid input, use the help commands for more details");
  } else {
    if (validRegions.indexOf(args[0].toLowerCase()) == -1) {
      return message.channel.send(`Invalid region, the valid regions are : ${validRegions}`);
    } else {

      regionURL = args[0].toLowerCase();
      username = args[1].toLowerCase();
      if (args[0].toLowerCase() == "sea") {
        regionURL = "asia";
      }
      if (args[0].toLowerCase() == "na") {
        regionURL = "com";
      }

      var accountid = getWowsAccountId(regionURL, username);
      if (accountid) {
        message.channel.send(`Grabbing WTR signature for ${username}`);
        picURL = `https://${regionURL}.warshipstoday.com/signature/${accountid}/dark.png`
        return message.channel.send(new Discord.Attachment(picURL, 'dark.png')).then(msg => {
          console.log("wtr image sent");
        }).catch(err => {
          console.log(err.stack);
        });
      } else {
        return message.channel.send("Could not find user");
      }



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
  description: 'Displays your WTR signature from warships.today',
  usage: 'wtr [region] [username]'
};
