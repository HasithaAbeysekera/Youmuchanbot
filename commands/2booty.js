exports.run = function(client, message, args) {
    message.channel.sendEmbed({
        color: 000000,
        image: {
            url: "http://i.imgur.com/CvFfCME.png"
        }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['2b'],
  permLevel: 0
};

exports.help = {
  name: '2booty',
  description: 'We all know why you played NieR:Automata',
  usage: '2booty'
};
