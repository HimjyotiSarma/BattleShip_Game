import GameBoard from "../components/gameboard"
interface Coord {
  x: number
  y: number
}
type board = GameBoard
type cellValue = string | number
function Cell(x: number, y: number, value: cellValue, board: board) {
  let CellSection = document.createElement("div")
  CellSection.className =
    value === 1
      ? "cell_hit"
      : value === -1
        ? "cell_miss"
        : typeof value === "string"
          ? "ship_area"
          : "empty_cell"

  CellSection.setAttribute("data-cell-value", value.toString())
  CellSection.setAttribute("data-x-value", x.toString())
  CellSection.setAttribute("data-y-value", y.toString())
  CellSection.addEventListener("click", () => {
    let coord: Coord = { x: x, y: y }
    board.receiveAttack(coord)
  })

  return CellSection
}

export default Cell
