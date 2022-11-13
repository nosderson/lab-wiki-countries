import { Link } from "react-router-dom";

function CountrieList({ allCountries }) {
    return (
        <div className="col-5 over-flow-auto" style={{ maxHeight: '90vh', overflowX: 'hidden' }}>
            <div className="list-group">

                {allCountries.map(country =>
                    <Link
                        key={country.alpha3Code}
                        to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action py-5">
                        <img
                            src={
                                'https://flagpedia.net/data/flags/icon/72x54/' +
                                country.alpha2Code.toLowerCase() +
                                '.png'
                            }
                            style={{ maxWidth: '30px', marginRight: '10px' }}
                            alt={`Bandeira do país ${country.name.common}`}

                        ></img>

                        {country.name.common}
                    </Link>
                )}
            </div>
        </div>
    );
}

export default CountrieList