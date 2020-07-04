export const GRID_SIZE = 21;

export function clearBoard(board) {
  while (board.firstElementChild) {
    board.lastElementChild.remove();
  }
}
