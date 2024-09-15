import './App.css';
import React from "react";
import {VideoList} from "./components/VideoList";
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Some} from "./components/Some";

function App() {
  return (
    <div className="App">
      <div>
          <Header />
        <VideoList />
          <Some />
          <Some />
          <Some />
        <Main />
      </div>
    </div>
  );
}

export default App;
