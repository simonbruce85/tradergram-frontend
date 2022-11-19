import "./App.css";
import Navbar from "./components/Navbar";
import Backimage from "./assets/bg.png";
import Backimage1 from "./assets/bg1.png";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Team from "./components/Team";

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';

const anchors = ["home", "contact", "team"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat

    className=""
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className="section">
           <Home  fullpageApi={fullpageApi}/>
          </div>
          <div className="section">
          <Contact fullpageApi={fullpageApi}/>
          </div>
          <div className="section">
          <Team  fullpageApi={fullpageApi}/>
          </div>
        </div>
      );
    }}
  />
);
export default App;