exports.run = function(client, message, args) {
    let adminRole = message.guild.roles.find("name", "Admin");
    if (message.member.roles.has(adminRole.id)) {
        message.channel.sendMessage("Shutting down, Goodbye :wave:");

        client.destroy((err) => {
            console.log(err);
        });
    } else {
        message.channel.sendMessage("You do not have permission to use this command");
    }
};
