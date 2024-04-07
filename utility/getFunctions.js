import fs from 'fs';
import path from 'path';

/**
 * Returns a list of all the exports from a directory
 *  
 * @param {string} folderPath is the directory in which the .js files are located
 * @returns {Promise<BotCommand[]>} a list of all the exports from .js files within the given directory
 */
export const getFunctions = async (folderPath) => {
    const files = fs.readdirSync(folderPath);

    const functionsList = [];

    //Go through all the files that end in .js and get their exports
    for(const file of files){
        const filePath = path.join(filePath, file);
        
        if(filePath.endsWith('.js')){
            const module = await import(filePath);
            const exportedFunction = module.default.name;
            functionsList.push(exportedFunction);
        }
    }

    return functionsList;
};