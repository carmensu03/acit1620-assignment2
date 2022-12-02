const clickMeButton = document.querySelector(".dark");
const body = document.querySelector("body");
const sideNotes = document.querySelector("aside");
const textArea = document.querySelector("textarea");
const hideItems = document.querySelector("ClearItems");
const lightButton = document.querySelector(".dark");
const redButton = document.querySelector(".red");
const blueButton = document.querySelectorAll(".blue");
const imgLogo = document.querySelectorAll("img");

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
    redButton.classList.toggle("DarkRedButton");
    for (let blue of blueButton) {
        blue.classList.toggle("DarkBlueButton");
    };
    for (let image of imgLogo) {
        image.classList.toggle("DarkLogoColor");
    };
}

clickMeButton.addEventListener("click", changeColor)