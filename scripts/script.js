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
    body.classList.toggle("BGcolor");
    sideNotes.classList.toggle("SideNotesColor");
    textArea.classList.toggle("TextAreaColor");
    blueButton.classList.toggle("BlueButton");
}

clickMeButton.addEventListener("click", changeColor)