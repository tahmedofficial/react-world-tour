import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {

    const { name, flags, population, capital, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    const passWithParams = () => handleVisitedCountries(country)


    return (
        <div className={`country ${visited && "visietd"}`}>
            <img src={flags.png} alt="" />
            <h3 style={{ color: visited ? "purple" : "blue" }}>Name: {name.common}</h3>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passWithParams}>Mark visited</button>
            <br />
            <br />
            <button onClick={() => handleVisitedFlags(flags.png)}>Add Flags</button>
            <br />
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <span style={{ marginLeft: "10px" }}>{visited ? 'I have visited this country' : 'I want to visite'}</span>
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;