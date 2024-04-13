export default async function event(bot){
    bot.onSubGift(({broadcasterName, gifterName, userName }) => {
        bot.say(broadcasterName, `Thanks to @${gifterName} for gifting a subscription to @${userName}!`);
    });
}