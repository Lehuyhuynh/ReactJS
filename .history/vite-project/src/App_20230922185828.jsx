import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let i = 1;
  const e1 = <h1>hello world</h1>;
  const e2 = <h1>flase</h1>;
  // return (
  //   <h1>{i==1 ? "hello world " : "flase"}</h1>
  // )

  return i === 1 ? e1 : e2;
}

export default App;
