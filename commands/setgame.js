exports.run = function(client, message, args) {
    if (args == "") {
        client.user.setGame(null);
    } else {
        client.user.setGame(args.join(" "));
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['game', 'setstatus', 'status'],
  permLevel: 3
};

exports.help = {
  name: 'setgame',
  description: 'Set Youmu\'s status. eg: setgame [CSGO] will display "Playing CSGO"',
  usage: 'setgame [game]'
};
