const ytdl = require('ytdl-core');
const request = require("request");
var joinVoiceChannel = require('../util/joinVoiceChannel.js');
const queue = require('../db/queue.json');
exports.run = function(client, message, args) {
  if (!queue["titles"][0]) {
    return message.channel.send("The queue is currently empty");
  }
  else {
    return message.channel.send("Here is the queue:");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'queue',
  description: `Display's the queued songs`,
  usage: 'queue'
};
