function getShipLength(shipName: string): number {
  let shipLength: number
  switch (shipName) {
    case "carrier":
      shipLength = 5
      break
    case "battleship":
      shipLength = 4
      break
    case "destroyer" || "submarine":
      shipLength = 3
      break
    case "patrol":
      shipLength = 2
      break

    default:
      throw new Error("Unknown Ship Name")
  }

  return shipLength
}

export default getShipLength
