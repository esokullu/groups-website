// Modules
import React from 'react';

// Page: Settings > Instance > Password
const Password = (props) => (
    <section className="password">
        <div className="options">
            <p>The password you use to log in to this administration panel, and the passwords on your instance(s) are different.</p>
            <p>The admin password for this instance: <b>{props.password}</b></p>
        </div>
    </section>
)

export default Password;