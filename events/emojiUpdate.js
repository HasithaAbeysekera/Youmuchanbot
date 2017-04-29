const Discord = require("discord.js");
module.exports = (oldEmoji, newEmoji) => {
    guild = oldEmoji.guild
    console.log(`Emoji updated on guild: ${guild.name}`);
    const embed = new Discord.RichEmbed()
        //.setAuthor(`\u200b`, `${emoji.client}`)
        .setTitle(`Emoji updated`)
        .setThumbnail(`${newEmoji.url}`)
        .setColor(0x00AE86)
        .addField(`\u200b`, `New name: \`:${newEmoji.name}:\``)
        .setFooter(``, '')
        .setTimestamp();
    guild.defaultChannel.sendEmbed(embed);
}
