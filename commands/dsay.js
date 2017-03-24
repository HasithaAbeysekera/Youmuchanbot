exports.run = function(client, message, args) {
    let adminRole = message.guild.roles.find("name", "Admin");
    if (message.member.roles.has(adminRole.id)) {
        let guild = message.member.guild;
        guild.defaultChannel.sendMessage(args.join(" "));
    } else {
        return;
    }
};
