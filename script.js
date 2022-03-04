// Query Selectors
const gridContainer = document.querySelector(".grid");

//Event Listeners
window.addEventListener("load", setDefaultGrid);

// Functions
function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList = "grid-element";
    gridContainer.appendChild(gridElement);
  }
}

function setDefaultGrid() {
  setGridSize(16);
  fillGrid(16);
}
