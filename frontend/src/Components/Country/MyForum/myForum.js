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
            myPosts: [],
            errors: {}
        }

    }

    jsonEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/posts/')
            .then(res => {
                console.log(res)
                const myPosts = res.data.map(stat => {
                    return {
                        id: stat._id,
                        title: stat.title,
                        country: stat.country,
                        user: stat.username,
                        date: stat.date,
                        text: stat.text
                    }
                })
                if (!this.jsonEqual(myPosts, this.state.myPosts)) {
                    this.setState({ myPosts });
                }
            })
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