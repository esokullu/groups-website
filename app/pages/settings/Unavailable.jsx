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
            <p>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/RhGsK7I5EkI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>
        </div>
    </section>
)

export default Unavailable;