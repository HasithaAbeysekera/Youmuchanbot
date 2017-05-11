const Discord = require("discord.js");
const prefix = require('../config.json').prefix;
exports.run = (client, message, args) => {
    if (!args[0]) {
        return message.channel.sendMessage("Please specify the amount of messages to delete and, if desired, a user");
    } else {
        if (!args[1]) { //no username specified
            amount = parseInt(args[0]);
            if (!amount) {
                return message.channel.sendMessage("Error: please specify a number of messages to delete");
            } else {
                message.channel.fetchMessages({
                    limit: amount,
                }).then((messages) => {
                    message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
                });
            }
        }
    }
};

// const user = <Message>.mentions.users.first();
// const amount = !!parseInt(<Message>.content.split(" ")[1]) ? parseInt(<Message>.content.split(" ")[2]) : parseInt(<Message>.content.split(" ")[1])
// if (!amount) return <Message>.reply("Must specify an amount to delete!");
// if (!amount && !user) return <Message>.reply("Must specify a user and amount, or just an amount, of messages to purge!");
// <Message>.channel.fetchMessages({
//   limit: amount,
// }).then((messages) => {
//   if (user) {
//     const filterBy = user ? user.id : Client.user.id;
//     messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
//   }
//   <Message>.channel.bulkDelete(messages).catch(error => console.log(error.stack));
// });

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['clean'],
    permLevel: 3
};

exports.help = {
    name: 'purge',
    description: 'Removes X messages from the channel. Can specify an optional user to only remove their messages.',
    usage: 'purge [number] [username]'
};
