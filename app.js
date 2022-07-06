const container = document.querySelector("#container");
let gridColumns = 16;
const sqrGridSize = Math.pow(gridColumns, 2)
function generateGrid(gridSize, gridContainer) {
    for(let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        gridContainer.appendChild(div);
    }
}
generateGrid(sqrGridSize, container);