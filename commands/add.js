exports.run = (client, message, args) => {
    let numArray = args.map(n => parseInt(n));
    let total = numArray.reduce((p, c) => p + c);
    message.channel.sendMessage(total);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['addition', 'sum', 'total'],
  permLevel: 0
};

exports.help = {
  name: 'add',
  description: 'In case you needed to do some addition',
  usage: 'add [number1] [number2] ....'
};
