const ShipPositionName = (shipName: string): string => {
  switch (shipName) {
    case "carrier":
      return "cr"
    case "battleship":
      return "bs"
    case "destroyer":
      return "dt"
    case "submarine":
      return "sb"
    case "patrol":
      return "pt"
    default:
      throw new Error("Unknown ship name")
  }
}

export default ShipPositionName
