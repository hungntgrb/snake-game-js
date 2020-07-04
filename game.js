let lastTime = 0;
import { SPEED } from "./snake.js";
import { gameScore } from "./food.js";
import {
  update as updateSnake,
  draw as drawSnake,
  snake,
  isDead,
} from "./snake.js";
import { update as updateFood, draw as drawFood, equal, food } from "./food.js";
import { clearBoard } from "./board.js";
const gameBoard = document.getElementById("game-board");
let loseText = document.getElementById("lose-text");
let scoreBoard = document.getElementById("bang-diem");
let diemSection = document.getElementById("diem");

let gamePause = false;

window.addEventListener("keypress", (e) => {
  if (e.key === " ") {
    gamePause = !gamePause;
  }
});

function main(currentTime) {
  let interval = (currentTime - lastTime) / 1000;
  window.requestAnimationFrame(main);
  if (interval < 1 / SPEED) {
    return;
  } else {
    lastTime = currentTime;

    if (!gamePause) {
      update();
      draw();
    }
  }
}

window.requestAnimationFrame(main);

function update() {
  if (!isDead(snake)) {
    updateSnake();
    updateFood();

    diemSection.textContent = gameScore;
  } else {
    loseText.style.visibility = "visible";
  }
}

function draw() {
  clearBoard(gameBoard);
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
