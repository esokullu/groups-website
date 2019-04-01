// Modules
import React from 'react';
import {Link} from 'react-router-dom';

// Data
const menu = {
    // Menu
    children: [
        // Getting Started
        {
            id: 'getting-started',
            label: 'Getting Started',
            content: <Link to="/docs">Getting Started</Link>
        },
        // FAQ
        {
            id: 'faq',
            label: 'FAQ',
            content: <Link to="/docs/faq">FAQ</Link>
        }
    ]
}

export default menu;