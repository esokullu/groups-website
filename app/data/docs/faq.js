// Modules
import React, {Fragment} from 'react';

// Data
const faq = [
    // Sample Category
    {
        title: <h3>Sample Category Title</h3>,
        items: [
            {
                label: 'Sample question?',
                content: (
                    <Fragment>
                        <p>Sample answer - Paragraph #1</p>
                        <p>Sample answer - Paragraph #2</p>
                    </Fragment>
                )
            }
        ]
    }
];

export default faq;