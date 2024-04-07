import fs from 'fs';
import path from 'path';

const getFunctions = async (folderPath) => {
    const files = fs.readdirSync(folderPath);

    const functionsList = [];
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