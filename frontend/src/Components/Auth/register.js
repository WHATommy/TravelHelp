import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authAction'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/CountryForum')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history)
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="align">
                <form onSubmit={this.onSubmit} className="form">
                    <div>
                        <input
                            className="input"
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <input
                            className="input"
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <input
                            className="input"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <input
                            className="input"
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            value={this.state.password2}
                            onChange={this.onChange}
                        />

                    </div>
                    <div className="line">
                        <input type="submit" value="Register" className="submit" />
                    </div>

                </form>

            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register))
