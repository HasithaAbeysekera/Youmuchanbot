module.exports = emoji => {
  guild = emoji.guild
  console.log(`New emoji created on guild: ${guild.name}`);
  guild.defaultChannel.sendMessage(`New emoji: ${emoji.url}`);
}
