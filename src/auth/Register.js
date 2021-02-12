import React from "react";
import RegisterForm from '../components/RegisterForm';


export const Register = ({ history }) => {

  return (
    <>
      <div className="bg-light container-fluid p-3 text-center">
        <h2>Register</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3 ">

            <RegisterForm history={history} />
          </div>
        </div>
      </div>
    </>
  );
};
