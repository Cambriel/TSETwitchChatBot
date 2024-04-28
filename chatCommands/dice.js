import { createBotCommand } from "@twurple/easy-bot";

const command = createBotCommand("dice", (params, { reply }) => {
  let dAmount = 6;
  if (params && Number(params[0]) != NaN) {
    dAmount = Number(params[0]);
  }

  const diceRoll = Math.floor(Math.random() * dAmount) + 1;
  reply(`You rolled a ${diceRoll}`);
});

export default command;
