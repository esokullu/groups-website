import React from 'react';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handleJump = this.handleJump.bind(this);
    }
    componentDidMount() {
        this.props.loading || this.handleJump();
    }
    handleJump() {
        if(window.location.hash) {
            if(document.querySelector(window.location.hash)) {
                window.scroll({
                    top: document.querySelector(window.location.hash).getBoundingClientRect().top - 80, //80px covers fixed navigation
                    behavior: 'smooth'
                });
            }
        }
    }
    render() {
        return this.props.loading
        ? <main className="loading">
            <div className="container">
                <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>&nbsp;</div>
                <div>If this is taking too long, refresh this page.</div>
            </div>
        </main>
        : <main {...this.props}>
            {this.props.children}
        </main>
    }
}