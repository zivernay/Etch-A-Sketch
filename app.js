const container = document.querySelector("#container");
let gridSize = {"rows": 16, "columns": 16};
generateGrid(gridSize, container); //create div before the beginning of dom manipultions
const divs = document.querySelectorAll("#container div");

function setContainerSize(){
  const width = window.innerWidth;
  const height = window.innerHeight;
  if (width > height){
    container.style.width = `${height}px`;
    container.style.height = `${height}px`;
    console.log("width > height")
  }else if (width < height) {
    container.style.width = `${width}px`; 
    container.style.height = `${width}px`; 
    console.log("width < height")
  }else {
    console.log("width = height");
    container.style.width = `${width}px`; 
    container.style.height = `${height}px`; 
  }
};
setContainerSize();

function generateGrid(size, container) {
    const area = size.rows * size.columns;

    //calculate element size
    const divWidth = 100/size.columns;
    const divHeight = 100/size.rows;

    for(let i = 0; i < area; i++) {
        const div = document.createElement("div");

        //set element size
        div.style.width = `${divWidth}%`;
        div.style.height = `${divHeight}%`;

        //add paint effect on over
        div.addEventListener("mouseover", pen);
        container.appendChild(div);
    }
}
function pen() {
    const backgroundColor = this.style.backgroundColor;
    if (backgroundColor == ""){
        paintGrid(this, color="#000")
    }
    else {
        const string = backgroundColor.match(/\(.*\)/)[0].slice(1, -1);
        const rgb = string.split(",");
        const r = rgb[0];
        const g = rgb[1];
        const b = rgb[2];
        //get the value of the color and 
        const newShade = `rgb(${r*0.85}, ${g*0.85}, ${b*0.85})`;
        this.style.backgroundColor = newShade;
    }
}

function paintGrid(div, color){
    if (!(color == "#000000")){
        const hue = Math.random() * 360;
        const per = Math.random() *100;
        color = `hsl(${hue}, ${per}%, 50%)`
    }
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