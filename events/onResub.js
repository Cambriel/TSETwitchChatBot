export default async function event(bot){
    bot.onResub(({ broadcasterName, userName, months }) => {
        bot.say(broadcasterName, `Thanks to @${userName} for subscribing to the channel for a total of ${months} months!`);
    });
}