// Query Selectors
const gridContainer = document.querySelector(".grid");
const sizeButton = document.querySelector(".size-button");

//Event Listeners
window.addEventListener("load", setDefaultGrid);
sizeButton.addEventListener("click", changeSize);

// Functions
function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList = "grid-element";
    gridElement.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridElement);
  }
}

function setDefaultGrid() {
  setGridSize(16);
  fillGrid(16);
}

function changeSize() {
  let newSize = prompt("Please enter a new size between 1 and 80");

  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize < 1 || newSize > 80 || Number.isNaN(newSize)) {
      alert("The size must be between 1 and 80");
      changeSize();
    } else {
      clearGrid();
      setGridSize(newSize);
      fillGrid(newSize);
    }
  }
}

function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((e) => {
    gridContainer.removeChild(e);
  });
}

function changeColor(e) {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);

  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}
