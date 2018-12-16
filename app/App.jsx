import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Error from './pages/Error';
import Legal from './pages/Legal';
import Setup from './pages/Setup';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import generateRandomKey from './scripts/generateRandomKey.js';
import checkSession from './scripts/checkSession.js';
import destroySession from './scripts/destroySession.js';
import getClient from './scripts/getClient.js';
import signup from '../app/scripts/signup';
import getInstances from './scripts/getInstances.js';
import fetchAllMembers from './scripts/fetchAllMembers.js';
import checkModeration from './scripts/checkModeration.js'
import fetchModerationQueue from './scripts/fetchModerationQueue.js'
import verifyCode from '../app/scripts/verifyCode';
import resendVerification from '../app/scripts/resendVerification';

import './styles/common.less';

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
    setClient() {
        let self = this;
        checkSession(function(response) {
            if(response.success) {
                self.setState({
                    session: true
                });
                getClient(function(response) {
                    if(response.success) {
                        let client = {
                            id: response.body.id,
                            account: {
                                email: response.body.email,
                                graphjsHash: response.body.graphjsHash
                            },
                            instances: []
                        };
                        getInstances(function(response) {
                            if(response.success) {
                                response.body.forEach(function(item) {
                                    console.log('A: runs once')
                                    let instance = {
                                        id: item.id,
                                        uuid: item.uuid,
                                        subscription: item.is_subscribed,
                                        production: item.is_production,
                                        url: item.site.url,
                                        theme: item.theme,
                                        color: item.color.charAt(0) == '#' ? item.color : '#' + item.color,
                                        hash: client.account.graphjsHash,
                                        moderated: false,
                                        pendingComments: []
                                    }
                                    checkModeration(item.uuid, client.account.graphjsHash, function(response) {
                                        if(response.success) {
                                            instance.moderated = response.body;
                                            fetchAllMembers(item.uuid, client.account.graphjsHash, function(response) {
                                                if(response.success) {
                                                    instance.members = response.body? response.body[0] : [];
                                                    console.log('B: runs once')
                                                    fetchModerationQueue(item.uuid, client.account.graphjsHash, function(response) {
                                                        console.log('C: runs twice') // This is probably caused by cors / preflight response
                                                        if(response.success) {
                                                            instance.pendingComments = response.body;
                                                        }

                                                        client['instances'].push(instance);
                                                        self.setState({
                                                            client: client,
                                                            print: generateRandomKey()
                                                        });
                                                    });
                                                }
                                            });
                                        }
                                        else {
                                            client['instances'].push(instance);
                                            self.setState({
                                                client: client,
                                                print: generateRandomKey()
                                            });
                                        }
                                    });

                                });

                            }
                        });
                    }
                    else {
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
    handleSignUp(groupsId, name, url, password, email, theme, color, callback){
        let self = this;
        signup(groupsId, name, url, password, email, theme, color, function(error, response){
            // self.setClient();
            callback(error,response);
        })
    }
    handleVerifyCode(groupsId, name, url, password, email, theme, color, verificationCode, callback){
        let self = this;
        verifyCode(groupsId, name, url, password, email, theme, color, verificationCode, function(error,response){
            self.setClient();
            callback(error,response);
        })
    }
    handleResendVerification(email, callback){
        let self = this;
        resendVerification(email, function(error,response){
            callback(error,response);
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
                }/>
                <Switch>
                    <Route exact path="/" render={(props) =>
                        <Home />
                    }/>
                    <Route path="/pricing" render={(props) =>
                        <Pricing session={this.state.session}/>
                    }/>
                    <Route path="/setup" render={(props) =>
                        <Setup
                            client={this.state.client}
                            handleSignUp={this.handleSignUp}
                            handleVerifyCode={this.handleVerifyCode}
                            handleResendVerification={this.handleResendVerification}
                        />
                    }/>
                    <Route path="/settings/:category/:identifier/:item?" render={(props) =>
                        <Settings
                            session={this.state.session}
                            client={this.state.client}
                            params={props.match.params}
                            print={this.state.print}
                            setClient={this.setClient}
                        />
                    }/>
                    <Route path="/settings" render={(props) =>
                        <Settings
                            session={this.state.session}
                            client={this.state.client}
                            params={props.match.params}
                            print={this.state.print}
                            setClient={this.setClient}
                        />
                    }/>
                    <Route path="/login" render={(props) =>
                        <Login
                            session={this.state.session}
                            setClient={this.setClient}
                        />
                    }/>
                    <Route exact path="/legal/:category?" render={(props) =>
                        <Legal
                            params={props.match.params}
                        />
                    }/>
                    <Route render={(props) =>
                        <Error />
                    }/>
                </Switch>
                <Footer />
            </div>
        )
    }
}
