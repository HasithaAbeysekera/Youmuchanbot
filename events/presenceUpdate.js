const fs = require('fs');
var gameGroups = require('../db/gamegroups.json');

module.exports = (oldMember, newMember) => {
/*
    let guild = newMember.guild;
    if (!newMember.presence.game) {
        return;
    } else {
        let readGameGroup = JSON.parse(fs.readFileSync('./db/gamegroups.json', 'utf8'));
        let playing = newMember.presence.game.name;
        let rolename = readGameGroup[playing];
        if(newMember.guild.roles.find('name', rolename)){
          newMember.addRole(newMember.guild.roles.find('name', rolename));
        }
    }
    */
};
