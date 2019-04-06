import React from "react";

function Alert(props) {
  console.log("before");
  console.log(props);
// true / false
// 1 / 0
// string
// undefined
  return (
    <div className={`alert alert-${props.type || "success"}`} role="alert">
      {props.children}
      {" This is called a literal" + props.critical + " stuff this" }
    </div>
  );
}

export default Alert;
