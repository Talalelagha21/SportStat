
import React from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/Sidebar"
import './App.css'



class App extends React.Component {
  render() {
    return (
     <div>
        <div className="navBar">
          <NavBar />
        </div>
        <div className="sideBar">
          <SideBar />
        </div>
    </div> 
    )
  }
}

export default App;