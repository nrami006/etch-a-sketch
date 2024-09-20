let grid_columns = 16;
let grid_rows = 16;
const gridContainer = document.querySelector("#grid-container");

function removeCurrentGrid() {
    // Remove all children (grid cells) from gridContainer
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

// Uses the current grid_columns and grid_rows variables to fill the grid with the appropriate number of cells.
function createNewGrid() {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridCell.style.width = `${gridContainer.offsetWidth / grid_columns}px`;
    gridCell.style.height = `${gridContainer.offsetHeight / grid_rows}px`;
    for (let i = 0; i < grid_columns; ++i) {
        for (let j = 0; j < grid_rows; ++j) {
            let newCell = gridCell.cloneNode(true);
            newCell.addEventListener("mousemove", (e) => {
                if (!e.shiftKey) {
                    e.target.style.backgroundColor = "black";
                }
            })
            gridContainer.appendChild(newCell);
        }
    }
}

// Sets an event listener on the button to prompt for a new grid size from the user
function setGridSizeButtonEventListener() {
    const button = document.querySelector("#grid-size-button");
    button.addEventListener("click", (e) => {
        // Prompts for a new grid size, and sets the grid_columns and grid_rows variables accordingly.
        let newDimension = prompt("Enter a new X/Y dimension (Max 100)");
        if (newDimension > 100 || newDimension < 1) {
            alert("Invalid number. Must be from 1-100.");
            return;
        }
        grid_columns = newDimension;
        grid_rows = newDimension;
        removeCurrentGrid();
        createNewGrid();
    })
}

setGridSizeButtonEventListener();
createNewGrid();