let notesTitles = ['Frucht','Auto']
let notes = ['Apfel','Mercedes'];

let trashNoteTitles = [];
let trashNotes = [];

function renderNotes() {
    
    let contentref = document.getElementById('content');
    contentref.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentref.innerHTML += getNotesTemplate(indexNote);

    }
}

function renderTrashNotes() {
    
    let trashContentref = document.getElementById('trash_content');
    trashContentref.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentref.innerHTML += getTrashNotesTemplate(indexTrashNote);

    }
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);
    
    noteInputRef.value = "";

    let titleInputRef = document.getElementById('title_input');
    let titleInput = titleInputRef.value;

    notesTitles.push(titleInput);
    
    titleInputRef.value = "";

    renderNotes();

}

function pushToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNoteTitles.push(trashNoteTitle[0]);
     
    renderNotes();
     renderTrashNotes();
 }


 function trashToNote(indexNote) {
    // Notiz aus dem Papierkorb holen und in die Notizen zurück verschieben
    let fromTrashToNote = trashNotes.splice(indexNote, 1);
    notes.push(fromTrashToNote[0]);

    // Titel der Notiz aus dem Papierkorb holen und in die Notizen-Titel zurück verschieben
    let fromTrashToNoteTitle = trashNoteTitles.splice(indexNote, 1);
    notesTitles.push(fromTrashToNoteTitle[0]);

    // Aktualisiere die Anzeige
    renderNotes();
    renderTrashNotes();
}


 function deleteNote(trashNote) {
    trashNotes.splice(trashNote, 1);
    renderTrashNotes();
    renderNotes();
 }
