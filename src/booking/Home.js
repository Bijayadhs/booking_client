import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
    const { user } = useSelector((state) => ({ ...state }))
    return (
        <div className="bg-primary container-fluid h1 p-5 text-center">
            HomePage {JSON.stringify(user)}
        </div>
    )
}

export default Home
