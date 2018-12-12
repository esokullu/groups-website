import React from 'react';

export default class Headline extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="headline">
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
}