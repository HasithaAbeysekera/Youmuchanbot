const config = require('../config.json');
const request = require('request-promise');
var parseString = require('xml2js').parseString;
var Entities = require('html-entities').AllHtmlEntities;

exports.run = function(client, message, args) {
message.channel.sendMessage(`I can't do that (yet!)`);
    // console.log(`firsrt line`);
    // request({
    //     //  uri: `https://myanimelist.net/api/anime/search.xml?q=${encodeURIComponent(args.name)}`,
    //     uri: `https://myanimelist.net/api/anime/search.xml?q=${args}`,
    //     headers: {
    //         'Authorization': `Basic ${btoa(config.apis.mal)}`,
    //         'User-Agent': "Discord Youmu-chan Bot"
    //     }
    // }).then(e => {
    //     console.log(`word working`);
    //     parseString(e, function(err, result) {
    //         var anime = result.anime.entry[0];
    //         var entities = new Entities();
    //         const embed = new Discord.RichEmbed()
    //             .setTitle(`❯ ${anime.title[0]} - ${anime.id[0]} ❮`)
    //             .setColor(0x2bbd69)
    //             .setDescription(entities.decode(anime.synopsis[0]).replace(/(<br \/>)/g, "\r\n"))
    //             .addField('English Title', `${(anime.english[0]) ? anime.english[0] : "No English title"}`, true)
    //             .addField('Synonyms', `${(anime.synonyms[0]) ? anime.synonyms[0] : "No synonyms"}`, true)
    //             .addField('Episodes', `${(anime.episodes[0]) ? anime.episodes[0] : "Unknown"}`, true)
    //             .addField('Rating', `${(anime.score[0]) ? anime.score[0] : "Unknown"}/10`, true)
    //             .addField('Type', `${(anime.type[0]) ? anime.type[0] : "Unknown"}`, true)
    //             .addField('Status', `${(anime.status[0]) ? anime.status[0] : "Unknown"}`, true)
    //             .addField('Start Date', `${(anime.start_date[0]) ? anime.start_date[0] : "Unknown"}`, true)
    //             .addField('End Date', `${(anime.end_date[0]) ? anime.end_date[0] : "Unknown"}`, true)
    //             .setFooter("Support MAL: https://myanimelist.net/membership")
    //             .setThumbnail(`${(anime.image[0]) ? anime.image[0] : this.client.user.avatarURL}`)
    //         return message.embed(embed, '', {
    //             disableEveryone: true
    //         }).then().catch(console.log);
    //     });
    // }).catch(e => {
    //     return message.say(`There was an error while searching for '${args.name}', try another search!`);
    // });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['animu', 'mal'],
  permLevel: 0
};

exports.help = {
  name: 'anime',
  description: 'Looks up information on the anime on MyAnimeList',
  usage: 'anime [seriesname]'
};
