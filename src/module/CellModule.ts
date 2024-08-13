import Player from "../components/Player"
import allShips from "../utility/allShipsAvailable"
import axisState from "../features/currentAxis"

interface Coord {
  x: number
  y: number
}
type PlayerConstructor = Player
type Axis = "x" | "X" | "y" | "Y"

type cellValue = string | number

function Cell(
  x: number,
  y: number,
  value: cellValue,
  player: PlayerConstructor,
) {
  const CellSection = document.createElement("div")
  CellSection.classList.add("cell_common", getClassName(value))

  CellSection.setAttribute("data-cell-value", value.toString())
  CellSection.setAttribute("data-x-value", x.toString())
  CellSection.setAttribute("data-y-value", y.toString())

  CellSection.addEventListener("mouseover", (event) => {
    ;(event.target as HTMLElement).style.cursor = "pointer"
  })

  const handlePlacementOrAttack = () => {
    const coord: Coord = { x, y }
    let shipName: string = allShips?.shift() || ""
    console.log(allShips)
    try {
      if (player.PlayerBoard.isAllShipPlaced()) {
        player.PlayerBoard.receiveAttack(coord)
        updateCellAppearance(CellSection, player.PlayerBoard.game[x][y])
      } else {
        if (shipName) {
          updateShipNameArea(shipName) // Update the ship name area before placing the ship
          const shipPosition = player.placeShip(
            shipName,
            coord,
            axisState.currentAxis as Axis,
          )
          highlightShipPosition(shipPosition)
        } else {
          console.log("All ships placed")
        }
      }
    } catch (error) {
      allShips.unshift(shipName)
      console.error("Failed to place ship:", error)
      CellSection.classList.add("ship_Pos_Err")
    }
  }

  CellSection.addEventListener("click", handlePlacementOrAttack)

  return CellSection
}

function getClassName(value: cellValue): string {
  if (value === 1) return "cell_hit"
  if (value === -1) return "cell_miss"
  if (typeof value === "string") {
    switch (value) {
      case "cr":
        return "carrier"
      case "bs":
        return "battleship"
      case "dt":
        return "destroyer"
      case "sb":
        return "submarine"
      case "pt":
        return "patrol"
      default:
        return "ship_area"
    }
  }
  return "empty_cell"
}

function updateCellAppearance(cell: HTMLElement, value: cellValue) {
  cell.className = "cell_common"
  cell.classList.add(getClassName(value))
  cell.setAttribute("data-cell-value", value.toString())
}

function highlightShipPosition(shipPosition: Coord[]) {
  shipPosition.forEach((pos) => {
    const shipCell = document.querySelector(
      `[data-x-value="${pos.x}"][data-y-value="${pos.y}"]`,
    ) as HTMLElement
    shipCell?.classList.add("ship_area")
  })
}

function updateShipNameArea(shipName: string) {
  const shipNameArea: HTMLElement | null = document.querySelector(
    ".place_ship_text h1 b",
  )
  if (shipNameArea) {
    shipNameArea.textContent = shipName
  }
}

export default Cell
