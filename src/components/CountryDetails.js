import { Link, useParams } from "react-router-dom";
import GoogleMaps from './GoogleMaps';


export default function CountryDetails({ allCountries }) {
    const { id } = useParams();

    const country = allCountries.find(country => country.alpha3Code === id)
    const currencies = [];
    currencies.symbol = "Não Informado";
    currencies.name = "Não Informado"

    try {
        currencies.symbol = country.currencies[Object.keys(country.currencies)[0]].symbol;
        currencies.name = country.currencies[Object.keys(country.currencies)[0]].name;
    }
    catch (e) {
        currencies.symbol = "Não informado";
        currencies.name = "Não informado";
    }
    return (
        <div className="col-7">

            <img
                src={
                    'https://flagpedia.net/data/flags/icon/72x54/' +
                    country.alpha2Code.toLowerCase() +
                    '.png'
                }
                style={{ maxWidth: '30px', marginRight: '10px' }}
                alt={`Bandeira do país ${country.name.common}`}
            ></img>
            <h1>   {country.name.common} </h1>
            <table className="table table-hover striped bordered hover">
                <thead></thead>
                <tbody>

                    <tr>
                        <td style={{ width: '30%' }}>Capital</td>
                        <td> {country.capital}</td>
                    </tr>

                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km
                            <sup>2</sup>
                        </td>
                    </tr>

                    <tr>
                        <td>Region</td>
                        <td>{country.region}</td>
                    </tr>

                    <tr>
                        <td>Sub-Region</td>
                        <td>{country.subregion}</td>
                    </tr>

                    <tr>
                        <td>Currency</td>
                        <td> {currencies.symbol} -  {currencies.name}
                        </td>
                    </tr>



                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul className="list-group list-group-flush">

                                {country.borders.map(countryBorder =>

                                    <li key={countryBorder} className="list-group-item list-group-item-action border-0">
                                        <Link to={`/${countryBorder}`}>
                                            {countryBorder}
                                        </Link>
                                    </li>

                                )}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">Localization</td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <GoogleMaps country={country.name.common}></GoogleMaps>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}