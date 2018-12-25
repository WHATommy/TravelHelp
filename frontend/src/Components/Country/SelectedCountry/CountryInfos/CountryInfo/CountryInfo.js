import React from 'react'

const CountryInfo = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
            <p>{props.capital}</p>
            <p>{props.region}</p>
            <p>{props.population}</p>
            <p>{props.currencyName}</p>
            <p>{props.currencySymbol}</p>
            <p>{props.language}</p>
        </>
    )
}

export default CountryInfo