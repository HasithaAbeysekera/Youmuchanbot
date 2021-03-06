const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if (!message.mentions.members) {
        message.channel.send("Please mention a user to warn");
    } else {
        let member = message.mentions.members.first();
        let reason = args.slice(1).join(' ');
        if (!reason) {
            reason = 'No reason mentioned';
        }
        const embed = new Discord.RichEmbed()
            .setAuthor(`YOU HAVE BEEN WARNED`, `${message.author.avatarURL}`)
            .setTitle(`\u200b`)
            .setThumbnail(member.user.avatarURL)
            .setColor('#ff0000')
            .addField(`User:`, `${member.displayName}`)
            .addField('Mod:', `${message.author.username}`)
            .addField('Reason:', `${reason}`)
            .setTimestamp();
        message.channel.send(embed);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
};

exports.help = {
    name: 'warn',
    description: 'Issues a warning to the user',
    usage: 'warn [user mention] [reason]'
};
