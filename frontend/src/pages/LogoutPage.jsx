import { Link } from 'react-router-dom';


const LogoutPage = () => {
    return (
        <>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <h1>
                    Log out successful
                </h1>
                

                {/* <Link className='btn btn-outline-primary' to="/login">Log in</Link> */}
                {window.location.href = "/login"}

            </div>
        </>
    );
};

export default LogoutPage;