const clickMeButton = document.querySelector(".dark");
const body = document.querySelector("body");
const sideNotes = document.querySelector("aside");
const textArea = document.querySelector("textarea");

function changeColor()
{
    if (clickMeButton.textContent === "Dark Theme")
    {
        clickMeButton.textContent = "Light Theme";
        changeBG()
        changeSideNotes()
        changeTextArea()
    }
    else
    {
        clickMeButton.textContent = "Dark Theme"
        changeBG()
        changeSideNotes()
        changeTextArea()
    }
}

function changeBG() 
{
    body.classList.toggle("BGcolor");
}

function changeSideNotes() 
{
    sideNotes.classList.toggle("SideNotesColor");
}

function changeTextArea()
{
    textArea.classList.toggle("TextAreaColor");
}

clickMeButton.addEventListener("click", changeColor)