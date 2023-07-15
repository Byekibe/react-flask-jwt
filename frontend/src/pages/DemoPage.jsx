import { useEffect, useState } from "react";

const DemoPage = () => {
    const [demoData, setDemoData] = useState("");
    const url = "http://localhost:7002/protected"
    useEffect(() => {
        const requestData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            setDemoData(data)
        };

        requestData()
    }, [])
    return (
        <>
            {demoData.msg}
        </>
    );
};

export default DemoPage;