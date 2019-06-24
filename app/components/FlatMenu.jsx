import React, { Fragment } from 'react';

const identify = () => Math.floor((Math.random() * 1000000) + 1);

export default class FlatMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.data || [],
            selectedTopLevelItemId: '',
            selectedSubLevelItemId: ''
        }
        this.create = this.create.bind(this);
        this.renderTopLevelItem = this.renderTopLevelItem.bind(this);
        this.renderTopLevelChildren = this.renderTopLevelChildren.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedInstanceIdx !== this.props.selectedInstanceIdx) {
            nextProps.data &&
                this.setState({
                    list: nextProps.data || [],
                    selectedTopLevelItemId: '',
                    selectedSubLevelItemId: ''
                });
        }
    }

    renderTopLevelChildren(children, item) {
        return (
            <div className="children-wrapper" id={item.id + "-children"}>
                {children.map((item, index) => {
                    if (item.type === 'sub-level-label') {
                        return (
                            <Fragment key={index}>
                                <div className="sub-level-label">{item.label}</div>
                                {item.children.map((citem, cindex) => {
                                    return (<div className="sub-level-item" key={cindex}>
                                        {citem.content || <a href={citem.link}>{citem.label || 'Menu Item'}</a>}
                                    </div>);
                                })}
                            </Fragment>
                        );
                    } else {
                        return (<div className="sub-level-item" key={index}>
                            {item.content || <a href={item.link}>{item.label || 'Menu Item'}</a>}
                        </div>);
                    }

                })}
            </div>);
    }

    handleItemClick(item) {
        if (item.type === 'top-level-item') {
            this.setState({ selectedTopLevelItemId: item.id, selectedSubLevelItemId: '' });
        }
    }

    renderTopLevelItem(item) {
        return (<Fragment>
            <div
                key={item.id}
                onClick={() => this.handleItemClick(item)}
                className={"menu-item top-level-item" + (item.id === this.state.selectedTopLevelItemId ? ' active-top-item' : '')}>
                {item.children ? <span>{item.label}</span> : item.content || <a href={item.link}>{item.label || 'Menu Item'}</a>}
            </div>
            {item.children ? this.renderTopLevelChildren(item.children, item) : null}
        </Fragment>);
    }

    create(data) {
        return data.map((item, index) => {
            if (index === 0 && !this.state.selectedTopLevelItemId) {
                this.setState({ selectedTopLevelItemId: item.id });
            }
            return <Fragment key={index}>
                {

                    item.type === 'top-level-item' ? this.renderTopLevelItem(item) : <div key={item.id} className="menu-item top-level-label">{item.label}</div>
                }
            </Fragment>
        });
    }

    render() {
        return (
            <div
                className="menu container flat-menu"
                style={this.props.style || {}}>
                {this.create(this.state.list)}
            </div>
        )
    }
}