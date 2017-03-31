const guildOwner = require(`../config.json`).ownerid;

exports.run = function(client, message, args) {
    if (message.author.id == guildOwner) {
        message.channel.sendMessage(`Removing nicknames...`);
    }
};
