//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// eslint-disable-next-line no-unused-vars
const colors = {
  "Black": 0,
  "Brown": 1,
  "Red": 2,
  "Orange": 3,
  "Yellow": 4,
  "Green": 5,
  "Blue": 6,
  "Violet": 7,
  "Grey": 8,
  "White": 9
}

// eslint-disable-next-line no-unused-vars
function get_numerical_value(color = "Brown-Blue".split("-")) {
  return colors[color[0]] + colors[color[1]] ;
}

get_numerical_value();