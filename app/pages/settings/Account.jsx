import React from 'react';
import {Link} from 'react-router-dom';

import Main from '../../components/Main';
import TicketsTable from '../../components/TicketsTable';

import generateRandomKey from '../../scripts/generateRandomKey';
import setEmail from '../../scripts/setEmail';
import setPassword from '../../scripts/setPassword';
import setPasswordGjs from '../../scripts/setPasswordGjs';
import unsubscribe from '../../scripts/unsubscribe';

export default class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            failMessages: [],
            successMessages: []
        }
        this.setItemProperties = this.setItemProperties.bind(this);
        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
        this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.checkEmailPattern = this.checkEmailPattern.bind(this);
        this.checkPasswordMinimumLength = this.checkPasswordMinimumLength.bind(this);
        this.checkPasswordMaximumLength = this.checkPasswordMaximumLength.bind(this);
        this.checkPasswordMatch = this.checkPasswordMatch.bind(this);
        this.handleNewInstance = this.handleNewInstance.bind(this);
        this.handleExistingInstance = this.handleExistingInstance.bind(this);
    }
    componentWillMount() {
        this.setItemProperties(this.props.list, this.props.item);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.item != this.state.id) {
            this.setItemProperties(nextProps.list, nextProps.item);
            this.setState({
                failMessages: [],
                successMessages: []
            });
        }
    }
    setItemProperties(list, item) {
        let object = list.filter(function(element) {
            return element.id == item;
        })[0];
        this.setState({
            key: generateRandomKey(),
            id: object.id,
            label: object.label,
            parent: object.parent
        });
    }
    handleEmailSubmit(event) {
        event.preventDefault();
        let self = this;
        self.refs.submitEmail.classList.add('loading');
        let email = self.refs.email.value;
        self.refs.email.className = '';
        self.setState({
            failMessages: [],
            successMessages: []
        });
        setTimeout(function() {
            if(self.validateEmail()) {
                setEmail(
                    email,
                    function(response) {
                        let failMessage = 'Email couldn\'t be set.';
                        let successMessage = 'Email has been set successfully.';
                        if(response.success) {
                            self.refs.email.classList.remove('error');
                            self.refs.email.classList.add('success');
                            let failMessages = self.state.failMessages;
                            failMessages.includes(failMessage) && failMessages.splice(failMessages.indexOf(failMessage), 1);
                            let successMessages = self.state.successMessages;
                            successMessages.includes(successMessage) || successMessages.push(successMessage);
                            self.setState({
                                failMessages: failMessages,
                                successMessages: successMessages
                            });
                            self.refs.submitEmail.classList.remove('loading');
                            self.props.update();
                        } else {
                            self.refs.email.classList.remove('success');
                            self.refs.email.classList.add('error');
                            let failMessages = self.state.failMessages;
                            failMessages.includes(failMessage) || failMessages.push(failMessage);
                            let successMessages = self.state.successMessages;
                            successMessages.includes(successMessage) && successMessages.splice(successMessages.indexOf(successMessage), 1);
                            self.setState({
                                failMessages: failMessages,
                                successMessages: successMessages
                            });
                            self.refs.submitEmail.classList.remove('loading');
                        }
                    }
                );
            }
        }, 4);
    }
    handlePasswordSubmit(event) {
        event.preventDefault();
        let self = this;
        self.refs.submitPassword.classList.add('loading');
        let password = self.refs.password.value;
        self.refs.password.className = '';
        self.refs.confirmation.className = '';
        self.setState({
            failMessages: [],
            successMessages: []
        });
        setTimeout(function() {
            if(self.validatePassword()) {
                setPassword(password,
                    function(response) {
                        if(response.success) {
                            let failMessage = 'Password couldn\'t be set.';
                            let successMessage = 'Password has been set successfully.';
                                self.refs.password.classList.remove('error');
                                self.refs.confirmation.classList.remove('error');
                                self.refs.password.classList.add('success');
                                self.refs.confirmation.classList.add('success');
                                let failMessages = self.state.failMessages;
                                failMessages.includes(failMessage) && failMessages.splice(failMessages.indexOf(failMessage), 1);
                                let successMessages = self.state.successMessages;
                                successMessages.includes(successMessage) || successMessages.push(successMessage);
                                self.setState({
                                    failMessages: failMessages,
                                    successMessages: successMessages
                                });
                                self.refs.password.value = '';
                                self.refs.confirmation.value = '';
                                self.refs.submitPassword.classList.remove('loading');
                                self.props.update();
                            } else {
                                self.refs.password.classList.remove('success');
                                self.refs.confirmation.classList.remove('success');
                                self.refs.password.classList.add('error');
                                self.refs.confirmation.classList.add('error');
                                let failMessages = self.state.failMessages;
                                failMessages.includes(failMessage) || failMessages.push(failMessage);
                                let successMessages = self.state.successMessages;
                                successMessages.includes(successMessage) && successMessages.splice(successMessages.indexOf(successMessage), 1);
                                self.setState({
                                    failMessages: failMessages,
                                    successMessages: successMessages
                                });
                                self.refs.submitPassword.classList.remove('loading');
                            }
                    } 
                );
            }
        }, 4);
    }
    checkEmailPattern() {
        let failMessage = 'Email is invalid. Valid format: user@site.com';
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailPattern.test(this.refs.email.value)) {
            this.refs.email.classList.remove('error');
            if(this.state.failMessages.includes(failMessage)) {
                let failMessages = this.state.failMessages;
                failMessages.splice(failMessages.indexOf(failMessage), 1);
                this.setState({
                    failMessages: failMessages
                });
            }
            return true;
        } else {
            this.refs.email.classList.add('error');
            if(!this.state.failMessages.includes(failMessage)) {
                let failMessages = this.state.failMessages;
                failMessages.push(failMessage);
                this.setState({
                    failMessages: failMessages
                });
            }
            return false;
        }
    }
    checkPasswordMinimumLength() {
        let passwordMinimumLengthLimit = 5;
        let failMessage = 'Password must be ' + passwordMinimumLengthLimit + ' characters minimum!';
        if(this.refs.password.value.length >= passwordMinimumLengthLimit) {
            //this.refs.password.classList.remove('error');
            if(this.state.failMessages.includes(failMessage)) {
                let failMessages = this.state.failMessages;
                failMessages.splice(failMessages.indexOf(failMessage), 1);
                this.setState({
                    failMessages: failMessages
                });
            }
            return true;
        } else {
            this.refs.password.classList.add('error');
            if(!this.state.failMessages.includes(failMessage)) {
                let failMessages = this.state.failMessages;
                failMessages.push(failMessage);
                this.setState({
                    failMessages: failMessages
                });
            }
            return false;
        }
    }
    checkPasswordMaximumLength() {
        let passwordMaximumLengthLimit = 255;
        let failMessage = 'Password must be ' + passwordMaximumLengthLimit + ' characters maximum!';
        if(this.refs.password.value.length <= passwordMaximumLengthLimit) {
            //this.refs.password.classList.remove('error');
            if(this.state.failMessages.includes(failMessage)) {
                let failMessages = this.state.failMessages;
                failMessages.splice(failMessages.indexOf(failMessage), 1);
                this.setState({
                    failMessages: failMessages
                });
            }
            return true;
        } else {
            this.refs.password.classList.add('error');
            if(!this.state.failMessages.includes(failMessage)) {
                let failMessages = this.state.failMessages;
                failMessages.push(failMessage);
                this.setState({
                    failMessages: failMessages
                });
            }
            return false;
        }
    }
    checkPasswordMatch() {
        let failMessage = 'Passwords do not match.';
        if(this.refs.password.value == this.refs.confirmation.value) {
            this.refs.password.classList.remove('error');
            this.refs.confirmation.classList.remove('error');
            if(this.state.failMessages.includes(failMessage)) {
                let failMessages = this.state.failMessages;
                failMessages.splice(failMessages.indexOf(failMessage), 1);
                this.setState({
                    failMessages: failMessages
                });
            }
            return true;
        } else {
            this.refs.password.classList.add('error');
            this.refs.confirmation.classList.add('error');
            if(!this.state.failMessages.includes(failMessage)) {
                let failMessages = this.state.failMessages;
                failMessages.push(failMessage);
                this.setState({
                    failMessages: failMessages
                });
            }
            return false;
        }
    }
    validateEmail() {
        let validEmailPattern = this.checkEmailPattern();
        if(validEmailPattern) {
            return true;
        } else {
            this.refs.submitEmail.classList.remove('loading');
            return false;
        }
    }
    validatePassword() {
        let validPasswordMatch = this.checkPasswordMatch();
        let validPasswordMinimumLength = this.checkPasswordMinimumLength();
        let validPasswordMaximumLength = this.checkPasswordMaximumLength();
        if(validPasswordMatch && validPasswordMinimumLength && validPasswordMaximumLength) {
            return true;
        } else {
            this.refs.submitPassword.classList.remove('loading');
            return false;
        }
    }
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
    handleExistingInstance(event) {
        event.preventDefault();
        document.getElementById('charge').click();
    }
    render() {
        return (
            <Main data-page="account">
                <div className="container">
                    {this.state.id == 'credentials' &&
                    <section className="credentials">
                        <h1>{this.state.label}</h1>
                        <form className="narrow options">
                            {(this.state.failMessages.length > 0 || this.state.successMessages.length > 0) &&
                            <div className="warning">
                                {this.state.failMessages.length > 0 &&
                                <ul className="fail">
                                    {this.state.failMessages.map((failMessage, key) => <li key={key}>{failMessage}</li>)}
                                </ul>
                                }
                                {this.state.successMessages.length > 0 &&
                                <ul className="success">
                                    {this.state.successMessages.map((successMessage, key) => <li key={key}>{successMessage}</li>)}
                                </ul>
                                }
                            </div>
                            }
                            <h3>Email</h3>
                            <fieldset>
                                <input disabled={true} ref="email" type="text" placeholder="Enter your email address" defaultValue={this.props.account.email} />
                                {/*<button ref="submitEmail" onClick={this.handleEmailSubmit}>Change</button>*/}
                            </fieldset>
                            <h3>Password</h3>
                            <fieldset>
                                <input ref="password" type="password" placeholder="Enter your password" />
                                <input ref="confirmation" type="password" placeholder="Confirm your password" />
                                <button ref="submitPassword" onClick={this.handlePasswordSubmit}>Change</button>
                            </fieldset>
                        </form>
                    </section>
                    }
                    {this.state.id == 'subscriptions' &&
                    <section className="subscriptions">
                        <h1>{this.state.label}</h1>
                        {this.state.failMessages.length > 0 &&
                        <div className="warning">
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
                                    {/*
                                    {item.subscription &&
                                    <a onClick={this.handleNewInstance} data-id={item.uuid}>&#10006;</a>
                                    }
                                    */}
                                </h4>
                                <div className="properties">
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
                        {/*
                        <Link to="/setup">
                            <button>Add New Instance</button>
                        </Link>
                        */}
                        <p>To make changes (cancel, update card, invoices) please log in to <a href="https://www.billingportal.com/s/graphjs" target="_blank">BillingPortal.com</a>, our payment processor.</p>
                    </section>
                    }
                    {
                        this.state.id == 'tickets' &&
                            <section className="tickets options">
                                <h1>{this.state.label}</h1>
                                <TicketsTable/>
                            </section>
                    }
                </div>
            </Main>
        )
    }
}
