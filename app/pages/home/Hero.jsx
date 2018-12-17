import React from 'react';
import {Link} from 'react-router-dom';

import Animation from '../../components/Animation';
import Headline from '../../components/Headline';

export default class Hero extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="hero">
                <div className="container">
                    <Animation />
                    <Headline title="Express Yourselves" subtitle="Create your censorship-free social network" />
                    <p>Grou.ps provides a private and censorship-free open source social platform, where you actually own your own data.</p>
                    <Link to="/setup" className="button">Let's get started!</Link>
                </div>
            </header>
        )
    }
}