// function PlaceShipComponent() {
//   // Create the main container
//   const placeShipComputerArea = document.querySelector(
//     ".placeShip_Computer_area",
//   ) as HTMLElement
//   if (placeShipComputerArea) {
//     placeShipComputerArea.innerHTML = ""
//   }

//   // Create the axis selection container
//   const axisSelect = document.createElement("div")
//   axisSelect.className = "axis_select"

//   // Create the X axis button
//   const xAxisButton = document.createElement("button")
//   xAxisButton.className = "axis_btn x_axis"
//   xAxisButton.type = "button"
//   xAxisButton.value = "X"
//   xAxisButton.textContent = "X axis"

//   // Create the Y axis button
//   const yAxisButton = document.createElement("button")
//   yAxisButton.className = "axis_btn y_axis"
//   yAxisButton.type = "button"
//   yAxisButton.value = "Y"
//   yAxisButton.textContent = "Y axis"

//   // Append the buttons to the axis selection container
//   axisSelect.appendChild(xAxisButton)
//   axisSelect.appendChild(yAxisButton)

//   // Create the place ship text container
//   const placeShipText = document.createElement("div")
//   placeShipText.className = "place_ship_text"

//   // Create the heading and bold elements
//   const heading = document.createElement("h1")
//   heading.textContent = "Place Your "
//   const shipName = document.createElement("b")
//   shipName.textContent = ""

//   // Append the ship name to the heading, then the heading to the text container
//   heading.appendChild(shipName)
//   placeShipText.appendChild(heading)

//   // Append the axis selection and text container to the main container
//   placeShipComputerArea.appendChild(axisSelect)
//   placeShipComputerArea.appendChild(placeShipText)
// }
