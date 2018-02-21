var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.body;
var button = document.querySelector("button");

function setColors() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomNumber() {
    //Just googled how to make a random HEX NUMBER #XXXXXX
    return "#" + Math.random().toString(16).slice(2, 8);
}

function setRandomColors(){
    color1.value = randomNumber();
    color2.value = randomNumber();
    setColors();
}

color1.addEventListener("input", setColors);
color2.addEventListener("input", setColors);
button.addEventListener("click", setRandomColors);



setColors();

