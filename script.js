let numRow = prompt("Choose number of Rows");
let numCol = prompt("choose number of Cols");
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

for(let container of containers){
    container.addEventListener("mouseenter", function(){
        container.style.backgroundColor = "black"
    });
}

function hello(){
    console.log("Hello");
    for(let container of containers){
        container.style.backgroundColor = "white";
    }
}