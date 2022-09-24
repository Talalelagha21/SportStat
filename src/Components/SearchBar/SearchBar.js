import searchLogo from './searchLogo.svg'
import close from './close.svg'

import React from "react";
import './SearchBar.css'



class SearchBar extends React.Component {
  render() {
    return (
      <div class="search-box">
        <button class="btn-search">
          <img src={searchLogo} alt='search'></img>
        </button>
        <input type="text" class="input-search" placeholder="Search Player, Team...."></input>
      </div>
      
    )
  }
}

export default SearchBar;