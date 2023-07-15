import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserAuthToken } from "../context/UserAuthContext";

const Header = () => {
    const { logout } = useContext(UserAuthToken);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <Link to="/demo" className="nav-link">Demo</Link>
                    </li>
                </ul>
                <div className="d-flex ms-auto">
                    <button onClick={logout} className="btn btn-outline-primary">
                        Logout
                    </button>
                </div>
                </div>
            </div>
        </nav>
    )
};

export default Header;