import Player from "../components/Player"
import Cell from "./CellModule"

type PlayerConstructor = Player
type PlayerType = "Player" | "Computer"

function PlayerBoardDisplay(
  player = new Player(),
  playerType: PlayerType = "Player",
) {
  const PlayerConstructor: PlayerConstructor = player

  const createBoard = () => {
    let OuterBoard = document.createElement("div")
    OuterBoard.className = "board"
    OuterBoard.setAttribute("data-player-type", playerType)

    for (let x = 0; x < PlayerConstructor.gameBox.length; x++) {
      for (let y = 0; y < PlayerConstructor.gameBox[x].length; y++) {
        OuterBoard.append(
          Cell(x, y, PlayerConstructor.gameBox[x][y], PlayerConstructor),
        )
      }
    }
    return OuterBoard
  }

  const renderBoard = (gameBox: Array<Array<number | string>>) => {
    let getOuterBoard = document.querySelector(
      `[data-player-type="${playerType}"]`,
    )
    if (!getOuterBoard) {
      let newBoard = createBoard()
      return newBoard
    } else {
      getOuterBoard.innerHTML = "" // Clear existing cells
      for (let x = 0; x < gameBox.length; x++) {
        for (let y = 0; y < gameBox[x].length; y++) {
          getOuterBoard.append(
            Cell(x, y, PlayerConstructor.gameBox[x][y], PlayerConstructor),
          )
        }
      }
    }
    return getOuterBoard
  }

  return { createBoard, PlayerConstructor, renderBoard }
}

export default PlayerBoardDisplay
