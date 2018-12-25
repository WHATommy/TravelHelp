import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction'


class Navbar extends Component {
    onLogoutClick(event) {
        event.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <>
                <a href="" onClick={this.onLogoutClick.bind(this)}>Logout</a>
                <Link to='/createForum'>Post</Link>
            </>
        );

        const guestLinks = (
            <>
                <Link to='/register'>Sign Up</Link>
                <Link to='/login'>Login</Link>
            </>
        );

        return (
            <div>
                <Link to='/'>TravelTips</Link>
                <Link to='/CountryForum'>Country</Link>
                {isAuthenticated ? authLinks : guestLinks}
            </div>
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,

})

export default connect(mapStateToProps, { logoutUser })(Navbar)