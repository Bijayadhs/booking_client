import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Navbar = () => {
    const { auth } = useSelector((state) => ({ ...state }));
    const dispatch = useDispatch();
    const history = useHistory();

    const logOut = () => {
        dispatch({ type: 'LOGGED_OUT', payload: null });
        window.localStorage.removeItem('auth');
        history.push('/login');
    }
    return (
        <nav className="navbar  navbar-dark bg-dark d-flex justify-content-between">
            <Link className='nav-link navbar-brand' to='/'>Home</Link>
            <div className="d-flex justify-content-between">
                {auth ? <Link onClick={logOut} className='nav-link' to='/logout'>Logout</Link>
                    :
                    <>
                        <Link className='nav-link' to='/login'>Login</Link>
                        <Link className='nav-link' to='/register'>Register</Link>
                    </>
                }
            </div>
        </nav>
    )
}
export default Navbar;
