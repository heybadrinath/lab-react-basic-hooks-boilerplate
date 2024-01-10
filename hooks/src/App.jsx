import { useState } from "react";
import "./App.css";
import Context from "./components/context";
import Content from "./components/content";

function App() {
  return (
    <>
      <Context>
        <Content />
      </Context>
    </>
  )
}

export default App;
