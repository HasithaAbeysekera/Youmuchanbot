const Discord = require("discord.js");
const prefix = require('../config.json').prefix;
var getUser = require('../util/getUser.js');

exports.run = (client, message, args) => {
    if (!args[0]) {
        return message.channel.sendMessage("Please specify the amount of messages to delete and, if desired, a user");
    } else {
        amount = parseInt(args[0]);
        if (!amount) {
            return message.channel.sendMessage("Error: please specify a number of messages to delete");
        } else {
            if (!args[1]) { //no username specified
                message.channel.fetchMessages({
                    limit: amount,
                }).then((messages) => {
                    message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
                });
                message.channel.sendMessage(`Deleting last ${amount} messages...`);
            } else
            if (message.mentions.users.first()) {
                target = message.mentions.users.first();
                message.channel.fetchMessages({
                    limit: amount,
                }).then((messages) => {
                    if (target) {
                        const filterBy = target ? user.id : Client.user.id;
                        userMessages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                    }
                    message.channel.bulkDelete(userMessages).catch(error => console.log(error.stack));
                });
                message.channel.sendMessage(`Deleting last ${amount} messages from user mentioned: ${target}`);
            } else {
                target = getUser(message, args[1]);
                if (!target) {
                    message.channel.sendMessage(`Error: User not found`);
                } else {
                    message.channel.fetchMessages({
                        limit: amount,
                    }).then((messages) => {
                        if (target) {
                            const filterBy = target ? user.id : Client.user.id;
                            userMessages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                        }
                        message.channel.bulkDelete(userMessages).catch(error => console.log(error.stack));
                    });
                    message.channel.sendMessage(`Deleting last ${amount} messages from user: ${target}`);
                }
            }
        }
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['clean'],
    permLevel: 3
};

exports.help = {
    name: 'purge',
    description: 'Removes last X messages from the channel. Can specify an optional user to only remove their messages.',
    usage: 'purge [number] [username]'
};
