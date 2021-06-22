import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import Logo from '../../image/crown.svg'

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img src={Logo} className='logo'/>
            </Link>
            <div className='options'>
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTECT
                </Link>
            </div>
        </div>
    )
}

export default Header
