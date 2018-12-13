import React from 'react';

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
                    <p>Grou.ps offers you the comfort of being at home by providing private and censorship-free open source social platform where you actually own your own data.</p>
                    <button>Let's get started!</button>
                </div>
            </header>
        )
    }
}