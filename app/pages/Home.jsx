import React from 'react';
import {Link} from 'react-router-dom';

import Main from '~/components/Main';
import Hero from '~/components/Hero';
import Headline from '~/components/Headline';
import Animation from '~/components/Animation';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.setActiveTab = this.setActiveTab.bind(this);
    }
    componentDidMount() {
  		let sliders = document.getElementsByClassName('slider');
  		for(let i = 0; i < sliders.length; i++) {
  			simpleslider.getSlider({
  				container: sliders[i],
  				transitionTime: 1,
  				delay: 3.5,
  				init: 100,
  				show: 0,
  				end: -100,
  				unit: '%'
  			});
  		}
    }
    setActiveTab(index) {
        let tabs = document.getElementById('tabs').children;
        let views = document.getElementById('views').children;
        for(let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
            views[i].classList.remove('active');
        }
        tabs[index - 1].classList.add('active');
        views[index - 1].classList.add('active');
    }
    render() {
        return (
            <Main id="home" data-page="home">
                <Hero>
                    <Animation />
                    <Headline title="Express Yourselves" subtitle="Create your censorship-free social network" />
                    <p>Grou.ps provides a private and censorship-free open source social platform, where you actually own your own data.</p>
                    <Link to="/setup" className="button">Let's get started!</Link>
                </Hero>
                <main>
                    <section className="introduction">
                        <div className="container">
                            <div className="preview">
                                <div className="slider">
                                    <img src="app/images/screenshots/home.png" />
                                    <img src="app/images/screenshots/members.png" />
                                    <img src="app/images/screenshots/forum.png" />
                                    <img src="app/images/screenshots/theme.png" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* 
                    <section className="promotion">
                        <div className="container">
                            <Headline title="Welcoming Google+ users" subtitle="First month free. Service continuity guaranteed. " />
                            <p>
                                Services come and go. We’ve been in business for 10+ years continuous service.

                                You retain the freedom to easily switch from Grou.ps SaaS to <a href="https://github.com/phonetworks/grou-ps-v2" target="_blank">self-hosted</a>. We do not believe in locking users into their choices.

                            </p>
                            <Link to="/setup" className="button">start free trial</Link>
                        </div>
                    </section>
                    */}
                    <img className="separator" src="app/images/illustrations/character-left-separator.png" />
                    <section className="information">
                        <div className="container">
                            <h3>Everything you need</h3>
                            <ul>
                                <li>
                                    <b>👌 Modern Design</b>
                                    <p>Grou.ps v2 looks gorgeous and it's super-simple for you and your members to use. Plus, it's written in Bootstrap 4, so it's easy to find/make new responsive templates.</p>
                                </li>
                                <li>
                                    <b>😇 Open Source</b>
                                    <p>Our code is open source. You can always start a hosted version here at Grou.ps, and if you're not happy with the service you can easily export your data and continue elsewhere - exactly where you left off.</p>
                                </li>
                                <li>
                                    <b>🤓 Developer-Friendly</b>
                                    <p>Embed Grou.ps features in a single tag on your existing website, or access it programmatically via Javascript and/or mobile languages.</p>
                                </li>
                                <li>
                                    <b>🤯 No Gimmicks Pricing</b>
                                    <p>$8 per month. No annuals, no hidden fees. Simple as can be. Service continuity guaranteed. We won’t sell or censor your data — ever.</p>
                                </li>
                                <li>
                                    <b>👩‍🎤 Expressive</b>
                                    <p>Host your community under your own domain name. Use HTML/CSS/Javascript and Bootstrap to further customize your network.</p>
                                </li>
                                <li>
                                    <b>📦 Export/Import Data</b>
                                    <p>Your data is yours. You can always export and/or import your data with no vendor lock-in.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <img className="separator" src="app/images/illustrations/character-middle-separator.png" />
                    <section className="information">
                        <div className="container">
                            <h3>Privacy you have asked for</h3>
                            <ul>
                                <li>
                                    <b>🇳🇱 Dutch Privacy</b>
                                    <p>Grou.ps servers are located in the Netherlands, and in accordance with Dutch privacy laws, we commit to never disclosing any data unauthorized or tracking your usage.</p>
                                </li>
                                <li>
                                    <b>🙈 Anonymous Accounts</b>
                                    <p>In accordance with GDPR, we require only a valid email address to get you started. By default, we do not keep any IP logs which can be linked to your account. Your privacy comes first.</p>
                                </li>
                                <li>
                                    <b>🧐 In-Transit Encryption</b>
                                    <p>All communications are secured automatically with in-transit encryption. This means no 3rd party can intrude, decrypt and read your content. Grou.ps can be put behind Tor for additional security.</p>
                                </li>
                                <li>
                                    <b>💵 Bitcoin Payments</b>
                                    <p>This is 21<sup>st</sup> century. Pay your subscription fee by Bitcoin. Available only with Gold Annual plan.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <img className="separator" src="app/images/illustrations/character-right-separator.png" />
                    {/*
                    <section className="promotion">
                        <div className="container">
                            <h2>Welcoming Google+ users!</h2>
                            <p>Service continuity guaranteed. Open source version available.</p>
                            <button>start yours</button>*
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                        </div>
                    </section>
                    */}
                    <section className="indication">
                        <div className="container">
                            <div className="brand">
                                <img className="logo" src="app/images/identity/grou.ps-logo.svg" />
                                <p>is proudly open source.</p>
                            </div>
                        </div>
                    </section>
                </main>
            </Main>
        )
    }
}