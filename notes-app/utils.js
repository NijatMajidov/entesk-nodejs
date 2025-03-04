import fs from 'fs';

const GetNotes = function (newmsg){
    let existingContent = "";
    if (fs.existsSync('notes.txt')) {
        existingContent = fs.readFileSync('notes.txt', 'utf-8');
    }

    if (existingContent.includes(newmsg)) {
        console.log("This message is now available!");
        return existingContent;
    }

    fs.appendFileSync('notes.txt', ` ${newmsg}`);
    return fs.readFileSync('notes.txt', 'utf-8');
}

export default GetNotes;