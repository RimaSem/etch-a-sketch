const grid = document.querySelector(".grid");
createGrid(16);

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
  });
});

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", clearGrid);

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      row.appendChild(cell);
    }

    grid.appendChild(row);
  }
}

function clearGrid() {
  cells.forEach((cell) => (cell.style.backgroundColor = "white"));
}
