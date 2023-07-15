import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserAuthToken } from "../context/UserAuthContext";

const Header = () => {
    const { logout, token } = useContext(UserAuthToken);

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to="/" className="navbar-brand">JWT</Link>
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
                    {
                        token && (
                            <button onClick={logout} className="btn btn-outline-primary me-2">
                                Logout
                            </button>
                        )
                    }
                    { !token && <Link to="/login" className="btn btn-outline-primary">
                        Log in
                    </Link>}
                </div>
                </div>
            </div>
        </nav>
        </>
    )
};

export default Header;