import searchLogo from './searchLogo.svg'
import './SearchBar.css'
import React from 'react';


function SearchBar() {
    return (
      <div class="search-box">
        <button class="btn-search">
          <img src={searchLogo} alt='search'></img>
        </button>
        <input type="text" class="input-search" placeholder="Search Player, Team...."></input>
      </div>
      
    )
  }


export default SearchBar;