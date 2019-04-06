import React from "react";
import Math from "./Math";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360
function Calculator() {
  return (
    <div>
      <p><Math>19 + 341</Math></p>
      
      <p><Math>42 - 17</Math></p>
      
      <p><Math>100 * 3</Math></p>
      
      <p><Math>96 / 4</Math></p>
    </div>
  );
}

export default Calculator;
