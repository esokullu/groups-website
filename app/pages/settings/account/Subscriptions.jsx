// Modules
import React from 'react';
import {Link, Redirect} from 'react-router-dom';

// Scripts
import unsubscribe from '~/scripts/unsubscribe';

// Page: Settings > Account > Subscriptions
export default class Subscriptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            failMessages: []
        }
        this.handleCancellation = this.handleCancellation.bind(this);
        //this.handleNewInstance = this.handleNewInstance.bind(this);
        this.handleExistingInstance = this.handleExistingInstance.bind(this);
    }
    handleCancellation(id) {
        if(window.confirm('Are you sure?')) {
            this.setState({
                cancellation: {id}
            });
        }
    }
    /*
    handleNewInstance(event) {
        event.preventDefault();
        let self = this;
        let uuid = event.currentTarget.dataset.id;
        if (window.confirm('Are you sure to unsubscribe?')) {
            unsubscribe(uuid, function(response) {
                if(response.success) {
                    self.props.update();
                }
            });
        }
    }
    */
    handleExistingInstance(event) {
        event.preventDefault();
        document.getElementById('charge').click();
    }
    render() {
        return this.state.cancellation
            ? <Redirect to={'/settings/account/' + this.props.id + '/cancellation?instance=' + this.state.cancellation.id} />
            : <section className="subscriptions">
                <h1>{this.props.label}</h1>
                {this.state.failMessages.length > 0 &&
                <div className="warning container">
                    <ul className="fail">
                        {this.state.failMessages.map((failMessage, key) => <li key={key}>{failMessage}</li>)}
                    </ul>
                </div>}
                <p>{'You have ' + this.props.instances.length + ' Grou.ps site(s).'}</p>
                <ul>
                    {this.props.instances.map((item, key) =>
                    <li key={key}>
                        <h4>
                            {item.uuid}
                            {item.is_subscribed &&
                                <a onClick={() => this.handleCancellation(item.id)}>&#10006;</a>
                            }
                        </h4>
                        <div className="properties">
                            <div>
                                <b>Status:</b>  
                                {(item.is_subscribed) ? ' Active' : ' Inactive'}
                            </div>
                            <div>
                                <b>Theme:</b> {item.theme} <span style={{color: item.theme == 'dark' ? '#3c3c3c' : 'white'}}>&#9724;</span>
                            </div>
                            <div>
                                <b>Color:</b> {item.color} <span style={{color: item.color}}>&#9724;</span>
                            </div>
                            <div>
                                <b>URL:</b> {item.url}
                            </div>
                        </div>
                        {/*
                        {item.subscription ||
                        <a onClick={this.handleExistingInstance} data-id={item.uuid} className="warning">This instance is inactive. Click to activate!</a>
                        }
                        */}
                        {/* {item.subscription ||
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input type="hidden" name="hosted_button_id" value="GKL77PW743J2W" />
                            <input type="hidden" name="on0" value="" />
                            <input type="hidden" name="currency_code" value="USD" />
                            <input type="hidden" name="os0" value={item.payment ? item.payment.charAt(0).toUpperCase() + item.payment.substr(1) : 'Monthly'} />
                            <input type="hidden" name="custom" value={this.props.account.email} />
                            <input id="charge" className="hidden" type="submit" />
                        </form>
                        } */}
                    </li>
                    )}
                </ul>
                {/*<Link to="/setup">
                    <button>Add New Instance</button>
                </Link>*/
                }
            </section>
    }
}