import React from "react";
import "./PlayerProfile.css"
import images from './images.jpg';
import { BsDot } from 'react-icons/bs';
import "@fontsource/overpass";

function PlayerProfile() {
    return (
        <>
            <div className="player-info" style={{fontFamily:"overpass", fontWeight:100, letterSpacing:"1px"}} >
               <div className="wrapper">
                <div className="image-container">
                    <img src={images} alt='player' style={{width:"130px", height:"auto"}}/>
                </div>
                <div className="info">
                    <h2 style={{fontFamilt:"montserrat"}}>Kyle <br/>Lowry</h2>
                    <div className="sub-info">
                        <p >Miami Heat</p>
                        <BsDot style={{color:'#D8D8D8', marginTop:"9px", marginLeft:"0em"}}/>
                        <p style={{marginLeft:"0em"}}>#7</p>
                        <BsDot style={{color:'#D8D8D8', marginTop:"9px", marginLeft:"0em"}}/>
                        <p style={{marginLeft:"0em"}}>Point Gaurd</p>
                    </div>     
                </div>
                <div className="info2">   
                    <table>
                        <tr >
                            <td className="sec2"><strong>HT/WT</strong></td>
                            <td className="sec">6"0, 196lb</td>
                        </tr>
                        <tr >
                            <td className="sec2"><strong>Shoots</strong></td>
                            <td className="sec">Right</td>
                        </tr>
                        <tr >
                            <td className="sec2"><strong>Birthday</strong></td>
                            <td className="sec">March 25, 1986 (36)</td>
                        </tr>
                        <tr>
                            <td className="sec2" ><strong>College</strong></td>
                            <td className="sec">Villanova</td>
                        </tr>
                        <tr >
                            <td className="sec2"><strong>Draft Info</strong></td>
                            <td className="sec">2006 (Round: 1 / Pick: 24)</td>
                        </tr>
                    </table>
                </div>
            </div> 
            </div> 
        </>
    )
}

export default PlayerProfile