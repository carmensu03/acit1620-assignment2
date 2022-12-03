const clickMeButton = document.querySelector(".dark");
const body = document.querySelector("body");
const sideNotes = document.querySelector("aside");
const textArea = document.querySelector("textarea");
const hideItems = document.querySelector("ClearItems");
const lightButton = document.querySelector(".dark");
const newNoteButton = document.querySelector(".blue.newnote");
const cancelButton = document.querySelector(".red");
const saveButton = document.querySelector(".blue.save");
const blueButton = document.querySelectorAll(".blue");
const imgLogo = document.querySelectorAll("img");
const headFont = document.querySelectorAll("h1");
const noteList = document.querySelector("#notes");

function changeColor() 
{
    if (clickMeButton.textContent === "Light Theme")
    {
        clickMeButton.textContent = "Dark Theme"
        changeTheme()
    }
    else if (clickMeButton.textContent = "Dark Theme")
    {
        clickMeButton.textContent = "Light Theme"
        changeTheme()
    }
}

function changeTheme() 
{
    body.classList.toggle("DarkBGcolor");
    sideNotes.classList.toggle("DarkSideNotesColor");
    textArea.classList.toggle("DarkTextArea");
    lightButton.classList.toggle("DarkLightButton");
    cancelButton.classList.toggle("DarkRedButton");
    for (let blue of blueButton) {
        blue.classList.toggle("DarkBlueButton");
    };
    for (let image of imgLogo) {
        image.classList.toggle("DarkLogoColor");
    };
    for (let head of headFont) {
        head.classList.toggle("DarkHeader");
    };
}

clickMeButton.addEventListener("click", changeColor)

function removeButton() 
{
    saveButton.classList.toggle("ClearItems");
    cancelButton.classList.toggle("ClearItems");
    textArea.classList.toggle("ClearItems");
    textArea.value = "";
}

cancelButton.addEventListener("click", removeButton)

function newNote() 
{
    if (cancelButton.classList.contains("ClearItems"))
    {
        removeButton();
        textArea.setAttribute("placeholder", "Type your new note:");
    }
    else if (textArea.hasAttribute("placeholder")) 
    {
        textArea.removeAttribute("placeholder");
        textArea.value = "";
    }
    else 
    {
        textArea.setAttribute("placeholder", "Type your new note:");
        textArea = "";
    }
};

newNoteButton.addEventListener("click", newNote)

let myNotesArray = [
    {
        title: "note one",
        body: "this is my first note"
    },
    {
        title: "note two",
        body: "this is my second note"
    },
];

function displayNote (event) 
{
    for (let item of myNotesArray)
    {
        if (item.title == event.target.textContent)
        {
            textArea.value = note.body;
        }
    };
}
sideNotes.addEventListener("click",displayNote);

function saveNote() {
    let title=""
    title = prompt("Save this note as");
    myNotesArray.push(
        {
            title: title,
            body: textArea.value
        }
    );
    const noteItem = document.createElement("li");
    noteItem.textContent = title;
    noteList.appendChild(noteItem);
}

saveButton.addEventListener("click", saveNote)