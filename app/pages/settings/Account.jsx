// Modules
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Main from '~/components/Main';

// Pages
import Credentials from './account/Credentials'; // Settings > Account > Credentials
import Subscriptions from './account/Subscriptions'; // Settings > Account > Subscriptions
import Cancellation from './account/Cancellation'; // Settings > Account > Cancellation
import Tickets from './account/Tickets'; // Settings > Account > Tickets

// Scripts
import generateRandomKey from '~/scripts/generateRandomKey';

// Page: Settings > Account
export default class Account extends React.Component {
    constructor(props) {
        super(props);
        this.availablePages = [
            'credentials',
            'subscriptions',
            'cancellation',
            'tickets'
        ];
    }
    render() {
        let {item, menu} = this.props;
        return (
            <Main data-page="account">
                <div className="container">
                    {item === 'credentials' &&
                        <Credentials
                            label={menu.label}
                            account={this.props.account}
                            update={this.props.update} />
                    }
                    {item === 'subscriptions' &&
                        <Subscriptions
                            label={menu.label}
                            id={this.props.id}
                            account={this.props.account}
                            instances={this.props.instances}
                            update={this.props.update} />
                    }
                    {item === 'cancellation' &&
                        <Cancellation
                            label={menu.label}
                            account={this.props.account}
                            instances={this.props.instances}
                            update={this.props.update} />
                    }
                    {item === 'tickets' &&
                        <Tickets
                            label={menu.label} />
                    }
                </div>
            </Main>
        )
    }
}
