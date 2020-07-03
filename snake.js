let snakeBody = [
  { x: 11, y: 11 },
  { x: 12, y: 11 },
  { x: 13, y: 11 },
];

export function update() {}

export function draw(gameBoard) {
  for (let cell of snakeBody) {
    let aDiv = document.createElement("div");
    aDiv.classList.add("snake");
    aDiv.style.gridColumnStart = cell.x;
    aDiv.style.gridRowStart = cell.y;
    gameBoard.appendChild(aDiv);
  }
}
