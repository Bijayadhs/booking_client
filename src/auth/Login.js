import React from 'react';
import LoginForm from '../components/LoginForm';

export const Login = ({ history }) => {
    return (
        <>
            <div className="bg-light container-fluid p-3 text-center">
                <h2>Login</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3 ">
                        <LoginForm history={history} />
                    </div>
                </div>
            </div>
        </>
    )
}
