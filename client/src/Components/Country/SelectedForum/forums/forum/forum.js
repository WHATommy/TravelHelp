import React from 'react'

const Forum = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.country}</p>
            <p>{props.user}</p>
            <p>{props.date}</p>
            <p>{props.text}</p>
        </>
    )
}


export default Forum