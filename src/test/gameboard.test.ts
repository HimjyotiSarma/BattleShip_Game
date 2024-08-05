import GameBoard from "../components/gameboard"
// import Ship from "../components/ship"
// import ShipPositionName from "../features/ShipPositionName"
// import getShipLength from "../features/getShipLength"

describe("Game Board Test Cases", () => {
  beforeAll(() => {
    jest.resetAllMocks()
  })
  test("should place a ship on the game board", () => {
    const board = new GameBoard()
    let coord = { x: 4, y: 4 }
    let shipPosition = board.placeShip("carrier", coord, "X")

    expect(shipPosition).toEqual([
      { x: 4, y: 2 },
      { x: 4, y: 3 },
      { x: 4, y: 4 },
      { x: 4, y: 5 },
      { x: 4, y: 6 },
    ])
  })
  test("should record hit on ship", () => {
    let board = new GameBoard()
    const coord = { x: 4, y: 4 }
    let position = board.placeShip("destroyer", coord, "y")
    expect(position).toEqual([
      { x: 3, y: 4 },
      { x: 4, y: 4 },
      { x: 5, y: 4 },
    ])
    expect(board.receiveAttack({ x: 4, y: 4 })).toBe("hit")
    expect(board.receiveAttack({ x: 2, y: 4 })).toBe("miss")
  })
  test("should place a ship on the game board", () => {
    const board = new GameBoard()
    const coord = { x: 4, y: 4 }
    const positions = board.placeShip("destroyer", coord, "X")

    expect(positions).toEqual([
      { x: 4, y: 3 },
      { x: 4, y: 4 },
      { x: 4, y: 5 },
    ])
    expect(board.game[4][3]).toBe("dt")
    expect(board.game[4][4]).toBe("dt")
    expect(board.game[4][5]).toBe("dt")
  })

  test("should record a hit on a ship", () => {
    const board = new GameBoard()
    const coord = { x: 4, y: 4 }
    board.placeShip("destroyer", coord, "X")

    expect(board.receiveAttack({ x: 4, y: 4 })).toBe("hit")
    expect(board.game[4][4]).toBe(1)
  })

  test("should record a miss on the game board", () => {
    const board = new GameBoard()
    expect(board.receiveAttack({ x: 0, y: 0 })).toBe("miss")
    expect(board.game[0][0]).toBe(-1)
  })

  test("should record a sunk ship", () => {
    const board = new GameBoard()
    const coord = { x: 4, y: 4 }
    let position = board.placeShip("patrol", coord, "X")
    expect(position).toEqual([
      { x: 4, y: 4 },
      { x: 4, y: 5 },
    ])
    // expect(board.receiveAttack({ x: 4, y: 4 })).toBe("hit")
    // expect(board.SunkedShips.length).toBe(1)
  })

  test("should determine game status", () => {
    const board = new GameBoard()

    const coords = [
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 3, y: 2 },
    ]
    let coord = { x: 2, y: 2 }

    const positions = board.placeShip("submarine", coord, "y")
    expect(positions).toEqual([
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 3, y: 2 },
    ])
    coords.forEach((coord) => board.receiveAttack(coord))
    expect(board.SunkedShips.length).toBe(1)
  })
})
