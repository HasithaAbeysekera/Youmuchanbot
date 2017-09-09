const Discord = require("discord.js");
var assets = require('../assets/assets.json');

exports.run = function(client, message, args) {

    const embed = new Discord.RichEmbed()
        .setImage(assets["2booty"])
        .setColor(000000)
    message.channel.send(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['2b'],
    permLevel: 0
};

exports.help = {
    name: '2booty',
    description: 'We all know why you played NieR:Automata',
    usage: '2booty'
};
