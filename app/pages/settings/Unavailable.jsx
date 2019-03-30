// Modules
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Main from '~/components/Main';

// Page: Settings > Unavailable
const Unavailable = (props) => (
    <section className="unavailable">
        <div className="explanation block">
            <h3 className="warning-message">
                No active Grou.ps account available. <a href="https://www.groups-inc.com/contact.html">You may contact us.</a>
            </h3>
            {/* THIS IS THE NEW STRUCTURE BUT IT'S DEACTIVATED
            <h3>Instance unavailable or expired.</h3>
            <p>
                <Link to={`/pay?email=${props.client.account.email}`}>Click here to create an instance</Link>
            </p>
            */}
        </div>
    </section>
)

export default Unavailable;