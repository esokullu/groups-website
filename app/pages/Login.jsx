import React from 'react';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

import Main from '../components/Main';
import Headline from '../components/Headline';

import login from '../scripts/login';
import forgotpassword from '../scripts/forgotpassword'
import checkSession from '../scripts/checkSession';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            failMessages: [],
            currentView:"login"
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.checkEmailPattern = this.checkEmailPattern.bind(this);
        this.checkPasswordMinimumLength = this.checkPasswordMinimumLength.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.handleForgotPassword = this.handleForgotPassword.bind(this);
        this.changeViewHandler = this.changeViewHandler.bind(this);
    }
    handleLogin(event) {
        event.preventDefault();
        let self = this;
        if(self.validateEmail() && self.validatePassword()) {
            self.refs.submit.classList.add('loading');
            login(self.refs.email.value, self.refs.password.value, function(response) {
                let failMessage = 'Please check your credentials, and try again.';
                if(response.success) {
                    self.refs.email.classList.remove('error');
                    let failMessages = self.state.failMessages;
                    failMessages.includes(failMessage) && failMessages.splice(failMessages.indexOf(failMessage), 1);
                    self.setState({
                        failMessages: failMessages
                    });
                    self.props.setClient();
                } else {
                    self.refs.email.classList.add('error');
                    let failMessages = self.state.failMessages;
                    failMessages.includes(failMessage) || failMessages.push(failMessage);
                    self.setState({
                        failMessages: failMessages
                    });
                    self.refs.submit.classList.remove('loading');
                }
            });
        }
    }
    handleForgotPassword(event) {
        event.preventDefault();
        let self = this;
        if(self.validateEmail()) {
            self.refs.submit.classList.add('loading');
            forgotpassword(self.refs.email.value, function(response) {
                let failMessage = 'We couldn\'t get your account. Please check your email adress.';
                if(response.success) {
                    self.refs.email.classList.remove('error');
                    let failMessages = self.state.failMessages;
                    failMessages.includes(failMessage) && failMessages.splice(failMessages.indexOf(failMessage), 1);
                    self.setState({
                        failMessages: failMessages,
                        currentView:"forgotpasswordIntiated"
                    });
                } else {
                    self.refs.email.classList.add('error');
                    let failMessages = self.state.failMessages;
                    failMessages.includes(failMessage) || failMessages.push(failMessage);
                    self.setState({
                        failMessages: failMessages
                    });
                    self.refs.submit.classList.remove('loading');
                }
            });
        }
    }
    checkEmailPattern() {
        let failMessage = 'Email is invalid.';
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
        let passwordMinimumLengthLimit = 1;
        let failMessage = 'Password is missing!';
        if(this.refs.password.value.length >= passwordMinimumLengthLimit) {
            this.refs.password.classList.remove('error');
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
    validateEmail() {
        let validEmailPattern = this.checkEmailPattern();
        if(validEmailPattern) {
            return true;
        } else {
            this.refs.submit.classList.remove('loading');
            return false;
        }
    }
    validatePassword() {
        let validPasswordMinimumLength = this.checkPasswordMinimumLength();
        if(validPasswordMinimumLength) {
            return true;
        } else {
            this.refs.submit.classList.remove('loading');
            return false;
        }
    }
    changeViewHandler(viewName) {
        this.setState({currentView:viewName});
    }
    render() {
        const { currentView } = this.state;
        if (this.props.session) {
            return <Redirect to="/settings" />;
        } else {
            return (
                <Main id="login" data-page="login">
                    <section>
                        {currentView == "login" &&
                        <div className="container">
                            <div className="form">
                                <Headline title="Welcome back." subtitle="we missed you!" />
                                {this.state.failMessages.length > 0 &&
                                <div className="warning">
                                    <ul className="fail">
                                        {this.state.failMessages.map((failMessage, key) => <li key={key}>{failMessage}</li>)}
                                    </ul>
                                </div>
                                }
                                <form>
                                    <input ref="email" type="text" defaultValue="" placeholder="Enter your email" />
                                    <input ref="password" type="password" defaultValue="" placeholder="Enter your password" />
                                    <button ref="submit" onClick={this.handleLogin}>Login</button>
                                </form>
                                <Link to="/setup" style={{float:"right"}}>Not registered?</Link>
                                <a  style={{float:"left"}} onClick={() => this.changeViewHandler("forgotpassword")}>Forgot Password?</a>
                            </div>
                        </div>
                        }
                        {currentView === "forgotpassword" &&
                        <div className="container">
                            <div className="form">
                                <Headline title="Forgot Password" />
                                {this.state.failMessages.length > 0 && <div className="warning">
                                    <ul className="fail">
                                        {this.state.failMessages.map((failMessage, key) => <li key={key}>{failMessage}</li>)}
                                    </ul>
                                </div>}
                                <form>
                                    <input ref="email" type="text" defaultValue="" placeholder="Enter your email" />
                                    <button ref="submit" onClick={this.handleForgotPassword}>Continue</button>
                                </form>
                                <a onClick={() => this.changeViewHandler("login")}>Go Back</a>
                            </div>
                        </div>
                        }
                        {currentView === "forgotpasswordIntiated" &&
                            <div className="container">
                                <div className="form">
                                    <Headline title="You will recieve an Email soon" />                                
                                </div>
                            </div>
                        }
                    </section>
                </Main>
            )
        }
    }
}