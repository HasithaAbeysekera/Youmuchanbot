const Discord = require("discord.js");
const client = new Discord.Client();
const token = require("./settings.json").token;
const prefix = require("./settings.json").prefix;

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
		message.channel.sendFile("http://i.imgur.com/fYgao84.jpg", "thumbsup.jpg");
		//message.channel.sendEmbed("./assets.fistbump.gif", "fistbump.gif");
	} else

	if (command === "say") {
		message.channel.sendMessage(argresult);
		//.then(message =>console.log(`Sent message: ${message.content}`))
		//.catch(console.error);
	} else

	if (command === "add") {
		let numArray = args.map(n=> parseInt(n));
		let total = numArray.reduce( (p, c) => p+c);

		message.channel.sendMessage(total);
	} else

	if (command === "fistbump") {
		//message.channel.sendMessage("http://i.imgur.com/6lMLwSv.gif");
		message.channel.sendFile("http://i.imgur.com/6lMLwSv.gif", "fistbump.gif");
	} else

	if (command === "puckclap") {
		message.channel.sendMessage("https://gfycat.com/NeatWearyBluemorphobutterfly");
		//message.channel.sendFile("http://i.imgur.com/lYnxiod.mp4", "puckclap.mp4");
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
			message.channel.sendMessage("Sushi! \n http://i.imgur.com/NUkfIFu.gif");
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
		} else {
			let target = client.users.find("username", argresult);
			//let targetuser = message.mentions.users.first();
			//message.guild.member(target).user;
			//let target = message.guild.members.find(u => u.id === targetuser.id);
			message.channel.sendMessage("avatar test");
			message.channel.sendMessage(target.username);
		}
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