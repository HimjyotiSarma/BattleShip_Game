type axis = "x" | "X" | "y" | "Y"
interface axisObj {
  currentAxis: axis
}
const axisState: axisObj = {
  currentAxis: "X", // Default value
}

export default axisState
