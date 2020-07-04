export let food = { x: 3, y: 3 };
import { snake } from "./snake.js";
import { GRID_SIZE } from "./board.js";
export let gameScore = 0;

export function update() {
  if (equal(food, snake[0])) {
    gameScore++;
    do {
      randomFood();
    } while (foodOverlap());
  }
}

export function draw(gameBoard) {
  const foodDiv = document.createElement("div");
  foodDiv.classList.add("food");
  foodDiv.style.gridColumnStart = food.x;
  foodDiv.style.gridRowStart = food.y;
  gameBoard.appendChild(foodDiv);
}

export function equal(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function foodOverlap() {
  return snake.some((elem) => equal(elem, food));
}

function randomFood() {
  food = {
    x: Math.floor(Math.random() * GRID_SIZE + 1),
    y: Math.floor(Math.random() * GRID_SIZE + 1),
  };
}
