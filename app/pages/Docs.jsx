// Modules
import React from 'react';
import {Redirect} from 'react-router-dom';

// Components
import Main from '~/components/Main';
import Sidebar from '~/components/Sidebar';
import Comments from '~/components/Comments';
import FlatMenu from '~/components/FlatMenu';

// Pages
import FAQ from './docs/FAQ'
import Summary from './docs/Summary';
import Integrations from './docs/Integrations';
import Component from './docs/Component';
import Function from './docs/Function';

// Data
import menu from '~/data/docs/menu';
import * as components from '~/pages/docs/data/components-data';
import * as functions from '~/pages/docs/data/functions-data';


const componentsArr = Object.keys(components).map(function (key) {
    return components[key];
});

const functionsArr = Object.keys(functions).map(function (key) {
    return functions[key];
});

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
                    <FlatMenu
                        data={menu}
                        callback={this.handleSidebar} />
                </Sidebar>
                {!params.category &&
                    <Summary />
                }
                {params.category === 'faq' &&
                    <FAQ />
                }
                {params.category === 'integrations' && (
                    params.item
                        ? <Integrations item={params.item} />
                        : <Redirect to="/docs" />
                )}
                {params.category === 'components' && (
                    params.item
                        ? <Component item={params.item} list={componentsArr} />
                        : <Redirect to="/docs" />
                )}
                {params.category === 'functions' && (
                    params.item
                        ? <Function item={params.item} list={functionsArr} />
                        : <Redirect to="/docs" />
                )}
                {(params.category === 'components' || params.category == 'functions') && params.item &&
                    <Comments />
                }
            </Main>
        )
    }
}