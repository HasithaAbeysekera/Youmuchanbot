const Discord = require("discord.js");
var assets = require('../assets/assets.json');

exports.run = function(client, message, args) {
  let sushiRole = message.guild.roles.find("name", "Sushi-ass man");
  if (message.member.roles.has(sushiRole.id)) {
    const embed = new Discord.RichEmbed()
      .setTitle("SUSHI")
      .setImage(assets["sushi"])
      .setColor(0xFF0000)
    message.channel.send(embed);
  } else {
    message.channel.sendMessage("You do not have the power of the sushi");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sushi',
  description: 'I don\'t even....',
  usage: 'sushi'
};
