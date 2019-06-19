// Modules
import React from 'react';
import Main from '~/components/Main';

// Components
import CollapsibleList from '~/components/CollapsibleList';

// Data
import faq from '~/data/docs/faq';

export default class FAQ extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Main id="faq" data-page="faq">
            <main>
                <section>
                    <div className="container">
                        <h1>Frequently Asked Questions</h1>
                        <CollapsibleList content={faq} />
                    </div>
                </section>
                <section className="faq-wrapper">
                    <div className="container">
                        <h1>Contact Us</h1>
                        <form action="https://formspree.io/business@groups-inc.com" method="POST" className="narrow options">
                            <h3>Name *</h3>
                            <fieldset>
                                <input ref="name" name="name" type="text" placeholder="Enter your name" />
                            </fieldset>
                            <h3>Last Name *</h3>
                            <fieldset>
                                <input ref="name" name="lastname" type="text" placeholder="Enter your name" />
                            </fieldset>
                            <h3>Email *</h3>
                            <fieldset>
                                <input ref="email" name="_replyto" type="text" placeholder="Enter your email address" />
                            </fieldset>
                            <h3>Subject *</h3>
                            <fieldset>
                                <input ref="subject" name="subject" type="text" placeholder="Enter a subject of your question" />
                            </fieldset>
                            <h3>Message *</h3>
                            <fieldset>
                                <textarea ref="message" name="message" placeholder="Enter your message" />
                            </fieldset>
                            <button type="submit" ref="submit" value="Submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </Main>);
    }
}