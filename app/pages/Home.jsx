import React from 'react';
import {Link} from 'react-router-dom';

import Main from '~/components/Main';
import Hero from '~/components/Hero';
import Headline from '~/components/Headline';
import Animation from '~/components/Animation';

import logout from '~/scripts/logout';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.setActiveTab = this.setActiveTab.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
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
    handleLogout() {
        logout('id', function () {
            console.log('Logged out!');
        });
    }
    render() {
        return (
            <Main id="home" data-page="home">
                <Hero>
                    <Animation />
                    {/*<Headline title="Say it like it is!" subtitle="Meet three new people everyday, on topics you care about" />*/}
                    <Headline title="Say it like it is!" subtitle="Uncensorable Encrypted Group Sharing With Video-Calls" />
                    {/*<p>This is not ano</p>*/}
                    {/*<p>Uncensorable Encrypted Group Sharing With Video-Calls</p>*/}
                    <p>The privacy-focused GroupsVille provides a decentralized and censorship-resistant social platform, where you actually own your data.</p>
                    <Link to="/" className="button" style={{"width": "280px"}}>i have an invitation</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/setup" className="button" style={{
                        "display": "inline-block",
                        "width": "280px",
                        "marginTop": "1.5em",
                        "backgroundColor": "#9e77ff"
                    }}>Start a group for free...</Link>
                    <p>Already a member? <a href="/login">Log in</a></p>
                </Hero>
                <main>

                    <img className="separator" src="app/images/illustrations/character-left-separator.png" />
                    <section className="information">
                        <div className="container">
                            <h3>Think Graph! Think Different!</h3>
                            <ul>
                                <li>
                                    <b>Camaraderie Network</b>
                                    <p>GroupsVille's decentralized technology is designed to circumvent internet censorship all around the world. By using GroupsVille, you are helping the world become more open.
                                        </p>
                                </li>
                                <li>
                                    <b>Open Source</b>
                                    <p>Our code is open source. You may always start a hosted version, and/or switch back and forth.</p>
                                </li>
                                
                                <li>
                                    <b>Ownership guaranteed on the blockchain</b>
                                    <p>With GroupsVille, data ownership and portability is not just a marketing gimmick partially implemented. Your ownership is verified and registered in the Ethereum blockchain.</p>
                                </li>
                                <li>
                                    <b>Humane Design</b>
                                    <p>Time is well spent here at GroupsVille. We are committed to say no to excessive notifications, and algorithmic manipulative newsfeed design.</p>
                                </li>
                                <li>
                                    <b>End-to-End Encrypted</b>
                                    <p>With Groupsville, all data is encrypted in-transit, and at-rest.</p>
                                </li>
                                <li>
                                    <b>Extensible</b>
                                    <p>Embed parts of your network in a single tag on your existing website, or access it programmatically.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p style={{textAlign: "center"}}>[ <a href="https://www.scribd.com/document/430637730/GoBC-Whitepaper" target="_blank">Read the whitepaper</a> ]</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <center>&copy; 2019 Research in Social Graph (<a onClick={this.handleLogout}>log out</a>)</center>
                </main>
            </Main>
        )
    }
}