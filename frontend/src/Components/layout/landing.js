import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getCountry } from '../../actions/countryAction'
import { getPost } from '../../actions/postAction'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        //this.props.onCountryChange(this.state.value);
        const country = this.state.value
        this.props.getCountry(country)
        this.props.getPost(country)
        this.props.history.push('/CountryForum')
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/CountryForum')
        }
    }

    render() {
        return (
            <div className="landing">
                <div className="landingInfo">
                    <h1>Travel Help</h1>
                    <p>Know the country before you go</p>
                </div>
                <form onSubmit={this.handleSubmit} className="searchBar">
                    <input value={this.state.value} type="text" name="country" placeholder="Search a country..." onChange={this.handleChange} className="searchBarInput" />
                    <input type="submit" value="Search" className="searchBarSubmit" />
                </form>
            </div>
        )
    }
}

Home.propTypes = {
    auth: PropTypes.object.isRequired,
    getCountry: PropTypes.func.isRequired,
    getPost: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { getCountry, getPost })(Home)