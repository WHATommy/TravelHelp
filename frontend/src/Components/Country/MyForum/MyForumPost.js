import React, { Component } from 'react'
import { deletePost } from '../../../actions/postAction'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MyForumPost extends Component {

    onDeleteClick(id) {
        this.props.deletePost(id);
    }

    render() {
        return (
            <div className="post">
                <button className="deletePost fas fa-trash" onClick={this.onDeleteClick.bind(this, this.props.id)}></button>
                <h1>{this.props.title}</h1>
                <div className="postInfo">
                    <p className="pCountry">Country: {this.props.country}</p>
                    <p className="pUser">User: {this.props.user}</p>
                    <p className="pDate">Date: {this.props.date.toString().slice(0, 10)}</p>
                </div>
                <div className="postContent">
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

MyForumPost.propTypes = {
    deletePost: PropTypes.func.isRequired
}

export default connect(null, { deletePost })(MyForumPost)