import { createBotCommand } from '@twurple/easy-bot';

export const dice = createBotCommand(
    'dice',
    (params, {reply}) => {
      const diceRoll = Math.floor(Math.random() * 6) + 1; 
      reply(`You rolled a ${diceRoll}`);
    }
);