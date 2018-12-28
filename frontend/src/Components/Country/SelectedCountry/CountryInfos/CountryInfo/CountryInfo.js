import React from 'react'

const CountryInfo = (props) => {
    return (
        <div className="info">
            <h1>GENERAL INFORMATION:</h1>
            <h2>{props.name}</h2>
            <div className="information">
                <p>Capital: {props.capital}</p>
                <p>Region: {props.region}</p>
                <p>Propulation: {props.population}</p>
                <p>Currency: {props.currencyName}({props.currencySymbol})</p>
                <p>Language: {props.language}</p>
            </div>
        </div>
    )
}

export default CountryInfo