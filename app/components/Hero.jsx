import React from 'react';

const Hero = (props) => (
    <header className="hero">
        <div className="container">
            {props.children}
        </div>
    </header>
)

export default Hero;