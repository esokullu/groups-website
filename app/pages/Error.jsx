// Modules
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Main from '~/components/Main';
import Hero from '~/components/Hero';
import Headline from '~/components/Headline';

// Page: Error
const Error = () => (
    <Main id="error" data-page="error">
        <Hero>
            <img src="/app/images/illustrations/404.png" />
            <Headline title="Oops! It's a four-oh-four." subtitle="The page you requested is not found." />
            <Link to="/">← Go back to Groupsville home page</Link>
        </Hero>
    </Main>
)

export default Error;