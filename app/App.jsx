import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import Home from './pages/Home';
import Pricing from './pages/Pricing';
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
                                email: response.body.email
                            }
                        };
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
    handleSignUp(url, password, email, theme, color, callback){
        let self = this;
        signup(url, password, email, theme, color,function(error, response){
            // self.setClient();
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
                        <Setup />
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
