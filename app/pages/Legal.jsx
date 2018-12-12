import React from 'react';
import {Link} from 'react-router-dom';

import Main from '../components/Main';
import Summary from './legal/Summary';
import TermsOfService from './legal/TermsOfService';
import Privacy from './legal/Privacy';

export default class Legal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let params = this.props.params;
        return (
            <Main id="legal" data-page="legal">
                {!params.category &&
                <Summary />
                }
                {params.category == 'terms-of-service' &&
                <TermsOfService />
                }
                {params.category == 'privacy' &&
                <Privacy />
                }
            </Main>
        )
    }
}