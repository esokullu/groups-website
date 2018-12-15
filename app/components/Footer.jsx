import React from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let year = (new Date()).getFullYear;
        return (
            <footer>
                <div className="container">
                    <div className="message">
                        built with <em className="love icon"></em> in 3 continents
                    </div>
                    <div className="links">
                        <span className="credit">
                            &copy;{year} <a href="https://www.groups-inc.com" target="_blank">GROU.PS Inc.</a>
                        </span>
                        &middot;<Link className="link" to="/legal">Legal</Link>
                    </div>
                </div>
            </footer>
        )
    }
}
