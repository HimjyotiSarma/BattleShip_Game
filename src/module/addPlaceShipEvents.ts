// import Player from "../components/Player"

// type PlayerConstructor = Player
// function addPlaceShipEvents(element: HTMLDivElement, player: Player) {
//   // Remove existing event listeners by cloning and replacing elements
// let PlayerConstructor : PlayerConstructor = player;
//   let old_allBoards = document.querySelectorAll(".board")
//   old_allBoards.forEach((board: Node) => {
//     const new_board = board.cloneNode(true) as HTMLDivElement
//     board.parentNode?.replaceChild(new_board, board)
//   })

//   // Add the new event listener for placing ships
//   element.addEventListener("click", function handlePlaceShip(event) {
//     // Assuming the event target is a cell within the board
//     const target = event.target as HTMLElement
//     const x = parseInt(target.getAttribute("data-x-value") || "0")
//     const y = parseInt(target.getAttribute("data-y-value") || "0")

//     if (!isNaN(x) && !isNaN(y)) {
//       console.log(`Placing ship at coordinates X: ${x}, Y: ${y}`)

//       // Add your logic here to place the ship
//       PlayerConstructor.placeShip(currentShip, { x: x, y: y }, currentAxis);

//       After placing the ship, you can remove the listener or keep it if needed
//       element.removeEventListener("click", handlePlaceShip);
//     }
//   })
// }
