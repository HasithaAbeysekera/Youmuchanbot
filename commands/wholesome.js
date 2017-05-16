const ms = require('ms');
const Discord = require("discord.js");
var getGuildMember = require('../util/getGuildMember.js');
const silencedRole = require('../config.json').silencedrole;
exports.run = (client, message, args) => {
    let silenced = message.guild.roles.find(u => u.name == silencedRole);
    if (!silenced) {
        message.guild.createRole({
                name: `${silencedRole}`,
            }).then(role => console.log(`Created role ${role}`))
            .catch(console.error)
    };
    if (!message.mentions.users.first()) {
        return message.channel.sendMessage('Mention a user to mute');
    } else {
        user = message.mentions.users.first();
        if (!client.lockit) client.lockit = [];
        let time = args.splice(1).join(' ');
        let validUnlocks = ['release', 'unmute'];
        if (!time) {
            return message.reply('You must set a duration for the mute in either hours, minutes or seconds');
        }
        if (validUnlocks.includes(time)) {

            let target = getGuildMember(message, user);
            target.removeRole(silenced).then(() => {
                message.channel.sendMessage(`${target.user} has been unmuted`);
                clearTimeout(client.lockit[target.id]);
                delete client.lockit[target.id];
            }).catch(error => {
                console.log(error);
            });

            // message.channel.overwritePermissions(message.guild.id, {
            //     SEND_MESSAGES: null
            // }).then(() => {
            //     message.channel.sendMessage('Lockdown lifted.');
            //     clearTimeout(client.lockit[message.channel.id]);
            //     delete client.lockit[message.channel.id];
            // }).catch(error => {
            //     console.log(error);
            // });
        } else {
            let target = getGuildMember(message, user);
            target.addRole(silenced).then(() => {
                message.channel.sendMessage(`${target.user} has been muted for ${ms(ms(time), { long:true })}`).then(() => {
                    client.lockit[target.id] = setTimeout(() => {
                        target.removeRole(silenced).then(message.channel.sendMessage('Lockdown lifted.')).catch(console.error);
                        delete client.lockit[target.id];
                    }, ms(time));
                }).catch(error => {
                    console.log(error);
                });
            });
        }
    }
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['silence'],
    permLevel: 3
};

exports.help = {
    name: 'wholesome',
    description: 'Wholesome',
    usage: 'wholesome'
};
