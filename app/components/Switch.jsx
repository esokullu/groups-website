import React from 'react';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

export default class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            open: false,
            items: [{
                id: '',
                target: 'Nothing to Select'
            }],
            active: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.simulateClick = this.simulateClick.bind(this);
        this.orderItems = this.orderItems.bind(this);
        this.handleHoverOff = this.handleHoverOff.bind(this);
    }
    componentDidMount() {
        this.setState({
            open: false,
            items: this.props.items,
            active: this.props.items[0]['id']
        });
    }
    handleClick(event) {
        if(this.state.open) {
            this.setState({
                active: event.currentTarget.dataset.id,
                items: this.orderItems(this.state.items, event.currentTarget.dataset.id),
                open: !this.state.open
            });
            window.location.href = event.currentTarget.dataset.target;
        } else {
            this.setState({
                open: !this.state.open
            });
        }
    }
    simulateClick(event) {
        this.setState({
            redirect: true
        });
        let self = this;
        setTimeout(function() {
            self.setState({
                redirect: false
            });
        }, 10);
    }
    orderItems(items, key) {
        let first = items.shift();
        items.push(first);
        //let items = array.push(array.shift());
        for (let i = 0; i < items.length; i++) {
            if (items[i]['id'] === key) {
                let item = items.splice(i, 1);
                items.unshift(item[0]);
                return items;
                break;
            }
        }
    }
    handleHoverOff() {
        this.setState({
            open: false
        });
    }
    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/" />;
        } else {
            return (
                <div id="identity" className={(this.state.open ? 'open ' : '') + (this.state.items.length > 1 ? ' switch' : '')}  onMouseLeave={this.handleHoverOff}>
                    <ul>
                        {this.state.items.map((item, key) =>
                        <li key={key} data-id={item.id} data-target={item.target} onClick={this.state.items.length > 1 ? this.handleClick : this.simulateClick}>
                            {item.content}
                        </li>
                        )}
                    </ul>
                </div>
            );
        }
    }
}