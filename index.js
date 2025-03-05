// Promt user for the size of grid 
let height = window.prompt("Wat do you what the height to be ?, ")
let width = window.prompt("What do you what the width to be ?, ")

// Target the container ID
const Container  = document.querySelector("#Container ")

// Use a for loop to simplify creating the divs
for (let i = 0; i < height; i++) {   // Outer loop → rows
    for (let j = 0; j < width; j++) {  // Inner loop → columns
        let div = document.createElement("div"); // Create a new div
        Container.appendChild(div); // Append div to container
    }
}

// Use event listener to change color of the div
div.addEventListener("mouseover", function() {
    div.style.backgroundColor = "blue";
});