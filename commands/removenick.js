exports.run = function(client, message, args) {
    message.channel.sendMessage("renick");
    let memberTotal = message.guild.members.size;
    message.channel.sendMessage(`Member total: ${memberTotal}`);
    for (i = 0; i < memberTotal; i++) {
        currMember = message.guild.members.array()[i];
        message.channel.sendMessage(`Current Member: ${currMember}`);
        currMember.setNickname("");
    }
};
