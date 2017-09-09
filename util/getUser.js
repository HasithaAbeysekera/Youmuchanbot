/*
Get user object when given a targetUser string
*/
module.exports = (message, targetUser) => {
    let target = message.guild.members.find(u => u.displayName.toLowerCase() == targetUser.toLowerCase());
    if (!target) {
        target = message.guild.members.find(u => u.user.username.toLowerCase() == targetUser.toLowerCase());
    }
    if (target) {
        return target.user;
    }
    return;
}
