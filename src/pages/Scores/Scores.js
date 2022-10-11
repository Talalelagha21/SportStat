import React from "react";
import "./Scores.css";
import raptors from "./raptors.png";
import celtics from "./celtics.png";
import "@fontsource/overpass";

function Scores() {
  const currentGames = true;

  return (
    <>
      {currentGames ? (
      <div className="scores-container">
        <div className="game" style={{ width: "400px", height: "175px" }}>
          <div className="time-box" style={{ width: "400px", height: "45px" }}>
            <div className="quarter">
              <strong>Q1</strong>
            </div>
            <div className="game-time">
              {" "}
              <strong>7:56</strong>
            </div>
          </div>
          <div className="team1-box" style={{ width: "400px", height: "65px" }}>
            <div className="team1-logo">
              <div className="img">
                <img
                  src={raptors}
                  alt="raptors"
                  style={{ height: "35px", width: "auto" }}
                />
              </div>
            </div>
            <div className="team1-name">
              Toronto Raptors <div className="team1-record">(50-32)</div>
            </div>
            <div className="team1-score"> 97 </div>
          </div>
          <div className="team2-box" style={{ width: "400px", height: "65px" }}>
            <div className="team1-logo">
              <div className="image">
                <img
                  src={celtics}
                  alt="celtics"
                  style={{ height: "35px", width: "auto" }}
                />
              </div>
            </div>
            <div className="team1-name">
              Boston celtics <div className="team1-record">(45-37)</div>
            </div>
            <div className="team1-score">92</div>
          </div>
        </div>
        <div
          className="game"
          style={{ color: "#202020", width: "400px", height: "175px" }}
        ></div>
        <div
          className="game"
          style={{ color: "#202020", width: "400px", height: "175px" }}
        ></div>
        <div
          className="game"
          style={{ color: "#202020", width: "400px", height: "175px" }}
        ></div>
        <div
          className="game"
          style={{ color: "#202020", width: "400px", height: "175px" }}
        ></div>
        <div
          className="game"
          style={{ color: "#202020", width: "400px", height: "175px" }}
        ></div>
        <div
          className="game"
          style={{ color: "#202020", width: "400px", height: "175px" }}
        ></div>
        <div
          className="game"
          style={{ color: "#202020", width: "400px", height: "175px" }}
        ></div>
        <div
          className="game"
          style={{ color: "#202020", width: "400px", height: "175px" }}
        ></div>
      </div>)  : (
        <div className="scores1-container">
                <h2> No games on this date.</h2>
        </div>
      ) }
      
    </>
  );
}

export default Scores;
