import React from 'react'
import MyForumPost from './MyForumPost'

const MyForumPosts = (props) => {
    return (
        <div className="postSpace">
            {props.myPosts.map(stat =>
                <MyForumPost
                    id={stat.id}
                    title={stat.title}
                    country={stat.country}
                    user={stat.user}
                    date={stat.date}
                    text={stat.text}
                />)}
        </div>
    )

}

export default MyForumPosts
