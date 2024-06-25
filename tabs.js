let aboutInfo = document.getElementById("aboutTab");
let timeInfo = document.getElementById("timeToVisitTab");
let attractionInfo = document.getElementById("attractionsTab");

let aboutButtonE1 = document.getElementById("aboutButton");
let timeToVisitButtonE2 = document.getElementById("timeToVisitButton");
let attractionsButtonE3 = document.getElementById("attractionsButton");

timeInfo.classList.add("d-none");
attractionInfo.classList.add("d-none");

function showAboutPage() {
    aboutButtonE1.classList.add("selected_button");
    aboutButtonE1.style.backgroundColor = "white"

    aboutInfo.classList.remove("d-none");
    timeInfo.classList.add("d-none");
    attractionInfo.classList.add("d-none");

    timeToVisitButtonE2.classList.remove("selected_button");
    attractionsButtonE3.classList.remove("selected_button");

}

function showTimeToVisitPage() {
    aboutButtonE1.classList.remove("selected_button");
    aboutButtonE1.style.backgroundColor = "#dae2ec";

    timeInfo.classList.remove("d-none");
    aboutInfo.classList.add("d-none");
    attractionInfo.classList.add("d-none");

    timeToVisitButtonE2.classList.add("selected_button");
    attractionsButtonE3.classList.remove("selected_button");
}

function showAttractionsPage() {
    aboutButtonE1.classList.remove("selected_button");
    aboutButtonE1.style.backgroundColor = "#dae2ec";

    timeInfo.classList.add("d-none");
    aboutInfo.classList.add("d-none");
    attractionInfo.classList.remove("d-none");

    timeToVisitButtonE2.classList.remove("selected_button");
    attractionsButtonE3.classList.add("selected_button");
}