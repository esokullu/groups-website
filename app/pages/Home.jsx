import React from 'react';
import {Link} from 'react-router-dom';

import Main from '../components/Main';
import Headline from '../components/Headline';
import Hero from './home/Hero';

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
                <Hero />
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
                    <section className="promotion">
                        <div className="container">
                            <Headline title="Welcoming Tumblr users" subtitle="First month free. Service continuity guaranteed. " />
                            <p>
                                Services come and go. We’ve been in business for 10+ years continuous service.

                                We won’t sell or censor your data — ever.
                            </p>
                            <Link to="/setup" className="button">start yours</Link>
                        </div>
                    </section>
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
                                    <b>📦 Export/Import Data</b>
                                    <p>Your data is yours. You can always export and/or import your data with no vendor lock-in.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <img className="separator" src="app/images/illustrations/character-right-separator.png" />
                    {/*
                    <section className="promotion">
                        <div className="container">
                            <h2>Welcoming Tumblr users!</h2>
                            <p>Move to a privacy-friendly place. 3 months free.</p>
                            <button>start yours</button>
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