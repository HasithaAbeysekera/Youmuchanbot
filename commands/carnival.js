exports.run = function(client, message, args) {
    message.channel.sendEmbed({
        title: 'CARNIVAL DAYO!',
        color: 15750656,
        image: {
            url: "http://i.imgur.com/BH2dcnh.gif"
        }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['carnivaldayo'],
  permLevel: 0
};

exports.help = {
  name: 'carnival',
  description: 'IT\'S A CARNIVAL',
  usage: 'carnival'
};
