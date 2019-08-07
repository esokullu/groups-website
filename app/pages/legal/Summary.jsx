import React from 'react';
import {Link} from 'react-router-dom';

import Main from '../../components/Main';

export default class Summary extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Main data-page="summary" className="document">
                <section className="policies">
                    <div className="container">
                        <h1>Policies</h1>
                        <div className="block">
                            <h3>In plain words</h3>
                            <ol>
                                <li>
                                    <h4>Your data:</h4>
                                    <p>
                                        Your data is yours, we’ll provide you with backups if you ever want to leave.
                                    </p>
                                </li>
                                <li>
                                    <h4>Backups and Replication:</h4>
                                    <p>
                                        Your data is stored in a replicated Redis cluster. Furthermore we create
                                        backups of this data at regular intervals. We provide no guarantees, but our
                                        best effort is pretty good.
                                    </p>
                                </li>
                                <li>
                                    <h4>Uptime:</h4>
                                    <p>
                                        The team behind Research in Social Graph has vast experience with running high scalability
                                        websites. Every commit is unit tested, we use best practices for devops and our
                                        clients continuously run integration tests against the service. Uptime is
                                        something we take very seriously. However social software systems are complex, we will
                                        go down eventually. If we go down we’ll keep you updated on our status page.
                                    </p>
                                </li>
                                <li>
                                    <h4>Best effort SLA:</h4>
                                    <p>
                                        Our SLA is best effort. For enterprise customers we can provide custom policies.
                                    </p>
                                </li>
                            </ol>
                        </div>
                        <div className="links block">
                            <h3>Links</h3>
                            <ul>
                                <li>
                                    <p>
                                        <Link to="/legal/terms-of-service">Terms of Service</Link>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <Link to="/legal/privacy">Privacy</Link>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Main>
        )
    }
}