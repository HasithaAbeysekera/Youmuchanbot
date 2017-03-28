module.exports = member => {
  let guild = member.guild;
  console.log(`${member.user.username} has left ${guild}`);
  guild.defaultChannel.sendMessage(`${member.user} has left the server :cry:`);
}
