import Player from "../components/Player"
import allShips from "../utility/allShipsAvailable"
import axisState from "../features/currentAxis"
import {
  getClassName,
  updateCellAppearance,
  highlightShipPosition,
  updateShipNameArea,
  handlePlacementOrAttack,
} from "../utility/shipClassModules"

type PlayerType = "Player" | "Computer"
interface Coord {
  x: number
  y: number
}
type PlayerConstructor = Player
type Axis = "x" | "X" | "y" | "Y"

type cellValue = string | number

let allShipsArr = [...allShips]

function Cell(
  x: number,
  y: number,
  value: cellValue,
  player: PlayerConstructor,
  playerType: PlayerType,
) {
  const CellSection = document.createElement("div")
  CellSection.classList.add("cell_common", getClassName(value, playerType))

  CellSection.setAttribute("data-cell-value", value.toString())
  CellSection.setAttribute("data-x-value", x.toString())
  CellSection.setAttribute("data-y-value", y.toString())

  CellSection.addEventListener("mouseover", (event) => {
    ;(event.target as HTMLElement).style.cursor = "pointer"
  })

  // let shipName: string = allShipsArr?.shift() || ""

  // Correctly pass the function reference
  // CellSection.addEventListener("click", handlePlacementOrAttack(player,CellSection,playerType,))

  return CellSection
}

// function getClassName(value: cellValue, playerType: PlayerType): string {
//   if (value === 1) return "cell_hit"
//   if (value === -1) return "cell_miss"
//   console.log("Player Type: ", playerType)
//   if (typeof value === "string" && playerType == "Player") {
//     switch (value) {
//       case "cr":
//         return "carrier"
//       case "bs":
//         return "battleship"
//       case "dt":
//         return "destroyer"
//       case "sb":
//         return "submarine"
//       case "pt":
//         return "patrol"
//       default:
//         return "ship_area"
//     }
//   } else if (typeof value == "string" && playerType == "Computer") {
//     return "ship_display_none"
//   }
//   return "empty_cell"
// }

// function updateCellAppearance(
//   cell: HTMLElement,
//   value: cellValue,
//   playerType: PlayerType,
// ) {
//   cell.className = "cell_common"
//   cell.classList.add(getClassName(value, playerType))
//   cell.setAttribute("data-cell-value", value.toString())
// }

// function highlightShipPosition(shipPosition: Coord[]) {
//   shipPosition.forEach((pos) => {
//     const shipCell = document.querySelector(
//       `[data-x-value="${pos.x}"][data-y-value="${pos.y}"]`,
//     ) as HTMLElement
//     shipCell?.classList.add("ship_area")
//   })
// }

// function updateShipNameArea(shipName: string) {
//   const shipNameArea: HTMLElement | null = document.querySelector(
//     ".place_ship_text h1 b",
//   )
//   if (shipNameArea) {
//     shipNameArea.textContent = shipName
//   }
// }

export default Cell
