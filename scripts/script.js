const clickMeButton = document.querySelector(".dark");
const body = document.querySelector("body");
const sideNotes = document.querySelector("aside");
const textArea = document.querySelector("textarea");
const blueButton = document.querySelector(".blue");

function changeColor()
{
    if (clickMeButton.textContent === "Light Theme")
    {
        clickMeButton.textContent = "Dark Theme"
        changeBG()
        changeSideNotes()
        changeTextArea()
        changeButtonColor()
    }
    else if (clickMeButton.textContent = "Dark Theme")
    {
        clickMeButton.textContent = "Light Theme"
        changeBG()
        changeSideNotes()
        changeTextArea()
        changeButtonColor()
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

function changeButtonColor()
{
    blueButton.classList.toggle("BlueButton");
}

clickMeButton.addEventListener("click", changeColor)