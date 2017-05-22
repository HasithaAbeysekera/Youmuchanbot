var gameGroup = require("../db/gamegroups.json");

module.exports = (oldMember, newMember) => {
    let guild = newMember.guild;
    if (!newMember.presence.game) {
        return;
    } else {
        playing = newMember.presence.game.name;
        if (gameGroup[playing]) {
            gameGroupName = gameGroup[playing];
            newMember.addRole(guild.roles.find("name", gameGroupName))
        }
    }
    if (playing == "World of Warships") {
        newMember.addRole(guild.roles.find("name", "Admirals"));
    } else
    if (playing == "League of Legends") {
        newMember.addRole(guild.roles.find("name", "Summoners"));
    }
    if (playing == "Rust") {
          newMember.addRole(guild.roles.find("name", "Rust"));
    }
};
