import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { login } from '../actions/auth';
import { useDispatch } from 'react-redux';

const LoginForm = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password });
            console.log('login', res.data);
            toast.success('Login successful');
            // local storages
            window.localStorage.setItem('auth', JSON.stringify(res.data))
            // dispatch state
            dispatch({ type: 'LOGGED_IN_USER', payload: res.data })
            await history.push('/dashboard');
        } catch (err) {
            console.log(err)
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
