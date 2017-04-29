const Discord = require("discord.js");
module.exports = emoji => {
    guild = emoji.guild
    console.log(`New emoji created on guild: ${guild.name}`);
    const embed = new Discord.RichEmbed()
        //.setAuthor(`\u200b`, `${emoji.client}`)
        .setTitle(`New emoji added`)
        .setThumbnail(`${emoji.url}`)
        .setColor(0x00AE86)
        .addField(`\u200b`, `\`:${emoji.name}:\``)
        .setFooter(``, '')
        .setTimestamp();
    guild.defaultChannel.sendEmbed(embed);
}
