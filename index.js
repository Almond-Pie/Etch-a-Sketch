// Select modal elements
let modal = document.getElementById("modal");
let submitButton = document.getElementById("submit");
let createGridButton = document.getElementById("createGridButton");

// show modal when the page loads
createGridButton.addEventListener("click", function() {
    modal.style.display = "flex";
    modal.style.justifyContent  = "center"
    modal.style.alignItems = "center"
});

// handle submit click event
submitButton.addEventListener("click", function() {
    let height = parseInt(document.getElementById("height").value);
    let width = height;
    
    if (isNaN(height) || height < 2 || height > 100) {
        document.getElementById("errorMessage").textContent =
            "Please enter a valid height between 2 and 100.";
        return;
    } else if (!height) {
        document.getElementById("errorMessage").textContent =
            "Please enter a valid height";
        return;
    } else {
        modal.style.display = "none";
        createGrid(height, width);
    }
});

function createGrid(height, width) {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear previous grid
    
    // Set fixed container size
    const containerWidth = 600;
    const containerHeight = 600;
    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerHeight}px`;
    
    // Calculate cell size including borders
    const borderWidth = 1; // 1px border
    const cellSize = (containerWidth / width) - (2 * borderWidth / width);
    
    // Create the grid
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let div = document.createElement("div");
            div.style.width = `${cellSize}px`;
            div.style.height = `${cellSize}px`;
            div.style.border = `${borderWidth}px solid #ddd`;
            container.appendChild(div);
        }
    }
    
    let allDivs = document.querySelectorAll("#container div");
    allDivs.forEach(function(div) {
        div.addEventListener("mouseenter", function() {
            div.style.backgroundColor = "black";
        });
        div.addEventListener("mouseleave", function() {
            div.style.backgroundColor = "black";
        });
    });
}