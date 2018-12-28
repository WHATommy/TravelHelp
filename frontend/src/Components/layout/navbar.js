import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';


class Navbar extends Component {
    onLogoutClick(event) {
        event.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <>
                <Link to='/createForum' className="navbarButtonTwo">Create</Link>
                <Link to='/myForum' className="navbarButtonOne">My Posts</Link>
                <a href="" onClick={this.onLogoutClick.bind(this)} className="navbarButtonOne">Logout</a>
            </>
        );

        const guestLinks = (
            <>
                <Link to='/register' className="navbarButtonTwo">Sign Up</Link>
                <Link to='/login' className="navbarButtonOne">Login</Link>
            </>
        );

        return (
            <div className="navbar">
                <div className="navbarLeft">
                    <Link to='/' className="navbarLogo">Travel Help</Link>
                </div>
                <div className="navbarRight">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </div>
        )
    }
}

Navbar.propTypes = {
    //getMyPost: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,

})

export default connect(mapStateToProps, { logoutUser /*getMyPost*/ })(Navbar)