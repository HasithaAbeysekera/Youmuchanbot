const guildOwner = require(`../config.json`).ownerid;
var textArray = ["Unwise", "Drunk", "Dumb", "Lazy", "Glutton", "Vain", "Dull", "Meek", "Nosy", "Weak", "Vulgar", "Rotten", "Angry", "Awful", "Crazy", "Cruel", "Evil", "Horrible", "Wicked",
    "Wretched", "Beautiful", "Great", "Brave", "Kind", "Tough", "Bright", "Charming", "Loyal", "Friendly", "Able", "Bold", "Clever", "Cool", "Fair", "Feisty", "Fine", "Humble", "Jovial", "Mighty",
    "Noble", "Proud", "Reverant"
];

exports.run = function(client, message, args) {
    if (message.author.id == guildOwner) {
        message.channel.sendMessage(`APRIL FOOOOLS!!!! \n https://www.youtube.com/watch?v=OqjEipldpFc`);

        let memberTotal = message.guild.members.size;
        console.log(`Member total: ${memberTotal}`);
        for (i = 0; i < memberTotal; i++) {
            currMember = message.guild.members.array()[i];
            console.log(`Current Member: ${currMember.nickname}`);
            let rand = Math.floor(Math.random() * textArray.length);
            let nick = textArray[rand];
            currMember.setNickname(`Holothe${nick}`);
        }
    } else {
        message.channel.sendMessage(`Error: April Fools not found`);
    }
};
