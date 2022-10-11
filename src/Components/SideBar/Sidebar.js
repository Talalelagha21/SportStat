import {Link} from 'react-router-dom'
import React from "react";
import './SideBar.css'
import "@fontsource/overpass";

function SideBar() {
        const path = window.location.pathname
        return(
            <nav className="sidebar" >
                <div className='top-nav'>
                    <ul className='sidebar-nav'>
                        {/*<li className='nav-item'>
                            <Link to='/' className='nav-link'>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="currentColor" stroke="none">
<path d="M153 498 c-79 -79 -146 -153 -149 -165 -8 -29 12 -62 41 -69 25 -6
25 -8 25 -114 0 -106 1 -109 27 -130 22 -17 38 -20 92 -18 l66 3 5 95 5 95 55
0 55 0 5 -95 5 -95 54 -3 c119 -7 131 7 131 149 0 90 3 109 15 109 23 0 55 37
55 63 0 33 -286 317 -319 317 -18 0 -63 -38 -168 -142z m314 -30 c73 -73 133
-141 133 -150 0 -13 -8 -18 -30 -18 l-30 0 0 -111 c0 -138 -5 -149 -70 -149
l-50 0 0 77 c0 101 -18 123 -97 123 -44 0 -58 -5 -78 -25 -22 -21 -25 -33 -25
-100 l0 -76 -52 3 -53 3 -5 125 -5 125 -28 3 c-57 7 -44 29 94 168 74 74 140
134 149 134 8 0 74 -60 147 -132z"/>
                            </g>
                                </svg>
                                <span className='link-text'>Home</span>
                            </Link>
                        </li>*/}
                        <li className='nav-item'>
                            <Link to='/players' className='nav-link'>
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="currentColor" stroke="none">
<path d="M261 572 c-38 -20 -71 -73 -71 -112 0 -60 67 -125 130 -125 63 0 130
65 130 125 0 62 -68 130 -130 130 -14 0 -41 -8 -59 -18z m130 -41 c64 -65 20
-171 -71 -171 -33 0 -48 6 -71 29 -64 65 -20 171 71 171 33 0 48 -6 71 -29z"/>
<path d="M217 294 c-67 -21 -130 -85 -153 -157 -29 -92 -42 -87 256 -87 298 0
285 -5 256 87 -44 138 -199 206 -359 157z m211 -30 c49 -20 90 -60 113 -109
37 -79 49 -75 -221 -75 -267 0 -254 -4 -224 68 20 49 60 90 109 113 51 24 170
25 223 3z"/>
</g>
                            </svg>
                                <span className='link-text'>Players</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/scores' className='nav-link'>
                                < svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="currentColor" stroke="none">
<path d="M63 620 c-53 -32 -63 -63 -63 -205 0 -142 10 -173 63 -205 29 -18 51
-20 255 -20 247 0 266 4 302 63 17 27 20 51 20 162 0 111 -3 135 -20 162 -36
59 -55 63 -302 63 -204 0 -226 -2 -255 -20z m502 -55 c24 -23 25 -30 25 -150
0 -120 -1 -127 -25 -150 l-24 -25 -221 0 -221 0 -24 25 c-24 23 -25 30 -25
150 0 120 1 127 25 150 l24 25 221 0 221 0 24 -25z"/>
<path d="M125 515 c-22 -21 -25 -33 -25 -100 0 -67 3 -79 25 -100 31 -32 69
-32 100 0 22 21 25 33 25 100 0 67 -3 79 -25 100 -13 14 -36 25 -50 25 -14 0
-37 -11 -50 -25z m70 -100 c0 -63 -2 -70 -20 -70 -17 0 -20 8 -23 59 -4 70 2
89 25 84 15 -3 18 -15 18 -73z"/>
<path d="M415 515 c-22 -21 -25 -33 -25 -100 0 -67 3 -79 25 -100 31 -32 69
-32 100 0 22 21 25 33 25 100 0 67 -3 79 -25 100 -13 14 -36 25 -50 25 -14 0
-37 -11 -50 -25z m70 -100 c0 -63 -2 -70 -20 -70 -17 0 -20 8 -23 59 -4 70 2
89 25 84 15 -3 18 -15 18 -73z"/>
<path d="M303 474 c-8 -21 13 -42 28 -27 13 13 5 43 -11 43 -6 0 -13 -7 -17
-16z"/>
<path d="M303 374 c-8 -21 13 -42 28 -27 13 13 5 43 -11 43 -6 0 -13 -7 -17
-16z"/>
<path d="M107 134 c-4 -4 -7 -24 -7 -45 0 -31 -4 -38 -22 -41 -15 -2 -23 -10
-23 -23 0 -18 7 -20 70 -20 63 0 70 2 70 20 0 13 -8 21 -22 23 -18 3 -22 11
-25 45 -3 40 -22 59 -41 41z"/>
<path d="M497 134 c-4 -4 -7 -24 -7 -45 0 -31 -4 -38 -22 -41 -15 -2 -23 -10
-23 -23 0 -18 7 -20 70 -20 63 0 70 2 70 20 0 13 -8 21 -22 23 -18 3 -22 11
-25 45 -3 40 -22 59 -41 41z"/>
</g>
                                </svg>
                                <span className='link-text'>Scores</span>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/standings' className='nav-link'>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="currentColor" stroke="none">
<path d="M12 548 c-27 -27 -6 -68 35 -68 24 0 43 26 35 50 -10 30 -48 40 -70
18z"/>
<path d="M154 535 c-4 -8 -4 -22 0 -30 5 -13 38 -15 243 -13 l238 3 0 25 0 25
-238 3 c-205 2 -238 0 -243 -13z"/>
<path d="M12 348 c-27 -27 -6 -68 35 -68 29 0 48 33 33 60 -12 22 -49 27 -68
8z"/>
<path d="M154 335 c-4 -8 -4 -22 0 -30 5 -13 38 -15 243 -13 l238 3 0 25 0 25
-238 3 c-205 2 -238 0 -243 -13z"/>
<path d="M12 148 c-30 -30 0 -75 42 -64 27 7 38 35 24 60 -11 19 -49 21 -66 4z"/>
<path d="M154 135 c-4 -8 -4 -22 0 -30 5 -13 38 -15 243 -13 l238 3 0 25 0 25
-238 3 c-205 2 -238 0 -243 -13z"/>
</g>
                                </svg>
                                <span className='link-text1'>Standings</span>
                            </Link>
                        </li>            
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link'>
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="currentColor" stroke="none">
<path d="M223 622 c-109 -39 -178 -112 -210 -221 -29 -102 4 -228 82 -306 122
-121 328 -121 450 0 91 92 118 241 64 356 -69 146 -241 223 -386 171z m197
-63 c210 -95 212 -377 5 -475 -166 -79 -364 50 -365 236 0 182 197 313 360
239z"/>
<path d="M289 484 c-17 -21 0 -49 31 -49 31 0 48 28 31 49 -8 9 -21 16 -31 16
-10 0 -23 -7 -31 -16z"/>
<path d="M302 358 c-13 -13 -17 -173 -6 -202 8 -21 40 -21 48 0 3 9 6 55 6
103 0 79 -9 111 -30 111 -3 0 -11 -5 -18 -12z"/>
</g>
                                </svg>
                                <span className='link-text'>About</span>
                            </Link>
                        </li>        
                    </ul>

                    </div>
                
                    <div className='bottom-nav'>
                        <p className='name' style={{color:"white" ,marginLeft: "50px"}}> Built by Talal Elagha</p>
                    </div>
                </nav>
        )
    }


export default SideBar

