import dotenv from "dotenv";
import fs from "fs";
import { RefreshingAuthProvider } from "@twurple/auth";
import { Bot } from "@twurple/easy-bot";
import getCommands from "./utility/getChatCommands.js";
import setEvents from "./utility/setEvents.js";

dotenv.config();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const channel = process.env.CHANNEL;

const chatCommands = await getCommands();

const tokenData = JSON.parse(fs.readFileSync(`./tokens/token.${process.env.CLIENT_ID}.json`, 'utf8'));

const authProvider = new RefreshingAuthProvider(clientId, clientSecret);

authProvider.onRefresh(async (userId, newTokenData) => {
  fs.writeFileSync(
    `./tokens/token.${userId}.json`,
    JSON.stringify(newTokenData, null, 4),
    'utf-8'
  )
});

await authProvider.addUserForToken(
  tokenData,
  ['subscriptions', 'channel_subscriptions']
).catch(error => console.error(error));

const bot = new Bot({ 
  authProvider, 
  channels: [channel],
  commands: chatCommands
});

const events = await setEvents(bot);

console.log("I am running");