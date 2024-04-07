import { createBotCommand } from '@twurple/easy-bot';

export const slap = createBotCommand(
    'slap',
    (params, { userName, say}) => {
      say(`${userName} slaps ${params.join(', ')} with a large trout. Damn!`);
    }
)