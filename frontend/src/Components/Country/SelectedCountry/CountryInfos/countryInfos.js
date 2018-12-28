import React from 'react'
import CountryInfo from './CountryInfo/CountryInfo'

const CountryInfos = (props) => {
    return (
        <div className="infos">
            {props.countryInfos.map(stat =>
                <CountryInfo
                    name={stat.name}
                    capital={stat.capital}
                    region={stat.region}
                    population={stat.population}
                    currencyName={stat.currencyName}
                    currencySymbol={stat.currencySymbol}
                    language={stat.language}
                />)}
        </div>
    )

}

export default CountryInfos