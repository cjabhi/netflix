import React from 'react'
import logo from "../../logo.png"
import {Link} from "react-router-dom";
import {ImSearch} from "react-icons/im"

const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt="logo" />
        <div>
            <Link to="/tvshows"> TV Shows</Link>
            <Link to="/movies"> Movies</Link>
            <Link to="/recentlyadded"> Recently added</Link>
            <Link to="/mylist"> my list</Link>
        </div>
        <ImSearch />
    </nav>
  )
}

export default Header