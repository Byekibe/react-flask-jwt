import { useState, useContext } from "react";
import { UserAuthToken } from "../context/UserAuthContext.jsx";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const url = "http://localhost:7002/token";
    const formData = {
        email: email,
        password: password
    }

    const { token } = useContext(UserAuthToken);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email + password)
        const postLoginCred = async () => {
            const reqOptions = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }
            try {
                const res = await fetch(url, reqOptions)
                const data = await res.json()
                console.log(`Data: ${JSON.stringify(data)}`);
                if (data.msg !== "Wrong credentials") {
                    sessionStorage.setItem("token", data.access_token)
                    navigate("/")
                }
                
                // if (token != null) {
                //     navigate("/");
                // } 
            } catch (error) {
                console.log(error)
            }
        }

        postLoginCred();
        setEmail("");
        setPassword("");
    }

    return (
        <>
        {
            (token && token !="" && token != undefined)? "You are logged in with token" + token : (

            <div className="login-container mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="name@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        required
    
                    />
                    <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input 
                        type="password" 
                        className="form-control" 
                        id="floatingPassword" 
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                        required
    
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            )
        }

        </>
    );
};

export default LoginPage;