import React from 'react';

const items = {
    staticItems: [
        {
            source: 'ui-profile.png',
            order: 1,
            width: 58.7,
            opacity: .6,
            position: {
                top: 0,
                left: 20.65
            }
        }
    ],
    animatedItems: [
        {
            source: 'character-left.png',
            order: 2,
            width: 24,
            initial: {
                top: 50,
                left: -32,
                opacity: 0
            },
            final: {
                top: 10,
                left: 14,
                opacity: 1
            }
        },
        {
            source: 'character-middle.png',
            order: 3,
            width: 21,
            initial: {
                top: 80,
                left: 36,
                opacity: 0
            },
            final: {
                top: 2.5,
                left: 40.5,
                opacity: 1
            }
        },
        {
            source: 'character-right.png',
            order: 2,
            width: 21,
            initial: {
                top: 50,
                left: 100,
                opacity: 0
            },
            final: {
                top: 10,
                left: 60,
                opacity: 1
            }
        }
    ]
}

export default class Animation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: 'initial'
        }
    }

    static defaultProps = {
        animationConfig: items
    }

    componentDidMount() {
        setTimeout(() =>
            this.setState({
                stage: 'final'
            }
        ), 500);
    }
    render() {
        let stage = this.state.stage;
        let background = this.props.animationConfig.background;
        let staticItems = this.props.animationConfig.staticItems;
        let animatedItems = this.props.animationConfig.animatedItems;
        return (
            <div
                ref="animation"
                className="animation"
                style={background ? { backgroundImage: 'url("/app/images/illustrations/' + background.source + '")' } : {}}
            >
                {animatedItems.map((item, index) =>
                <img
                    key={index}
                    src={'/app/images/illustrations/' + item.source}
                    style={{
                        zIndex: item.order || 1,
                        width: item.width + '%',
                        opacity: item[stage].opacity,
                        top: item[stage].top + '%',
                        left: item[stage].left + '%'
                    }}
                />
                )}
                {staticItems.map((item, index) =>
                <img
                    key={index}
                    src={'/app/images/illustrations/' + item.source}
                    style={{
                        zIndex: item.order || 1,
                        width: item.width + '%',
                        opacity: item.opacity,
                        top: item.position.top + '%',
                        left: item.position.left + '%'
                    }}
                />
                )}
            </div>
        )
    }
}