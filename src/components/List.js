import React from "react";

function List(props) {
  console.log(props.groceries);
  return (
    <ul className="list-group">
      {props.groceries.map(uhm => { 
        return uhm.purchased ? "" : (<li className="list-group-item">{uhm.name}</li>);
      })}
    </ul>
  );
}

export default List;
