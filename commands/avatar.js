var userAvatar = require('../util/userAvatar.js');

exports.run = function(client, message, args) {
    if (args == "") {
        message.reply("Your avatar is:");
        message.channel.sendFile(message.author.avatarURL, 'avatar.jpg');
    } else
    if (message.mentions.users.first()) {
        message.channel.sendMessage("user mentionned");
        let target = message.mentions.users.first();
        let targetuser = message.guild.members.find(u => u.id === target.id);
        userAvatar (targetuser);
        // message.channel.sendMessage(targetuser + "'s avatar is:\n");
        // message.channel.sendFile(targetuser.user.avatarURL, 'avatar.jpg');
    } else
    if (message.guild.members.find(u => u.displayName.toLowerCase() == args.join(" ").toLowerCase())) {
        let target = message.guild.members.find(u => u.displayName.toLowerCase() == args.join(" ").toLowerCase());
        userAvatar (target);
        // message.channel.sendMessage(target.user + "'s avatar is:\n");
        // message.channel.sendFile(target.user.avatarURL, 'avatar.jpg');
    } else {
        message.channel.sendMessage("User not found");
        return;
    }
};
