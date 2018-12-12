import React from 'react';
import {Link} from 'react-router-dom';
import Markdown from 'react-markdown';

export default class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.handleLinkRender = this.handleLinkRender.bind(this);
    }
    handleLinkRender(props) {
        return (
            props.href.match(/^\//)
            ? <Link to={props.href}>{props.children}</Link>
            : <a href={props.href}>{props.children}</a>
        )
    }
    render() {
        return (
            <section className="summary">
                <Markdown className="markdown" source={this.props.text} renderers={{
                    link: this.handleLinkRender
                }} />
            </section>
        )
    }
}