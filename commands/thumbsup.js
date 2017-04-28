exports.run = function(client, message, args) {
    message.channel.sendEmbed({
        color: 0xFF0000,
        image: {
            url: "http://i.imgur.com/DCFzew1.jpg"
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
  name: 'thumbsup',
  description: 'Megumin approves',
  usage: 'thumbsup'
};
