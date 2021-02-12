import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Avatar } from 'antd';
import moment from 'moment';


const ConnectNav = () => {
    const { auth } = useSelector((state) => ({ ...state }));
    const { user } = auth;

    return (
        <div className="d-flex justify-content-around">
            <Card>
                <Card.Meta avatar={<Avatar>{user.name[0]}</Avatar>} title={user.name} description={`Joined ${moment(user.createdAt).fromNow()}`} />
            </Card>
            <p>Pending Balance</p>
            <p>Payout Setting</p>
        </div>
    )
}

export default ConnectNav
