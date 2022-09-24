import logo from './logo.png';
import './NavBar.css'
import React from "react";
import SearchBar from '../SearchBar/SearchBar';

class NavBar extends React.Component {
    render(){
        return <nav className="nav">
            <img className='image1' src={logo} alt='logo'></img>
            <SearchBar />
        </nav>
    }
}

export default NavBar