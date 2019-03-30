import React, {Fragment} from 'react';

const identify = () => Math.floor((Math.random() * 1000000) + 1);

export default class MultiLevelMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 0,
            list: this.props.data || {}
        }
        this.create = this.create.bind(this);
        this.jump = this.jump.bind(this);
    }
    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }
    create(data, level = 0, index = 0) {
        let identifier = 'mlm-' + (data.id || identify());
        return data.hasOwnProperty('children') && data.children.length > 0
            ? <Fragment
                key={index}>
                {level !== 0 &&
                    <li
                        id={identifier}
                        className={'mlm-item mlm-forward ' + (
                            typeof data.class === 'object'
                                ? data.class.join(' ')
                                : data.class || ''
                        )}
                        onClick={(event) => this.jump(identifier)}>
                        {data.content || <a href={data.link}>{data.label || 'Menu Item'}</a>
                        }
                    </li>
                }
                <ul
                    ref={identifier}
                    className={'mlm-list' + (level === 0 ? ' mlm-main' : '')}
                    style={level === 0
                        ? {left: (-100 * this.state.level) + '%'}
                        : {}
                    }>
                    {this.props.back !== false && level !== 0 &&
                        <li
                            className="mlm-item mlm-back"
                            onClick={() => this.jump()}>
                            <a>{data.label || 'Back'}</a>
                        </li>
                    }
                    {data.children.map((child, key) =>
                        this.create(child, level + 1, key)
                    )}
                </ul>
            </Fragment>
            : <li
                key={index}
                id={identifier}
                onClick={() => this.props.callback && this.props.callback(data)}
                className={'mlm-item ' + (
                    typeof data.class === 'object'
                        ? data.class.join(' ')
                        : data.class || ''
                )}>
                {data.content || <a href={data.link}>{data.label || 'Menu Item'}</a>}
            </li>
    }
    jump(identifier) {
        let level = this.state.level;
        if(identifier) {
            document.querySelectorAll('.mlm-list').forEach(item =>
                item.classList.remove('mlm-visible')
            );
            let target = this.refs[identifier];
            while(target) {
              target.classList.contains('mlm-list')
                  && target.classList.add('mlm-visible');
              target = !target.classList.contains('mlm-main')
                  ? target.parentNode
                  : null;
            }
            level++;
        } else {
            level--;
        }
        level = Math.max(level, 0);
        this.setState({level});
    }
    render() {
        return (
            <div
                className="menu container multi-level-menu"
                style={this.props.style || {}}>
                {this.create(this.state.list)}
            </div>
        )
    }
}
