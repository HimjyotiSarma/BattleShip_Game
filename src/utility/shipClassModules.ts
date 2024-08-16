import axisState from "../features/currentAxis"
import Player from "../components/Player"
type PlayerType = "Player" | "Computer"
interface Coord {
  x: number
  y: number
}
type ShipName = "carrier" | "battleship" | "destroyer" | "submarine" | "patrol"
type PlayerConstructor = Player
type Axis = "x" | "X" | "y" | "Y"

type cellValue = string | number

const shipNameArea: HTMLElement | null = document.querySelector(
  ".place_ship_text h1 b",
)

function getClassName(value: cellValue, playerType: PlayerType): string {
  if (value === 1) return "cell_hit"
  if (value === -1) return "cell_miss"
  console.log("Player Type: ", playerType)
  if (typeof value === "string" && playerType == "Player") {
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
  } else if (typeof value == "string" && playerType == "Computer") {
    return "ship_display_none"
  }
  return "empty_cell"
}

function updateCellAppearance(
  cell: HTMLElement,
  value: cellValue,
  playerType: PlayerType,
) {
  cell.className = "cell_common"
  cell.classList.add(getClassName(value, playerType))
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

function updateShipNameArea(
  shipName: ShipName,
  shipNameDiv: HTMLElement | null,
) {
  // const shipNameArea: HTMLElement | null = document.querySelector(
  //   ".place_ship_text h1 b",
  // )
  if (shipNameDiv) {
    shipNameDiv.textContent = shipName
  }
}

const handlePlacementOrAttack = (
  player: Player,
  currentCell: HTMLElement,
  playerType: PlayerType,
  currentShip: ShipName,
) => {
  //   let cellValue = currentCell.getAttribute("data-cell-value") as string | number

  // const shipNameString: string | undefined = allShipsArray?.shift()
  // let shipName: ShipName | undefined

  // if (shipNameString) {
  //   shipName = shipNameString as ShipName
  // }

  let x_axis_value = parseInt(
    currentCell.getAttribute("data-x-value") as string,
  )
  let y_axis_value = parseInt(
    currentCell.getAttribute("data-y-value") as string,
  )
  let cellValue = player.PlayerBoard.game[x_axis_value][y_axis_value]
  let coord: Coord = { x: x_axis_value, y: y_axis_value }
  try {
    if (player.isAllShipPlaced()) {
      console.log("All ships have been placed.")
      document.dispatchEvent(new CustomEvent("shipsPlaced"))
      updateCellAppearance(currentCell, cellValue, playerType)
      return
    } else {
      if (currentShip) {
        console.log(currentShip)
        updateShipNameArea(currentShip, shipNameArea) // Update the ship name area before placing the ship
        const shipPosition = player.placeShip(
          currentShip,
          coord,
          axisState.currentAxis as Axis,
        )
        if (shipPosition) {
          highlightShipPosition(shipPosition)
        }
      } else {
        console.log("All ships placed")
      }
    }
  } catch (error) {
    // if (shipNameString) {
    //   allShipsArray.unshift(shipNameString)
    // }
    currentCell.classList.add("ship_Pos_Err")
    setTimeout(function () {
      currentCell.classList.remove("ship_Pos_Err")
    }, 500)
    throw new Error(`Failed to place ship: "${currentShip}`)
  }
}

export {
  getClassName,
  updateCellAppearance,
  highlightShipPosition,
  updateShipNameArea,
  handlePlacementOrAttack,
}
