// JavaScript for handling pop-up text
const popupLink = document.querySelector(".popuplink");
const popupText = document.querySelector(".popuptext");

popupLink.addEventListener("click", () => {
    popupText.style.display = "block";
});

popupLink.addEventListener("blur", () => {
    popupText.style.display = "none";
});
