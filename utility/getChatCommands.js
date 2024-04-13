import fileGetter from "./getFiles.js";

export default async function getCommands() {
    let files = await fileGetter.getFilesWithSuffix("./chatCommands/", "js")

    files = await Promise.all(
        files.map(async (file) => {
            return (await import('../chatCommands/' + file)).default;
        })
    );

    return files;
}

