import GameBoard from "../components/gameboard"

interface Coord {
  x: number
  y: number
}

type cellValue = string | number

function Cell(x: number, y: number, value: cellValue, board: GameBoard) {
  let CellSection = document.createElement("div")
  CellSection.classList.add("cell_common")
  CellSection.classList.add(
    value === 1
      ? "cell_hit"
      : value === -1
        ? "cell_miss"
        : typeof value === "string"
          ? "ship_area"
          : "empty_cell",
  )

  CellSection.setAttribute("data-cell-value", value.toString())
  CellSection.setAttribute("data-x-value", x.toString())
  CellSection.setAttribute("data-y-value", y.toString())
  CellSection.addEventListener("mouseover", (event) => {
    let target = event.target as HTMLElement
    target.style.cursor = "pointer"
  })

  CellSection.addEventListener("click", () => {
    let coord: Coord = { x: x, y: y }
    board.receiveAttack(coord)
    console.log(`Cell clicked at X_Coord ${coord.x} and Y_Coord ${coord.y}`)
    console.log(board.gameBox)
    // Update cell appearance after the attack
    const newValue = board.game[x][y]
    CellSection.className = "cell_common" // Reset class list
    CellSection.classList.add(
      newValue === 1
        ? "cell_hit"
        : newValue === -1
          ? "cell_miss"
          : typeof newValue === "string"
            ? "ship_area"
            : "empty_cell",
    )
    CellSection.setAttribute("data-cell-value", newValue.toString())
  })

  return CellSection
}

export default Cell
