import React from "react";
import PlayerProfile from "./PlayerProfile";
import './Players.css';
import CurrentStats from "./CurrentStats";
import AllTimeStats from "./AllTimeStats";
import Awards from "./Awards";
import News from "./News";

const list =[
        {Season: "2022", GP:34, Min:32.9, FG:8, FGA:12, FGP:64.6, TP:33.5, TPA:2, TPP:5, FT:6, FTA:9, FTP:89, DREB:9, OREB:3, TREB:12, Ast:3, Blk:1.2, Stl:0.4, Pf:2.3, TO:3, Pts:23.3},
        {Season: "2021", GP:24, Min:27.9, FG:8, FGA:12, FGP:50.1, TP:31.4, TPA:2, TPP:5, FT:6, FTA:9, FTP:89, DREB:9, OREB:3, TREB:12, Ast:4.3, Blk:1.2, Stl:0.5, Pf:2.3, TO:5, Pts:19.4},
        {Season: "2020", GP:36, Min:15.4, FG:8, FGA:12, FGP:62.5, TP:24.7, TPA:2, TPP:5, FT:6, FTA:9, FTP:89, DREB:9, OREB:3, TREB:12, Ast:6.4, Blk:1.6, Stl:1.2, Pf:2.3, TO:1, Pts:16.3},
        {Season: "2019", GP:26, Min:12.9, FG:8, FGA:12, FGP:45.2, TP:31.3, TPA:2, TPP:5, FT:6, FTA:9, FTP:89, DREB:9, OREB:3, TREB:12, Ast:3, Blk:1.8, Stl:0.8, Pf:2.3, TO:2, Pts:10.3},
        {Season: "2018", GP:26, Min:12.9, FG:8, FGA:12, FGP:45.2, TP:31.3, TPA:2, TPP:5, FT:6, FTA:9, FTP:89, DREB:9, OREB:3, TREB:12, Ast:3, Blk:1.8, Stl:0.8, Pf:2.3, TO:2, Pts:10.3},
        {Season: "2017", GP:26, Min:12.9, FG:8, FGA:12, FGP:45.2, TP:31.3, TPA:2, TPP:5, FT:6, FTA:9, FTP:89, DREB:9, OREB:3, TREB:12, Ast:3, Blk:1.8, Stl:0.8, Pf:2.3, TO:2, Pts:10.3},
        {Season: "2017", GP:26, Min:12.9, FG:8, FGA:12, FGP:45.2, TP:31.3, TPA:2, TPP:5, FT:6, FTA:9, FTP:89, DREB:9, OREB:3, TREB:12, Ast:3, Blk:1.8, Stl:0.8, Pf:2.3, TO:2, Pts:10.3},
        
    ]

const rowNames =['Season', 'GP', 'MIN', "FG", "FGA", "FG%","3P","3PA", "3P%","FT","FTA","FT%","DRB","ORB", "TRB", "AST", "BLK", "STL", "PF", "TO", "PTS"]
function Players() {
    
        return (
                <>
                   <div className="player-container">
                        <div className="player-profile">
                              <PlayerProfile />
                        </div>
                        <div className="current-stats">
                                <CurrentStats />
                        </div>
                        <div className="alltime-stats">
                                <AllTimeStats list={list} rowNames={rowNames}/>
                        </div>
                        <div className="awards">
                                <Awards />
                        </div>
                        <div className="news">
                                <News />
                        </div>
                   </div>    
                </>
        )
    
}

export default Players;