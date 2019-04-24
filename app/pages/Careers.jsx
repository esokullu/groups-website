// Modules
import React, {Fragment} from 'react';
import Main from '~/components/Main';

// Components
import Hero from '~/components/Hero';
import Headline from '~/components/Headline';
import CollapsibleList from '~/components/CollapsibleList';

// Data
import openings from '~/data/careers/openings.js';

// Page: Careers
const Careers = () => (
    <Main id="careers" data-page="careers">
        <Hero>
            <img src="/app/images/illustrations/careers.png" />
            <Headline title="Let's recreate the web" subtitle="in a social and meaningful way." />
        </Hero>
        <main>
            <div className="container">
                <section className="introduction">
                    <p>Grou.ps is dedicated to giving an uncensored voice to online communities all around the world. We've been doing this for the last 12+ years, and we're here for decades more to come.</p>
                    <p>Grou.ps Inc. is ideal for job-seekers looking for both stability, and the startup culture, together at the same time. Some other unique benefits are:</p>
                    <ul>
                        <li>We are distributed. Geographic boundaries won't limit you from participating.</li>
                        <li>All our work is open source and liberally licensed for derivatives.</li>
                        <li>No BS. Our job listings and processes are straightforward. We don't need a resume. Just send us your LinkedIn profile and/or a link to your portfolio, and we'll evaluate. A cover letter is a huge plus.</li>
                        <li><span style={{textDecoration: "line-through"}}>Response guaranteed. Yes or no. We'll let you know in 7 days.</span> (we apologize but we are unable to keep this promise!)</li>
                    </ul>
                    <p>If you're interested, please apply below.</p>
                    <h3>Current Openings</h3>
                    <CollapsibleList content={openings} />
                    <p>&nbsp;</p>
                    <p>Can't find the role you're looking for? Take a look at other remote-friendly companies at <a target="_blank" href="https://remoteintech.company/">https://remoteintech.company/</a></p>
                </section>
            </div>
        </main>
    </Main>
)

export default Careers;