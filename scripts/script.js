

const clickMeButton = document.querySelector(".dark");
function changeText()
{
    if (clickMeButton.textContent === "Dark Theme")
    {
        clickMeButton.textContent = "Light Theme";
    }
    else 
    {
        clickMeButton.textContent = "Dark Theme"
    }
        
}
clickMeButton.addEventListener("click", changeText)