import './App.css';
import Navbar from "./components/Navbar";
import countries from "./countries.json";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="cointaner pt-3">
        <div className="row">
          <CountriesList allCountries={countries} />
          <Routes>
            <Route path="/:id" element={<CountryDetails allCountries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;