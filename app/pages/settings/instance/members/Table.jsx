// Modules
import React, {Fragment} from 'react';

const Table = (props) => (
    <div className="tickets-table block">
        {props.members.length > 0
            ? <Fragment>
                <h3>{`You have ${props.pagination.total} member${props.pagination.total > 1 ? 's': ''}`}</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.members.map((member, index) =>
                            <tr key={index}>
                                <td>
                                    {member.username}
                                </td>
                                <td>
                                    {member.username !== 'admin' &&
                                        <a
                                            className="danger centered"
                                            onClick={() => props.deleteMember(member.id)}>
                                            <svg viewBox="0 0 100 100">
                                                <path d="M83.6,29.2H16.4c-1.1,0-2.1,0.9-2.1,2.1v51.1c0,8.3,6.8,15.1,15.1,15.1h41c8.3,0,15.1-6.8,15.1-15.1V31.3 C85.6,30.1,84.7,29.2,83.6,29.2z M36.6,78.3c0,1.6-1.3,3-3,3h-2.5c-1.6,0-3-1.3-3-3v-31c0-1.6,1.3-3,3-3h2.5c1.6,0,3,1.3,3,3 V78.3z M54.2,78.3c0,1.6-1.3,3-3,3h-2.5c-1.6,0-3-1.3-3-3v-31c0-1.6,1.3-3,3-3h2.5c1.6,0,3,1.3,3,3V78.3z M71.9,78.3 c0,1.6-1.3,3-3,3h-2.5c-1.6,0-3-1.3-3-3v-31c0-1.6,1.3-3,3-3h2.5c1.6,0,3,1.3,3,3V78.3z"/>
                                                <path d="M88.6,11.4H61.9v-3c0-3.3-2.7-5.9-5.9-5.9H44.1c-3.3,0-5.9,2.7-5.9,5.9v3H11.4c-1.7,0-3,1.3-3,3v5.9c0,1.7,1.3,3,3,3 h77.1c1.7,0,3-1.3,3-3v-5.9C91.6,12.8,90.2,11.4,88.6,11.4z"/>
                                            </svg>
                                        </a>
                                    }
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <ul className="pagination">
                    <li>
                        {props.pagination.current_page !== 1 &&
                            <a
                                className="previous"
                                onClick={() => props.paginate(props.pagination.current_page - 1)}>
                            </a>
                        }
                    </li>
                    {/* Create certain number of items */}
                    {Array.from(Array(props.pagination.last_page)).map((item, index) =>
                        <li key={index}>
                            {props.pagination.current_page === index + 1
                                ? <b>{index + 1}</b>
                                : <a onClick={() => props.paginate(index + 1)}>{index + 1}</a>
                            }
                        </li>
                    )}
                    <li>
                        {props.pagination.current_page !== props.pagination.last_page &&
                            <a
                                className="next"
                                onClick={() => props.paginate(props.pagination.current_page + 1)}>
                            </a>
                        }
                    </li>
                </ul>
            </Fragment>
            : <p>
                <b>You don't have any members.</b>
            </p>
        }
    </div>
)

export default Table;