const grid = document.querySelector(".grid");
createGrid(16);

const cells = document.querySelectorAll(".cell");
selectBlack();

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", clearGrid);

const eraseBtn = document.querySelector(".erase-btn");
eraseBtn.addEventListener("click", erase);

const blackBtn = document.querySelector(".black-btn");
blackBtn.addEventListener("click", selectBlack);

const rainbowBtn = document.querySelector(".rainbow-btn");
rainbowBtn.addEventListener("click", selectRainbow);

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
  selectBlack();
}

function erase() {
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "white";
    });
  });
}

function selectBlack() {
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  });
}

function selectRainbow() {
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
  });
}
