import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserAuthToken = createContext();

const UserTokenProvider = ({ children }) => {
    const navigate = useNavigate();

    const [token, setToken] = useState("")
    console.log(token)

    useEffect(() => {
        const tokenItem = sessionStorage.getItem("token");

        setToken(tokenItem)
    }, []);


    const logout = () => {
        sessionStorage.removeItem("token");

        navigate("/logoutpage");
    }

    const values = {
        token,
        logout
    }

    return (
        <UserAuthToken.Provider value={values}>
            {children}
        </UserAuthToken.Provider>
    )
};

export { UserAuthToken, UserTokenProvider }