import React, { Component } from 'react';
import CountryInfos from './CountryInfos/countryInfos'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class SelectedCountry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            errors: {}
        }

    }

    jsonEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }

    //TODO FIX LOOP
    componentDidUpdate() {
        const items = [this.props.countryInfos.countryInfos[0]]
        if (!this.jsonEqual(items, this.state.items)) {
            this.setState({ items });
        }
        //this.setState({ items: this.props.countryInfos.countryInfos[0] })
    }


    render() {
        return (
            <div>
                <CountryInfos
                    countryInfos={this.state.items}
                />
            </div>)
    }
}

SelectedCountry.propTypes = {
    countryInfos: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    countryInfos: state.countryInfos,
    errors: state.errors
})

export default connect(mapStateToProps, {})(SelectedCountry);
