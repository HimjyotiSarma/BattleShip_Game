import RandomNumber from "../utility/randomNumber"
import GameBoard from "./gameboard"
import allShips from "../utility/allShipsAvailable"

interface Coord {
  x: number
  y: number
}

type ShipName = "carrier" | "battleship" | "destroyer" | "submarine" | "patrol"
type Axis = "X" | "x" | "Y" | "y"

class Player {
  PlayerBoard: GameBoard

  constructor(PlayerBoard: GameBoard = new GameBoard()) {
    this.PlayerBoard = PlayerBoard
  }

  attack(coord: Coord, enemyBoard: GameBoard) {
    enemyBoard.receiveAttack(coord)
  }

  isAllShipPlaced(): boolean {
    return this.PlayerBoard.isAllShipPlaced()
  }

  autoShipPlacement(allShipsArr: Array<ShipName> = [...allShips]) {
    if (allShipsArr.length === 0 || this.PlayerBoard.isAllShipPlaced()) {
      return
    }

    const maxAttempts = 1000 // Set a maximum number of attempts to prevent infinite recursion

    const placeRandomShip = (attempts = 0) => {
      if (attempts >= maxAttempts) {
        throw new Error("Max attempts reached for placing ship")
      }

      const firstIndex: number = RandomNumber(1, 8)
      const secondIndex: number = RandomNumber(1, 8)
      const Axis = ["X", "Y"]
      const randomAxis = Axis[Math.floor(Math.random() * Axis.length)]
      const currentShip = allShipsArr.length >= 1 ? allShipsArr.shift() : null

      if (currentShip) {
        try {
          this.PlayerBoard.placeShip(
            currentShip,
            {
              x: firstIndex,
              y: secondIndex,
            },
            randomAxis as Axis,
          )
        } catch (error) {
          allShipsArr.unshift(currentShip) // Re-add the ship to the array if placement fails
          placeRandomShip(attempts + 1)
        }
      }
    }

    placeRandomShip()
    this.autoShipPlacement(allShipsArr)
  }

  placeShip(shipName: ShipName, coord: Coord, axis: Axis) {
    if (!this.PlayerBoard.isAllShipPlaced()) {
      return this.PlayerBoard.placeShip(shipName, coord, axis)
    } else {
      console.log("All ships have been placed.")
      document.dispatchEvent(new CustomEvent("shipsPlaced"))
      throw new Error("All Ships are Placed. Please move to the game scenario")
    }
  }

  get gameBox() {
    return this.PlayerBoard.gameBox
  }

  isGameStarted(): boolean {
    return this.PlayerBoard.isAllShipPlaced()
  }

  isGameBoxEmpty(): boolean {
    return this.PlayerBoard.Ships.size < 1
  }

  isShipPlaced(shipName: ShipName): boolean {
    return this.PlayerBoard.isShipPlaced(shipName)
  }
}

export default Player
