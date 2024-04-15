const
  CLIENT_ID = "1229486558382391437",
  
  express = require("express"),
  chalk = require("chalk"),
  server = express(),
  dotenv = require('dotenv'),
  { Client } = require('discord.js-selfbot-v11'),
  client = new Client(),

  statuses = new Map([
    [1, ["playing", chalk.yellowBright.bold]],
    [2, ["listening", chalk.greenBright.bold]],
    [3, ["streaming", chalk.magentaBright.bold]]
  ]);

dotenv.config();

if (!process.env.TOKEN) {
  console.error("You need to add a token inside Secrets.");
  process.exit();
}

console.log(`${chalk.cyanBright.bold("Statuscord")} | ${chalk.greenBright.bold("SealedSaucer")}`);

server.all("/", (req, res) => res.send(`<meta http-equiv="refresh" content="0; URL=https://phantom.fr.to/support"/>`));
server.listen(process.env.PORT ?? 3000);

client.login(process.env.TOKEN);

console.log(`\n[${chalk.green.bold("+")}] The webserver is ready.\n`);

console.log(`[${chalk.yellow.bold("!")}] The bot will start with the 'listening' status.\n`);

client.on("ready", _ => {
  const statusModule = require(`./statuses/listening.js`);

  console.clear();
  statusModule(client, CLIENT_ID)
    .then(_ => console.log(`[${chalk.greenBright.bold("Listening")}] Successfully logged in as ${client.user.username}#${client.user.discriminator} (${client.user.id})!`))
    .catch(console.error)
});