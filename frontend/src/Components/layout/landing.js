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
        const options = [
            { label: "Afghanistan", value: "Afghanistan" },
            { label: "Albania", value: "Albania" },
            { label: "Algeria", value: "Algeria" },
            { label: "Andorra", value: "Andorra" },
            { label: "Angola", value: "Angola" },
            { label: "Antigua and Barbuda", value: "Antigua and Barbuda" },
            { label: "Argentina", value: "Argentina" },
            { label: "Armenia", value: "Armenia" },
            { label: "Aruba", value: "Aruba" },
            { label: "American Samoa", value: "American Samoa" },
            { label: "Australia", value: "Australia" },
            { label: "Austria", value: "Austria" },
            { label: "Azerbaijan", value: "Azerbaijan" },
            { label: "Bahamas", value: "Bahamas" },
            { label: "Bangladesh", value: "Bangladesh" },
            { label: "Barbados", value: "Barbados" },
            { label: "Burundi", value: "Burundi" },
            { label: "Belgium", value: "Belgium" },
            { label: "Benin", value: "Benin" },
            { label: "Bermuda", value: "Bermuda" },
            { label: "Bhutan", value: "Bhutan" },
            { label: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina" },
            { label: "Belize", value: "Belize" },
            { label: "Belarus", value: "Belarus" },
            { label: "Bolivia", value: "Bolivia" },
            { label: "Botswana", value: "Botswana" },
            { label: "Brazil", value: "Brazil" },
            { label: "Bahrain", value: "Bahrain" },
            { label: "Brunei", value: "Brunei" },
            { label: "Bulgaria", value: "Bulgaria" },
            { label: "Burkina Faso", value: "Burkina Faso" },
            { label: "Central African Republic", value: "Central African Republic" },
            { label: "Cambodia", value: "Cambodia" },
            { label: "Canada", value: "Canada" },
            { label: "Cayman Islands", lvalue: "Cayman Islands" },
            { label: "Congo", value: "Congo" },
            { label: "Chad", value: "Chad" },
            { label: "Chile", value: "Chile" },
            { label: "China", value: "China" },
            { label: "Cote d'Ivoire", value: "Cote d'Ivoire" },
            { label: "Cameroon", value: "Cameroon" },
            { label: "DR Congo", value: "DR Congo" },
            { label: "Cook Islands", value: "Cook Islands" },
            { label: "Colombia", value: "Colombia" },
            { label: "Comoros", value: "Comoros" },
            { label: "Cape Verde", value: "Cape Verde" },
            { label: "Costa Rica", value: "Costa Rica" },
            { label: "Croatia", value: "Croatia" },
            { label: "Cuba", value: "Cuba" },
            { label: "Cyprus", value: "Cyprus" },
            { label: "Czech Republic", value: "Czech Republic" },
            { label: "Denmark", value: "Denmark" },
            { label: "Djibouti", value: "Djibouti" },
            { label: "Dominica", value: "Dominica" },
            { label: "Dominican Republic", value: "Dominican Republic" },
            { label: "Ecuador", value: "Ecuador" },
            { label: "Egypt", value: "Egypt" },
            { label: "Eritrea", value: "Eritrea" },
            { label: "El Salvador", value: "El Salvador" },
            { label: "Spain", value: "Spain" },
            { label: "Estonia", value: "Estonia" },
            { label: "Ethiopia", value: "Ethiopia" },
            { label: "Fiji", value: "Fiji" },
            { label: "Finland", value: "Finland" },
            { label: "France", value: "France" },
            { label: "Micronesia", value: "Micronesia" },
            { label: "Gabon", value: "Gabon" },
            { label: "Gambia", value: "Gambia" },
            { label: "Great Britain", value: "Great Britain" },
            { label: "Guinea-Bissau", value: "Guinea-Bissau" },
            { label: "Georgia", value: "Georgia" },
            { label: "Equatorial Guinea", value: "Equatorial Guinea" },
            { label: "Germany", value: "Germany" },
            { label: "Ghana", value: "Ghana" },
            { label: "Greece", value: "Greece" },
            { label: "Grenada", value: "Grenada" },
            { label: "Guatemala", value: "Guatemala" },
            { label: "Guinea", value: "Guinea" },
            { label: "Guam", value: "Guam" },
            { label: "Guyana", value: "Guyana" },
            { label: "Haiti", value: "Haiti" },
            { label: "Hong Kong", value: "Hong Kong" },
            { label: "Honduras", value: "Honduras" },
            { label: "Hungary", value: "Hungary" },
            { label: "Indonesia", value: "Indonesia" },
            { label: "India", value: "India" },
            { label: "Iran", value: "Iran" },
            { label: "Ireland", value: "Ireland" },
            { label: "Iraq", value: "Iraq" },
            { label: "Iceland", value: "Iceland" },
            { label: "Israel", value: "Israel" },
            { label: "Virgin Islands", value: "Virgin Islands" },
            { label: "Italy", value: "Italy" },
            { label: "British Virgin Islands", value: "British Virgin Islands" },
            { label: "Jamaica", value: "Jamaica" },
            { label: "Jordan", value: "Jordan" },
            { label: "Japan", value: "Japan" },
            { label: "Kazakhstan", value: "Kazakhstan" },
            { label: "Kenya", value: "Kenya" },
            { label: "Kyrgyzstan", value: "Kyrgyzstan" },
            { label: "Kiribati", value: "Kiribati" },
            { label: "South Korea", value: "South Korea" },
            { label: "Saudi Arabia", value: "Saudi Arabia" },
            { label: "Kuwait", value: "Kuwait" },
            { label: "Laos", value: "Laos" },
            { label: "Latvia", value: "Latvia" },
            { label: "Libya", value: "Libya" },
            { label: "Liberia", value: "Liberia" },
            { label: "Saint Lucia", value: "Saint Lucia" },
            { label: "Lesotho", value: "Lesotho" },
            { label: "Lebanon", value: "Lebanon" },
            { label: "Liechtenstein", value: "Liechtenstein" },
            { label: "Lithuania", value: "Lithuania" },
            { label: "Luxembourg", value: "Luxembourg" },
            { label: "Madagascar", value: "Madagascar" },
            { label: "Morocco", value: "Morocco" },
            { label: "Malaysia", value: "Malaysia" },
            { label: "Malawi", value: "Malawi" },
            { label: "Moldova", value: "Moldova" },
            { label: "Maldives", value: "Maldives" },
            { label: "Mexico", value: "Mexico" },
            { label: "Mongolia", value: "Mongolia" },
            { label: "Marshall Islands", value: "Marshall Islands" },
            { label: "Macedonia", value: "Macedonia" },
            { label: "Mali", value: "Mali" },
            { label: "Malta", value: "Malta" },
            { label: "Montenegro", value: "Montenegro" },
            { label: "Monaco", value: "Monaco" },
            { label: "Mozambique", value: "Mozambique" },
            { label: "Mauritius", value: "Mauritius" },
            { label: "Mauritania", value: "Mauritania" },
            { label: "Myanmar", value: "Myanmar" },
            { label: "Namibia", value: "Namibia" },
            { label: "Nicaragua", value: "Nicaragua" },
            { label: "Netherlands", value: "Netherlands" },
            { label: "Nepal", value: "Nepal" },
            { label: "Nigeria", value: "Nigeria" },
            { label: "Niger", value: "Niger" },
            { label: "Norway", value: "Norway" },
            { label: "Nauru", value: "Nauru" },
            { label: "New Zealand", value: "New Zealand" },
            { label: "Oman", value: "Oman" },
            { label: "Pakistan", value: "Pakistan" },
            { label: "Panama", value: "Panama" },
            { label: "Paraguay", value: "Paraguay" },
            { label: "Peru", value: "Peru" },
            { label: "Philippines", value: "Philippines" },
            { label: "Palestine", value: "Palestine" },
            { label: "Palau", value: "Palau" },
            { label: "Papua New Guinea", value: "Papua New Guinea" },
            { label: "Poland", value: "Poland" },
            { label: "Portugal", value: "Portugal" },
            { label: "North Korea", value: "North Korea" },
            { label: "Puerto Rico", value: "Puerto Rico" },
            { label: "Qatar", value: "Qatar" },
            { label: "Romania", value: "Romania" },
            { label: "South Africa", value: "South Africa" },
            { label: "Russia", value: "Russia" },
            { label: "Rwanda", value: "Rwanda" },
            { label: "Samoa", value: "Samoa" },
            { label: "Senegal", value: "Senegal" },
            { label: "Seychelles", value: "Seychelles" },
            { label: "Singapore", value: "Singapore" },
            { label: "Saint Kitts and Nevis", value: "Saint Kitts and Nevis" },
            { label: "Sierra Leone", value: "Sierra Leone" },
            { label: "Slovenia", value: "Slovenia" },
            { label: "San Marino", value: "San Marino" },
            { label: "Solomon Islands", value: "Solomon Islands" },
            { label: "Somalia", value: "Somalia" },
            { label: "Serbia", value: "Serbia" },
            { label: "Sri Lanka", value: "Sri Lanka" },
            { label: "Sao Tome and Principe", value: "Sao Tome and Principe" },
            { label: "Sudan", value: "Sudan" },
            { label: "Switzerland", value: "Switzerland" },
            { label: "Suriname", value: "Suriname" },
            { label: "Slovakia", value: "Slovakia" },
            { label: "Sweden", value: "Sweden" },
            { label: "Swaziland", value: "Swaziland" },
            { label: "Syria", value: "Syria" },
            { label: "Tanzania", value: "Tanzania" },
            { label: "Tonga", value: "Tonga" },
            { label: "Thailand", value: "Thailand" },
            { label: "Tajikistan", value: "Tajikistan" },
            { label: "Turkmenistan", value: "Turkmenistan" },
            { label: "Timor-Leste", value: "Timor-Leste" },
            { label: "Togo", value: "Togo" },
            { label: "Chinese Taipei", value: "Chinese Taipei" },
            { label: "Trinidad and Tobago", value: "Trinidad and Tobago" },
            { label: "Tunisia", value: "Tunisia" },
            { label: "Turkey", value: "Turkey" },
            { label: "Tuvalu", value: "Tuvalu" },
            { label: "United Arab Emirates", value: "United Arab Emirates" },
            { label: "Uganda", value: "Uganda" },
            { label: "Ukraine", value: "Ukraine" },
            { label: "Uruguay", value: "Uruguay" },
            { label: "United States", value: "United States" },
            { label: "Uzbekistan", value: "Uzbekistan" },
            { label: "Vanuatu", value: "Vanuatu" },
            { label: "Venezuela", value: "Venezuela" },
            { label: "Vietnam", value: "Vietnam" },
            { label: "Saint Vincent and the Grenadines", value: "Saint Vincent and the Grenadines" },
            { label: "Yemen", value: "Yemen" },
            { label: "Zambia", value: "Zambia" },
            { label: "Zimbabwe", value: "Zimbabwe" }
        ]

        const selectOptions =
            options.map(option => (
                <option key={option.label} value={option.value}>
                    {option.label}
                </option>
            ))
        return (
            <div className="landing">
                <div className="landingInfo">
                    <h1>Travel Help</h1>
                    <p>Know the country before you go. Let others know what to expect.</p>
                </div>
                <form onSubmit={this.handleSubmit} className="searchBar">
                    <select
                        className="searchBarInput"
                        name='country'
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        {selectOptions}
                    </select>
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