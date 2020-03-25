import React from 'react';
import Summary from './Summary';
import Accordion from './Accordion';

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false
        }
    }
    toggleAccordion = () => {
        let open = !this.state.open;
        this.setState({
            open
        })
    }
    camelCaseToDash = ( myStr ) => {
        return myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
    }
    render() {
        const { languageAttributes } = this.props;
        const { open } = this.state
        const headers = `Tag Name | Type | Default Value `
        let tableToDisplay = `${headers}
        --- | --- | --- | --- 
        `
        Object.keys(languageAttributes).map((attribute) => {
            tableToDisplay = tableToDisplay + `${this.camelCaseToDash(attribute)} | \`string\` | ${languageAttributes[attribute]} 
            `;
        });
        return (
            <div className="container language-options">
                <div className="language-accordion">
                    <div 
                        className={"language-collapsible" + (open ? " language-active" : "")}
                        onClick={this.toggleAccordion}
                    >
                        <h3>Language Options</h3>
                    </div>
                    <div className={"language-content" + (open ? " open" : "")}>
                        <Summary text={tableToDisplay}/>
                    </div>
                </div>
            </div> 
        )
    }
}