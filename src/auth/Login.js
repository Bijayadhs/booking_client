import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {


    return (
        <>
            <div className="bg-info container-fluid p-5 text-center">
                <h1>Login Page</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <LoginForm />
                    </div>

                </div>
            </div>
        </>
    )
}
export default Login;
