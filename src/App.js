import React from "react";
import logo from "./logo.svg";
import TextBar from "./components/text-bar";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <img alt="logo" src={logo} />
        <h1>Make Your To do list</h1>
      </header>
      <div className="container-main">
        <div className="col-md-12">
          <TextBar />
        </div>
      </div>
    </div>
  );
}

export default App;
