exports.run = function(client, message, args) {
    message.channel.sendMessage("renick");
    let memberTotal = message.guild.members.size;
    message.channel.sendMessage(`Member total: ${memberTotal}`);
    for (i = 0; i < memberTotal; i++) {
        currMember = message.guild.members.array()[i];
        message.channel.sendMessage(`Current Member: ${currMember}`);
        currMember.setNickname("HolotheWise");
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'april',
  description: 'Because we all want to be HolotheWise',
  usage: 'april'
};
