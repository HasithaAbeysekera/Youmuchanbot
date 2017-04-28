exports.run = function(client, message, args) {
    let adminRole = message.guild.roles.find("name", "Admin");
    if (message.member.roles.has(adminRole.id)) {
        let guild = message.member.guild;
        guild.defaultChannel.sendMessage(args.join(" "));
    } else {
        return;
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'dsay',
  description: 'Youmu will talk in the default channel',
  usage: 'dsay [message]'
};
