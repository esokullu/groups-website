// Modules
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Main from '~/components/Main';

// Page: Docs > Summary 
const Summary = () => (
    <Main data-page="summary">
        <div className="container">
            <section className="summary">
                <h1>Summary</h1>
                <div className="block">
                    <h3 id="introduction-block">Introduction</h3>
                    <p>Introduction content goes here.</p>
                </div>
                <div className="block">
                    <h3 id="gettingstarted-block">Getting Started</h3>
                    <p>Getting Started content goes here.</p>
                </div>
            </section>
        </div>
    </Main>
)

export default Summary;