import React from 'react';
import {isEqual} from 'lodash';
import {
    Tooltip,
} from 'react-tippy';  

import Main from '../../components/Main';
import Summary from '../../components/Summary';
import Demo from '../../components/Demo';
import Code from '../../components/Code';
import LanguageOptions from '../../components/LanguageOptions';

import generateRandomKey from '../../scripts/generateRandomKey';

const SpecToolTip = props => {
    return (
        <Tooltip
            trigger="mouseenter"
            title={props.tooltipText}
            position="top"
            arrow="true"
            className="specs-tooltip"
        >
            <button type="button">?</button>
        </Tooltip>
    )
}

const LabelContent = (props) => {
    switch(props.value) {
        case 'topright':
            return <span className="icon">&#11016;</span>;
            break;
        case 'topleft':
            return <span className="icon">&#11017;</span>;
            break;
        case 'bottomright':
            return <span className="icon">&#11018;</span>;
            break;
        case 'bottomleft':
            return <span className="icon">&#11019;</span>;
            break;
        default:
            return <span>{props.label}</span>;
            break;
    }
}

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.setItemProperties = this.setItemProperties.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateText = this.updateText.bind(this);
        this.updateTextWithCheckbox = this.updateTextWithCheckbox.bind(this);
        this.updateRadio = this.updateRadio.bind(this);
        this.updateRadioWithCheckbox = this.updateRadioWithCheckbox.bind(this);
        this.changeTargetValue = this.changeTargetValue.bind(this);
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
        let dirName = object.parent.charAt(0).toUpperCase() + object.parent.replace('Tags','').substr(1);
        let githubPath = `https://github.com/phonetworks/graphjs-docs/blob/master/components-data/${dirName}/${fileName}.js`
        
        this.setState({
            key: generateRandomKey(),
            id: object.id,
            label: object.label,
            parent: object.parent,
            summary: object.summary,
            summaryExample: object.summaryExample,
            specs: object.specs,
            item: {
                name: object.id,
                attributes: attributes
            },
            githubPath
        });
    }
    handleSubmit() {
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
    render() {
        return (
            <Main data-page="component">
                <div className="container">
                    <a className="improve" href={this.state.githubPath}>
                        <img src={'app/images/icons/pen-icon.png'}/>
                        <span>Improve this page</span>
                    </a>
                    <h1>{this.state.label}</h1>
                    <Summary text={this.state.summary} />
                    {this.state.summaryExample &&
                        <pre className="prettyprint lang-html prettyprinted">
                            {this.state.summaryExample} 
                        </pre>
                    }
                    <h3>{'<graphjs-' + this.state.id + '>'}</h3>
                    <Demo component={this.state.item} />
                    <h3>Options</h3>
                    <section className="options">
                        <form>
                            {this.state.specs.map((spec, specKey) =>
                            spec.type == 'text' && (
                                <fieldset name={spec.key} key={this.state.key + '-' + specKey}>
                                <legend>{spec.label}</legend>
                                {spec.tooltip && <SpecToolTip tooltipText={spec.tooltip}/>}
                                <input onChange={this.updateText} type="text" value={spec.value} placeholder={spec.placeholder} />
                            </fieldset>
                            )
                            || spec.type == 'textwithcheckbox' && (
                            <fieldset name={spec.key} key={this.state.key + '-' + specKey}>
                                <legend>{spec.label}</legend>
                                {spec.tooltip && <SpecToolTip tooltipText={spec.tooltip}/>}                                    
                                <input onChange={this.updateTextWithCheckbox} type="checkbox" checked={spec.value != undefined ? true : false} />
                                <input onChange={this.updateTextWithCheckbox} type="text" value={spec.value || ''} />
                            </fieldset>
                            )
                            || spec.type == 'radio' && (
                                <fieldset name={spec.key} key={this.state.key + '-' + specKey}>
                                <legend>{spec.label}</legend>
                                {spec.tooltip && <SpecToolTip tooltipText={spec.tooltip}/>}
                                <div className="radiobutton">
                                    {spec.options.map((option, optionKey) =>
                                    <span key={this.state.key + '-' + optionKey}>
                                        <input onChange={this.updateRadio} type="radio" name={spec.id} id={option.value} checked={spec.value == option.value} />
                                        <label htmlFor={option.value}><LabelContent {...option} /></label>
                                    </span>
                                    )}
                                </div>
                            </fieldset>
                            )
                            || spec.type == 'radiowithcheckbox' && (
                                <fieldset name={spec.key} key={this.state.key + '-' + specKey}>
                                <legend>{spec.label}</legend>
                                {spec.tooltip && <SpecToolTip tooltipText={spec.tooltip}/>}
                                <input onClick={this.updateRadioWithCheckbox} type="checkbox" defaultChecked={spec.value ? true : false} />
                                <div className="radiobutton">
                                    {spec.options.map((option, optionKey) =>
                                    <span key={this.state.key + '-' + optionKey}>
                                        <input onClick={this.updateRadioWithCheckbox} type="radio" name={spec.id} id={option.value} defaultChecked={spec.value == option.value} />
                                        <label htmlFor={option.value}><LabelContent {...option} /></label>
                                        
                                    </span>
                                    )}
                                </div>
                            </fieldset>
                            )
                            )}
                        </form>
                    </section>
                    {
                        typeof window !== "undefined" &&
                        window &&
                        GraphJS &&
                        GraphJS.languageData && 
                        GraphJS.languageData['en-US'] && 
                        GraphJS.languageData['en-US'][this.state.id] && 
                        <LanguageOptions languageAttributes={GraphJS.languageData['en-US'][this.state.id]}/>
                    }
                    <h3>Code</h3>
                    <Code type="component" parent={this.state.parent} id={this.state.id} specs={this.state.specs} />
                    <button onClick={this.handleSubmit}>Apply</button>
                </div>
            </Main>
        )
    }
}