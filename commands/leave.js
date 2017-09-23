exports.run = function(client, message, args) {
  connection = client.voiceConnections.first();
  if (connection) {
    return connection.disconnect();
  } else {
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'leave',
  description: 'Leaves channel',
  usage: 'leave'
};
