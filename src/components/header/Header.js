import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../image/crown.svg'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

const Header = ({ currentUser,hidden }) => {
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
                <CartIcon />
            </div>
            {
                hidden ? null
                :<CartDropdown/>
            }
            
        </div>
    )
}
const mapStateToProps = ({user: {currentUser},cart:{hidden}}) =>({
    currentUser : currentUser,
    hidden: hidden
})

export default connect(mapStateToProps)(Header)
