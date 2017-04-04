/*
find a user's avater when given a username
*/

module.exports = (targetUser, message) => {
console.log(`Avatar found for ${targetUser.user.username}`)
message.channel.sendMessage(`${targetUser}'s avatar is:`);
message.channel.sendFile(targetUser.user.avatarURL, 'avatar.jpg');
}
