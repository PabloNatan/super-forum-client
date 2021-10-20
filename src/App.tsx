import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import RightMenu from "./components/RightMenu";
import LeftMenu from "./components/LeftMenu";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Nav />
      <SideBar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  );
}

export default App;
