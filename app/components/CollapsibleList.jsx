import React, {Fragment} from 'react';

const CollapsibleList = (props) => (
    <div className="collapsible-list">
        {props.content.map((category, categoryIndex) => (
            <Fragment key={categoryIndex}>
                {category.items.length > 0 &&
                    <ul>
                        {category.title || ''}
                        {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                                <a onClick={event => event.target.parentElement.classList.toggle('collapsed')}>{item.label}</a>
                                <div>{item.content}</div>
                            </li>
                        ))}
                    </ul>
                }
            </Fragment>
        ))}
    </div>
);

export default CollapsibleList;