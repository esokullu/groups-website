// Modules
import React from 'react';
import Main from '~/components/Main';

// Components
import CollapsibleList from '~/components/CollapsibleList';

// Data
import content from '~/data/docs/faq';

// Page: FAQ
const FAQ = (props) => (
    <Main id="faq" data-page="faq">
        <main>
            <section>
                <div className="container">
                    <h1>Frequently Asked Questions</h1>
                    <CollapsibleList content={content} />
                </div>
            </section>
        </main>
    </Main>
)

export default FAQ;