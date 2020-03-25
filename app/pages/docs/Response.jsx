import React from 'react';

export default class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        }
    }
    componentWillMount() {
        this.setState({
            code: this.props.response
        });
    }
    componentDidMount() {
        PR.prettyPrint();
        this.refs.response.scrollIntoView();
    }
    shouldComponentUpdate(nextProps) {
        return nextProps.response != this.state.code;
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            code: nextProps.response
        });
    }
    componentDidUpdate() {
        this.refs.inputCode.parentNode.classList.remove('prettyprinted');
        PR.prettyPrint();
        this.refs.response.scrollIntoView();
    }
    render() {
        return (
            <pre ref="response" className="prettyprint"><xmp ref="inputCode" className="code">{this.state.code}</xmp></pre>
        )
    }
}