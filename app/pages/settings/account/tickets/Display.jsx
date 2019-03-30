// Modules
import React, {Fragment} from 'react';

// Scripts
import getTicket from '~/scripts/getTicket';
import setTicketMessage from '~/scripts/setTicketMessage';

export default class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            scrolled: false
        }
        this.getTicketStatus = this.getTicketStatus.bind(this);
        this.scrollMessages = this.scrollMessages.bind(this);
        this.updateMessageInput = this.updateMessageInput.bind(this);
        this.updateTicketConversation = this.updateTicketConversation.bind(this);
    }
    componentDidMount() {
        this.getTicket(this.props.ticket);
    }
    componentDidUpdate(prevProps, prevState) {
        !prevState.scrolled && this.state.ticket && this.scrollMessages();
    }
    getTicket(uuid, callback) {
        // The function below is not same with this.getTicket
        getTicket(uuid, (response) => {
            if(response.success) {
                this.setState({
                    ticket: response.body
                });
                callback && callback();
            } else {
                // Go back to Table
                this.props.goBack();
                // Alert user
                alert('Ticket information is not available.')
            }
        });
    }
    getTicketStatus(code) {
        switch(code) {
            case '1':
                return 'Open';
            case '2':
                return 'Waiting for answer';
            case '3':
                return 'Closed';
        }
    }
    scrollMessages() {
        this.refs.conversation.scrollTop = this.refs.conversation.scrollHeight;
        this.setState({
            scrolled: true
        });
    }
    updateMessageInput(message = '') {
        this.setState({message});
    }
    updateTicketConversation(event) {
        event.preventDefault();
        this.refs.submitButton.classList.add('loading');
        setTicketMessage(this.props.ticket, this.state.message, (response) => {
            if(response.success) {
                this.getTicket(this.props.ticket, () => {
                    this.refs.submitButton.classList.remove('loading');
                    this.updateMessageInput();
                    this.scrollMessages();
                });
            } else {
                // Handle error
            }
        });
    }
    render() {
        let {goBack} = this.props;
        let {ticket, message} = this.state;
        return this.state.ticket
            ? <Fragment>
                <div className="details block">
                    <h3>Ticket Details</h3>
                    <div className="details">
                        <b>ID:</b> {ticket.uuid}
                        <br /><br />
                        <b>Status:</b> {this.getTicketStatus(ticket.status)}
                        <br /><br />
                        <b>Query:</b> {ticket.title}
                    </div>
                </div>
                <div className="messages block">
                    <h3>Conversation</h3>
                    <ul
                        ref="conversation"
                        className="conversation boxed">
                        <li className="information">
                            <b>You've opened this ticket.</b>
                            <time>{ticket.service_conversations[0].created_at}</time>
                        </li>
                        {ticket.service_conversations.map((item, key) =>
                            <li
                                key={key}
                                className={ticket.by === item.user_id ? 'outbound' : 'inbound'}>
                                <div>
                                    {item.text}
                                    <time>{item.created_at}</time>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                {this.getTicketStatus(ticket.status) === 'Closed'
                    ? <div className="closed-ticket block">
                        <p>
                            {(ticket.assignee ? ticket.assignee : 'Customer support team') + ' closed this ticket.'}
                            <br /><br />
                            <b>Close date/time:</b> {ticket.close_date}
                        </p>
                    </div>
                    : <div className="new-message block">
                        <form className="new-message">
                            <fieldset>
                                <textarea
                                    rows="5"
                                    value={message}
                                    onChange={(event) => this.updateMessageInput(event.target.value)}
                                    placeholder="Write your message..." />
                                <button
                                    type="submit"
                                    ref="submitButton"
                                    onClick={this.updateTicketConversation}>
                                    <span className="idle">Submit</span>
                                    <span className="success">Done</span>
                                </button>
                            </fieldset>
                        </form>
                    </div>
                }
                <a onClick={goBack}>
                    ← See all tickets
                </a>
            </Fragment>
            : <h3>Loading...</h3>
    }
}