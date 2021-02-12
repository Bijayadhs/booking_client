import React from 'react';
import DashboardNav from '../components/DashboardNav';
import ConnectNav from '../components/ConnectNav';

const Dashboard = () => {
    return (
        <>
            <div className="container-fluid p-4 bg-info text-center">
                <ConnectNav />
            </div>
            <div className="container-fluid p-3 ">
                <DashboardNav />
            </div>
            <div className="container">Show all bookings</div>
        </>
    )
}

export default Dashboard
