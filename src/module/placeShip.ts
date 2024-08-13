import Player from "../components/Player"
import allShips from "../utility/allShipsAvailable"

type PlayerConstructor = Player

function PlaceShipInBox(player = new Player()) {
  let allShipsArr: Array<string> = [...allShips] // Copy the array to avoid mutation
  const PlayerConstructor: PlayerConstructor = player
  // console.log(allShips)
  let shipNameArea: HTMLElement | null = document.querySelector(
    ".place_ship_text h1 b",
  )
  let playerBoard: HTMLElement | null = document.querySelector(
    '[data-player-type="Player"]',
  )
  let allCells: NodeListOf<Element> | undefined

  // Check if playerBoard exists before querying allCells
  if (playerBoard) {
    allCells = playerBoard.querySelectorAll(".cell_common")
  }

  console.log("All Cells:", allCells)
  let axisBtnsContainer = document.querySelector(".axis_select")
  console.log(axisBtnsContainer)

  let axis_btns = document.querySelectorAll(".axis_btn")
  let currentAxis: string = "X" // Default axis

  // Capture axis selection
  axis_btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      currentAxis = (e.target as HTMLButtonElement).value
      console.log(`Axis selected: ${currentAxis}`)
    })
  })

  // Check if ships are left to place
  const placeNextShip = () => {
    if (PlayerConstructor.isAllShipPlaced()) {
      console.log("All ships have been placed.")
      document.dispatchEvent(new CustomEvent("shipsPlaced"))
      return
    }

    let currentShip = allShipsArr.shift()

    if (currentShip && shipNameArea) {
      shipNameArea.textContent = currentShip

      // Add event listeners to cells for ship placement
      if (allCells) {
        allCells.forEach((cell) => {
          const clonedCell = cell.cloneNode(true) as Element // Clone the node to remove previous listeners

          const xValue = cell.getAttribute("data-x-value")
          const yValue = cell.getAttribute("data-y-value")

          if (xValue !== null && yValue !== null) {
            const newCell = document.querySelector(
              `[data-x-value="${xValue}"][data-y-value="${yValue}"]`,
            )

            if (newCell) {
              // Ensure newCell is not null before proceeding
              newCell.addEventListener("click", function handleClick() {
                const X_Coord: number = parseInt(xValue)
                const Y_Coord: number = parseInt(yValue)
                console.log(`X-Value: ${X_Coord}, Y-Coord: ${Y_Coord}`)

                try {
                  PlayerConstructor.placeShip(
                    currentShip,
                    { x: X_Coord, y: Y_Coord },
                    currentAxis as "X" | "Y",
                  )
                  newCell.removeEventListener("click", handleClick) // Remove listener after successful placement
                  placeNextShip() // Place the next ship
                } catch (error) {
                  console.error("Failed to place ship:", error)
                }
              })
            }
          }
        })
      } else {
        console.error("Player board cells not found.")
      }
    } else {
      console.error("No ships available to place or ship name area not found.")
    }
  }

  // Start placing the first ship
  placeNextShip()
}

export default PlaceShipInBox
