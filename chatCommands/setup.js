import { createBotCommand } from '@twurple/easy-bot';

const { setup } = JSON.parse(fs.readFileSync(`./JSONs/commandResponses.json`, 'utf8'));

const command = createBotCommand(
    'setup',
    (params, {reply}) => {
        const diceRoll = Math.floor(Math.random() * 6) + 1; 
        reply(setupData.setup);
    }
);

export default command;