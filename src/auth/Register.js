import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = ({ history }) => {

    return (
        <>
            <div className="bg-info container-fluid p-5 text-center">
                <h1>Register Page</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <RegisterForm history={history} />
                    </div>

                </div>
            </div>
        </>
    )
}
export default Register;