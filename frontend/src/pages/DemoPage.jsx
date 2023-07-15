import { useContext, useEffect, useState } from "react";
import { UserAuthToken } from "../context/UserAuthContext.jsx";
import Header from "../components/Header.jsx";

const DemoPage = () => {
    const { token } = useContext(UserAuthToken);
    console.log(`MyToken: ${token}`)
    const [demoData, setDemoData] = useState("");
    console.log(demoData)
    const url = "http://localhost:7002/protected"
    const reqOpts = {
        'method': 'GET',
        'headers': {
            Accept: 'application/json','Content-Type': 'application/json',
            Authorization: "Bearer " + token,
        },
        
    }
    useEffect(() => {
        const requestData = async () => {
            try {
                const res = await fetch(url, reqOpts);
                const data = await res.json();
                console.log(data);
                setDemoData(data);
            } catch (error) {
                console.log(error);
            }
        };

        requestData();
    }, [token])
    return (
        <>
        <Header />
        <div className="container">
            {
                token?  (
                    <div className="container">
                    <h3>Hey Successful Login...</h3>
                    <p>Welcome to Demo Page! <span style={{fontSize: "2em"}}>{demoData.current_user}</span></p>
                </div>
                ) : demoData.msg
            }
        </div>
        </>
    );
};

export default DemoPage;