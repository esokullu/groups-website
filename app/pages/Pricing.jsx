import React from 'react';
import Main from '../components/Main';

export default class Pricing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planType: 'monthly'
        }
    }
    handlePlanTypeChange = () => {
        const planType = this.state.planType === 'monthly' ? 'annual' : 'monthly';
        this.setState({
            planType
        })
    }
    handlePlanClick = (e) => {
        e.preventDefault();
        if(this.props.session){
            window.location.href="/settings";
            return;
        }
        window.location.href=`/setup?plan=${e.target.name}-${this.state.planType}`;
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
                        {/*
                            <img className="illustration" src="/app/images/illustrations/graphjs-mascot-payment.png" />
                        */}
                           
                            <h2>Choose a plan</h2>
                            <div className="pricing-plan-type-buttons">
                                <button 
                                    onClick={this.handlePlanTypeChange} 
                                    type="button"
                                    className={
                                        "button-submit monthly-button"+
                                        (this.state.planType === 'monthly' ? " selected" : "")
                                    }
                                >
                                    Monthly
                                </button>
                                <button 
                                    onClick={this.handlePlanTypeChange}
                                    type="button"
                                    className={
                                        "button-submit annual-button"+
                                        (this.state.planType === 'annual' ? " selected" : "")
                                    }
                                >
                                    Annual
                                </button>
                            </div>
                            <div className="content" style={{maxWidth: "65em", marginTop: "2em"}}>
                            <div className="react-pricing-table">
                                <div className="Grid">
                                    <div className="Grid-cell">
                                        <ul className="price basic-border">
                                            <li
                                                id="basic-header"
                                                className="basic-header"
                                            >
                                            Bronze
                                            </li>
                                            {
                                                this.state.planType === "monthly" ? 
                                                <li className="tag">$8/month</li> :
                                                (<li className="tag">
                                                    <div className="non-offer-price text-line-through">$96/year</div>
                                                    <div>$80/year</div>
                                                </li>)
                                                
                                            }
                                            <div><li className=""> 200 members</li></div>
                                            <div><li className=""> 0.5GB compute power</li></div>
                                            <div><li className=""> Daily Digest Emails</li></div>
                                            <div><li className="text-line-through"> Custom Domain</li></div>
                                            <div><li className="text-line-through"> Bitcoin Accepted</li></div>
                                            <li className="grey">
                                                <button
                                                    type="button"
                                                    className="button-submit"
                                                    name="bronze"
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
                                                Silver
                                            </li>
                                            {
                                                this.state.planType === "monthly" ? 
                                                <li className="tag">$24/month</li> :
                                                (<li className="tag">
                                                    <div className="non-offer-price text-line-through">$288/year</div>
                                                    <div>$240/year</div>
                                                </li>)   
                                            }
                                            <div><li className=""> 500 members</li></div>
                                            <div><li className=""> 0.5GB compute power</li></div>
                                            <div><li className=""> Daily Digest Emails</li></div>
                                            <div><li className=""> Custom Domain</li></div>
                                            <div><li className="text-line-through"> Bitcoin Accepted</li></div>
                                            <li className="grey">
                                            <button
                                                type="button"
                                                className="button-submit"
                                                name="silver"
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
                                            <li id="basic-header" className="basic-header">Gold</li>
                                            {
                                                this.state.planType === "monthly" ? 
                                                <li className="tag">$80/month</li> :
                                                (<li className="tag">
                                                    <div className="non-offer-price text-line-through">$960/year</div>
                                                    <div>$800/year</div>
                                                </li>)   
                                            }
                                            <div><li className=""> 2000 members</li></div>
                                            <div><li className=""> 1GB compute power</li></div>
                                            <div><li className=""> Daily Digest Emails</li></div>
                                            <div><li className=""> Custom Domain</li></div>
                                            <div><li className=""> Bitcoin Accepted</li></div>
                                            <li className="grey">
                                            <button
                                                type="button"
                                                className="button-submit"
                                                name="gold"
                                                style={{backgroundColor: 'rgb(93, 60, 246)'}}
                                                onClick={this.handlePlanClick}
                                            >
                                                SIGN UP
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
                    <p>We also have enterprise accounts. Please <a href="https://www.groups-inc.com/contact.html" target="_blank">contact</a> for more information.</p>
                    </section>

                    </div>

                </main>
            </Main>
        )
    }
}