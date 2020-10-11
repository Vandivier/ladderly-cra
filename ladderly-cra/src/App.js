import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/counter";
import "./App.css";
import { LadderlyTopNav } from "./features/ladderly-top-nav/ladderly-top-nav";

function App() {
  return (
    <div className="App">
      <LadderlyTopNav />

      <header className="App-header">
        Ladderly.io
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>

      <section>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </section>
    </div>
  );
}

export default App;
