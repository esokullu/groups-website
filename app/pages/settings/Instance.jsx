// Modules
import React from 'react';
import {Redirect} from 'react-router-dom';

// Components
import Main from '~/components/Main';
import SubscriptionNotification from '~/components/SubscriptionNotification';

// Pages
import Basics from './instance/Basics'; // Settings > Instance > Basics
import Members from './instance/Members'; // Settings > Instance > Members
import Password from './instance/Password'; // Settings > Instance > Password
import Export from './instance/Export' // Settings > Instance > Export
import Reboot from './instance/Reboot'; // Settings > Instance > Reboot

// Scripts
import generateRandomKey from '~/scripts/generateRandomKey';
// import setPasswordGjs from '~/scripts/setPasswordGjs';
import fetchAdminPassword from '~/scripts/fetchAdminPassword';

// Page: Settings > Instance
export default class Instance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adminPassword: 'N/A',
            configuration: {}
        }
        this.availablePages = [
            'export', // Export
            'basics', // Basics
            'members', 'password', // Administration
            'reboot' // Reboot
        ];
        this.setItemProperties = this.setItemProperties.bind(this);
        this.reconfigure = this.reconfigure.bind(this);
    }
    componentWillMount() {
        this.setItemProperties();
    }
    componentDidMount() {
        const self = this;
        let uuid = self.state.configuration.uuid;
        fetchAdminPassword(function(response) {
            self.setState({
                adminPassword: response.success ? response.body.password: 'N/A'
            })
        });
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.item != this.state.id) {
            this.setItemProperties(nextProps.list, nextProps.item);
        }
    }
    setItemProperties() {
        let {item, identifier} = this.props.params;
        let instance = this.props.instances.filter(instance => instance.name === identifier)[0];
        let _email = this.props.email;
        let _uid = this.props.uid;
        if(this.availablePages.includes(item) && instance) {
            this.setState({
                configuration: {
                    slug: instance.name,
                    id: instance.id,
                    name: instance.name,
                    uuid: instance.uuid,
                    title: instance.title,
                    theme: instance.theme,
                    color: instance.color,
                    description: instance.description,
                    url: instance.url,
                    moderated: instance.moderated,
                    members: instance.members || {},
                    pendingComments: instance.pendingComments || [],
                    hash: instance.hash,
                    subscription: instance.subscription,
                    email: _email,
                    userId: _uid
                }
            });
        } else {
            this.setState({
                error: true
            });
        }
    }
    reconfigure(newConfiguration) {
        this.setState({
            configuration: {
                ...this.state.configuration,
                ...newConfiguration
            }
        });
    }
    render() {
        let {label} = this.props.menu;
        let {item, identifier} = this.props.params;
        return this.state.error
            ? <Redirect to="/settings" />
            : <Main data-page="instance">
                <div className="container">
                    <h1>{label}</h1>
                    {
                        this.state.configuration.subscription ?
                            null
                            : <SubscriptionNotification userId={this.state.configuration.userId} uuid={this.state.configuration.uuid} email={this.state.configuration.email} />
                    }
                    {item === 'basics' &&
                        <Basics
                            configuration={this.state.configuration}
                            update={this.props.update}
                            reconfigure={this.reconfigure} />
                    }
                    {item === 'reboot' &&
                        <Reboot
                            update={this.props.update} />
                    }
                    {item === 'members' &&
                        <Members
                            configuration={this.state.configuration}
                            update={this.props.update}
                            reconfigure={this.reconfigure} />
                    }
                    {item === 'password' &&
                        <Password password={this.state.adminPassword} />
                    }
                    {item === 'export' &&
                        <Export />
                    }
                </div>
            </Main>
    }
}