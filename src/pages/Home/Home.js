import React from "react";
import image1 from './ball.png';

import './Home.css'
import "@fontsource/overpass";

function Home(){
    return (
        <>
        <div className="home-container">
            <div className="text" >
                <h2>Your single source <br/> for everything NBA</h2>
                <p>Checkout live scores, standing, per game stats <br/>and averages of each NBA player for 2020-21 NBA Season </p>
            </div>
            <div className="images" >
                <div className="image-container1">
                    <img src={image1} alt="Ball" style={{width:"250px", height:"auto"}}/>
                </div>
                <div className="image-container2">
                    <img src={image1} alt='Ball2' style={{width:"250px", height:"auto"}}/>
                </div>
                <div className="image-container3">
                    <img src={image1} alt='Ball3' style={{width:"250px", height:"auto"}}/>
                </div>
            </div>

        </div>
        
        
        
        </>
    
    
    
        )
}

export default Home;