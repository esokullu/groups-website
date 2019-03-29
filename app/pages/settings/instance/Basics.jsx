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
            title: this.props.configuration.title || '',
            theme: this.props.configuration.theme,
            color: this.props.configuration.color
        }
        this.updateTitleInput = this.updateTitleInput.bind(this);
        this.updateThemeInput = this.updateThemeInput.bind(this);
        this.updateColorInput = this.updateColorInput.bind(this);
        this.handleBasicsSubmit = this.handleBasicsSubmit.bind(this);
    }
    updateTitleInput(event) {
        let title = event.target.value;
        this.setState({title});
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
        let self = this;
        setBasics(uuid, basics, function(response) {
            if(response.success) {
                self.refs.submitButton.classList.remove('loading');
                self.refs.submitButton.classList.add('done');
                setTimeout(function() {
                    self.refs.submitButton.classList.remove('done');
                }, 2500);
                self.props.reconfigure({...basics});
                self.props.update();
            }
        });
    }
    render() {
        return (
          <section className="basics">
              <form className="narrow options">
                  <fieldset className="title">
                      <h3>Title</h3>
                      <input
                          ref="title"
                          type="text"
                          value={this.state.title}
                          placeholder="Enter title of your site"
                          onChange={this.updateTitleInput} />
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
          </section>
        )
    }
}