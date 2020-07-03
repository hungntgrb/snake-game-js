export function clearBoard(board) {
  while (board.firstElementChild) {
    board.lastElementChild.remove();
  }
}
