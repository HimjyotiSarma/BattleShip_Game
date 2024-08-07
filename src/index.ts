import PlayerBoardDisplay from "./module/PlayerBoardDisplay"
import Player from "./components/Player"
import "./style/index.css"

let box_Area = document.querySelector(".box_area")
let realPlayer = new Player()
realPlayer.autoShipPlacement()
let newBoard = PlayerBoardDisplay(realPlayer, "Player")
box_Area?.append(newBoard.renderBoard(realPlayer.gameBox))
