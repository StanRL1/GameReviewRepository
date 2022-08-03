import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();


    let guestNavigation = (
        <div id="guest">
            <Link className="button" to="/about">About</Link>
            <Link className="button" to="/login">Login</Link>
            <Link className="button" to="/register">Register</Link>
        </div>
    );

    let userNavigation = (
        <div id="user">
            <span>Welcome, {user.email}</span>
            <Link className="button" to="/reviews">Reviews</Link>
            <Link className="button" to="/myReviews">MyReviews</Link>
            <Link className="button" to="/writeReview">Write a Review</Link>
            <Link className="button" to="/contact">Mail</Link>
            <Link className="button" to="/logout">Logout</Link>
        </div>
    );

    return (
        <div class="banner-info">
            <div class="container top">
                <div class="logo">
                    <h1><a href="/">Adventure Gaming</a></h1>
                </div>
                <div class="top-menu">
                    <span class="menu"></span>
                    <ul class="nav1">
                    {user.email
                        ? userNavigation
                        : guestNavigation
                    }
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>);
}

export default Header;