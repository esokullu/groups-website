import React from 'react';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.initiate = this.initiate.bind(this);
    }
    componentWillMount() {
        this.setState({
            item: this.props.item
        });
    }
    componentDidMount() {
        this.initiate();
    }
    shouldComponentUpdate(nextProps) {
        if(nextProps.item != this.state.item) {
            return true;
        }
        return false;
    }
    componentWillUpdate() {
        this.setState({
            item: this.props.item
        });
    }
    componentDidUpdate() {
        this.initiate();
    }
    initiate() {
        if(window.location.href.includes('graphjs.com')) {
            GraphJS.init("16D58CF2-FD88-4A49-972B-6F60054BF023", {host: "https://accounts.graphjs.com"});
        } else {
            GraphJS.init("79982844-6a27-4b3b-b77f-419a79be0e10");
        }
    }
    render() {
        return (
            <section className="comments">
                <graphjs-comments min-width="100%" box="disabled"></graphjs-comments>
            </section>
        )
    }
}