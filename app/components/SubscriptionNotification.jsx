import React from 'react';
import { Link } from 'react-router-dom';

export default class SubscriptionNofication extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p className="subscription-nofication">This instance is inactive, so the panel may not function properly. Create a new account or to reactivate please email business@risg.co</p>
        )
    }
}