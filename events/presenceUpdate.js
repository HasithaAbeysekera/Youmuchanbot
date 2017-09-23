const Discord = require("discord.js");
const fs = require('fs');
var gameGroups = require('../db/gamegroups.json');
const annoyJames = true;
const annoyID = 77183989349089280;
var assets = require('../assets/assets.json');
module.exports = (oldMember, newMember) => {
  if (annoyJames) {
    if (newMember.id != annoyID) {
      return;
    } else {
      // return console.log(`${newMember.displayName} is testing online: ${newMember.presence.status}`);
      if (oldMember.presence.status == "offline" && newMember.presence.status == "online") {
        return newMember.send(new Discord.Attachment(assets["himrmoonman"], 'hi.png'))
        //return newMember.send("testing");
      }
    }
  }

  // }
  // }
  /*
  if()

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
