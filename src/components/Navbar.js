import React from 'react';
import { ReactComponent as Logo } from '../icons/logo.svg';


const Navbar = ({props}) => {
    return (
        <nav className="navbar">
            <Logo />
        </nav>
    )
};

export default Navbar;
