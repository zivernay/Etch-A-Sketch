const container = document.querySelector("#container");
let gridLength = 16;

function generateGrid(gridLength, gridContainer) {
    for(let i = 0; i < gridLength; i++) {
        const div = document.createElement("div");
        gridContainer.appendChild(div);
    }
}
generateGrid(gridLength, container);