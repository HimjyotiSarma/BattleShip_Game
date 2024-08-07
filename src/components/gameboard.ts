import getShipLength from "../features/getShipLength"
import Ship from "./ship"
import ShipPositionName from "../features/ShipPositionName"

interface Coordinate {
  x: number
  y: number
}

class GameBoard {
  game: Array<Array<number | string>>
  shankedShips: Array<Ship>
  Ships: Map<string, Ship>

  constructor(game = Array.from({ length: 10 }, () => Array(10).fill(0))) {
    this.game = game
    this.shankedShips = []
    this.Ships = new Map()
  }

  placeShip(
    shipName: string,
    coord: Coordinate,
    axis: "X" | "x" | "Y" | "y",
  ): Coordinate[] {
    const shipLength: number = getShipLength(shipName.toLowerCase())
    const shipPosition: Coordinate[] = []
    const shipId = ShipPositionName(shipName.toLowerCase())

    let startCoord: Coordinate
    let endCoord: Coordinate

    if (axis === "X" || axis === "x") {
      startCoord = {
        x: coord.x,
        y: coord.y - Math.floor(shipLength / 2),
      }
      endCoord = {
        x: coord.x,
        y: coord.y + Math.ceil(shipLength / 2) - 1,
      }

      if (startCoord.y < 0 || endCoord.y > 9) {
        throw new Error("The Coordinate Placement is not possible")
      }

      for (let i = startCoord.y; i <= endCoord.y; i++) {
        if (typeof this.game[coord.x][i] === "string") {
          throw new Error(
            "The Coordinate Placement overlaps with an existing ship",
          )
        }
        shipPosition.push({ x: coord.x, y: i })
      }

      for (let i = startCoord.y; i <= endCoord.y; i++) {
        this.game[coord.x][i] = shipId
      }
    } else {
      startCoord = {
        x: coord.x - Math.floor(shipLength / 2),
        y: coord.y,
      }
      endCoord = {
        x: coord.x + Math.ceil(shipLength / 2) - 1,
        y: coord.y,
      }

      if (startCoord.x < 0 || endCoord.x > 9) {
        throw new Error("The Coordinate Placement is not possible")
      }

      for (let i = startCoord.x; i <= endCoord.x; i++) {
        if (typeof this.game[i][coord.y] === "string") {
          throw new Error(
            "The Coordinate Placement overlaps with an existing ship",
          )
        }
        shipPosition.push({ x: i, y: coord.y })
      }

      for (let i = startCoord.x; i <= endCoord.x; i++) {
        this.game[i][coord.y] = shipId
      }
    }

    const newShip = new Ship(shipLength as 5 | 4 | 3 | 2)
    this.Ships.set(shipId, newShip)

    return shipPosition
  }

  receiveAttack(coord: Coordinate) {
    console.log("Received Attack in Cell")
    const gridPosition = this.game[coord.x][coord.y]

    if (typeof gridPosition === "string" && this.Ships.has(gridPosition)) {
      const attackedShip = this.Ships.get(gridPosition)
      if (attackedShip) {
        attackedShip.hit()
        this.game[coord.x][coord.y] = 1
        if (attackedShip.isSunk) {
          this.shankedShips.push(attackedShip)
        }
        return "hit"
      }
    } else if (gridPosition == 1) {
      return
    } else {
      this.game[coord.x][coord.y] = -1 // Mark as missed
      return "miss"
    }
  }

  get SunkedShips(): Array<Ship> {
    return this.shankedShips
  }

  get gameBox() {
    return this.game
  }

  isLost() {
    return this.shankedShips.length >= 5
  }

  isAllShipPlaced(): boolean {
    return this.Ships.size == 5
  }
}

export default GameBoard
