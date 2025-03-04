let height = window.prompt("Wat do you what the height to be ?, ")
let width = window.prompt("What do you what the width to be ?, ")

const Container  = document.querySelector("#Container ")

for (let i = 0; i < height; i++) {   // Outer loop → rows
    for (let j = 0; j < width; j++) {  // Inner loop → columns
        let div = document.createElement("div"); // Create a new div
        Container.appendChild(div); // Append div to container
    }
} 

