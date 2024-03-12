import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all'
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])

    const handleVisitedCountries = (country) => {
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country_container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;