exports.run = function(client, message, args) {
    message.channel.sendEmbed({
        color: 0x00FFFF,
        image: {
            url: "http://i.imgur.com/wSJoNoN.gif"
        }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'fistbump',
  description: 'A fist bump can be a symbol of giving respect or approval',
  usage: 'fistbump'
};
