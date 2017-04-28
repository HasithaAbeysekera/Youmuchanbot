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

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'shutdown',
  description: 'Shuts down Youmu',
  usage: 'shutdown'
};
