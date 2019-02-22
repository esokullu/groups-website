import React from 'react';
import Main from '../components/Main';
import Accordion from '../components/Accordion';

export default class Careers extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        let containerStyle = {
            textAlign: 'center'
        };
        let textContainerStyle = {
            width: '600px',
            margin: '2em auto'
        };
        return (
        <Main id="careers" data-page="careers">
            <main>
                <section>
                    <h2>Careers</h2>
                    <h3>Let's make the web social and meaningful</h3>
                    <div className="container" style={containerStyle}>
                            <img src="/app/images/photos/careers.jpg" />
                    </div>
                    <div className="container" style={textContainerStyle}>
                            <p>Grou.ps is dedicated to giving an uncensored voice to online communities all around the world. We've been doing this for the last 12+ years, and we're here for decades more to come.</p>
                            <p>Grou.ps Inc. is ideal for job-seekers looking for both stability, and the startup culture, together at the same time. Some other unique benefits are:</p>
                            <ul>
                                <li>We are distributed. Geographic boundaries won't limit you from participating.</li>
                                <li>All our work is open source and liberally licensed for derivatives.</li>
                                <li>No BS. Our job listings and processes are straightforward. We don't need a resume. Just send us your LinkedIn profile and/or a link to your portfolio, and we'll evaluate. A cover letter is a huge plus.</li>
                                <li>Response guaranteed. Yes or no. We'll let you know in 7 days.</li>
                            </ul>
                            <p>If you're interested, please apply below:</p>
                    </div>
                    <h3>Current Openings</h3>
                    <Accordion title="General Application">
                        <div className="accordain-content">
                            <div>We need all the help we can get to grow and change the web for better. If you believe you have a unique ability beyond our current openings, and drive for this mission, please <a href="mailto:business@groups-inc.com">get in touch</a> and let us know how we can work together. We love entrepreneurial spirit.</div>
                        </div>
                    </Accordion>
                    <Accordion title="Product Manager">
                        <div className="accordain-content">
                        <p>We need entrepreneurial, well-educated generalists to lead and grow our products such as Grou.ps, Internal Tools, GraphJS Mobile etc.</p>
                        <p>General Requirements:</p>
                        <ul>
                            <li>Entrepreneurial experience, and/or MBA</li>
                            <li>Motivated to work in a startup environment</li> 
                            <li>Immense curiosity and desire to grow and learn</li>
                            <li>Ability to transform customer needs into software</li>
                            <li>Understanding of software development processes</li>
                        </ul>
                        <p>Sounds interesting? <a href="mailto:business@groups-inc.com">Apply</a>.</p>
                        </div>
                    </Accordion>
                    <Accordion title="Customer Success Manager">
                        <div className="accordain-content">
                        <p>Your main responsibility will be to convert all signed up users to happy customers within 90 days after signup.</p>
                        <p>General Requirements:</p>
                        <ul>
                            <li>3+ yrs of inbound marketing experience in SaaS or/and digital product marketing.</li>
                            <li>Excellent verbal and written communication in English</li>
                            <li>Strong communication skills</li>
                            <li>Internet savvy, familiarity with social media like Twitter, Facebook, Wordpress, etc.</li>
                            <li>Experience in customer service/customer interaction</li>
                            <li>You are comfortable defining KPIs and being accountable for meeting those.</li>
                            <li>Experience in and comfortable with using spread sheets such as MS Excel and Google Sheets</li>
                            <li>Familiarity with HTML and CSS is a huge plus</li>
                        </ul>
                        <p>Sounds interesting? <a href="mailto:business@groups-inc.com">Apply</a>.</p>
                        </div>
                    </Accordion>
                    <Accordion title="Mobile Engineer">
                        <div className="accordain-content">
                        <p>As we develop our mobile stack, we need Qt C++ engineers to help us create amazing experiences for our users. Your work will be open source!</p>
                        <p>General Requirements:</p>
                        <ul>
                            <li>Product-driven pragmatic engineers, who love to work in small startup environments.</li> 
                            <li>3+ years experience with QT and C++</li>
                            <li>Some experience with PHP</li>
                            <li>Familiarity with Java and Objective C (Android and iOS development)</li>
                            <li>Strong command of Linux and Git</li>
                            <li>Experience with REST APIs</li>
                            <li>Love of open source, social networking.</li>
                        </ul>
                        <p>Sounds interesting? <a href="mailto:business@groups-inc.com">Apply</a>.</p>
                        </div>
                    </Accordion>
                    <Accordion title="Customer Support Representative">
                        <div className="accordain-content">
                        <p>As a customer support rep, you will be helping sales leads and our customers with their questions via online chat,
                            and our internal customer support/CMS system. In addition, you will be filing bug reports 
                            on Github for the technical team, and reporting on sales and support progress.</p>
                        <p>General Requirements:</p>
                        <ul>
                            <li>Excellent verbal and written communication in English</li>
                            <li>Strong communication skills</li>
                            <li>Internet savvy, familiarity with social media like Twitter, Facebook, Wordpress, etc.</li>
                            <li>Experience in customer service/customer interaction</li>
                            <li>Familiarity with HTML and CSS is a huge plus</li>
                        </ul>
                        <p>Sounds interesting? <a href="mailto:business@groups-inc.com">Apply</a>.</p>
                        </div>
                    </Accordion>
                    <p>&nbsp;</p>
                </section>
            </main>
        </Main>
        )
    }
}
