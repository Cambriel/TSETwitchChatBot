import fileGetter from "./getFiles.js";

export default async function getEvents(bot) {

    let events = await fileGetter.getFilesWithSuffix("./events/", "js")

    events = await Promise.all(
        events.map(async (event) => {
            let tEvent = (await import('../events/' + event)).default;
            return tEvent;
        })
    );

    
    for(let i = 0; i < events.length; i++){
        let event = events[i];
        await event(bot);
    }
}