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
    const { startCoord, endCoord } = this.calculateCoords(
      coord,
      getShipLength(shipName.toLowerCase()),
      axis,
    )

    this.validatePlacement(startCoord, endCoord)
    const shipLength: number = getShipLength(shipName.toLowerCase())
    const shipPosition = this.generateShipPosition(startCoord, endCoord)
    const shipId = ShipPositionName(shipName.toLowerCase())

    shipPosition.forEach(({ x, y }) => {
      this.game[x][y] = shipId
    })

    this.Ships.set(shipId, new Ship(shipLength as 5 | 4 | 3 | 2))

    return shipPosition
  }

  getCurrentShipPos(
    shipName: string,
    coord: Coordinate,
    axis: "X" | "x" | "Y" | "y",
  ): Coordinate[] {
    const { startCoord, endCoord } = this.calculateCoords(
      coord,
      getShipLength(shipName.toLowerCase()),
      axis,
    )

    this.validatePlacement(startCoord, endCoord)

    return this.generateShipPosition(startCoord, endCoord)
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
    } else if (gridPosition !== 1) {
      this.game[coord.x][coord.y] = -1 // Mark as missed
      return "miss"
    }
  }

  calculateCoords(
    coord: Coordinate,
    shipLength: number,
    axis: "X" | "x" | "Y" | "y",
  ) {
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
    } else {
      startCoord = {
        x: coord.x - Math.floor(shipLength / 2),
        y: coord.y,
      }
      endCoord = {
        x: coord.x + Math.ceil(shipLength / 2) - 1,
        y: coord.y,
      }
    }

    return { startCoord, endCoord }
  }

  validatePlacement(startCoord: Coordinate, endCoord: Coordinate) {
    if (
      startCoord.x < 0 ||
      startCoord.y < 0 ||
      endCoord.x > 9 ||
      endCoord.y > 9
    ) {
      throw new Error("The Coordinate Placement is not possible")
    }

    for (let i = startCoord.x; i <= endCoord.x; i++) {
      for (let j = startCoord.y; j <= endCoord.y; j++) {
        if (typeof this.game[i][j] === "string") {
          throw new Error(
            "The Coordinate Placement overlaps with an existing ship",
          )
        }
      }
    }
  }

  generateShipPosition(
    startCoord: Coordinate,
    endCoord: Coordinate,
  ): Coordinate[] {
    const shipPosition: Coordinate[] = []

    for (let i = startCoord.x; i <= endCoord.x; i++) {
      for (let j = startCoord.y; j <= endCoord.y; j++) {
        shipPosition.push({ x: i, y: j })
      }
    }

    return shipPosition
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
    return this.Ships.size === 5
  }
  isShipPlaced(shipName: string) {
    const shipId = ShipPositionName(shipName.toLowerCase()) // Generate the key used in the Ships map
    return this.Ships.has(shipId)
  }
}

export default GameBoard
