import Player from "../components/Player"
import GameBoard from "../components/gameboard"
import Ship from "../components/ship"
import Cell from "./CellModule"

type PlayerConstructor = Player
type PlayerType = "Player" | "Computer"
// type Ship = Ship

function PlayerBoardDisplay(
  player = new Player(),
  playerType: PlayerType = "Player",
) {
  const PlayerBoard: PlayerConstructor = player
  const createBoard = () => {
    let OuterBoard = document.createElement("div")
    OuterBoard.className = "board"
    OuterBoard.setAttribute("data-player-type", playerType)
    for (let x = 0; x < PlayerBoard.gameBox.length; x++) {
      for (let y = 0; y < PlayerBoard.gameBox[x].length; y++) {
        OuterBoard.append(
          Cell(x, y, PlayerBoard.gameBox[x][y], PlayerBoard.PlayerBoard),
        )
      }
    }
    return OuterBoard
  }

  return { createBoard, PlayerBoard }
}

export default PlayerBoardDisplay
