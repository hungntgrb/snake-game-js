let snake = [
  { x: 11, y: 11 },
  { x: 12, y: 11 },
  { x: 13, y: 11 },
];

export let directions = { up: false, right: false, down: false, left: false };

function resetDirections() {
  directions = { up: false, right: false, down: false, left: false };
}

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && !directions.down) {
    resetDirections();
    directions.up = true;
  } else if (e.key === "ArrowDown" && !directions.up) {
    resetDirections();
    directions.down = true;
  } else if (e.key === "ArrowRight" && !directions.left) {
    resetDirections();
    directions.right = true;
  } else if (e.key === "ArrowLeft" && !directions.right) {
    resetDirections();
    directions.left = true;
  }
});

export function update() {
  updateHead();
  //   updateBody();
}

export function draw(gameBoard) {
  drawHead(gameBoard);
  //   for (let cell of snake) {
  //     let aDiv = createBlock(cell, "snake");
  //     gameBoard.appendChild(aDiv);
  //   }
}

function updateHead() {
  if (directions.up) {
    snake[0].y--;
  } else if (directions.down) {
    snake[0].y++;
  } else if (directions.right) {
    snake[0].x++;
  } else if (directions.left) {
    snake[0].x--;
  }
}

function updateBody() {
  for (let i = 1; i < snake.length; i++) {
    snake[i] = { ...snake[i - 1] };
  }
}

function drawHead(gameBoard) {
  const snakeHead = createBlock(snake[0], "snake");
  gameBoard.appendChild(snakeHead);
}

function drawBody(gameBoard) {
  return;
}

function createBlock(position, type) {
  let aDiv = document.createElement("div");
  aDiv.classList.add(type);
  aDiv.style.gridColumnStart = position.x;
  aDiv.style.gridRowStart = position.y;
  return aDiv;
}
