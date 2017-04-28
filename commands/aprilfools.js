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

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 3
};

exports.help = {
  name: 'aprilfools',
  description: 'Because April Fools doesn\'t last forever. Can also be used to remove everyone\'s nickname.',
  usage: 'aprilfools'
};
