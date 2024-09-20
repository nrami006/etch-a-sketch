const GRID_COLUMNS = 16;
const GRID_ROWS = 16;
const gridContainer = document.querySelector("#grid-container");
const gridCell = document.createElement("div");
gridCell.classList.add("grid-cell");
gridCell.style.width = `${gridContainer.offsetWidth / GRID_COLUMNS}px`
gridCell.style.height = `${gridContainer.offsetHeight / GRID_COLUMNS}px`

for (let i = 0; i < GRID_COLUMNS; ++i) {
    for (let j = 0; j < GRID_ROWS; ++j) {
        let newCell = gridCell.cloneNode(true);
        gridContainer.appendChild(newCell);
    }
}