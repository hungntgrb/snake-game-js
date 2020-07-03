let lastTime = 0;
const SPEED = 20;
import { update as updateSnake, draw as drawSnake } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  let interval = (currentTime - lastTime) / 1000;
  window.requestAnimationFrame(main);
  if (interval < 1 / SPEED) {
    return;
  } else {
    lastTime = currentTime;

    update();
    draw();
  }
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
}

function draw() {
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
