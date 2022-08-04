import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'

const Header = () => {
    return (
        <div className="navigation">
            <div className="logo">
                <img src={logo} ></img>
            </div>
            <div className="nav__links">
                <NavLink to="/" className="nav__link">Информация</NavLink>
                <NavLink to="/articles" className="nav__link">Статьи</NavLink>
                <NavLink to="/reviews" className="nav__link">Отзывы</NavLink>
            </div>
        </div>
    )
}

export default Header