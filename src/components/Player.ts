import GameBoard from "./gameboard"

interface Coord {
  x: number
  y: number
}

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

  autoShipPlacement() {
    // Write Logic of Auto Ship Placement in Random Place
    return undefined
  }
  get gameBox() {
    return this.PlayerBoard.gameBox
  }
  // get playerBoard() {
  //   return this.PlayerBoard
  // }
}

export default Player
