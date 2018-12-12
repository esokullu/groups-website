import React from 'react';


import Main from '../components/Main';

export default class Pricing extends React.Component {

    constructor(props) {
        super(props);
        this.handlePlanClick = this.handlePlanClick.bind(this);

    }
    handlePlanClick = (e) => {
        e.preventDefault();
        if(this.props.session){
            window.location.href="/settings";
            return;
        }
        window.location.href="/setup";
    }
    render() {
        //import  from 'react-pricing-table';
        // //, PricingSlot, PricingDetail}
        // const PricingTable = require('react-pricing-table').PricingTable;
        // const PricingSlot = require('react-pricing-table').PricingSlot;
        // const PricingDetail = require('react-pricing-table').PricingDetail;

        return (
            <Main id="pricing" data-page="pricing" className="setup-or-pricing">
                <main>
                    <div className="container">
                        <section id="set-payment">
                        <div className="container">
                            <img className="illustration" src="/app/images/illustrations/graphjs-mascot-payment.png" />
                            <h3>Choose a plan</h3>
                            <div className="content" style={{maxWidth: "65em", marginTop: "2em"}}>
                            <div className="react-pricing-table">
                                <div className="Grid">
                                    <div className="Grid-cell">
                                        <ul className="price basic-border">
                                            <li
                                                id="basic-header"
                                                className="basic-header"
                                            >
                                            Free Forever
                                            </li>
                                            <li className="tag">$0/month</li>
                                            <div><li className=""> Free for testing</li></div>
                                            <div><li className=""> Sleeps after 30 mins inactivity</li></div>
                                            <div><li className=""> Max 200 objects [*]</li></div>
                                            <div><li className=""> Data Export</li></div>
                                            <div><li className="text-line-through"> Weekly Backups</li></div>
                                            <li className="grey">
                                                <button
                                                    type="button"
                                                    className="button-submit"
                                                    style={{backgroundColor: 'rgb(93, 60, 246)'}}
                                                    onClick={this.handlePlanClick}
                                                >
                                                    SIGN UP
                                                </button></li>
                                        </ul>
                                    </div>
                                    <div className="Grid-cell">
                                        <ul className="price basic-border">
                                            <li id="highlighted-header"
                                                className="highlighted-header"
                                                style={{backgroundColor: 'rgb(93, 60, 246)'}}
                                            >
                                                Basic
                                            </li>
                                            <li className="tag">$8/month</li>
                                            <div><li className=""> Production mode. Never Sleeps.</li></div>
                                            <div><li className=""> Dedicated 1GB instance</li></div>
                                            <div><li className=""> No limits on # of objects</li></div>
                                            <div><li className=""> Data Export</li></div>
                                            <div><li className=""> Weekly Backups</li></div>
                                            <li className="grey">
                                            <button
                                                type="button"
                                                className="button-submit"
                                                style={{backgroundColor: 'rgb(93, 60, 246)'}}
                                                onClick={this.handlePlanClick}
                                            >
                                                SIGN UP
                                            </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Grid-cell">
                                        <ul className="price basic-border">
                                            <li id="basic-header" className="basic-header">Pro</li>
                                            <li className="tag">Ask</li>
                                            <div><li className=""> Everything in Basic</li></div>
                                            <div><li className=""> Large Dedicated Instance(s)</li></div>
                                            <div><li className=""> Performance SLA </li></div>
                                            <div><li className=""> Data Export &amp; Import</li></div>
                                            <div><li className=""> Tier-1 Support </li></div>
                                            <li className="grey">
                                                <button
                                                    type="button"
                                                    className="button-submit"
                                                    style={{backgroundColor: 'rgb(93, 60, 246)'}}
                                                    onClick={() => GraphJS.showMessagesComposer({
                                                        id: "4371996e166e6cc3771f2dbbb2b09c52", anonymity: "on"
                                                    })}
                                                >
                                                        Contact
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/*
                        <div className="container">
                            <h3>Frequently Asked Questions</h3>
                            <div className="content"  style={{maxWidth: "45em", textAlign: "left"}}>
                            <h4>Do I have to provide a credit card account?</h4>
                            <div>Nothing</div>
                            <h4>What happens if I cancel before?</h4>
                            <div>Nothing</div>
                            </div>
                        </div>
                        */}
                    <p>[*] An object is any user, comment or write activity on the instance.</p>
                    </section>

                    </div>

                </main>
            </Main>
        )
    }
}