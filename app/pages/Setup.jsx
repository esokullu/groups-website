import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {TwitterPicker} from 'react-color';
import {Redirect, Link} from 'react-router-dom';
import Cards from 'react-credit-cards';
import Payment from 'payment';
//import mixpanel from 'mixpanel-browser';
import authorizePayment from '../scripts/authorizePayment';

import Main from '../components/Main';

const paymentPlans = {
    "bronze-monthly": {
        price: '$8',
        each: 'month'
    },
    "silver-monthly": {
        price: '$24',
        each: 'month'
    },
    "gold-monthly": {
        price: '$80',
        each: 'month'
    },
    "bronze-annual": {
        price: '$80',
        full: '$96',
        each: 'year'
    },
    "silver-annual": {
        price: '$240',
        full: '$288',
        each: 'year'
    },
    "gold-annual": {
        price: '$800',
        full: '$960',
        each: 'year'
    }
}

export default class Setup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: [
                {
                    id: 'set-groups-id',
                    label: 'Continue'
                },
                {
                    id: 'set-name',
                    label: 'Continue',
                    demo: true,
                    illustration: 'character-left-holder.png',
                    color: 'rgb(0, 188, 75)'
                },
                {
                    id: 'set-theme',
                    label: 'Continue',
                    demo: true,
                    illustration: 'character-middle-holder.png',
                    color: 'rgb(245, 64, 0)'
                },
                {
                    id: 'set-color',
                    label: 'Continue',
                    demo: true,
                    illustration: 'character-right-holder.png',
                    color: 'rgb(217, 114, 255)'
                },
                {
                    id: 'set-description',
                    label: 'Continue'
                },
                {
                    id: 'set-credentials',
                    label: 'Continue'
                },
                {
                    id: 'set-payment',
                    label: 'Finish'
                },
                {
                    id: 'go-back-home',
                    label: 'Go to your network'
                }
            ],
            step: 0,
            groupsId: '',
            name: '',
            description: '',
            url: 'http://localhost',
            theme: 'light',
            color: '#6F879F',
            email: '',
            password: '',
            verificationStatus: null,
            verificationCode: '      ',
            payment: 'monthly',
            failMessages: [],
            failModalMessages: [],
            number: '',
            holder: '',
            expiry: '',
            cvc: '',
            billing_address: '',
            billing_city: '',
            billing_state: '',
            billing_zip: '',
            billing_country: '',
            focused: '',
            redirectToSettings: false,
            paymentError: false,
            planType: null
        }
        this.getUrlParameter = this.getUrlParameter.bind(this);
        this.getQuote = this.getQuote.bind(this);
        this.handleKey = this.handleKey.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.changeStep = this.changeStep.bind(this);
        this.changeGroupsId = this.changeGroupsId.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changePayment = this.changePayment.bind(this);
        this.checkCondition = this.checkCondition.bind(this);
        this.checkStep = this.checkStep.bind(this);
        this.setGroupsId = this.setGroupsId.bind(this);
        this.setName = this.setName.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setCredentials = this.setCredentials.bind(this);
        this.setPayment = this.setPayment.bind(this);
        this.setCardPayment = this.setCardPayment.bind(this);
        this.skipCredentials = this.skipCredentials.bind(this);
        this.removeClient = this.removeClient.bind(this);
        this.createInstance = this.createInstance.bind(this);
        this.handleCardInputFocus = this.handleCardInputFocus.bind(this);
        this.handleCardInputChange = this.handleCardInputChange.bind(this);
        this.moveForward = this.moveForward.bind(this);
        this.redirectToNetwork = this.redirectToNetwork.bind(this);
        this.RedirectToSettings = this.RedirectToSettings.bind(this);
        this.changeverificationCode = this.changeverificationCode.bind(this);
        this.onKeyDownVerificationCode = this.onKeyDownVerificationCode.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.resendVerification = this.resendVerification.bind(this);
        this.toggleOverlay = this.toggleOverlay.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKey);
        this.handleFocus();
        //mixpanel.init("9d82ff27cc34276822a9baeecbdd87fa");
        const planType = this.getUrlParameter(this.props.queryString,'plan')
        this.setState({
            planType
        })
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.client != this.props.client) {
            if(nextProps.client) {
                this.setState({
                    client: nextProps.client
                });
            }
        }
    }
    componentDidUpdate() {
        document.addEventListener('keydown', this.handleKey);
        if(this.state.steps[this.state.step].id == 'set-payment') {
            Payment.formatCardNumber(document.querySelector('[name="number"]'));
            Payment.formatCardExpiry(document.querySelector('[name="expiry"]'));
            Payment.formatCardCVC(document.querySelector('[name="cvc"]'));
        }
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKey, true);
    }
    getUrlParameter(queryString,name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(queryString);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    getQuote(plan) {
        let defaultQuote = <p>
            You pay $0 for one month. Then it's <b>$8</b> per month. Cancel anytime.
            <br />
            <a onClick={() => this.toggleOverlay('free')}>Interested in free options?</a>
        </p>;
        if(plan && plan !== '') {
            let details = paymentPlans[plan];
            if(details) {
                return <p>
                    It's <span>{
                      details.full
                        ? <b><del>{details.full}</del> <ins>{details.price}</ins></b>
                        : <b>{details.price}</b>
                    }</span> per <span>{details.each || 'month'}</span>, starting after the trial period.
                </p>
            }
        } else {
            return defaultQuote;
        }
        
    }
    handleKey(event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
            this.refs.hasOwnProperty('previous') && this.refs.previous.click();
        }
        if (event.keyCode === 13) {
            this.refs.hasOwnProperty('next') && this.refs.next.click();
        }
    }
    handleFocus() {
        if(!(this.state.email != '' && this.state.steps[this.state.step].id == 'setCredentials')) {
            this.state.step != this.state.steps.length - 1 && setTimeout(function() {
                let container = document.querySelectorAll('.content')[0];
                if(container) {
                    let firstItem = container.firstElementChild;
                    if(firstItem && firstItem.type == 'text') {
                        firstItem.focus();
                    }
                }
            }, 50);
        }
    }
    changeStep(event) {
        let step = event.currentTarget.dataset.step;
        //mixpanel.track("An event");
        if(step == 'previous' && this.state.step != 0) {
            this.setState({
                step: this.state.step - 1,
                failMessages: []
            });
        }
        if(step == 'next' && this.state.step != this.state.steps.length - 1) {
            if(this.checkStep()) {
                this.setState({
                    step: this.state.step + 1
                });
            }
        }
        window.scrollTo(0, 0);
        this.handleFocus();
    }
    moveForward() {
        this.setState({
            step: this.state.step + 1,
            failMessages: []
        });
        window.scrollTo(0, 0);
    }
    changeGroupsId(event) {
        let groupsId = event.currentTarget.value;
        this.setState({
            groupsId: groupsId
        });
    }
    changeName(event) {
        let name = event.currentTarget.value;
        this.setState({
            name: name
        });
    }
    changeDescription(event) {
        let description = event.currentTarget.value;
        this.setState({
            description: description
        });
    }
    changeTheme(event) {
        let theme = event.currentTarget.id;
        this.setState({
            theme: theme
        });
    }
    changeColor(color) {
        this.setState({
            color: color.hex
        });
    }
    changeEmail(event) {
        let email = event.currentTarget.value;
        this.setState({
            email: email
        });
    }
    changePassword(event) {
        let password = event.currentTarget.value;
        this.setState({
            password: password
        });
    }
    onKeyDownVerificationCode(event){
        let currentValue = event.target.value;
        let CurrentIndex = event.target.name;
        let { verificationCode } = this.state;
        let PrevRef = 'verificationCode' + (Number(CurrentIndex) - 1);
        if(event.keyCode === 8 && currentValue === "" && verificationCode[CurrentIndex] === " " && this.refs[PrevRef]){
            this.refs[PrevRef].focus();
        }
    }
    changeverificationCode(event) {
        let currentValue = event.currentTarget.value;
        let CurrentIndex = event.currentTarget.name;
        let { verificationCode } = this.state;
        let NextRef = 'verificationCode' + (Number(CurrentIndex) + 1);
        if(currentValue && this.refs[NextRef]){
            this.refs[NextRef].focus();
        }
        verificationCode = verificationCode.split("")
        verificationCode[CurrentIndex] = currentValue ? currentValue : " "
        verificationCode = verificationCode.join("").substring(0, 6)
        this.setState({
            verificationCode
        });
    }
    resendVerification(){
        let loadingButton = this.refs.loadingButtonModal;
        ReactDOM.findDOMNode(loadingButton).classList.add("fa", "fa-spinner", "fa-spin");
        let email = encodeURI(this.state.email);
        let self = this;
        this.props.handleResendVerification(email, function(error, response) {
            ReactDOM.findDOMNode(loadingButton).classList.remove("fa", "fa-spinner", "fa-spin");
            if(error){
                let failMessages = [response.reason]
                self.setState({
                    failMessages
                });
            } else {
                self.setState({
                    failModalMessages:['Email sent again!']
                })
            }
        });
    }
    changePayment(event) {
        let payment = event.currentTarget.id;
        this.setState({
            payment: payment
        });
    }
    checkStep() {
        switch(this.state.steps[this.state.step].id) {
            case 'set-groups-id':
                return this.setGroupsId();
                break;
            case 'set-name':
                return this.setName();
                break;
            case 'set-theme':
                return true; // Already set
                break;
            case 'set-color':
                return true; // Already set
                break;
            case 'set-description':
                return this.setDescription();
                break;
            case 'set-credentials':
                return this.state.client ? this.skipCredentials() : this.setCredentials();
                break;
            case 'set-payment':
                return this.setCardPayment();
                break;
            case 'go-back-home':
                return true; // No need to set anything
                break;
            default:
                console.log('No more steps!');
                break;
        }
    }
    checkCondition(condition, message) {
        if(condition) {
            if(this.state.failMessages.includes(message)) {
                let failMessages = this.state.failMessages;
                failMessages.splice(failMessages.indexOf(message), 1);
                this.setState({
                    failMessages: failMessages
                });
            }
            return true;
        } else {
            if(!this.state.failMessages.includes(message)) {
                let failMessages = this.state.failMessages;
                failMessages.push(message);
                this.setState({
                    failMessages: failMessages
                });
            }
            return false;
        }
    }
    setGroupsId() {
        // Minimum length
        let minimumLengthMessage = 'ID is too short!';
        let minimumLengthCondition = this.state.groupsId.length > 0;
        // Maximum length
        let maximumLengthMessage = 'ID is too long!';
        let maximumLengthCondition = this.state.groupsId.length < 50;
        // Id pattern
        let idPattern = /^[a-z0-9_]+$/i;
        let patternMessage = 'ID has invalid characters!';
        let patternCondition = idPattern.test(this.state.groupsId);
        return this.checkCondition(minimumLengthCondition, minimumLengthMessage) &&
            this.checkCondition(maximumLengthCondition, maximumLengthMessage) &&
            this.checkCondition(patternCondition, patternMessage);
    }
    setName() {
        // Minimum length
        let minimumLengthMessage = 'Name is too short!';
        let minimumLengthCondition = this.state.name.length > 0;
        // Maximum length
        let maximumLengthMessage = 'Name is too long!';
        let maximumLengthCondition = this.state.name.length < 32;
        return this.checkCondition(minimumLengthCondition, minimumLengthMessage) &&
            this.checkCondition(maximumLengthCondition, maximumLengthMessage);
    }
    setDescription() {
        // Maximum length
        let maximumLengthMessage = 'Description is too long!';
        let maximumLengthCondition = this.state.description.length < 255;
        return this.checkCondition(maximumLengthCondition, maximumLengthMessage);
    }
    setEmail() {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let message = 'Email address is invalid!';
        let condition = emailPattern.test(this.state.email);
        return this.checkCondition(condition, message);
    }
    setPassword() {
        let passwordMinimumLength = 4;
        let message = 'Password is too short!';
        let condition = this.state.password.length >= passwordMinimumLength;
        return this.checkCondition(condition, message);
    }
    setCredentials() {
        if(this.setEmail() && this.setPassword()) {
            return this.createInstance();
        } else {
            return false;
        }
    }
    setPayment() {
        document.getElementById('charge').click();
        this.moveForward();
        return true;
    }
    skipCredentials() {
        let email = this.state.client.account.email;
        if(email) {
            this.setState({
                email: email
            });
            let self = this;
            setTimeout(function() {
                self.createInstance();
            }, 4);
            return true;
        } else {
            return false;
        }
    }
    removeClient() {
        this.setState({
            client: undefined
        });
        let self = this;
        setTimeout(function() {
            self.handleFocus();
        }, 4);
    }
    handleCardInputFocus = ({ target }) => {
        this.setState({
            focused: target.name,
        });
    };
    handleCardInputChange = ({ target }) => {
        let targetValue = target.value;
        if (target.name === 'number') {
            targetValue = targetValue.replace(/ /g, '').substring(0,16)
        }
        else if (target.name === 'expiry') {
            targetValue = targetValue.replace(/ |\//g, '')
        }
        this.setState({
            [target.name]: targetValue
        });
        // Payment.formatCardNumber(document.querySelector('[name="number"]'));
        //Payment.formatCardExpiry(document.querySelector('[name="expiry"]'));
        //Payment.formatCardCVC(document.querySelector('[name="cvc"]'));
    };
    setCardPayment() {
        let loadingButton = this.refs.loadingButton;
        this.setState({loadingButton: true});
        const {
            url, password, theme, color, email, name, groupsId, description, // General information
            holder, number, expiry, cvc, // Required card information
            billing_address, billing_city, billing_state, billing_zip, billing_country // Specially requested card information
        } = this.state;
        let failMessages = [];
        if(holder.length === 0 || holder.indexOf(' ') === -1){
            failMessages.push('Please enter your full name');
        } else if(expiry.length !== 4 && expiry.length !== 6){
            failMessages.push('Expiry date is not valid');
        } else if(number.length < 16){
            failMessages.push('Please enter valid card number');
        } else if(cvc.length < 3){
            failMessages.push('Please enter valid CVC number');
        } else if(this.state.paymentError) {
            if(
                billing_address.length < 1 ||
                billing_city.length < 1 ||
                billing_state.length < 1 ||
                billing_zip.length < 1 ||
                billing_country.length < 1
            ) {
                failMessages.push('Please enter address-related information');
            }
        }

        if(failMessages.length > 0 ){
            this.setState({
                failMessages
            });
            this.setState({loadingButton: false});
            return;
        }
        
        let domain = 'https://gr.ps';
        const data = {
            groups_v2: 1, groups_name: groupsId, groups_title: name, groups_description: description,
            theme, color, site: domain + '/' + groupsId, mail: email, pass: password,
            name: holder, number, cvc, expiry: expiry.substr(0, 2)  + '/' + expiry.substr(2),
            // Add address information if requested
            ...(this.state.paymentError
                ? {billing_address, billing_city, billing_state, billing_zip, billing_country}
                : {}
            )
        }
        
        this.setState({
            failMessages: []
        });
        
        authorizePayment(data, (response) => {
            let failMessages = [];
            if(response && response.success) {
                this.setState({
                    paymentError: false,
                    loadingButton: false
                });
                this.moveForward();
                return;
            } else {
                if(this.state.paymentError) {
                    this.setState({
                        loadingButton: false
                    });
                    failMessages.push('Payment is declined again.');
                } else {
                    this.setState({
                        paymentError: true,
                        loadingButton: false
                    });
                    failMessages.push('Payment is declined. Please provide address information and try again.');
                }
            }
            this.setState({
                failMessages
            });
        })
    }
    RedirectToSettings() {
        this.setState({
            redirectToSettings: true
        })
    }
    redirectToNetwork() {
        let domain = 'https://gr.ps';
        window.location.href = domain + '/' + this.state.groupsId;
    }
    createInstance() {
        let loadingButton = this.refs.loadingButton;
        let domain = 'https://gr.ps';
        let groupsId = encodeURI(this.state.groupsId);
        let name = encodeURI(this.state.name);
        let description = encodeURI(this.state.description);
        let url = encodeURI(domain + '/' + this.state.groupsId);
        let theme = encodeURI(this.state.theme);
        let color = encodeURI(this.state.color);
        let email = encodeURI(this.state.email);
        let password = encodeURI(this.state.password);
        let self = this;
        if(!self.state.verificationStatus){
            ReactDOM.findDOMNode(loadingButton).classList.add("fa", "fa-spinner", "fa-spin");
            this.props.handleSignUp(groupsId, name, description, url, password, email, theme, color, function(error, response) {
                ReactDOM.findDOMNode(loadingButton).classList.remove("fa", "fa-spinner", "fa-spin");
                if(error){
                    let failMessages = [response.reason]
                    self.setState({
                        failMessages
                    });
                } else {
                    self.setState({
                        verificationStatus:'display',
                        failMessages:[]
                    },() => self.refs['verificationCode0'].focus())
                }
            });
        } else if(self.state.verificationStatus === "display"){
            if(self.state.verificationCode){
                let loadingButtonModal = this.refs.loadingButtonModal;
                ReactDOM.findDOMNode(loadingButtonModal).classList.add("fa", "fa-spinner", "fa-spin");
                let verificationCode = encodeURI(this.state.verificationCode);
                this.props.handleVerifyCode(groupsId, name, url, password, email, theme, color, verificationCode, function(error, response) {
                    ReactDOM.findDOMNode(loadingButtonModal).classList.remove("fa", "fa-spinner", "fa-spin");
                    if(error){
                        let failModalMessages = [response.reason]
                        self.setState({
                            failModalMessages
                        });
                    } else {
                        self.moveForward();
                    }
                });
            } else {
                self.setState({
                    failModalMessages : ["Please enter the verification code sent"]
                });
            }
        }
    }
    closeModal(){
        this.setState({
            verificationStatus:null,
            failModalMessages:[],
            verificationCode:'      '
        })
        let loadingButton = this.refs.loadingButton;
        ReactDOM.findDOMNode(loadingButton).classList.remove("fa", "fa-spinner", "fa-spin");
    }
    toggleOverlay(name) {
        let overlay = this.refs['overlay-' + name];
        overlay.style.display = overlay.style.display === 'none'
            ? 'block' : 'none';
    }
    render() {
        if(
            this.state.redirectToSettings
            ||
            (this.state.step < (this.state.steps.length - 2) && this.state.client) // logged in and not the last two steps
        ) {
            return (<Redirect to="/settings" />)
        }
        return (
            <Main id="setup" data-page="setup" className="setup-or-pricing">
                <div className="steps">
                    <div className="indicator" style={{width: this.state.step / (this.state.steps.length - 1) * 100 + '%'}}></div>
                </div>
                {this.state.failMessages.length > 0 &&
                <section className="warning">
                    <ul className="fail">
                        {this.state.failMessages.map((failMessage, key) => <li key={key}>{failMessage}</li>)}
                    </ul>
                </section>
                }
                {this.state.steps[this.state.step].id == 'set-groups-id' &&
                <section id="set-groups-id">
                    <div className="container">
                        <h3>Let's start with your Grou.ps ID...</h3>
                        <div className="content">
                            <div className="input-with-prefix">
                                <label>https://gr.ps/</label>
                                <input ref="id" onChange={this.changeGroupsId} type="text" value={this.state.groupsId} placeholder="your_unique_group_name" />
                            </div>
                        </div>
                    </div>
                </section>
                }
                {this.state.steps[this.state.step].id == 'set-name' &&
                <section id="set-name">
                    <div className="container">
                        <h3>...and your group's display name</h3>
                        <div className="content">
                            <input ref="id" onChange={this.changeName} type="text" value={this.state.name} placeholder="My Group" />
                        </div>
                    </div>
                </section>
                }
                {this.state.steps[this.state.step].id == 'set-theme' &&
                <section id="set-theme">
                    <div className="container">
                        <h3>Now choose your group's theme...</h3>
                        <div className="content">
                            <div className="radiobutton">
                                <span>
                                    <input onChange={this.changeTheme} type="radio" name="theme" id="light" checked={this.state.theme == 'light'} />
                                    <label htmlFor="light">Light</label>
                                </span>
                                <span>
                                    <input onChange={this.changeTheme} type="radio" name="theme" id="dark" checked={this.state.theme == 'dark'} />
                                    <label htmlFor="dark">Dark</label>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                }
                {this.state.steps[this.state.step].id == 'set-color' &&
                <section id="set-color">
                    <div className="container">
                        <h3>...and your group's color</h3>
                        <div className="content">
                            <TwitterPicker onChange={this.changeColor} color={this.state.color} width="204px" triangle="hide" colors={['#FFAD0A', '#FF8421', '#F92F39', '#ED2D96', '#8B5EFF', '#5D3CF6', '#007FFF', '#00C3D8', '#00C853', '#6F879F']} />
                        </div>
                    </div>
                </section>
                }
                {this.state.steps[this.state.step].id == 'set-description' &&
                <section id="set-description">
                    <div className="container">
                        <h3>What about a simple description?</h3>
                        <div className="content">
                            <textarea ref="description" onChange={this.changeDescription} type="text" value={this.state.description} placeholder="Enter a description" />
                            <div>
                                255 characters max. You can leave it blank.
                            </div>
                        </div>
                    </div>
                </section>
                }
                {this.state.steps[this.state.step].id == 'set-credentials' &&
                <section id="set-credentials">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <div className="container">
                        <h3>{this.state.client ? 'Continue as existing user' : 'It\'s time to register!'}</h3>
                        {this.state.client &&
                        <a onClick={this.removeClient}>or register as new user</a>
                        }
                        {this.state.client
                        ? <div className="content">
                            <input ref="email" type="text" value={this.state.client.account.email} disabled />
                        </div>
                        : <div className="content">
                            <input ref="email" onChange={this.changeEmail} type="text" value={this.state.email} placeholder="Enter your email address" />
                            <input ref="password" onChange={this.changePassword} type="password" value={this.state.password} placeholder="Set your password" />
                            <div>By continuing you accept our <Link to="/legal/terms-of-service" target="_blank">Terms of Service</Link></div>
                        </div>
                        }
                        {
                            this.state.verificationStatus && this.state.verificationStatus === 'display' &&
                            (<div className="Modal-overlay">
                                    <div className="content">
                                        {this.state.failModalMessages.length > 0 &&
                                        (<div className="warning">
                                            <ul className="fail">
                                                {this.state.failModalMessages.map((failMessage, key) => <li key={key}>{failMessage}</li>)}
                                            </ul>
                                        </div>)
                                        }
                                        Enter the 6-digit verification code sent to your email
                                        <div>
                                        {
                                            [...Array(6)].map((digit, digitIndex) => (
                                                <input
                                                    onChange={this.changeverificationCode}
                                                    onKeyDown={this.onKeyDownVerificationCode}
                                                    name={digitIndex}
                                                    key={digitIndex}
                                                    ref={'verificationCode'+digitIndex}
                                                    type="number"
                                                    value={this.state.verificationCode[digitIndex] ? this.state.verificationCode[digitIndex] : ""}
                                                />
                                            ))
                                        }
                                        </div>
                                        <button ref="next" onClick={this.changeStep} className="next" data-step="next">
                                            <i ref="loadingButtonModal"></i> <span>{this.state.steps[this.state.step].label}</span>
                                        </button>
                                        <small>Please check your SPAM folder if you can't find it.</small>
                                        <a onClick={this.closeModal}>Change Email</a>
                                        <a onClick={this.resendVerification}>Resend Email</a>
                                    </div>
                             </div>)
                        }
                    </div>
                </section>
                }
                {this.state.steps[this.state.step].id == 'set-payment' &&
                <section id="set-payment">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <div className="container">
                        <h3>No Gimmicks Pricing!</h3>
                        {this.getQuote(this.state.planType)}
                        
                        {/* <p>for a premium uninterrupted service experience. You may also use <a onClick={this.setPayment}>Paypal</a>.</p>
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                    <input type="hidden" name="hosted_button_id" value="GKL77PW743J2W" />
                                    <input type="hidden" name="on0" value="" />
                                    <input type="hidden" name="currency_code" value="USD" />
                                    <input type="hidden" name="os0" value={this.state.payment.charAt(0).toUpperCase() + this.state.payment.substr(1)} />
                                    <input type="hidden" name="custom" value={this.state.email} />
                                    <input id="charge" className="hidden" type="submit" />
                        </form> */}
                        <div className="double content">
                            <div className="left">
                                <Cards
                                    number={this.state.number}
                                    name={this.state.holder}
                                    expiry={this.state.expiry}
                                    cvc={this.state.cvc}
                                    focused={this.state.focused}
                                />
                            </div>
                            <div className="right">
                                <input name="number" onChange={this.handleCardInputChange} onFocus={this.handleCardInputFocus}  type="tel" maxLength={19} placeholder="Card Number" />
                                <input name="holder" onChange={this.handleCardInputChange} onFocus={this.handleCardInputFocus}  type="text" placeholder="Name" />
                                <input name="expiry" onChange={this.handleCardInputChange} onFocus={this.handleCardInputFocus}  type="tel" placeholder="Valid Thru" />
                                <input name="cvc" onChange={this.handleCardInputChange} onFocus={this.handleCardInputFocus}  type="tel" maxLength={4} placeholder="CVC"/>
                                {this.state.paymentError &&
                                    <Fragment>
                                        <input name="billing_address" onChange={this.handleCardInputChange} type="text" placeholder="Billing address" />
                                        <input name="billing_city" onChange={this.handleCardInputChange} type="text" placeholder="City" />
                                        <input name="billing_state" onChange={this.handleCardInputChange} type="text" placeholder="State/Province/County" />
                                        <input name="billing_zip" onChange={this.handleCardInputChange} type="text" placeholder="ZIP Code"/>
                                        <input name="billing_country" onChange={this.handleCardInputChange} type="text" placeholder="Country"/>
                                    </Fragment>
                                }
                                <p className="secure">
                                    Securely processed by
                                    <img src="/app/images/external/authorize.net-logo.png" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div ref="overlay-free" className="overlay" style={{display: 'none'}}>
                        <div className="container">
                            <div>
                                <h1>Did somebody say "free option"?</h1>
                                <p>TL;DR We don't offer free hosting, but the <a href="https://github.com/phonetworks/graphjs-server/tree/groupsv2" target="_blank">software</a> is free, so you can grab and <a href="https://github.com/phonetworks/graphjs-server/blob/groupsv2/README.md" target="_blank">host it on your own</a> easily.</p>
                                <p>Every Grou.ps network is hosted on a dedicated instance; therefore there is a hosting fee associated with them. This architecture ensures the platform runs on the same <a href="https://github.com/phonetworks/graphjs-server/tree/groupsv2" target="_blank">free open source code that we've published on Github</a>, and gives you the flexibility to import/export data at any time you want. This way, you have the liberty to host the instance on your own. We believe this is important because it guarantees you can always get the best price should you decide to run the network on your own, and you control your data. Plus, this allows us to provide fanatical support to people who actually appreciate and pay for what we do.</p>
                                <p>If you'd like to learn more about "hosting the instance on your own" option, check out the <a href="https://github.com/phonetworks/graphjs-server/blob/groupsv2/README.md" target="_blank">server</a> and <a href="https://github.com/phonetworks/grou-ps-v2/blob/master/README.md" target="_blank">client</a> docs. There is a one-click Heroku installer which allows you run the open source code (same as we do) on Salesforce's Heroku platform, which is free with limitations (the instances will be shut down after a few minutes of inactivity, and your network will fail during warm-up periods). Please note, there's no guarantee that Salesforce will always continue with this free option either. At some point, you may be forced to move. The history shows that free services tend to go premium  (<a href="https://www.emresokullu.com" target="_blank">been there done that 😔</a>) or sell your data (we're looking at you, Facebook) to survive.</p>
                                <br /><br /><br />
                                <a onClick={() => this.toggleOverlay('free')}>← Go back to Payment</a>
                            </div>
                        </div>
                    </div>
                </section>
                }
                {this.state.steps[this.state.step].id == 'go-back-home' &&
                <section id="go-back-home">
                    <div className="container">
                        <h3>You're all set!</h3>
                        <p>
                            You should get an email from us soon.
                            <br />
                            Visit your network at <a href={'https://gr.ps/' + this.state.groupsId}>{'https://gr.ps/' + this.state.groupsId}</a>
                        </p>
                    </div>
                </section>
                }
                {this.state.steps[this.state.step].demo &&
                <section className="preview">
                    <div className="container">
                        <img className="illustration" src={'/app/images/illustrations/' + this.state.steps[this.state.step].illustration} />
                        <div className="demo">
                            <p className="teaser" style={{color: this.state.steps[this.state.step].color}}>Your group will look like this:</p>
                            <nav style={{backgroundColor: this.state.color}}>
                                <b>{this.state.name.length > 0 ? this.state.name : 'My Group'}</b>
                                <ul>
                                    <li>Home</li>
                                    <li>Members</li>
                                    <li>Groups</li>
                                    <li>Forum</li>
                                    <li>Inbox</li>
                                </ul>
                            </nav>
                            <main style={{backgroundColor: this.state.theme == 'dark' ? 'rgb(63, 63, 63)' : 'rgb(247, 249, 251)'}}>
                            </main>
                        </div>
                    </div>
                </section>
                }
                <nav>
                    <div className="container">
                        {this.state.step != 0 && this.state.step != this.state.steps.length - 1 &&
                        <button ref="previous" onClick={this.changeStep} className="previous" data-step="previous">
                            {/*<span>Go Back</span>*/}
                        </button>
                        }
                        {this.state.step != this.state.steps.length - 1 &&
                        <button ref="next" onClick={this.changeStep} className="next" data-step="next">
                            <i className={this.state.loadingButton ? 'fa fa-spinner fa-spin' : ''} ref="loadingButton"></i> <span>{this.state.steps[this.state.step].label}</span>
                        </button>
                        }
                        {this.state.step == this.state.steps.length - 1 &&
                        <button onClick={this.redirectToNetwork}>
                            {this.state.steps[this.state.step].label}
                        </button>
                        }
                        {false && this.state.steps[this.state.step].id == 'set-payment' &&
                            <p><a href="javascript:void(false)" onClick={this.moveForward}>Skip</a></p>
                        }
                    </div>
                </nav>
            </Main>
        )
    }
}
