import React, { Component } from 'react'
import SelectList from '../../utils/selectList'

class CreateForum extends Component {
    constructor(props) {
        super(props)
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.state = {
            title: '',
            country: '',
            text: ''
        }
    }

    handleCountryChange(country) {
        this.setState({ country: country });
    }

    render() {
        const country = this.state.country
        return (
            <div>
                <SelectList
                    country={country}
                    onCountryChange={this.handleCountryChange}
                />
            </div>
        )
    }
}

export default CreateForum