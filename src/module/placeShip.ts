import Player from "../components/Player"
import allShips from "../utility/allShipsAvailable"
import {
  getClassName,
  updateCellAppearance,
  highlightShipPosition,
  updateShipNameArea,
  handlePlacementOrAttack,
} from "../utility/shipClassModules"

type PlayerType = "Player" | "Computer"
type PlayerConstructor = Player
type Axis = "x" | "X" | "y" | "Y"
type ShipName = "carrier" | "battleship" | "destroyer" | "submarine" | "patrol"

function PlaceShipInBox(player = new Player()) {
  let allShipsArr: Array<ShipName> = [...allShips] // Copy the array to avoid mutation
  const PlayerConstructor: PlayerConstructor = player

  let shipNameArea: HTMLElement | null = document.querySelector(
    ".place_ship_text h1 b",
  )
  let playerBoard: HTMLElement | null = document.querySelector(
    '[data-player-type="Player"]',
  )
  let allCells: NodeListOf<Element> | undefined
  let currentShip: ShipName

  if (playerBoard) {
    allCells = playerBoard.querySelectorAll(".cell_common")
  }

  const placeNextShip = () => {
    if (allShipsArr.length === 0) {
      console.log("All ships have been placed.")
      allCells?.forEach((cell) => {
        cell.replaceWith(cell.cloneNode(true))
      })
      const gameStatus = document.querySelector(".gameStatus h3") as HTMLElement
      gameStatus.textContent = "Game has Started!!!"
      document.dispatchEvent(new CustomEvent("shipsPlaced"))
      return
    }
    if (allShipsArr.length > 0) {
      currentShip = allShipsArr.shift() as ShipName
      console.log("Current Ship Now: ", currentShip)
    }
    // Peek at the first ship
    console.log("Placing ship:", currentShip)
    if (shipNameArea) {
      shipNameArea.textContent = currentShip
    }

    if (allCells) {
      allCells.forEach((cell) => {
        const clonedCell = cell.cloneNode(true) as HTMLElement
        cell.parentNode?.replaceChild(clonedCell, cell)

        clonedCell.addEventListener("click", () => {
          try {
            console.log("CURRENT SHIP : ", currentShip)
            if (!player.isShipPlaced(currentShip)) {
              handlePlacementOrAttack(player, clonedCell, "Player", currentShip)
            }
            console.log(
              "Is current ship placed:",
              player.isShipPlaced(currentShip),
            )
            if (player.isShipPlaced(currentShip)) {
              console.log("Remaining ships:", allShipsArr)
              placeNextShip() // Proceed to the next ship
            }
          } catch (error) {
            if (
              !allShipsArr.includes(currentShip) &&
              !player.isShipPlaced(currentShip)
            ) {
              allShipsArr.unshift(currentShip) // Put the ship back if placement fails
            }
            console.error("Error placing ship:", error)
          }
        })
      })
    } else {
      console.error("Player board cells not found.")
    }
  }

  placeNextShip()
}

export default PlaceShipInBox
