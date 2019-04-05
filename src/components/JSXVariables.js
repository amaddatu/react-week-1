import React from "react";

const name = "Caitlin";
const num1 = 3;
const num2 = 4;
const arr = [1, 2, 3, 4, 5, 6];

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {/* JavaScript expressions can be escaped inside of curly braces */}

          <h2>My name is {name}. But you can call me...</h2>
          <h1>The JSX Boss!</h1>
          <hr />
          <h2>I can do math: {num1 + num2}.</h2>
          <h2>
            I can generate random numbers:
            {Math.floor(Math.random() * 10) + 1},{Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1}.
          </h2>
          <h2>I can even reverse my name: {name.split("").reverse()}</h2>
          {arr.map(choco => {return (<h2>{choco}</h2>);} ) }
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
