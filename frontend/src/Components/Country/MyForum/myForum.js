import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyForumPosts from './myForumPosts';
import { getMyPost } from '../../../actions/postAction'

import axios from 'axios'

class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myPosts: []
        }

    }

    jsonEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }

    componentDidUpdate() {
        this.props.getMyPost();
        const myPost = this.props.myPost.myPost
        if (!this.jsonEqual(myPost, this.state.myPosts)) {
            this.setState({ myPosts: myPost });
        }
    }

    componentDidMount() {
        this.props.getMyPost();
    }


    render() {
        return (
            <div>
                <MyForumPosts
                    myPosts={this.state.myPosts}
                />
            </div>
        )
    }
}

MyPosts.propTypes = {
    getMyPost: PropTypes.func.isRequired,
    myPost: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    myPost: state.myPost,
    errors: state.errors
})


export default connect(mapStateToProps, { getMyPost })(MyPosts)