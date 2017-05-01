exports.run = function(client, message, args) {
    message.channel.sendEmbed({
        color: 3447003,
        title: `:notes:My Shiny Teeth and Me:notes:`,
        url: 'http://hestia.dance/',
        image: {
            url: "http://i.imgur.com/GqaL7Ib.gif"
        },
        fields: [{
                name: '\u200b',
                value: 'My shiny teeth that twinkle\n'
                + 'Just like the stars in space\n'
                + 'My shiny teeth that sparkle\n'
                + 'Add beauty to my face\n'
                + 'My shiny teeth that glisten\n'
                + 'Just like a Christmas tree\n'
                + 'You know you\'ll walk a mile just to see me smile\n'
                + 'Whoo!\n'
                + 'My Shiny Teeth and Me\n'
                + '[Click here for more!](http://hestia.dance/)'
            }
        ],
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['shinyteeth', 'hestia'],
  permLevel: 0
};

exports.help = {
  name: 'hestiadance',
  description: 'You\'ve got 32 of \'em, remember to keep them clean!',
  usage: 'hestiadance'
};
