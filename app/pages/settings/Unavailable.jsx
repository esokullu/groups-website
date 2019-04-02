// Modules
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Main from '~/components/Main';

// Page: Settings > Unavailable
const Unavailable = (props) => (
    <section className="unavailable">
        <div className="explanation block">
            <h3>Site unavailable or expired.</h3>
            <p>
                <Link to={`/pay?email=${props.client.account.email}`}>Click here to create an instance</Link>
            </p>
        </div>
    </section>
)

export default Unavailable;