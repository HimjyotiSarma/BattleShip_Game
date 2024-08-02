import ship from "../components/ship"
let battleShip = new ship(5)

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
})
