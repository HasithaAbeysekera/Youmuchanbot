module.exports = member => {
  let guild = member.guild;
  console.log(`${member.user.username} has joined ${guild}`);
  guild.defaultChannel.sendMessage(`${member.user} has joined the server, welcome!`);
}
