module.exports = guild => {
  console.log(`New guild added: ${guild.name}, owned by ${guild.owner.user.username}`);
    console.log(`${member.user.username} has left ${guild}`);
  guild.defaultChannel.sendMessage(`${member.user} has left the server :cry:`);
}
