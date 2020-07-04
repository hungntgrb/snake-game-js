import { GRID_SIZE } from "./board.js";
import { equal, food } from "./food.js";
export let snake = [{ x: 11, y: 11 }];
// const GROWTH = 1;
export let SPEED = 14;
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
  if (!isDead(snake)) {
    updateBody();
    updateHead();
    if (equal(snake[0], food)) {
      expandSnake();
    }
  }
}

export function draw(gameBoard) {
  drawBody(gameBoard);
  drawHead(gameBoard);
}
// ====== UPDATE ======
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
  for (let i = snake.length - 1; i > 0; i--) {
    snake[i] = { ...snake[i - 1] };
  }
}
// ====== DRAWING ======
function drawHead(gameBoard) {
  const snakeHead = createBlock(snake[0], "Shead");
  gameBoard.appendChild(snakeHead);
}

function drawBody(gameBoard) {
  for (let i = snake.length - 1; i > 0; i--) {
    const piece = createBlock(snake[i], "snake");
    gameBoard.appendChild(piece);
  }
  return;
}
// ====== MISC ======
function createBlock(position, type) {
  let aDiv = document.createElement("div");
  aDiv.classList.add(type);
  aDiv.style.gridColumnStart = position.x;
  aDiv.style.gridRowStart = position.y;
  return aDiv;
}

export function isDead(Snake) {
  const head = Snake[0];
  return (
    head.x < 1 ||
    head.x > GRID_SIZE ||
    head.y < 1 ||
    head.y > GRID_SIZE ||
    isSelfCrash(Snake)
  );
}

function expandSnake() {
  let tail = snake[snake.length - 1];
  let newTail;
  if (directions.up) {
    newTail = { ...tail, y: tail.y + 1 };
  } else if (directions.down) {
    newTail = { ...tail, y: tail.y - 1 };
  } else if (directions.right) {
    newTail = { ...tail, x: tail.x - 1 };
  } else if (directions.left) {
    newTail = { ...tail, x: tail.x + 1 };
  }
  snake.push(newTail);
}

function isSelfCrash(snake_) {
  let body = snake_.slice(1);
  let head = snake_[0];
  return body.some((elem) => equal(elem, head));
}
