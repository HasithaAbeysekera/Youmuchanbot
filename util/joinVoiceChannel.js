/*
Get user object when given a targetUser string
*/
module.exports = (client, message) => {
  voiceChannel = message.member.voiceChannel;

  if (!voiceChannel) {
    return message.reply("You aren't in a voice channel");
  } else {
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) {
      return message.reply("I don't have permission to connect to that channel");
    } else if (!permissions.has('SPEAK')) {
      return message.reply("I don't have permission to speak in that channel");
    } else {
      return voiceChannel.join();
    }
  }
};
