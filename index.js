
const Discord = require("discord.js");
const fs = require("fs");
const sanitize = require("sanitize-filename");
const https = require("https");
const path = require("path");
const shell = require("shelljs");

let client = new Discord.Client();

client.on("ready", async function() {
    console.log("Logged in as " + this.user.username + ".");

    let guilds = this.guilds.array();
    for (const guild of guilds) {
        let folderPath = path.join(__dirname, "emojis", sanitize(guild.name));
        shell.mkdir("-p", folderPath);

        let emojis = guild.emojis.array();
        for (const emoji of emojis) {
            let filePath = path.join(folderPath, emoji.name + path.extname(emoji.url));
            if (!fs.existsSync(filePath)) {
                await (new Promise(resolve => {
                    https.get(emoji.url, res => {
                        console.log(emoji.url + " => " + filePath);
                        let stream = fs.createWriteStream(filePath);
                        res.pipe(stream);
                        stream.on("finish", () => {
                            // console.log("Downloaded")
                            resolve();
                        });
                    });
                }));
            } else {
                console.log(filePath + " exists, skipping");
            }
        }
    }

    console.log("Done!");
    process.exit();
});

client.login('your_token_here');

/*@end@*/

