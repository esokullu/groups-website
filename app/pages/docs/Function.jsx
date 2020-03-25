import React from 'react';
import {isEqual} from 'lodash';

import Main from '../../components/Main';
import Summary from '../../components/Summary';
import Code from '../../components/Code';
import Response from './Response';

import generateRandomKey from '../../scripts/generateRandomKey';

export default class Function extends React.Component {
    constructor(props) {
        super(props);
        this.setItemProperties = this.setItemProperties.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateText = this.updateText.bind(this);
        this.updateTextWithCheckbox = this.updateTextWithCheckbox.bind(this);
        this.updateRadio = this.updateRadio.bind(this);
        this.updateRadioWithCheckbox = this.updateRadioWithCheckbox.bind(this);
        this.changeTargetValue = this.changeTargetValue.bind(this);
        this.createCallFunction = this.createCallFunction.bind(this);
        this.createShowFunction = this.createShowFunction.bind(this);
    }
    componentWillMount() {
        this.setItemProperties(this.props.list, this.props.item);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.item != this.state.id) {
            this.setItemProperties(nextProps.list, nextProps.item);
        }
    }
    setItemProperties(list, item) {
        let object = list.filter(function(element) {
            return element.id == item;
        })[0];
        let attributes = {};
        for(let spec of object.specs) {
            if(spec.value) {
                attributes[spec.key] = spec.value;
            }
        }

        let fileName = object.id.charAt(0).toUpperCase() + object.id.substr(1);
        if(fileName.indexOf('-') !== -1){
            let fileNameArr = fileName.split("-")
            fileName = fileNameArr[0] + fileNameArr[1].charAt(0).toUpperCase() + fileNameArr[1].substr(1)
        }
        let dirName = '';
        if(object.parent.includes('DisplayFunctions')) {
            dirName += "Show"
        } else if(object.parent.includes('ApiFunctions')) {
            dirName += "Call"
        }
        let githubPath = `https://github.com/phonetworks/graphjs-docs/blob/master/functions-data/${dirName}/${fileName}.js`
        
        this.setState({
            key: generateRandomKey(),
            id: object.id,
            label: object.label,
            parent: object.parent,
            specs: object.specs,
            summary: object.summary,
            item: {
                name: object.id,
                attributes: attributes
            },
            githubPath,
            response: undefined
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        let attributes = {};
        for(let spec of this.state.specs) {
            if(spec.value) {
                attributes[spec.key] = spec.value;
            }
        }
        let item = {
            name: this.state.id,
            attributes: attributes
        }
        if(!isEqual(this.state.item, item)) {
            this.setState({
                item: item
            });
        }
        if(this.state.parent.includes('DisplayFunctions')) {
            GraphJS[item.name](item.attributes);
        } else if(this.state.parent.includes('ApiFunctions')) {
            this.setState({
                response: undefined
            });
            let args = Object.values(item.attributes);
            let self = this;
            GraphJS[item.name](...args, function(response) {
                self.setState({
                    response: JSON.stringify(response, null, 4).replace(/\"([^(\")"]+)\":/g,"$1:")
                });
            });

        }
    }
    updateText(event) {
        let target = event.currentTarget.parentNode.name;
        let value = event.currentTarget.value && event.currentTarget.value.length > 0 ? event.currentTarget.value : undefined;
        this.changeTargetValue(target, value);
    }
    updateTextWithCheckbox(event) {
        let target = event.currentTarget.parentNode.name;
        let checkbox;
        let text;
        let value;
        if(event.currentTarget.type == 'checkbox') {
            checkbox = event.currentTarget;
            text = event.currentTarget.parentNode.children[2];
            value = checkbox.checked ? text.value : undefined;
        } else {
            checkbox = event.currentTarget.parentNode.children[1];
            text = event.currentTarget;
            value = text.value && text.value.length > 0 ? text.value : undefined;
        }
        this.changeTargetValue(target, value);
    }
    updateRadio(event) {
        let target = event.currentTarget.parentNode.parentNode.parentNode.name;
        let value = event.currentTarget.id;
        this.changeTargetValue(target, value);
    }
    updateRadioWithCheckbox(event) {
        let target;
        let checkbox;
        let radio;
        let value;
        if(event.currentTarget.type == 'checkbox') {
            target = event.currentTarget.parentNode.name;
            checkbox = event.currentTarget;
            radio = event.currentTarget.parentNode.children[2];
            let actor = radio.firstElementChild.firstElementChild;
            for(let item of radio.children) {
                if(item.firstElementChild.checked) {
                    actor = item.firstElementChild;
                }
            }
            if(checkbox.checked) {
                actor.click();
                value = actor.id;
            } else {
                value = undefined;
            }
        } else {
            target = event.currentTarget.parentNode.parentNode.parentNode.name;
            checkbox = event.currentTarget.parentNode.parentNode.parentNode.children[1];
            let actor = event.currentTarget;
            if(checkbox.checked) {
                checkbox.click();
                value = actor.id;
            } else {
                value = actor.id;
            }
        }
        this.changeTargetValue(target, value);
    }
    changeTargetValue(target, value) {
        let specs = this.state.specs;
        specs.map(element => {
            if(element.key == target) {
                element.value = value;
            }
            return element;
        });
        this.setState({
            specs: specs
        });
    }
    createShowFunction(name, specs) {
        let functionSpecs = Object.keys(specs).length > 0 ? JSON.stringify(specs, null, 4) : '';
        return name + '(' + functionSpecs + ')';
    }
    createCallFunction(name, specs) {
        let functionSpecs = Object.values(specs).map(function(item) {
            return '    "' + item + '"';
        }).join(',\n');
        return name + '(\n' + functionSpecs + (Object.values(specs).length > 0 ? ',\n' : '') + '    function(response) {\n        //Do something\n    }\n)';
    }
    render() {
        return (
            <Main data-page="function">
                <section>
                    <div className="container">
                        <a className="improve" href={this.state.githubPath}>
                            <img src={'app/images/icons/pen-icon.png'}/>
                            <span>Improve this page</span>
                        </a>
                        <h1>{this.state.label}</h1>
                        <Summary text={this.state.summary} />
                        {this.state.specs && this.state.specs.length > 0 &&
                        <h3>Options</h3>
                        }
                        <section className="options">
                            <form>
                                {this.state.specs.map((spec, specKey) =>
                                spec.type == 'text' && (
                                <fieldset name={spec.key} key={this.state.key + '-' + specKey}>
                                    <legend>{spec.label}</legend>
                                    <input onChange={this.updateText} type="text" value={spec.value} placeholder={spec.placeholder} />
                                </fieldset>
                                )
                                || spec.type == 'password' && (
                                <fieldset name={spec.key} key={this.state.key + '-' + specKey}>
                                    <legend>{spec.label}</legend>
                                    <input onChange={this.updateText} type="password" value={spec.value} placeholder={spec.placeholder} />
                                </fieldset>
                                )
                                || spec.type == 'textwithcheckbox' && (
                                <fieldset name={spec.key} key={this.state.key + '-' + specKey}>
                                    <legend>{spec.label}</legend>
                                    <input onChange={this.updateTextWithCheckbox} type="checkbox" checked={spec.value != undefined ? true : false} />
                                    <input onChange={this.updateTextWithCheckbox} type="text" value={spec.value || ''} />
                                </fieldset>
                                )
                                || spec.type == 'radio' && (
                                <fieldset name={spec.key} key={this.state.key + '-' + specKey}>
                                    <legend>{spec.label}</legend>
                                    <div className="radiobutton">
                                        {spec.options.map((option, optionKey) =>
                                        <span key={this.state.key + '-' + optionKey}>
                                            <input onChange={this.updateRadio} type="radio" name={spec.id} id={option.value} checked={spec.value == option.value} />
                                            <label htmlFor={option.value}>{option.label}</label>
                                        </span>
                                        )}
                                    </div>
                                </fieldset>
                                )
                                || spec.type == 'radiowithcheckbox' && (
                                <fieldset name={spec.key} key={this.state.key + '-' + specKey}>
                                    <legend>{spec.label}</legend>
                                    <input onChange={this.updateRadioWithCheckbox} type="checkbox" checked={spec.value ? true : false} />
                                    <div className="radiobutton">
                                        {spec.options.map((option, optionKey) =>
                                        <span key={this.state.key + '-' + optionKey}>
                                            <input onChange={this.updateRadioWithCheckbox} type="radio" name={spec.id} id={option.value} checked={spec.value == option.value} />
                                            <label htmlFor={option.value}>{option.label}</label>
                                        </span>
                                        )}
                                    </div>
                                </fieldset>
                                )
                                )}
                            </form>
                        </section>
                        <h3>Code</h3>
                        <Code type="function" parent={this.state.parent} id={this.state.id} specs={this.state.specs} />
                        <button onClick={this.handleSubmit}>Apply</button>
                        {this.state.response &&
                        <h3>Response</h3>
                        }
                        {this.state.response &&
                        <Response response={this.state.response} />
                        }
                    </div>
                </section>
            </Main>
        )
    }
}