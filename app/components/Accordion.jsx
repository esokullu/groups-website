import React from 'react';


export default class Accordion extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open:false
        }
    }
    toggleAccordion = () => {
        let open = this.state.open;
        open = !open
        this.setState({
            open
        })
    }
    render() {
        const { title, children } = this.props;
        const { open } = this.state
        return (
            <div className="main-accordian">
                <button 
                    className={"main-collapsible" + (open ? " main-active" : "")}
                    onClick={this.toggleAccordion}
                >
                    {title}
                </button>
                <div className="main-content" style={{maxHeight:open ? 'none':0}}>
                    {children}
                </div>
            </div>
        )
    }
}