let lastTime = 0;
const SPEED = 2;
import { update as updateSnake, draw as drawSnake } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { clearBoard } from "./board.js";
const gameBoard = document.getElementById("game-board");
const pauseText = document.querySelector(".pause");
let gameOver = false;

window.addEventListener("keypress", (e) => {
  if (e.key === " ") {
    gameOver = !gameOver;
  }
});

function main(currentTime) {
  let interval = (currentTime - lastTime) / 1000;
  window.requestAnimationFrame(main);
  if (interval < 1 / SPEED) {
    return;
  } else {
    lastTime = currentTime;

    if (!gameOver) {
      update();
      draw();
    }
  }
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
}

function draw() {
  clearBoard(gameBoard);
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
