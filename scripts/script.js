const clickMeButton = document.querySelector(".dark");
const body = document.querySelector("body");
const sideNotes = document.querySelector("aside");
const textArea = document.querySelector("textarea");
const blueButton = document.querySelector(".blue");
const imgLogo = document.querySelector("img");
const lightButton = document.querySelector(".dark");
const redButton = document.querySelector(".red");

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
    textArea.classList.toggle("DarkTextAreaColor");
    blueButton.classList.toggle("DarkBlueButton");
    imgLogo.classList.toggle("DarkLogoColor");
    lightButton.classList.toggle("DarkLightButton");
    redButton.classList.toggle("DarkRedButton");
}

clickMeButton.addEventListener("click", changeColor)