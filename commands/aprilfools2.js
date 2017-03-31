const guildOwner = require(`../config.json`).ownerid;

exports.run = function(client, message, args) {
    if (message.author.id == guildOwner) {
        message.channel.sendMessage(`Removing nicknames...For real this time`);
        let memberTotal = message.guild.members.size;
        for (i = 0; i < memberTotal; i++) {
            currMember = message.guild.members.array()[i];
            currMember.setNickname("");
        }
    }
};
