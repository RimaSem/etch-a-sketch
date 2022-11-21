const grid = document.querySelector(".grid");
const slider = document.querySelector(".slider");
const colorPicker = document.querySelector("#picker");
const clearBtn = document.querySelector(".clear-btn");
const eraseBtn = document.querySelector(".erase-btn");
const blackBtn = document.querySelector(".black-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");

createGrid(58);

clearBtn.addEventListener("click", clearGrid);
eraseBtn.addEventListener("click", erase);
blackBtn.addEventListener("click", selectBlack);
rainbowBtn.addEventListener("click", selectRainbow);
slider.addEventListener("input", selectRange);
colorPicker.addEventListener("input", pickColor);

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
  //clearGrid();
  //selectRainbow();
  //selectBlack();
}

function clearGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => (cell.style.backgroundColor = "white"));
  erase();
  //selectBlack();
}

function erase() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "white";
    });
  });
}

function selectBlack() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  });
}

function selectRainbow() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
  });
}

function selectRange() {
  const sliderRange = document.querySelectorAll(".slider-range");
  sliderRange.forEach((s) => (s.textContent = slider.value));
  deleteCanvas();
  createGrid(+slider.value);
}

function pickColor() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = `${colorPicker.value}`;
    });
  });
}

function deleteCanvas() {
  const rows = document.querySelectorAll(".row");
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => cell.remove());
  rows.forEach((row) => row.remove());
}
