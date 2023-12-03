import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <header className='header'>

      <div className="header__left">
        <img src="" alt="" />
        
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
          {/* 26:21 */}
        </div>
      </div>  

      <div className="header__right">
        
      </div>
    </header>
  )
}
