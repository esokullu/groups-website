import React from 'react';
import { Link } from 'react-router-dom';

export default class SubscriptionNotification extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() { 
        window.location.href = "/settings/account/"+this.props.userId+"/subscriptions";
    }
    render() {
        return (
            <p className="subscription-notification">This instance is inactive, so the panel may not function properly. <a onClick={this.handleClick}>Click to revisit and reactivate</a> </p>
        )
    }
}