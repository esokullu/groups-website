// Modules
import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import 'react-tippy/dist/tippy.css';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Docs from '~/pages/Docs';
import Setup from './pages/Setup';
import Settings from './pages/Settings';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Error from './pages/Error';
import Legal from './pages/Legal';
import Pay from '~/pages/Pay';
import Careers from './pages/Careers';

// Scripts
import generateRandomKey from './scripts/generateRandomKey.js';
import checkSession from './scripts/checkSession.js';
import destroySession from './scripts/destroySession.js';
import getInstances from './scripts/getInstances.js';
import getClient from './scripts/getClient.js';
//import checkModeration from './scripts/checkModeration.js';
import fetchAllMembers from './scripts/fetchAllMembers.js';
import fetchModerationQueue from './scripts/fetchModerationQueue.js';
import signup from '../app/scripts/signup';
import verifyCode from '../app/scripts/verifyCode';
import resendVerification from '../app/scripts/resendVerification';

// Styles
import './styles/common.less';
import Comparing from './pages/Comparing';

// Application
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            session: false,
            client: undefined,
            print: generateRandomKey()
        }
        this.setClient = this.setClient.bind(this);
        this.unsetClient = this.unsetClient.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleVerifyCode = this.handleVerifyCode.bind(this);
        this.handleResendVerification = this.handleResendVerification.bind(this);
    }
    componentWillMount() {
        //WARNING: Document not loaded. Do not use "document" here.
        var canUseDOM = !!(
            typeof window !== 'undefined' &&
            window.document &&
            window.document.createElement
        );
        canUseDOM && this.setClient();
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentWillUpdate() {
        window.scrollTo(0, 0);
    }
    setClient(callback) {
        let self = this;
        checkSession(function (response) {
            if (response.success) {
                self.setState({
                    session: true
                });
                getClient(function (response) {
                    if (response.success) {
                        let client = {
                            id: response.body.id,
                            account: {
                                email: response.body.email,
                                graphjsHash: response.body.graphjsHash
                            },
                            instances: []
                        };
                        getInstances(function (response) {
                            if (response.success && response.body) {
                                /*
                                const Instances = response.body.filter(function (item) {
                                    return (item.is_groups);
                                });
                                */
                                const Instances = response.body;
                                let i = 0;
                                if (Instances.length > 0) {
                                    Instances.forEach(function (item) {
                                        i++;
                                        let instance = {
                                            id: item.id,
                                            uuid: item.uuid,
                                            title: item.groups_title,
                                            name: item.groups_name,
                                            subscription: item.is_subscribed,
                                            production: item.is_production,
                                            description: item.description,
                                            url: item.site.url,
                                            theme: item.theme,
                                            color: item.color.charAt(0) === '#' ? item.color : '#' + item.color,
                                            hash: client.account.graphjsHash,
                                            moderated: false,
                                            pendingComments: [],
                                            selfServicePage: item.self_service_portal
                                        }
                                        //if(item.is_groups)
                                            client['instances'].push(instance);
                                            (Instances.length == i) && self.setState({
                                                client: client,
                                                print: generateRandomKey()
                                            });
                                    });
                                } else {
                                    self.setState({
                                        client: client,
                                        print: generateRandomKey()
                                    });
                                }
                            }
                        });
                        callback && callback();
                    } else {
                        self.unsetClient();
                        //window.alert("You were logged out. Please refresh this page and try again.");
                    }
                });
            } else {
                self.unsetClient();
            }
        });
    }
    unsetClient() {
        this.setState({
            session: false,
            client: undefined,
            print: generateRandomKey()
        });
        destroySession();
    }
    handleSignUp(groupsId, name, url, password, email, theme, color, callback) {
        let self = this;
        signup(groupsId, name, url, password, email, theme, color, function (error, response) {
            // self.setClient();
            callback(error, response);
        })
    }
    handleVerifyCode(groupsId, name, url, password, email, theme, color, verificationCode, description, callback) {
        let self = this;
        verifyCode(groupsId, name, url, password, email, theme, color, verificationCode, description, function (error, response) {
            self.setClient();
            callback(error, response);
        })
    }
    handleResendVerification(email, callback) {
        let self = this;
        resendVerification(email, function (error, response) {
            callback(error, response);
        })
    }
    render() {
        return (
            <div>
                <Route path="/:page?/:subpage?" render={(props) =>
                    <Navigation
                        session={this.state.session}
                        logout={this.unsetClient}
                    />
                } />
                <Switch>
                    <Route exact path="/" render={(props) =>
                        <Home />
                    } />
                    <Route exact path="/comparing" render={(props) =>
                        <Comparing />
                    } />
                    <Route path="/pricing" render={(props) =>
                        <Pricing session={this.state.session} />
                    } />
                    <Route path="/docs/:category?/:item?" render={(props) =>
                        <Docs
                            params={props.match.params}
                        />
                    } />
                    <Route path="/setup" render={(props) =>
                        <Setup
                            client={this.state.client}
                            handleSignUp={this.handleSignUp}
                            handleVerifyCode={this.handleVerifyCode}
                            handleResendVerification={this.handleResendVerification}
                            queryString={props.location.search}
                        />
                    } />
                    <Route path="/settings/:category/:identifier/:item?" render={(props) =>
                        <Settings
                            session={this.state.session}
                            client={this.state.client}
                            params={props.match.params}
                            print={this.state.print}
                            setClient={this.setClient}
                        />
                    } />
                    <Route path="/settings" render={(props) =>
                        <Settings
                            session={this.state.session}
                            client={this.state.client}
                            params={props.match.params}
                            print={this.state.print}
                            setClient={this.setClient}
                        />
                    } />
                    <Route path="/login" render={(props) =>
                        <Login
                            session={this.state.session}
                            setClient={this.setClient}
                        />
                    } />
                    <Route exact path="/legal/:category?" render={(props) =>
                        <Legal
                            params={props.match.params}
                        />
                    } />
                    <Route path="/faq" render={(props) =>
                        <Redirect to="/docs/faq/" state={{ status: 301 }} />
                    } />
                    <Route path="/pay" render={(props) =>
                        <Pay {...props} />
                    } />
                    <Route path="/careers" render={(props) =>
                        <Careers />
                    } />
                    <Route render={(props) =>
                        <Error />
                    } />
                </Switch>
                <Footer />
            </div>
        )
    }
}