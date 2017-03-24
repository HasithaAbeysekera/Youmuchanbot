exports.run = function(client, message, args) {
    if (args == "") {
        client.user.setGame(null);
    } else {
        client.user.setGame(args.join(" "), "https://www.twitch.tv/holo_thewise");
    }
};
