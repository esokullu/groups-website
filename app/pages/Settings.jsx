import React from 'react';
import {Redirect} from 'react-router';

import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Menu from './settings/Menu';
import Summary from './settings/Summary';
import Account from './settings/Account';
import Instance from './settings/Instance';
import MessagesBanner from './settings/MessagesBanner';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: undefined,
            account: undefined,
            instances: undefined,
            accountMenu: [],
            instancesMenu: []
        }
        this.handleMenu = this.handleMenu.bind(this);
        this.handleAccountMenu = this.handleAccountMenu.bind(this);
        this.handleInstancesMenu = this.handleInstancesMenu.bind(this);
        this.handleSidebar = this.handleSidebar.bind(this);
        this.handleMenuUpdate = this.handleMenuUpdate.bind(this);
        this.handleAccountUpdate = this.handleAccountUpdate.bind(this);
        this.handleInstanceUpdate = this.handleInstanceUpdate.bind(this);
    }
    componentWillMount() {
        this.props.client && this.setState({
            id: this.props.client.id,
            account: this.props.client.account,
            instances: this.props.client.instances
        });
        this.handleMenu(this.props.client);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.print != this.props.print) {
            nextProps.client && this.setState({
                id: nextProps.client.id,
                account: nextProps.client.account,
                instances: nextProps.client.instances
            });
            this.handleMenu(nextProps.client);
        }
    }
    handleMenu(client) {
        if(client) {
            client.id && this.handleAccountMenu(client.id);
            client.instances && this.handleInstancesMenu(client.instances);
        }
    }
    handleAccountMenu(id) {
        if(id) {
            this.setState({
                accountMenu: [
                    {
                        label: "Credentials",
                        id: "credentials",
                        parent: id
                    },
                    {
                        label: "Subscriptions",
                        id: "subscriptions",
                        parent: id
                    }
                ]
            });
        }
    }
    handleInstancesMenu(instances) {
        let instancesMenu = [];
        instances.forEach((item) => {
            let label = item.url;
            label = label.replace('https://', '');
            label = label.replace('http://', '');
            label = label.replace('www.', '');
            label = label.replace(/\/$/, '');
            let family = label.replace('.', '-');
            instancesMenu.push({
                label: label,
                family: family,
                toggle: true,
                uuid: item.uuid,
                url: item.url,
                live: item.production
            });
            instancesMenu.push({
                label: "Members",
                id: "members",
                parent: family
            }),
            instancesMenu.push({
                label: "Reboot",
                id: "reboot",
                parent: family
            }),
            instancesMenu.push({
                label: "Admin Password",
                id:"adminpassword",
                parent:family
            });
            instancesMenu.push({
                label: "Export",
                id:"export",
                parent:family
            });
        });
        this.setState({
            instancesMenu: instancesMenu
        });
    }
    handleSidebar() {
        this.refs.sidebar && this.refs.sidebar.closeSidebar();
    }
    handleMenuUpdate(identifier) {
        let toggle = document.getElementById('toggle-' + identifier);
        if(!toggle.classList.contains('on')) {
            toggle.click();
            toggle.classList.add('updated');
            setTimeout(function() {
                toggle.classList.remove('updated');
            }, 500);
        }
        let link = document.querySelectorAll('a[href="/settings/instances/' + identifier + '/code"]')[0];
        link.classList.add('updated');
        setTimeout(function() {
            link.classList.remove('updated');
        }, 500);
    }
    handleAccountUpdate() {
        this.props.setClient();
    }
    handleInstanceUpdate(identifier) {
        this.props.setClient();
        this.handleMenuUpdate(identifier);
    }
    render() {
        let params = this.props.params;
        if (this.props.session) {
             if(!this.props.client){
                return <Main loading={true} />
             }
             return (this.props.client.instances && this.props.client.instances.length > 0)
             ? (<Main id="settings" data-page="settings">
                <Sidebar ref="sidebar">
                    <Menu params={params} accountMenuItems={this.state.accountMenu} instancesMenuItems={this.state.instancesMenu} close={this.handleSidebar} update={this.props.setClient} />
                </Sidebar>
                {params.category == 'account' &&
                <Account account={this.state.account} instances={this.state.instances} item={['credentials', 'subscriptions'].includes(params.item) ? params.item : 'credentials'} list={this.state.accountMenu} update={this.handleAccountUpdate} />
                }
                {params.category == 'instances' &&
                <Instance instances={this.state.instances} item={['adminpassword', 'reboot', 'members','export'].includes(params.item) ? params.item : 'code'} list={this.state.instancesMenu} update={this.handleInstanceUpdate} />
                }
                {((params.category == undefined)) &&
                <Summary />
                }
            </Main>)
            : <MessagesBanner client={this.props.client} />
        } else {
            var canUseDOM = (
    	    	typeof window !== 'undefined' &&
    		    window.document &&
    		    window.document.createElement
    	    );
    	    if(canUseDOM) {
                return <Redirect to="/" />;
    	    } else {
    	        return <Main loading={true} />;
    	    }
        }
    }
}
