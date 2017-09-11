const Discord = require("discord.js");
var assets = require('../assets/assets.json');

exports.run = function(client, message, args) {

  const embed = new Discord.RichEmbed()
      .setImage(assets["puckclap"])
      .setColor(0xFFFFFF)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clap', 'puck'],
  permLevel: 0
};

exports.help = {
  name: 'puckclap',
  description: 'Puck approves',
  usage: 'puckclap'
};
