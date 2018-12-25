import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { getCountry } from '../../../actions/countryAction';
import { getPost } from '../../../actions/postAction'

class Search extends Component {
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
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.value} type="text" name="country" placeholder="Country..." onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

//Add later:
//<input type="text" name="city" placeholder="City..." />

Search.propTypes = {
    getCountry: PropTypes.func.isRequired,
    getPost: PropTypes.func.isRequired
}

export default connect(null, { getCountry, getPost })(Search)
