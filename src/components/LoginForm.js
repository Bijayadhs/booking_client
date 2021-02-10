import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { login } from '../actions/auth';

const LoginForm = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            console.log('login', response.data);
            toast.success('Login successful');
            await history.push('/');
        } catch (err) {
            if (err.response.status === 400) {
                toast.error(err.response.data)
            }
        }

    };
    return (

        <form onSubmit={handleSubmit} className="mt-3">

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

    )
}
export default LoginForm;
