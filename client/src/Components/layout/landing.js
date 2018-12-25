import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'

class Home extends Component {

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/CountryForum')
        }
    }

    render() {
        return (
            <div>
                <h1>Travel Tips</h1>
                <div>
                    <p>Know before you go</p>
                    <hr />
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {})(Home)