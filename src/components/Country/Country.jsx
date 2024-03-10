import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {

    const { name, flags, population, capital, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visite'}
        </div>
    );
};

export default Country;