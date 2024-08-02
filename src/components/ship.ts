class Ship {
  shipLength: 5 | 4 | 3 | 2
  shipHitTimes: number
  isSunk: boolean

  constructor(shipLength: 5 | 4 | 3 | 2) {
    this.shipLength = shipLength
    this.shipHitTimes = 0
    this.isSunk = false
  }

  get length() {
    return this.shipLength
  }

  get hitAmt() {
    return this.shipHitTimes
  }

  hit() {
    if (!this.isSunk) {
      this.shipHitTimes++
      this.isSunk = this.isShipSunk()
    } else {
      throw new Error("The Ship is already sunk. Hitting is not possible")
    }
  }

  isShipSunk(): boolean {
    return this.shipHitTimes >= this.shipLength
  }
}

export default Ship
