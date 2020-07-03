let food = { x: 2, y: 2 };

export function update() {}

export function draw(gameBoard) {
  const foodDiv = document.createElement("div");
  foodDiv.classList.add("food");
  foodDiv.style.gridColumnStart = food.x;
  foodDiv.style.gridRowStart = food.y;
  gameBoard.appendChild(foodDiv);
}
