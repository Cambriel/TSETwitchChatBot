import { createBotCommand } from '@twurple/easy-bot';

const command = createBotCommand(
    'slap',
    (params, { userName, say}) => {
      say(`${userName} slaps ${params.join(', ')} with a large trout. Damn!`);
    }
);

export default command;