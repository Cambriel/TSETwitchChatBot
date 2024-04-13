export default async function event(bot){
  bot.onSub(({ broadcasterName, userName }) => {
    bot.say(broadcasterName, `Thanks to @${userName} for subscribing to the channel!`);
  });
}