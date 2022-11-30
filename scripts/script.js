const clickMeButton = document.querySelector(".dark");
const body = document.querySelector("body");

function changeText()
{
    if (clickMeButton.textContent === "Dark Theme")
    {
        clickMeButton.textContent = "Light Theme";
        changeBG()
    }
    else
    {
        clickMeButton.textContent = "Dark Theme"
        changeBG()
    }
}

function changeBG() {
    body.classList.toggle("BGcolor");
}

clickMeButton.addEventListener("click", changeText)