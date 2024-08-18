import Player from "../components/Player"
import { updateCellAppearance } from "../utility/shipClassModules"
import PlayerBoardDisplay from "./PlayerBoardDisplay"

type PlayerConstructor = Player
interface Coordinate {
  x: number
  y: number
}

let lastPlayerReceivedCoord: Coordinate | null = null
let currentTurn: "Player" | "Computer" = "Player"

function RecieveAttack(player: PlayerConstructor, computer: PlayerConstructor) {
  const gameStatus = document.querySelector(".gameStatus h3") as HTMLElement
  const playerBoard = document.querySelector(
    `[data-player-type="Player"]`,
  ) as HTMLElement
  const computerBoard = document.querySelector(
    `[data-player-type="Computer"]`,
  ) as HTMLElement

  if (!playerBoard || !computerBoard) {
    console.error("Player or computer board not found")
    return
  }
  console.log(playerBoard)

  const updateBoards = () => {
    const playerCells = playerBoard.querySelectorAll(".cell_common")
    const computerCells = computerBoard.querySelectorAll(".cell_common")

    playerCells.forEach((cell) => {
      const x_axis = parseInt(cell.getAttribute("data-x-value") as string)
      const y_axis = parseInt(cell.getAttribute("data-y-value") as string)
      const cellValue = player.PlayerBoard.game[x_axis][y_axis]
      // console.log(cell)

      cell.setAttribute("data-cell-value", cellValue.toString())
      updateCellAppearance(cell as HTMLElement, cellValue, "Player")
    })
    let newRenderedCellsPlayer = PlayerBoardDisplay(player, "Player")
    newRenderedCellsPlayer.renderBoard(player.PlayerBoard.game)

    computerCells.forEach((cell) => {
      const x_axis = parseInt(cell.getAttribute("data-x-value") as string)
      const y_axis = parseInt(cell.getAttribute("data-y-value") as string)
      const cellValue = computer.PlayerBoard.game[x_axis][y_axis]
      cell.setAttribute("data-cell-value", cellValue.toString())
      // console.log(cell)
      updateCellAppearance(cell as HTMLElement, cellValue, "Computer")
    })
    let newRenderedCellsComputer = PlayerBoardDisplay(computer, "Computer")
    newRenderedCellsComputer.renderBoard(computer.PlayerBoard.game)
  }

  const handlePlayerAttack = (x: number, y: number) => {
    player.attack({ x, y }, computer.PlayerBoard)
    updateBoards()

    if (computer.PlayerBoard.isLost()) {
      gameStatus.textContent = "You Won!!.. Computer Lost"
      return
    }
    currentTurn = "Computer"
    setTimeout(handleComputerAttack, 500) // Delay to simulate computer thinking
  }

  const handleComputerAttack = () => {
    console.log("Last Recieved Coords : ", lastPlayerReceivedCoord)

    const attackData = computer.autoRecieveAttack(
      player.PlayerBoard,
      lastPlayerReceivedCoord,
    )
    console.log(attackData?.attacked_coord)

    updateBoards()

    if (player.PlayerBoard.isLost()) {
      gameStatus.textContent = "You Lost!!.. Computer Won"
      return
    }

    if (attackData?.attack_status === "hit") {
      lastPlayerReceivedCoord = attackData.lastHitCoord
    } else {
      lastPlayerReceivedCoord = null
    }

    currentTurn = "Player"
    enablePlayerTurn()
  }

  const enablePlayerTurn = () => {
    playerBoard.style.pointerEvents = "none"
    computerBoard.style.pointerEvents = "auto"
    const computerCells = computerBoard.querySelectorAll(".cell_common")

    computerCells.forEach((cell) => {
      const x_axis = parseInt(cell.getAttribute("data-x-value") as string)
      const y_axis = parseInt(cell.getAttribute("data-y-value") as string)
      const handleClick = () => {
        if (currentTurn === "Player") {
          handlePlayerAttack(x_axis, y_axis)
          cell.removeEventListener("click", handleClick) // Prevent multiple clicks
        }
      }
      cell.addEventListener("click", handleClick)
    })
  }

  enablePlayerTurn()
}

export default RecieveAttack
