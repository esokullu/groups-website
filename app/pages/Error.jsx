import React from 'react';
import {Link} from 'react-router-dom';

export default class Error extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main data-page="error">
                <section>
                    <div className="container">
                        <h1>Four-oh-four</h1>
                        <p role="message">We couldn't find the page you requested.</p>
                        <Link className="button" to="/">Go to Grou.ps home page</Link>
                    </div>
                </section>
            </main>
        )
    }
}