const gridContainer = document.getElementById("grid");           // container for all grids
var size;
var toggle = "color";

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
    document.getElementById("colorButton").addEventListener("click", function(){ return toggle = "color"});    // check if eraser on
    document.getElementById("colorPicker").addEventListener("click", function(){ return toggle = "color"});
    document.getElementById("eraser").addEventListener("click", function(){ return toggle = "eraser"});  // check if eraser on
    document.getElementById("rainbow").addEventListener("click", function(){ return toggle = "rainbow"});   // // check if rainbow on
    
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




window.onload = takeGridSize(10);
