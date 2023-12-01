const floralBox = document.querySelector("#floralBox");
const decorBox = document.querySelector("#decorBox");
const hairMakeupBox = document.querySelector("#hairMakeupBox");
const lightingSoundBox = document.querySelector("#lightingSoundBox");
const floral = document.querySelector("#floral")
const decorSelection = document.querySelector("#decorSelection")
const hairMakeup = document.querySelector("#hairMakeup")
const lightingSound = document.querySelector("#lightingSound")
function showContent(id) {
    console.log("Run")
    const style = window.getComputedStyle(id);
    if (style.display === "none") {
        id.style.display = "block";
    } else {
        id.style.display = "none";
    }
}

floralBox.addEventListener("click", () => {
    showContent(floral)
})
decorBox.addEventListener("click", () => {
    showContent(decorSelection)
})
hairMakeupBox.addEventListener("click", () => {
    showContent(hairMakeup)
})
lightingSoundBox.addEventListener("click", () => {
    showContent(lightingSound)
})