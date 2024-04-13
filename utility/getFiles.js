import fs from 'fs/promises';

export default { getFiles, getFilesWithSuffix }

async function getFiles(folderPath){
    return await fs.readdir(folderPath);
}

async function getFilesWithSuffix(folderPath, suffix){
    return (await fs.readdir(folderPath)).filter(file => file.endsWith(suffix));
}