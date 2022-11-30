const clickMeButton = document.querySelector(".dark");
const body = document.querySelector("body");
const sideNotes = document.querySelector("aside");

function changeText()
{
    if (clickMeButton.textContent === "Dark Theme")
    {
        clickMeButton.textContent = "Light Theme";
        changeBG()
        changeSideNotes()
    }
    else
    {
        clickMeButton.textContent = "Dark Theme"
        changeBG()
        changeSideNotes()
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

clickMeButton.addEventListener("click", changeText)