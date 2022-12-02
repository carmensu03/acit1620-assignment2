const clickMeButton = document.querySelector(".dark");
const body = document.querySelector("body");
const sideNotes = document.querySelector("aside");
const textArea = document.querySelector("textarea");
const hideItems = document.querySelector("ClearItems");
const lightButton = document.querySelector(".dark");
const cancelButton = document.querySelector(".red");
const saveButton = document.querySelector(".blue.save");
const blueButton = document.querySelectorAll(".blue");
const imgLogo = document.querySelectorAll("img");
const headFont = document.querySelectorAll("h1");

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