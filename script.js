//Refresh Page
function refresh(){
    location.reload();
}

let numRow = document.getElementById("myRange").value;
let numCol = document.getElementById("myRange").value;
document.getElementById("sliderValue").innerHTML = numRow + " X " + numCol;
gridSize = numRow * numCol;

//Change number of rows and cols on CSS file
let r = document.querySelector(":root");
r.style.setProperty("--rows", numRow);
r.style.setProperty("--cols",numCol);

//Create Grid
box = document.getElementById("grid-container");

for(let i=0; i < (gridSize); i++){
    let test = document.createElement("div");
    box.appendChild(test).className = "grid-item";
}
//Resize Grid
let square = document.querySelector(".grid-item");
square.style.setProperty("width", 500/ gridSize);
square.style.setProperty("height", 500/ gridSize);

//Paint Grid
containers = document.getElementsByClassName("grid-item");
//Change Color
function  changeColor(){
    color = document.getElementById("colorpicker").value;
}
color = "black";
for(let container of containers){
    container.addEventListener("mouseenter", function(){
        container.style.backgroundColor = color;
    });
}

function hello(){
    for(let container of containers){
        container.style.backgroundColor = "white";
    }
}