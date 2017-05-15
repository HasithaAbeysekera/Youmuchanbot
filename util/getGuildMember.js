/*
Get Guild Member object when given a User Object
*/
module.exports = (message, targetUser) => {
      let target = message.guild.members.find(u => u.id == targetUser.id);
      return target;
}
