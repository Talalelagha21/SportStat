import React from "react";
import './CurrentStats.css'
import "@fontsource/overpass";



function CurrentStats() {
    return (
        <>
            <div className="current-stats-header" >
                <h2>2022 Stats</h2>
            </div>
            <div className="points" >
                Points 
                <div className="stat">20</div>
                <div className="ranking">20th</div>
            </div>
            <div className="rebounds" >
                Rebounds
                <div className="stat">12</div>
                <div className="ranking">234th</div>
            </div>
            <div className="assists" >
                Assists
                <div className="stat">3</div>
                <div className="ranking">2nd</div>
            </div>
            <div className="fg" >
                FG%
                <div className="stat">47%</div>
                <div className="ranking">3rd</div>
            </div>
            <div className="ft">
                FT%
                <div className="stat">85%</div>
                <div className="ranking">7th</div>
            </div>
        </>
    )
}

export default CurrentStats