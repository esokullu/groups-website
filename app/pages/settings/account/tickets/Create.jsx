// Modules
import React, {Fragment} from 'react';

// Scripts
import setTicket from '~/scripts/setTicket';

export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
        this.updateMessageInput = this.updateMessageInput.bind(this);
        this.clearMessageInput = this.clearMessageInput.bind(this);
        this.createTicket = this.createTicket.bind(this);
    }
    updateMessageInput(message = '') {
        this.setState({message});
    }
    clearMessageInput(event) {
        event.preventDefault();
        this.updateMessageInput();
    }
    createTicket(event) {
        event.preventDefault();
        this.refs.submitButton.classList.add('loading');
        setTicket(this.state.message, (response) => {
            if(response.success) {
                this.setState({
                    done: true
                });
            } else {
                // Handle error
            }
        });
    }
    render() {
        let {goBack} = this.props;
        let {ticket, message} = this.state;
        return this.state.done
            ? <div className="block">
                <h3>Done!</h3>
                <p>Your ticket is submitted</p>
                <a onClick={() => goBack(true)}>
                    ← Go back to tickets
                </a>
            </div>
            : <Fragment>
                <div className="block">
                    <h3>New Ticket</h3>
                    <div className="note">
                        For a quick answer, please make sure you have read the <a href="https://graphjs.com/faq" target="_blank">FAQ</a> page.
                        <br /><br />
                        Below, please enter as many details as possible. If it's a bug report, please report it at <a href="https://github.com/phonetworks/graphjs" target="_blank">https://github.com/phonetworks/graphjs</a> with environment info such as browser/OS used.
                    </div>
                </div>
                <div className="message block">
                    <form className="new-message">
                        <fieldset>
                            <textarea
                                rows="5"
                                value={message}
                                onChange={(event) => this.updateMessageInput(event.target.value)}
                                placeholder="Enter your query here..." />
                            <button
                                type="submit"
                                ref="submitButton"
                                onClick={this.createTicket}>
                                <span className="idle">Save Changes</span>
                                <span className="success">Saved</span>
                            </button>
                            <button
                                className="danger"
                                onClick={this.clearMessageInput}>
                                Clear
                            </button>
                        </fieldset>
                    </form>
                </div>
                <a onClick={goBack}>
                    ← See all tickets
                </a>
            </Fragment>
    }
}