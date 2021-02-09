import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav d-flex bg-light justify-content-between">
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/login'>Login</Link>
            <Link className='nav-link' to='/register'>Register</Link>
        </div>
    )
}
export default Navbar;
