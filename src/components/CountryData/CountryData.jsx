
const CountryData = (country, handleVisitedCountries, handleVisitedFlags) => {
    console.log("inside", country, handleVisitedCountries, handleVisitedFlags);
    return (
        <div>
            <p><small>Country Data: {country.country.name.common}</small></p>
        </div>
    );
};

export default CountryData;