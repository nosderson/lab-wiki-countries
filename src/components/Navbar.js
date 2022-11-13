import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav className="navbar navbar-dark bg-primary mb3">
            <div className="container">
                <Link to='/'class="navbar-brand">LAB-WikiCountries</Link>
            </div>
        </nav>
    )
}

export default Navbar