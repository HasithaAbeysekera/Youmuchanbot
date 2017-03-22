const Discord = require("discord.js");
const client = new Discord.Client();
const token = require("./config.json").token;
const prefix = require("./config.json").prefix;

client.on("ready",() => {
	console.log("I'm online.");
});

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


client.on("message", message => {

	if (message.author.bot) return;

	if (!message.content.startsWith(prefix)) return;

	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	console.log(command);

	let args = message.content.split(" ").slice(1);
	var argresult = args.join(" ");

	if (command === "ping") {
		message.channel.sendMessage("pong");
	} else

	if (command === "thumbsup") {
		message.channel.sendFile("http://i.imgur.com/DCFzew1.jpg", "thumbsup.jpg");
	} else

	if (command === "say") {
		message.channel.sendMessage(argresult);
	} else

	if (command === "add") {
		let numArray = args.map(n=> parseInt(n));
		let total = numArray.reduce( (p, c) => p+c);

		message.channel.sendMessage(total);
	} else

	if (command === "fistbump") {
		message.channel.sendFile("http://i.imgur.com/wSJoNoN.gif", "fistbump.gif");
	} else

	if (command === "puckclap") {
		message.channel.sendFile("http://i.imgur.com/V3KrCUo.gif", "puckclap.gif");
	} else

	if(command === "setgame"){
		if(!argresult) argresult = null;
		client.user.setGame(argresult);
	} else

	if(command === "setstream"){
		if(!argresult) argresult = null;
		client.user.setGame(argresult, "https://www.twitch.tv/holo_thewise");
	} else

	if (command === "sushi") {
		let sushiRole = message.guild.roles.find("name", "Sushi-ass man");
		if(message.member.roles.has(sushiRole.id)) {
			message.channel.sendMessage("Sushi!");
			message.channel.sendFile("http://i.imgur.com/mlRUf0a.gif", "sishi.gif");
		} else {
			message.channel.sendMessage("You do not have the power of the sushi");
		}
	} else

	if (command === "shutdown") {
		let adminRole = message.guild.roles.find("name", "Admin");
		if(message.member.roles.has(adminRole.id)) {
			message.channel.sendMessage("Shutting down, Goodbye :wave:");

			client.destroy((err) => {
			console.log(err);
			});
		} else {
			message.channel.sendMessage("You do not have permission to use this command");
		}
	}

	if(command === "dsay") {
		let adminRole = message.guild.roles.find("name", "Admin");
		if(message.member.roles.has(adminRole.id)) {
			let guild = message.member.guild;
			guild.defaultChannel.sendMessage(argresult);
		} else {
			return;
		}
	} else

	if(command === "avatar") {
		if(argresult == "") {
			message.reply("Your avatar is:");
			message.channel.sendFile(message.author.avatarURL, 'avatar.jpg');
		} else
		/*if (message.isMentioned(argresult)) {
			let target = message.mentions.users.first();
			let targetuser = message.guild.members.find(u => u.id === target.id);
			message.channel.sendMessage(targetuser + "'s avatar is:\n");
			message.channel.sendFile(targetuser.user.avatarURL, 'avatar.jpg');
		} else */
		if (message.guild.members.find(u => u.displayName.toLowerCase() === argresult.toLowerCase())){
	    let target = message.guild.members.find(u => u.displayName.toLowerCase() === argresult.toLowerCase());
	    message.channel.sendMessage(target.user + "'s avatar is:\n");
	    message.channel.sendFile(target.user.avatarURL, 'avatar.jpg');
	  } else {
			message.channel.sendMessage("User not found");
			return;
		}
	} else

	if(command === "2booty") {
		message.channel.sendFile("http://i.imgur.com/CvFfCME.png", "2booty.png");
	} else

	if(command === "runpika") {
		message.channel.sendFile("http://i.imgur.com/Jo8hycn.gif", "runpika.gif");
	} else

	if (commands === "carnival") {
		message.channel.sendFile("http://i.imgur.com/BH2dcnh.gif", "carnival.gif");
	}
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

client.login(token);
