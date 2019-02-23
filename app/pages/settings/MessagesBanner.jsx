import React from 'react';
import Main from '../../components/Main';

export default class MessagesBanner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Main data-page="settings-message">
                <div className="container">
                    <section className="settings-message">
                        <div className="block">
                            <h3 className="warning-message">
                                No active Grou.ps account available. <a href="https://www.groups-inc.com/contact.html">You may contact us.</a>
                            </h3>
                        </div>
                    </section>
                </div>
            </Main>
        )
    }
}
