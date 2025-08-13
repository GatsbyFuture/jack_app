import {Fragment} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeItem} from '../helpers/persistant.store';
import {logout} from '../slice/auth';
import {logo} from '../constants';

const Navbar = () => {
    const navigate = useNavigate();
    const {loggedIn, user} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/login');
        removeItem('token');
    }

    return (
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
            <Link to="/">
                <img src={logo} alt="Logo" width={200} height={60}/>
            </Link>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                {loggedIn ? (
                    <Fragment>
                        <p className="me-3 py-2 m-0 text-dark text-decoration-none">{user.username}</p>
                        <button className="btn btn-outline-danger" onClick={logoutHandler}>Logout</button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Link to="/login" className="me-3 py-2 text-dark text-decoration-none">
                            Login
                        </Link>
                        <Link to="/register" className="me-3 py-2 text-dark text-decoration-none">
                            Register
                        </Link>
                    </Fragment>
                )}
            </nav>
        </div>
    );
}

export default Navbar;