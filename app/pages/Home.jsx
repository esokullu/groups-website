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
                    <Headline title="Say it like it is!" subtitle="Secure Group Sharing &amp; Video-Calls" />
                    <p>Groupsville provides a private and censorship-free open source social platform, where you actually own your own data.</p>
                    <Link to="/setup" className="button">Start for free!</Link>
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
                            <Headline title="Welcoming Yahoo! Groups users" subtitle="" />
                            <p>
                                Services come and go. We’ve been in business for 10+ years.
                                Also since our code is fully open source, you retain the freedom to easily switch to the <a href="https://github.com/phonetworks/grou-ps-v2" target="_blank">self-hosted</a> version at anytime. No lock-ins.
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
                                    <b>Modern Design</b>
                                    <p>Groupsville looks gorgeous and it's super-simple for you and your members to use. Plus, it's written in Bootstrap 4, so it's easy to find/make new responsive templates.</p>
                                </li>
                                <li>
                                    <b>A Feed Like No Other</b>
                                    <p>With Groupsville, say no to manipulative algorithmic newsfeeds which hook you to the service at the expense of your mental health. Our feed is simply time-based, hence it is NOT exploitative.</p>
                                </li>

                                <li>
                                    <b>No Gimmicks Pricing</b>
                                    <p>$8 per month. No annuals, no hidden fees. Price waived for the first year if you reach 30 members as long as you post at least 10 pieces of contents every month.</p>
                                </li>

                                <li>
                                    <b>Open Source</b>
                                    <p>Our code is open source. You can always start a hosted version here at Groupsville, then if you're not happy for any reason, switch to your own servers and continue from where you left off.</p>
                                </li>
                                
                            </ul>
                        </div>
                    </section>
                    
                </main>
            </Main>
        )
    }
}