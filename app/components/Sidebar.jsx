import React from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);
    }
    componentWillUnmount() {
        document.body.classList.remove('push');
    }
    toggleSidebar() {
        if(this.state.open) {
            document.body.classList.remove('push');
        } else {
            document.body.classList.add('push');
        }
        this.setState({
            open: !this.state.open
        });
    }
    closeSidebar() {
        document.body.classList.remove('push');
        this.setState({
            open: false
        });
    }
    render() {
        return (
            <aside className={'sidebar' + (this.state.open ? ' open' : '')}>
                {this.props.children}
                <a onClick={this.toggleSidebar}>
                    <svg className={this.state.open ? '' : 'expand'} viewBox="0 0 234 200" xmlns="https://www.w3.org/2000/svg">
                        <path d="M217,166.7 L117,166.7 C107.8,166.7 100.3,174.2 100.3,183.4 C100.3,192.6 107.8,200 117,200 L217,200 C226.2,200 233.7,192.5 233.7,183.3 C233.7,174.1 226.2,166.7 217,166.7 Z M3.1,90.8 L36.5,40.8 C41.6,33.2 51.9,31.1 59.6,36.2 C67.2,41.3 69.3,51.6 64.2,59.3 L48.1,83.4 L217,83.4 C226.2,83.4 233.7,90.9 233.7,100.1 C233.7,109.3 226.2,116.8 217,116.8 L48,116.8 L64.1,140.9 C69.2,148.5 67.2,158.9 59.5,164 C56.7,165.9 53.5,166.8 50.3,166.8 C44.9,166.8 39.6,164.2 36.4,159.4 L3.1,109.4 C2.8,108.9 2.8,108.4 2.5,107.9 C2,107 1.6,106 1.3,105 C1.1,104.4 0.7,103.9 0.6,103.3 C0.5,102.7 0.7,102.2 0.6,101.6 C0.6,101.1 0.3,100.6 0.3,100.1 C0.3,99.6 0.6,99.1 0.6,98.6 C0.6,98 0.5,97.5 0.6,96.9 C0.8,96.3 1.1,95.8 1.3,95.2 C1.6,94.2 2,93.2 2.5,92.3 C2.7,91.8 2.8,91.2 3.1,90.8 Z M117,0 L217,0 C226.2,0 233.7,7.5 233.7,16.7 C233.7,25.9 226.2,33.4 217,33.4 L117,33.4 C107.8,33.4 100.3,25.9 100.3,16.7 C100.3,7.5 107.8,0 117,0 Z"></path>
                    </svg>
                </a>
            </aside>
        )
    }
}