import React, { useState } from 'react';

const LoginForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.table({ name, email, password });

    };
    return (

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

    )
}
export default LoginForm;
