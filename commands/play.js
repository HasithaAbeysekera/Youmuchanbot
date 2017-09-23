const ytdl = require('ytdl-core');
const request = require("request");
var joinVoiceChannel = require('../util/joinVoiceChannel.js');
exports.run = function(client, message, args) {


  // if (!client.voiceConnections) {
    joinVoiceChannel(client, message);
  // }




  // var regExp = /^.*(youtu.be\/|list=)([^#\&\?]*).*/;
  // var match = args[1].match(regExp);
  //
  // if (match && match[2]) {
  //   queue_playlist(match[2], message);
  // } else {
  //   add_to_queue(params[1], message);
  // }
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
