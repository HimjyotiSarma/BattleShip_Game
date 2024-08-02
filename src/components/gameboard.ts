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

  constructor() {
    this.game = Array.from({ length: 10 }, () => Array(10).fill(0))
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

    if (axis === "X" || axis === "x") {
      const startCoord: Coordinate = {
        x: coord.x,
        y: coord.y - Math.floor(shipLength / 2),
      }
      const endCoord: Coordinate = {
        x: coord.x,
        y: coord.y + Math.floor(shipLength / 2),
      }

      if (startCoord.y < 0 || endCoord.y > 9) {
        throw new Error("The Coordinate Placement is not possible")
      }

      for (let i = startCoord.y; i <= endCoord.y; i++) {
        if (typeof this.game[startCoord.x][i] === "string") {
          throw new Error(
            "The Coordinate Placement overlaps with an existing ship",
          )
        }
        shipPosition.push({ x: startCoord.x, y: i })
        this.game[startCoord.x][i] = shipId
      }
    } else {
      const startCoord: Coordinate = {
        x: coord.x - Math.floor(shipLength / 2),
        y: coord.y,
      }
      const endCoord: Coordinate = {
        x: coord.x + Math.floor(shipLength / 2),
        y: coord.y,
      }

      if (startCoord.x < 0 || endCoord.x > 9) {
        throw new Error("The Coordinate Placement is not possible")
      }

      for (let i = startCoord.x; i <= endCoord.x; i++) {
        if (typeof this.game[i][startCoord.y] === "string") {
          throw new Error(
            "The Coordinate Placement overlaps with an existing ship",
          )
        }
        shipPosition.push({ x: i, y: startCoord.y })
        this.game[i][startCoord.y] = shipId
      }
    }

    const newShip = new Ship(shipLength as 5 | 4 | 3 | 2)
    if (this.Ships.size < 5) {
      this.Ships.set(shipId, newShip)
    } else {
      throw new Error("Ship Placement Error. Check Implementation")
    }

    return shipPosition
  }

  receiveAttack(coord: Coordinate) {
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
    } else {
      this.game[coord.x][coord.y] = -1 // Mark as missed
      return "miss"
    }
  }
}

export default GameBoard
