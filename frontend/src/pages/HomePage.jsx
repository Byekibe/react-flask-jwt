import { Link } from "react-router-dom";
import Header from "../components/Header";
import { UserAuthToken } from "../context/UserAuthContext";
import { useContext } from "react";

const HomePage = () => {
    const { token } = useContext(UserAuthToken);
    return (
        <>
            <Header />
            <div className="container">
                <h1>Welcome...</h1>

        {
            !token && (
                <h3>
                <Link to="/login">Log in here</Link>
            </h3>
            )
        }
            </div>
        </>
    );
};

export default HomePage;