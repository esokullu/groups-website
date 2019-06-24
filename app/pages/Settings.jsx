// Modules
import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Components
import Main from '~/components/Main';
import Sidebar from '~/components/Sidebar';
import FlatMenu from '~/components/FlatMenu';

// Pages
import Summary from './settings/Summary';
import Account from './settings/Account';
import Instance from './settings/Instance';
import Unavailable from './settings/Unavailable';

// Data
import menu from '~/data/settings/menu';

// Page: Settings
export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: {
                id: 'settings',
                label: 'Settings'
            }
        }
        this.handleActiveItem = this.handleActiveItem.bind(this);
        this.handleSidebar = this.handleSidebar.bind(this);
        this.triggerMenuItem = this.triggerMenuItem.bind(this);
        this.handleInstanceChange = this.handleInstanceChange.bind(this);
    }
    componentWillMount() {
        this.props.client && this.setState({
            id: this.props.client.id,
            account: this.props.client.account,
            instances: this.props.client.instances,
            selectedInstanceIdx: this.state.selectedInstanceIdx || 0
        });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.print !== this.props.print) {
            nextProps.client && this.setState({
                id: nextProps.client.id,
                account: nextProps.client.account,
                instances: nextProps.client.instances,
                selectedInstanceIdx: this.state.selectedInstanceIdx || 0
            });
        }
    }
    handleActiveItem({ id, label, passive }) {
        if (!passive) {
            this.setState({
                menu: { id, label }
            });
            this.handleSidebar();
        }
    }
    handleSidebar() {
        this.refs.sidebar && this.refs.sidebar.closeSidebar();
    }
    triggerMenuItem() {
        // Click related menu item to initiate subpages
        let { category, identifier, item } = this.props.params;
        let path = '/settings';
        path += category ? '/' + category : '';
        path += identifier && item ? '/' + identifier + '/' + item : '';
        let link = document.querySelector('a[href="' + path + '"]');
        link && link.click();
    }
    handleInstanceChange(event) {
        this.setState({ selectedInstanceIdx: +event.target.value });
    }
    render() {
        let params = this.props.params;
        if (this.props.session) {
            if (!this.props.client) {
                return <Main loading={true} />
            }
            const selectedInstance = this.state.instances[this.state.selectedInstanceIdx] || {};
            return (
                <Main id="settings" data-page="settings">
                    {this.props.client.instances && this.props.client.instances.length > 0
                        ? <Fragment>
                            <Sidebar ref="sidebar">
                                <div className="instance-selection">
                                    <h4>Current instance</h4>
                                    <div className="dropdown">
                                        <select onChange={this.handleInstanceChange} value={this.state.selectedInstanceIdx}>
                                            {this.state.instances.map((instance, idx) => {
                                                return (<option key={`${instance.title}-${idx}`} value={idx}>{instance.title}</option>)
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <FlatMenu
                                    data={menu(
                                        // Account data
                                        {
                                            id: this.state.id || ''
                                        },
                                        // Instances data
                                        {
                                            slug: selectedInstance.name,
                                            title: selectedInstance.title,
                                        }
                                    )}
                                    selectedInstanceId={this.state.selectedInstanceIdx} />
                            </Sidebar>
                            {params.category === 'account' && (
                                params.item
                                    ? <Account
                                        id={this.state.id}
                                        account={this.state.account}
                                        instances={this.state.instances}
                                        item={params.item}
                                        menu={this.state.menu}
                                        update={this.props.setClient} />
                                    : <Redirect to="/settings" />
                            )}
                            {params.category === 'instances' && (
                                params.item
                                    ? <Instance
                                        instances={this.state.instances}
                                        params={params}
                                        menu={this.state.menu}
                                        update={this.props.setClient} />
                                    : <Redirect to="/settings" />
                            )}
                            {(params.category === undefined) &&
                                <Summary />
                            }
                        </Fragment>
                        : <Unavailable
                            client={this.props.client} />
                    }
                </Main>
            )
        } else {
            var canUseDOM = (
                typeof window !== 'undefined' &&
                window.document &&
                window.document.createElement
            );
            if (canUseDOM) {
                return <Redirect to="/" />;
            } else {
                return <Main loading={true} />;
            }
        }
    }
}
