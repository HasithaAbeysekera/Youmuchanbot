var userAvatar = require('../util/userAvatar.js');
var getUser = require('../util/getUser.js');

exports.run = function(client, message, args) {
    if (!args[0]) {
        message.reply("Your avatar is:");
        message.channel.sendFile(message.author.avatarURL, 'avatar.jpg');
    } else {
        if (args[0].toLowerCase() === 'server') {
            message.channel.sendMessage(`The server avatar is:`);
            message.channel.sendFile(message.guild.iconURL, `servericon.jpg`);
        } else
        if (message.mentions.users.first()) {
            target = message.mentions.users.first();
            message.channel.sendMessage(`${target}'s avatar is:`);
            message.channel.sendFile(target.avatarURL, `avatar.jpg`);
        } else
        if (args[0]) {
            target = getUser(message, args[0]);
            if (!target) {
                message.channel.sendMessage(`Error: User not found`);
            } else {
                message.channel.sendMessage(`${target}'s avatar is:`);
                message.channel.sendFile(target.user.avatarURL, 'avatar.jpg');
            }
        } else {
            return message.channel.sendMessage(`Error: incorrect format`);
        }
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['profilepic', 'icon'],
    permLevel: 0
};

exports.help = {
    name: 'avatar',
    description: 'Display\'s the user\'s or server\'s avatar. Displays your own avatar if username is empty',
    usage: 'avatar [username (plaintext or mention)] or [server]'
};
