import React from 'react'
import Forum from './forum/forum'

const Forums = (props) => {
    return (
        <div className="posts">
            {props.forums.map(stat =>
                <Forum
                    id={stat.id}
                    title={stat.title}
                    country={stat.country}
                    user={stat.user}
                    date={stat.date}
                    text={stat.text}
                    likes={stat.likes}
                />)}
        </div>
    )

}

export default Forums

