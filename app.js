const container = document.querySelector("#container");
let gridColumns = 16;
const sqrGridSize = Math.pow(gridColumns, 2)
generateGrid(sqrGridSize, container); //create div before the beginning of dom manipultions
const divs = document.querySelectorAll("#container div");
const color = "#000000"

function generateGrid(gridSize, gridContainer) {
    for(let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        gridContainer.appendChild(div);
    }
}

function setElementSize(gridColumns, elements = divs){
    const divSize = 99/gridColumns;
    for (let element of elements) {
        element.style.width = `${divSize}%`;
        element.style.height = `${divSize}vh`
    }
}
setElementSize(gridColumns);

divs.forEach((div) => div.addEventListener("mouseover", ()=> paintGrid(div, color)))
function paintGrid(div, color){
    div.style.backgroundColor = color;
}
