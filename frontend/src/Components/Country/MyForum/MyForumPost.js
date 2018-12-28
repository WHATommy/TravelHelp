import React from 'react'

const MyForumPost = (props) => {
    return (
        <div className="post">
            <button className="deletePost fas fa-trash"></button>
            <button className="editPost fas fa-pen"></button>
            <h1>{props.title}</h1>
            <div className="postInfo">
                <p class="pCountry">Country: {props.country}</p>
                <p class="pUser">User: {props.user}</p>
                <p class="pDate">Date: {props.date.toString().slice(0, 10)}</p>
            </div>
            <div className="postContent">
                <p>{props.text}</p>
            </div>
        </div>
    )
}


export default MyForumPost