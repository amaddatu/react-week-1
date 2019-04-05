import React from "react";

function JSXVariables() {
  const name="Huh What Example What What What";
  //const lengthOfName = name.length;
  const thoughts="its great";
  return (
    
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>I think React {thoughts}</h2>
          {name.split('').map(letter=>{return (<p>{letter}</p>);})}
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
