// Select modal elements
let modal = document.getElementById("modal");
let submitButton = document.getElementById("submit");
let createGridButton = document.getElementById("createGridButton");

// Show modal when the page loads
createGridButton.addEventListener("click", function() {
    modal.style.display = "flex";
    modal.style.justifyContent  = "center"
    modal.style.alignItems = "center"
});

// Handle submit click event
submitButton.addEventListener("click", function() {
    container.style.display = "flex";
    actionButtonsContainer.style.display = "flex";
    
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
    }}
);

const generateRGBValue = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
};

function createGrid(height, width) {
    const container = document.getElementById("container");
    container.innerHTML = "";
    
    // Set fixed container size
    const containerWidth = 600;
    const containerHeight = 600;
    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerHeight}px`;
    
    // Calculate cell size including borders
    const borderWidth = 1;
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

    // Pen tool function
    let allDivs = document.querySelectorAll("#container div");
    allDivs.forEach(function(div) {
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = "black";
        });
    });

    erase.addEventListener("click", function() {
        allDivs.forEach(function(div) {
            div.style.backgroundColor = "white"; 
        });
    });

    // RandomiseColor function
    let isColorRandomised = false; // Initialize state
    RandomiseColor.addEventListener("click", function() {
        isColorRandomised = !isColorRandomised;
        allDivs.forEach(function(div) {
            div.addEventListener("mouseover", function() {
                if (isColorRandomised) {
                    div.style.backgroundColor = generateRGBValue(); 
                } else {
                    div.style.backgroundColor = "black"
                }
            });
        });
    });

    // Grid visibility function
    let isBorderVisible = true; // Initialize border state

    removeGrid.addEventListener("click", function() {
      allDivs.forEach(function(div) {
        if (isBorderVisible) {
          div.style.borderWidth = '0';
          div.style.borderStyle = 'none';
        } else {
          div.style.borderWidth = '1px';
          div.style.borderStyle = 'solid';
        }
      });
      isBorderVisible = !isBorderVisible; // Toggle the border state for the next click
    });
}
