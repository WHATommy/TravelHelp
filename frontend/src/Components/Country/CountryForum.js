import React, { Component } from 'react';
import SelectedCountry from './SelectedCountry/selectedCountry'
import SelectedForum from './SelectedForum/selectedForum'
import Search from '../Country/Search/search'

class CountryForum extends Component {

  constructor(props) {
    super(props);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.state = {
      currentCountry: ''
    }

  }

  handleCountryChange(country) {
    this.setState({ currentCountry: country });
  }

  render() {
    const country = this.state.currentCountry;
    return (
      <div className="App">
        <Search value={country}
          onCountryChange={this.handleCountryChange} />

        <SelectedCountry selectedCountry={this.state.currentCountry} />
        <SelectedForum selectedForum={this.state.currentCountry} />
      </div>)
  }

}



export default CountryForum