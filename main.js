const gridContainer = document.getElementById("grid");           // container for all grids
var size;

var toggle = "color";
document.getElementById("colorButton").addEventListener("click", function(){ return toggle = "color", buttonMode(toggle)});    // check if color button clicked
document.getElementById("colorPicker").addEventListener("click", function(){ return toggle = "color", buttonMode(toggle)});     // check if colorPicker clicked
document.getElementById("eraser").addEventListener("click", function(){ return toggle = "eraser", buttonMode(toggle)});  // check if eraser on
document.getElementById("rainbow").addEventListener("click", function(){ return toggle = "rainbow", buttonMode(toggle)});   // // check if rainbow on

function gridResize(size) {
    gridContainer.textContent = "";                          // clears the previous grid size 
    for (let i=Math.pow(size, 2); i>0; i--){             // grid creates
        let gridItem = document.createElement("div");       //creates gridItem
        gridItem.className= "gridItem";                     // for each girdItem provide class
        gridItem.id = "Item"+i;                             // id for each gridItem
        gridItem.setAttribute("onmouseover","sketch(this)");    // provide each gridItem an attributes to activate sketch() function
        gridContainer.appendChild(gridItem);                  // add them up
    
}
    gridContainer.style.gridTemplateColumns = "auto ".repeat(size);     // arrange grid items with given size as square
}
    
function takeGridSize() {                       // provides grid size from range slider
    size = arguments[0];
    document.getElementById("Amount").innerText= `${size}x${size}`;
    gridResize(size);
    return size
}

function sketch(hoveredItem) {                          // it sketch
    if (toggle=="eraser") {                                      
        document.getElementById(hoveredItem.id).style.backgroundColor = "#fff";
    }
    else if (toggle == "color") {
        const color = document.getElementById("colorPicker").value;
        document.getElementById(hoveredItem.id).style.backgroundColor = color;
    }

    else if (toggle == "rainbow") {
        document.getElementById(hoveredItem.id).style.backgroundColor = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
    }

    else {alert("Something went wrong !")}
}

function clearButton() {      //reset grids
    for (i=size*size;i>0;i--){
        document.getElementById("Item"+i).style.backgroundColor = "#fff";
    }  
}

function buttonMode(mode) {
    let buttonMode = "color";
    document.querySelectorAll(".color").forEach((eachButton) => { eachButton.setAttribute("class", buttonMode)});
    buttonMode = "color activeMode";

    if (mode == "eraser") {                                      
        document.getElementById(mode).setAttribute("class",buttonMode);
    }
    else if (mode == "color") {
        document.getElementById(mode+"Button").setAttribute("class",buttonMode);
    }

    else if (mode == "rainbow") {
        document.getElementById(mode).setAttribute("class",buttonMode);
    }

    else {alert("Something went wrong !")}
}



window.onload = takeGridSize(10), buttonMode(toggle);;
