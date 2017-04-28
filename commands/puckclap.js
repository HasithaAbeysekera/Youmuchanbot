exports.run = function(client, message, args) {
    message.channel.sendEmbed({
        color: 0xFFFFFF,
        image: {
            url: "http://i.imgur.com/V3KrCUo.gif"
        }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clap', 'puck'],
  permLevel: 0
};

exports.help = {
  name: 'puckclap',
  description: 'Puck approves',
  usage: 'puckclap'
};
