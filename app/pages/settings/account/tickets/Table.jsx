// Modules
import React, {Fragment} from 'react';

const Table = (props) => (
    <div className="tickets-table block">
        {props.tickets.length > 0
            ? <Fragment>
                <h3>{`You have ${props.pagination.total} ticket${props.pagination.total > 1 ? 's': ''}`}</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Label</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.tickets.map((ticket, index) =>
                            <tr key={index}>
                                <td>
                                    <a
                                        className="idle arrow"
                                        onClick={() => props.displayTicket(ticket.uuid)}>
                                        {ticket.title}
                                    </a>
                                </td>
                                <td>
                                    <span className="centered">
                                        {ticket.status === '1'
                                            ? 'Open'
                                            : (ticket.status === '2'
                                                ? 'Waiting for answer'
                                                : 'Closed'
                                            )
                                        }
                                    </span>
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
                                onClick={() => props.getTickets(props.pagination.current_page - 1)}>
                            </a>
                        }
                    </li>
                    {/* Create certain number of items */}
                    {Array.from(Array(props.pagination.last_page)).map((item, index) =>
                        <li key={index}>
                            {props.pagination.current_page === index + 1
                                ? <b>{index + 1}</b>
                                : <a onClick={() => props.getTickets(index + 1)}>{index + 1}</a>
                            }
                        </li>
                    )}
                    <li>
                        {props.pagination.current_page !== props.pagination.last_page &&
                            <a
                                className="next"
                                onClick={() => props.getTickets(props.pagination.current_page + 1)}>
                            </a>
                        }
                    </li>
                </ul>
            </Fragment>
            : <p>
                <b>No tickets available.</b>
            </p>
        }
        <button onClick={props.createTicket}>
            {/* {`Open ${props.tickets.length > 0 ? 'another' : 'a new'} ticket`} */}
            Submit a new ticket
        </button>
    </div>
)

export default Table;