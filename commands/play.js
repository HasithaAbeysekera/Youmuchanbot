exports.run = function(client, message, args) {
  voiceChannel = message.member.voiceChannel;
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!voiceChannel) {
    return message.reply("You aren't in a voice channel");
  } else if (!permissions.has('CONNECT')) {
    return message.reply("I don't have permission to connect to that channel");
  } else if (!permissions.has('SPEAK')) {
    return message.reply("I don't have permission to speak in that channel");
  } else {
    voiceChannel.join();
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'play',
  description: 'Plays the listed url. Bot will join the voice channel that user is in if not already in one.',
  usage: 'play [url]'
};
