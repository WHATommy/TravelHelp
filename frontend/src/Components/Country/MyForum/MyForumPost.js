import React from 'react'
import { deletePost } from '../../../actions/postAction'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const MyForumPost = (props) => {
    return (
        <div className="post">
            <button className="deletePost fas fa-trash" onClick={deletePost(props.id)}></button>
            <h1>{props.title}</h1>
            <div className="postInfo">
                <p className="pCountry">Country: {props.country}</p>
                <p className="pUser">User: {props.user}</p>
                <p className="pDate">Date: {props.date.toString().slice(0, 10)}</p>
            </div>
            <div className="postContent">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

MyForumPost.propTypes = {
    deletePost: PropTypes.func.isRequired
}

export default connect(null, { deletePost })(MyForumPost)