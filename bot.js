const Discord = require("discord.js");
const client = new Discord.Client();
const token = require("./config.json").token;
const prefix = require("./config.json").prefix;
const ownerid = require("./config.json").ownerid;
require('./util/eventLoader')(client);

/*New user joins a server*/
client.on("guildMemberAdd", member => {
	let guild = member.guild;
	guild.defaultChannel.sendMessage("Welcome, " + member.user + " to this server.");
});

/*User leaves the server*/
client.on("guildMemberRemove", member => {
	let guild = member.guild;
	guild.defaultChannel.sendMessage(member.user + " has left the server :cry:");
});

/* Logs when bot joins new server*/
client.on("guildCreate", guild => {
	console.log("New Guild added : " + guild.name + " , owned by " + guild.owner.user,username);
});

client.on("emojiCreate", emoji => {
	let guild = emoji.guild;
	guild.defaultChannel.sendMessage("A new emoji has been added! \n");
	guild.defaultChannel.sendFile(emoji.url, "newemoji.png");
	guild.defaultChannel.sendMessage("`:" + emoji.name + ":`");
});

client.on("emojiUpdate", (oldEmoji, newEmoji) => {
	console.log("Emoji update");
	let guild = oldEmoji.guild;
	guild.defaultChannel.sendMessage("Emoji updated: " + newEmoji.url);
	guild.defaultChannel.sendMessage("New name: `:"+ newEmoji.name + ":`");
});

var reload = (message, cmd) => {
	delete require.cache[require.resolve('./commands/' + cmd)];
	try {
		let cmdFile = require('./commands/' + cmd);
	} catch (err) {
		message.channel.sendMessage(`Problem loading ${cmd}: ${err}`).then(
			response => response.delete(1000).catch(error => console.log(error.stack))
		).catch(error => console.log(error.stack));
	}
	message.channel.sendMessage(`${cmd} reload was a success!`).then(
		response => response.delete(1000).catch(error => console.log(error.stack))
	).catch(error => console.log(error.stack));
};
exports.reload = reload;

client.login(token);
