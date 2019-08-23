// Modules
import React from 'react';

// Components
import Main from '~/components/Main';

// Page: Settigns > Summary
export default class Summary extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Main data-page="summary">
                <div className="container">
                    <section className="summary">
                        <h1>Settings</h1>
                        <div className="block">
                            <h3 id="information block">Welcome to your dashboard!</h3>
                            <p>Please select an item on the left menu to start.</p>
                            <p>
                                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/RhGsK7I5EkI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </p>
                            <p>
                                <a href="https://www.youtube.com/watch?v=RhGsK7I5EkI" target="_blank">Watch full-screen on YouTube</a>
                            </p>
                        </div>
                    </section>
                </div>
            </Main>
        )
    }
}