// Modules
import React, {Fragment} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Select from 'react-select';

// Scripts
import unsubscribe from '../../../scripts/unsubscribe';

// Page: Settings > Account > Cancellation
export default class Cancellation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            failMessages: [],
            reason: {},
            done: false
        }
        this.handleSelection = this.handleSelection.bind(this);
        this.handleReasonSubmit = this.handleReasonSubmit.bind(this);
        this.options = [
            {
                value: 'expensive',
                label: 'It\'s expensive. I cannot afford it.'
            },
            {
                value: 'difficult',
                label: 'It\'s difficult. I have trouble using it.'
            },
            {
                value: 'other',
                label: 'I have other problems.'
            }
        ]
    }
    componentDidMount() {
        let searchParameters = new URLSearchParams(window.location.search);
        let instanceId = searchParameters.get('instance');
        let instance = this.props.instances.filter(instance => instance.id === instanceId)[0];
        instance && this.setState({instance});
    }
    handleSelection(selection) {
        this.setState({selection});
        let code = selection.value || '';
        this.setState({
            reason: {
                ...this.state.reason,
                code
            }
        });
        if(code!="other") {
            unsubscribe(this.state.instance.uuid, code, "", (response) => {
                if(response.success) {
                    target.classList.remove('loading');
                    this.setState({
                        done: true
                    });
                } else {
                    target.classList.remove('loading');
                    alert('An unknown problem occured. Please try again.')
                }
            });
        }
    }
    handleReasonSubmit(event) {
        let {target} = event;
        let {instance, reason} = this.state;
        target.classList.add('loading');
        
        unsubscribe(instance.uuid, reason.code, reason.explanation, (response) => {
            if(response.success) {
                target.classList.remove('loading');
                this.setState({
                    done: true
                });
            } else {
                target.classList.remove('loading');
                alert('An unknown problem occured. Please try again.')
            }
        });
        
    }
    render() {
        let {instance, reason} = this.state;
        return (
            <section className="cancellation">
                <h1>Cancellation</h1>
                {!this.state.done
                    ? <Fragment>
                        {this.state.failMessages.length > 0 &&
                        <div className="warning container">
                            <ul className="fail">
                                {this.state.failMessages.map((failMessage, key) => <li key={key}>{failMessage}</li>)}
                            </ul>
                        </div>}
                        {this.state.instance &&
                            <Fragment>
                                <div className="block">
                                    <h3>We are sorry to hear that you are cancelling</h3>
                                    <p>
                                        <b>You are about to cancel your Grou.ps site.</b>
                                        <br />
                                        <b>Site ID:</b> {instance.uuid}
                                    </p>
                                </div>
                                <div className="block">
                                    <h3>Before you go...</h3>
                                    <p>Please let us know why you are cancelling.</p>
                                    <Select
                                        className="reason"
                                        options={this.options}
                                        value={this.state.selection}
                                        onChange={this.handleSelection}
                                        placeholder="Please select..."
                                        theme={(theme) => ({
                                            ...theme,
                                            colors: {
                                                ...theme.colors,
                                                primary25: 'rgba(158, 119, 255, .15)',
                                                primary: 'rgb(93, 60, 246)',
                                            },
                                            control: {
                                                width: 200
                                            }
                                        })} />
                                    {reason.code === 'other' &&
                                        <Fragment>
                                            <input
                                                type="text"
                                                className="reason explanation"
                                                value={reason.explanation || ''}
                                                onChange={(event) => this.setState({
                                                    reason: {
                                                        ...reason,
                                                        explanation: event.target.value
                                                    }
                                                })}
                                                placeholder={
                                                    reason.explanation /*&& reason.explanation.length >= 10*/
                                                        ? 'Please explain...'
                                                        : 'Please explain... (255 characters max.)'
                                                } />
                                            {reason.explanation && reason.explanation.length <= 10 &&
                                                <button onClick={this.handleReasonSubmit}>Submit</button>
                                            }
                                        </Fragment>
                                    }
                                </div>                                
                                {/*
                                {reason.code === 'expensive' &&
                                    <div className="block">
                                        <h3>Don't worry!</h3>
                                        <p>
                                            <b>We have a special discount for you!</b>
                                        </p>
                                        <p>We will automatically switch your plan to the <b>Lean</b>* plan. You won’t be charged unless you change your plan. Our customer service will be in touch to discuss all your options.</p>
                                        <small>* Lean plan is a special care. One year at a price for only one month. $8/year. Please note instances will deactivate after 15 mins of inactivity.</small>
                                        <button onClick={this.handleReasonSubmit}>Convert to Lean plan</button>
                                    </div>
                                }
                                {reason.code === 'difficult' &&
                                    <div className="block">
                                        <p>
                                            <b>We will be glad to solve your technical problems.</b>
                                        </p>
                                        <button onClick={this.handleReasonSubmit}>Get Help</button>
                                    </div>
                                }
                                */}
                            </Fragment>
                        }
                        {!this.state.instance &&
                            <div className="block">
                                <p>Instance not found.</p>
                            </div>
                        }
                    </Fragment>
                    : <Fragment>
                        {reason.code === 'expensive' &&
                            <Fragment>
                                <h3>All set!</h3>
                                <p>Thanks for the feedback.</p>
                            </Fragment>
                        }
                        {(reason.code === 'difficult' || reason.code === 'other') &&
                            <Fragment>
                                <h3>All set!</h3>
                                <p>Thanks for the feedback.</p>
                                <p>We're sorry to see you, if there is anything we can do to help, shoot us an email at x _at_ risg.co</p>
                                {/*
                                <p>
                                    <b>Please schedule your meeting.</b>
                                </p>
                                <div className="calendly-inline-widget" data-url="https://calendly.com/hai-at-grou-ps" style={{position: 'relative', minWidth: '320px', height: '580px'}} data-processed="true">
                                    <div className="spinner">
                                        <div className="bounce1"></div>
                                        <div className="bounce2"></div>
                                        <div className="bounce3"></div>
                                    </div>
                                    <iframe src="https://calendly.com/hai-at-grou-ps?embed_domain=www.calendly-embed.com&amp;embed_type=Inline" width="100%" height="100%" frameBorder="0"></iframe>
                                </div>
                                */}
                            </Fragment>
                        }
                    </Fragment>
                }
            </section>
        )
    }
}