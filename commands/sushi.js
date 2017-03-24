exports.run = function(client, message, args) {
    let sushiRole = message.guild.roles.find("name", "Sushi-ass man");
    if (message.member.roles.has(sushiRole.id)) {
        message.channel.sendMessage("Sushi!");
        message.channel.sendFile("http://i.imgur.com/mlRUf0a.gif", "sishi.gif");
    } else {
        message.channel.sendMessage("You do not have the power of the sushi");
    }
};
