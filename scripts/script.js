const darkButton = document.querySelector(".Dark Theme");

function changeBGColor()
{
    // document.body.style.backgroundColor = "pink";
    document.body.classList.add("grey");
}
darkButton.addEventListener("click",changeBGColor);