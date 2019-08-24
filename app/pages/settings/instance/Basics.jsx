// Modules
import React from 'react';
import {TwitterPicker} from 'react-color';

// Scripts
import setBasics from '~/scripts/setBasics';

// Page: Settings > Instance > Basics
export default class Basics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initial_groupsid: this.props.configuration.name || '',
            groupsid: this.props.configuration.name || '',
            title: this.props.configuration.title || '',
            description: this.props.configuration.description || '',
            theme: this.props.configuration.theme,
            color: this.props.configuration.color
        }
        this.updateIdInput = this.updateIdInput.bind(this);
        this.updateTitleInput = this.updateTitleInput.bind(this);
        this.updateDescriptionInput = this.updateDescriptionInput.bind(this);
        this.updateThemeInput = this.updateThemeInput.bind(this);
        this.updateColorInput = this.updateColorInput.bind(this);
        this.handleBasicsSubmit = this.handleBasicsSubmit.bind(this);
    }
    updateIdInput(event) {
        let groupsid = event.target.value;
        this.setState({groupsid});
    }
    updateTitleInput(event) {
        let title = event.target.value;
        this.setState({title});
    }
    updateDescriptionInput(event) {
        let description = event.target.value;
        this.setState({description});
    }
    updateThemeInput(event) {
        let theme = event.target.id;
        this.setState({theme});
    }
    updateColorInput(color) {
        color = color.hex;
        this.setState({color});
    }
    handleBasicsSubmit(event) {
        event.preventDefault();
        let uuid = this.props.configuration.uuid;
        let basics = this.state;
        this.refs.submitButton.classList.add('loading');
        setBasics(uuid, basics, (response) => {
            if(response.success) {
                this.refs.submitButton.classList.remove('loading');
                this.refs.submitButton.classList.add('done');
                setTimeout(() => {
                    this.refs.submitButton.classList.remove('done');
                }, 2500);
                this.props.reconfigure({...basics});
                this.props.update();
            }
        });
    }
    render() {
        let addr = "https://gr.ps/" + this.state.initial_groupsid;
        let password_page = "/settings/instances/" + this.state.initial_groupsid + "/password";
        return (
          <section className="basics">
              <form className="narrow options">
                <fieldset className="groupsid">
                      <h3>Group ID</h3>
                      <input type="text" value="https://gr.ps/" readOnly={true} style={{width:'45%'}} />
                      <input
                          ref="title"
                          type="text"
                          value={this.state.groupsid}
                          placeholder="Group ID"
                          onChange={this.updateIdInput}
                          style={{width:'55%'}} />
                  </fieldset>
                  <fieldset className="title">
                      <h3>Title</h3>
                      <input
                          ref="title"
                          type="text"
                          value={this.state.title}
                          placeholder="Enter title of your site"
                          onChange={this.updateTitleInput} />
                  </fieldset>
                  <fieldset className="description">
                      <h3>Description</h3>
                      <textarea
                          ref="description"
                          rows="5"
                          value={this.state.description}
                          placeholder="Enter site description"
                          onChange={this.updateDescriptionInput} />
                  </fieldset>
                  <fieldset className="theme">
                      <h3>Theme</h3>
                      <div className="radiobutton">
                          <span>
                              <input onChange={this.updateThemeInput} type="radio" name="theme" id="light" checked={this.state.theme === 'light'} />
                              <label htmlFor="light">Light</label>
                          </span>
                          <span>
                              <input onChange={this.updateThemeInput} type="radio" name="theme" id="dark" checked={this.state.theme === 'dark'} />
                              <label htmlFor="dark">Dark</label>
                          </span>
                      </div>
                  </fieldset>
                  <fieldset className="color">
                      <h3>Color</h3>
                      <TwitterPicker
                          onChange={this.updateColorInput}
                          color={this.state.color}
                          width="204px"
                          triangle="hide"
                          colors={[
                            '#FFAD0A', '#FF8421', '#F92F39', '#ED2D96', '#8B5EFF',
                            '#5D3CF6', '#007FFF', '#00C3D8', '#00C853', '#6F879F'
                          ]} />
                  </fieldset>
                  <fieldset className="submit">
                      <button ref="submitButton" onClick={this.handleBasicsSubmit}>
                          <span className="idle">Save Changes</span>
                          <span className="success">Saved</span>
                      </button>
                  </fieldset>
              </form>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>Please note, for more settings visit <a href={addr} target="_blank">your network</a>, log in with the "admin" account provided at sign-up (for the password c/o <a href={password_page}>Password</a> page) and click the wheel icon as shown below:</p>
              <p><img src="/app/images/screenshots/network-management.png" style={{width: "60%", height: "60%"}}></img></p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
          </section>
        )
    }
}