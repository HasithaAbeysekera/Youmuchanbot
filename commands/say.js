exports.run = function(client, message, args) {
    message.channel.send(args.join(" "));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['repeat'],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Youmu will repeat your words',
  usage: 'say'
};
