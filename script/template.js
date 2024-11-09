function getNotesTemplate(indexNote) {
    return `
    <div class="note">
        <h3>${notesTitles[indexNote]}</h3>
        <p>${notes[indexNote]}</p>
        <div>
            <button onclick="pushToTrash(${indexNote})" class="btn">X</button>
        </div>  `;

}

function getTrashNotesTemplate(indexTrashNote) {
    return `<div class="note">
        <h3>${trashNoteTitles[indexTrashNote]}</h3>
        <p>${trashNotes[indexTrashNote]}</p>
        <div>
            <button onclick="deleteNote(${indexTrashNote})" class="btn">X</button>
            <button onclick="trashToNote(${indexTrashNote})" class="btn">N</button>
        </div>`;
    // <p>+ ${trashNoteTitles[indexTrashNote]} &rarr; ${trashNotes[indexTrashNote]}<button onclick='deleteNote(${indexTrashNote})'>X</button></p>`
}
