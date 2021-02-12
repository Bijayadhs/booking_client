import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { register } from '../actions/auth';

const RegisterForm = ({ history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.table({ name, email, password });
        try {
            const response = await register({ name, email, password });
            console.log('Reg', response.data);
            toast.success('Registered successfully');
            // await history.push('/login');
        } catch (err) {
            console.log('Error:', err)
            // toast.error(err.response.data)
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="mt-3">
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" className="form-control" placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="name">Email</label>
                    <input type="email" className="form-control" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label" htmlFor="name">Password</label>
                    <input type="password" className="form-control" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>


            </form>
        </>

    )
};

export default RegisterForm;
