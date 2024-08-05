import PlayerBoardDisplay from "./module/PlayerBoardDisplay"
import Player from "./components/Player"

let box_Area = document.querySelector(".box_area")
let realPlayer = new Player()
let newBoard = PlayerBoardDisplay(realPlayer, "Player")
box_Area?.append(newBoard.createBoard())
