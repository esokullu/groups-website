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
                        </div>
                    </section>
                </div>
            </Main>
        )
    }
}