const container = document.querySelector("#container");
let gridSize = {"rows": 16, "columns": 16};
generateGrid(gridSize, container); //create div before the beginning of dom manipultions
const divs = document.querySelectorAll("#container div");
const color = "#000000"

function generateGrid(size, container) {
    const area = size.rows * size.columns;

    //calculate element size
    const divWidth = 100/size.columns;
    const divHeight = 100/size.rows;

    for(let i = 0; i < area; i++) {
        const div = document.createElement("div");

        //set element size
        div.style.width = `${divWidth}%`;
        div.style.height = `${divHeight}vh`;

        //add paint effect on over
        div.addEventListener("mouseover", ()=> paintGrid(div, color));
        container.appendChild(div);
    }
}

function paintGrid(div, color){
    div.style.backgroundColor = color;
}

const promptBtn = document.querySelector("#gridSizePrompt");
promptBtn.addEventListener("click", generateNewGrid);
function generateNewGrid(){
    getGridSize();
    container.innerHTML = "";
    generateGrid(gridSize, container);
}
function getGridSize(){
    let cols = parseInt(prompt("Enter number of columns:"));
    columns = (cols > 100)? 100: cols;
    gridSize.columns = columns;
    gridSize.rows = columns
}