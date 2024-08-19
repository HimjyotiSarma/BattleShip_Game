import Ship from "../components/ship"
let battleShip = new Ship(5)

describe("Ship Status Test", () => {
  test("should Define", () => {
    expect(battleShip).toBeDefined()
  })
  test("BattleShip Sunk Test", () => {
    battleShip.hit()
    battleShip.hit()
    battleShip.hit()
    battleShip.hit()
    battleShip.hit()
    expect(battleShip.isShipSunk()).toBeTruthy()
  })
  test("should record hits and sink the ship", () => {
    const ship = new Ship(2)
    ship.hit()
    expect(ship.hitAmt).toBe(1)
    expect(ship.isSunk).toBe(false)
    ship.hit()
    expect(ship.hitAmt).toBe(2)
    expect(ship.isSunk).toBe(true)
  })
})
