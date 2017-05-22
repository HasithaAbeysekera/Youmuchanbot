const fs = require('fs');
let gameGroup = JSON.parse(fs.readFileSync('./db/gamegroups.json', 'utf8'));
const Discord = require("discord.js");
const prefix = require("../config.json").prefix;
// var gameGroup = require("../db/gamegroups.json");
exports.run = (client, message, args) => {
    if (!args[0]) { //no list gamegroups
        message.channel.sendMessage(`List of Game Groups:`);
        let gameGroupSize = Object.keys(gameGroup).length;
        let gamesArray = Object.keys(gameGroup);
        let msg = "**Game - Role Name**\n";
        for (i = 0; i < gameGroupSize; i++) {
            msg = msg.concat(`${gamesArray[i]} - ${gameGroup[gamesArray[i]]}\n`);
        }
        message.channel.sendMessage(`${msg}`);
    } else {
        if (args[0] == "create") { //create gameGroup
            let argsString = args.join(' ');
            let gameNamestr = argsString.match(/"(.+?)"/g);
            if (!gameNamestr || !gameNamestr[0] || !gameNamestr[1]) {
                return message.channel.sendMessage(`Game or Role name not found. Please use the correct format. type \`${prefix} help gamegroup\` for more details`);
            }
            let gameName = gameNamestr[0].slice(1, -1);
            let roleName = gameNamestr[1].slice(1, -1);

            message.channel.sendMessage(`gameName: ${gameName}`);
            message.channel.sendMessage(`roleName: ${roleName}`);
            if (gameGroup[gameName]) {
                return message.channel.sendMessage("A group already exists for that game");
            }
            if (message.guild.roles.find(r => r.name.toLowerCase() == roleName.toLowerCase())) {
                return message.channel.sendMessage("That role already exists, please choose another name for the role");
            }

            gameGroup[gameName] = roleName;
            fs.writeFile('./db/gamegroups.json', JSON.stringify(gameGroup), (err) => {
                if (err) console.error(err)
            });
            message.channel.sendMessage(`Creating role @${roleName} for game ${gameName}`);

        } else
        if (args[0] == "join") {
            //join gameGroup
        } else {
            return message.channel.sendMessage("Error: Use -help gamegroup");
        }
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['gg', 'gamegroups'],
    permLevel: 0
};

exports.help = {
    name: 'gamegroup',
    description: 'Displays help for the specified command or shows whole command list if none specificed',
    usage: 'gamegroup create ["GameName"] [RoleName]\ngamegroup join [RoleName or GameName]'
};
