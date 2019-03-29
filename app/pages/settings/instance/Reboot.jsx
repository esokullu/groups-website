// Modules
import React from 'react';

// Scripts
import reboot from '~/scripts/reboot';

// Page: Settings > Instance > Reboot
export default class Reboot extends React.Component {
    constructor(props) {
        super(props);
        this.handleRebootSubmit = this.handleRebootSubmit.bind(this);
    }
    handleRebootSubmit(event) {
        event.preventDefault();
        let uuid = this.props.configuration.uuid;
        this.refs.submitButton.classList.add('loading');
        let self = this;
        reboot(uuid, function(response) {
            if(response.success) {
                self.refs.submitButton.classList.remove('loading');
                self.refs.submitButton.classList.add('done');
                setTimeout(function() {
                    self.refs.submitButton.classList.remove('done');
                }, 2500);
                self.props.update();
            }
        });
    }
    render() {
        return (
            <section className="reboot">
                <form className="narrow options">
                    <p>Would you like to reboot your instance?</p>
                    <fieldset>
                        <button ref="submitButton" onClick={this.handleRebootSubmit}>
                            <span className="idle">Reboot</span>
                            <span className="success">Success</span>
                        </button>
                    </fieldset>
                    <small>This may take about 2 minutes to complete.</small>
                </form>
            </section>
        )
    }
}