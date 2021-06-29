import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../image/crown.svg'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link to="/">
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTECT
                </Link>
                {
                    currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :<Link className="option" to="/sign-in">
                        SIGN IN
                    </Link>
                }
                
            </div>
        </div>
    )
}
const mapStateToProps = state =>({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header)
