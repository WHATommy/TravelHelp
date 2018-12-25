import React from 'react'
import Forum from './forum/forum'

const Forums = (props) => {
    return (
        <div>
            {props.forums.map(stat =>
                <Forum
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

export default Forums

