import React from "react";
import Alert from "./components/Alert";

let critical = "test";
function App() {

  return <Alert type="danger" critical={critical}>Invalid user id or password</Alert>;
}

export default App;
