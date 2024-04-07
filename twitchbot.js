import dotenv from 'dotenv';
import { promise as fs } from 'fs';
import { RefreshingAuthProvider } from '@twurple/auth';
import { Bot, createBotCommand } from '@twurple/easy-bot';

dotenv.config();

const RefreshingAuthProvider = RefreshingAuthProvider;
const Bot = Bot;

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const channels = process.env.CHANNELS.split(",");

const tokenData = JSON.parse(await fs.readFile('./tokens.json', 'utf-8'));

const authProvider = new RefreshingAuthProvider(clientId, clientSecret);

authProvider.onRefresh(async (userId, newTokenData) => await fs.writeFile(
  './tokens.json',
  JSON.stringify(newTokenData, null, 4),
  'utf-8'
));

await authProvider.addUserForToken(
  tokenData,
  ['chat']
);

const bot = new Bot({ authProvider, 
  channels: channels,
  commands: [
    createBotCommand(
      'dice',
      (params, {reply}) => {
        const diceRoll = Math.floor(Math.random() * 6) + 1; 
        reply(`You rolled a ${diceRoll}`);
      }
    ),
    createBotCommand(
      'slap',
      (params, { userName, say}) => {
        say(`${userName} slaps ${params.join(', ')} with a large trout. Damn!`);
      }
    )
  ]
});

bot.onSub(({ broadcasterName, username }) => {
  bot.say(broadcasterName, `Thanks to @${userName} for subscribing to the channel!`);
});

bot.onResub(({ broadcasterName, userName, months }) => {
  bot.say(broadcasterName, `Thanks to @${userName} for subscribing to the channel for a total of ${months} months!`);
});

bot.onSubGift(({broadcasterName, gifterName, userName })=>{
  bot.say(broadcasterName, `Thanks to @${gifterName} for gifting a subscription to @${userName}!`);
});



console.log("I am running");