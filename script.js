

const cdiv = document.querySelector("#container")
const gridSize = 16;
const cellSize = 40;

function createGrid(size){
    for(let i = 0; i < size * size; i++){
      const cell = document.createElement("div") 
      cell.style.width = `${cellSize}px`
      cell.style.height = `${cellSize}px`
      cell.style.border = "2px solid"
    cdiv.appendChild(cell)
    }
}
    createGrid(gridSize)
