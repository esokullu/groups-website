// Modules
import React from 'react';
import {Redirect} from 'react-router-dom';

// Components
import Main from '~/components/Main';
import Sidebar from '~/components/Sidebar';
import MultiLevelMenu from '~/components/MultiLevelMenu';

// Pages
import FAQ from './docs/FAQ'
import Summary from './docs/Summary';

// Data
import menu from '~/data/docs/menu';

export default class Docs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ''
        };
        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleSidebar = this.handleSidebar.bind(this);
    }
    handleDropdown(value) {
        this.setState({
            active: value
        });
    }
    handleSidebar() {
        this.refs.sidebar && this.refs.sidebar.closeSidebar();
    }
    render() {
        let params = this.props.params;
        return (
            <Main id="docs" data-page="docs">
                <Sidebar ref="sidebar">
                    <MultiLevelMenu
                        data={menu}
                        callback={this.handleSidebar} />
                </Sidebar>
                {!params.category &&
                    <Summary />
                }
                {
                params.category === 'faq' &&
                    <FAQ />
                }
            </Main>
        )
    }
}