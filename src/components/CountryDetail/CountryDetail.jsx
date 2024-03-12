import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    // const { country, handleVisitedCountries, handleVisitedFlags } = props
    return (
        <div>
            <h3>Country Details</h3>
            <hr />
            {/* <CountryData
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;