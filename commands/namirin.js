const Discord = require("discord.js");
var gameGroup = require("../db/gamegroups.json");
var getGuildMember = require('../util/getGuildMember.js');
exports.run = (client, message, args) => {
    // let monitoring = false;
    // thisUser = message.author;
    // thisGuildMember = getGuildMember(message, thisUser);
    // if (!thisGuildMember.voiceChannel) {
    //     return message.channel.sendMessage("You must be in a voice channel for this command to work");
    // } else {
    //     if (!args[0]) {
    //         message.channel.sendMessage("Please enter a link or type `stop` to stop monitoring");
    //     } else if (args[0] == "stop") {
    //         monitoring = false;
    //         return message.channel.sendMessage("Stopped monitoring");
    //     } else {
    //         monitoring = true;
    //         let link = args[0];
    //         clientGuildMember = getGuildMember(message, client.user);
    //         message.channel.sendMessage(`Author: ${thisGuildMember.user}`);
    //         thisVoiceChannel = thisGuildMember.voiceChannel
    //         message.channel.sendMessage(`client: ${clientGuildMember}`);
    //         thisVoiceChannel.join();
    //         // then(connection => console.log('Connected!'))
    //         //     .catch(console.error);
    //         message.channel.sendMessage(`Link: ${link}`);
    //     }
    // }
    // if (monitoring) {
    //     //client.setInterval(monitorStream, (15000));
    //     message.channel.sendMessage("now monitoring");
    // }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['nami'],
    permLevel: 0
};

exports.help = {
    name: 'namirin',
    description: 'Displays help for the specified command or shows whole command list if none specificed',
    usage: 'help [command]'
};
