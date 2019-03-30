// Modules
import React from 'react';

// Scripts
import setEmail from '~/scripts/setEmail';
import setPassword from '~/scripts/setPassword';

// Page: Settings > Account > Credentials
export default class Credentials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            failMessages: [],
            successMessages: []
        }
        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
        this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.checkEmailPattern = this.checkEmailPattern.bind(this);
        this.checkPasswordMinimumLength = this.checkPasswordMinimumLength.bind(this);
        this.checkPasswordMaximumLength = this.checkPasswordMaximumLength.bind(this);
        this.checkPasswordMatch = this.checkPasswordMatch.bind(this);
    }
    handleEmailSubmit(event) {
        event.preventDefault();
        this.refs.submitEmail.classList.add('loading');
        let email = this.refs.email.value;
        this.refs.email.className = '';
        this.setState({
            failMessages: [],
            successMessages: []
        });
        let self = this;
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
    render() {
        return (
            <section className="credentials">
                <h1>{this.props.label}</h1>
                <form className="narrow options">
                    {(this.state.failMessages.length > 0 || this.state.successMessages.length > 0) &&
                    <div className="warning container">
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
        )
    }
}