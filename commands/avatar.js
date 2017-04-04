var userAvatar = require('../util/userAvatar.js');

exports.run = function(client, message, args) {
    if (args == "") {
        message.reply("Your avatar is:");
        message.channel.sendFile(message.author.avatarURL, 'avatar.jpg');
    } else
    if (message.mentions.users.first()) {
        let target = message.mentions.users.first();
        let targetuser = message.guild.members.find(u => u.id === target.id);
        userAvatar(targetuser, message);
    } else
    if (message.guild.members.find(u => u.displayName.toLowerCase() == args.join(" ").toLowerCase())) {
        let target = message.guild.members.find(u => u.displayName.toLowerCase() == args.join(" ").toLowerCase());
        userAvatar(target, message);
    } else
    if (args == "server") {
        message.channel.sendMessage(`The server avatar is:`);
        message.channel.sendFile(message.guild.iconURL, `servericon.jpg`);
    } else {
        message.channel.sendMessage(`User not found`);
        return;
    }
};
