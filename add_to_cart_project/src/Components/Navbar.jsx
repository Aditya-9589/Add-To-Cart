import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="nav_box" >
            <span>
                FlopCart
            </span>
            <div className="cart_icon" >
                <span>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                <span>0</span>   
            </div>
        </div>
    </nav>
    </>   
  )
}

export default Navbar;