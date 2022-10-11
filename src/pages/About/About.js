import React from "react";
import './About.css'
import "@fontsource/overpass";


function About() {
   
        return (
                <div className="about-container" >
                        <div className="top-about" style={{width:'100%', height:'30%'}}>
                                <div className="title">
                                        <h2>About</h2>
                                </div>
                        </div>
                        <div className="bottom-about" style={{backgroundColor:'#141414',width:'100%', height:'70%'}}>
                                <p className="text">SportsStat is a web application built using React that acts as the “source of everything” for the
                                   NBA <br/><br/>
                                   Users can find statistics, live scores and historical information, all in one place, with a focus
                                   on the simple and clean user interface. <br/><br/>
                                   Implemented real-time information updating algorithm leveraging various REST APIs
                        
                                </p>
                        </div>
                </div>
        )

}

export default About;