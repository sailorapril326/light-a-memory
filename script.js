console.log("Light a Memory Loaded");
const homeScreen = document.getElementById("homeScreen");
const memoryScreen = document.getElementById("memoryScreen");

const startButton = document.getElementById("startButton");
const backButton = document.querySelector(".back-button");

startButton.addEventListener("click", () => {
    homeScreen.classList.add("hidden");
    memoryScreen.classList.remove("hidden");
});

backButton.addEventListener("click", () => {
    memoryScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
});
