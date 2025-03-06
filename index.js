// Select modal elements
let modal = document.getElementById("modal");
let submitButton = document.getElementById("submit")

// show modal when the page loads
window.onload = function (){
    modal.style.display = "flex";
};

// handle submit click event
submitButton.addEventListener("click", function(){
    let height = document.getElementById("height").value;
    let width = height;

if (height){
    modal.style.display = "none";
    createGrid(height,width);
} else {
    alert ("Please enter a valid height")
}
});

function createGrid (height,width){
    const container = document.querySelector("#Container");
    container.innerHTML = ""; // this will clear the previos grid

// This is the calculation to find the width of the div
// This is based on the size of the container and the number of divs
const containerWidth = container.offsetWidth; // Returns the layout width of an element as an integer
const divSize = Math.floor(containerWidth / width); // Calculates div size based on num of colums

// Create the grid
for (let i = 0; i < height; i++) {   // Outer loop → rows
    for (let j = 0; j < width; j++) {  // Inner loop → columns
        let div = document.createElement("div"); // Create a new div
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.style.border = "1px solid black";
        container.appendChild(div);
        }
    }
let allDivs = document.querySelectorAll("#Container div")

allDivs.forEach(function(div){
    div.addEventListener("mouseenter",function(){
        div.style.backgroundColor = "black";
    });

    div.addEventListener("mouseleave",function(){
        div.style.backgroundColor = "black";
        });
    });
}


