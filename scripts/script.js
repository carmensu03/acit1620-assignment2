const clickMeButton = document.querySelector(".dark");
const body = document.querySelector("body");
const sideNotes = document.querySelector("aside");
const textArea = document.querySelector("textarea");

function changeColor()
{
    if (clickMeButton.textContent === "Dark Theme")
    {
        clickMeButton.textContent = "Light Theme"
        changeBG()
        changeSideNotes()
        changeTextArea()
    }
    else if (clickMeButton.textContent = "Light Theme")
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

function changeButton()
{

}

clickMeButton.addEventListener("click", changeColor)