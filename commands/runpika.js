exports.run = function(client, message, args) {
    message.channel.sendEmbed({
        color: 0xFFFF00,
        image: {
            url: "http://i.imgur.com/Jo8hycn.gif"
        }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['runepika'],
  permLevel: 0
};

exports.help = {
  name: 'runpika',
  description: 'Whoa Whoa! Whoa Whoa!',
  usage: 'runpika'
};
