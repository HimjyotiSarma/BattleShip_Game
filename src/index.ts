import PlayerBoardDisplay from "./module/PlayerBoardDisplay"
import Player from "./components/Player"
import PlaceShipInBox from "./module/placeShip"
import axisState from "./features/currentAxis"
import "./style/index.css"
import RecieveAttack from "./module/attackShip"

type axis = "x" | "X" | "y" | "Y"
type PlayerType = "Player" | "Computer"

// Selecting the necessary DOM elements
let box_Area: HTMLElement | null = document.querySelector(".box_area")
let secondary_game_area: HTMLElement | null = document.querySelector(
  ".placeShip_Computer_area",
)

let AxisBtns = document.querySelectorAll(".axis_btn") // Fixed selector
console.log(AxisBtns)

AxisBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target as HTMLButtonElement // Type assertion
    axisState.currentAxis = (target.value || "X") as axis
    // console.log(`Axis selected: ${axisState.currentAxis}`)
  })
})

// Initializing game variables
let realPlayer = new Player()
let computerPlayer = new Player()
computerPlayer.autoShipPlacement() // Uncommented for computer auto ship placement

// Initializing the board displays
let playerBoard = PlayerBoardDisplay(realPlayer, "Player")
let computerBoard = PlayerBoardDisplay(computerPlayer, "Computer")

// Render the player's board initially
if (box_Area) {
  box_Area.append(playerBoard.createBoard())
}

// Function to start the game once ships are placed
function startGame() {
  if (secondary_game_area) {
    secondary_game_area.innerHTML = "" // Clear previous content
    secondary_game_area.append(
      computerBoard.renderBoard(computerPlayer.gameBox),
    )
    RecieveAttack(realPlayer, computerPlayer)
  }

  if (box_Area) {
    box_Area.innerHTML = "" // Clear existing player board
    box_Area.append(playerBoard.renderBoard(realPlayer.gameBox))
  }

  console.log("Game started!")
}

// Function to handle the ship placement process
function handleShipPlacement() {
  // Place Ship Or Attack in Bix : TODO
  PlaceShipInBox(realPlayer)

  document.addEventListener("shipsPlaced", () => {
    startGame()
  })
}

// Check if the player has placed all ships
if (!realPlayer.PlayerBoard.isAllShipPlaced()) {
  handleShipPlacement()
} else {
  startGame()
}
