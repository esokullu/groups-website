import React from 'react';
import Main from '../components/Main';

export default class Pay extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        let containerStyle = {
            textAlign: 'center'
        };
        let iframeStyle = {
            width: '600px',
            height: '840px',
            margin: '2em auto 2em auto',
            borderWidth: 0
        };
        let payUrl = "https://graphjs.chargifypay.com/subscribe/99w452yfz2qk?email="+this.props.location.search.replace('?email=', '')+"&first_name=Change&last_name=Me";
        return (
        <Main id="pay" data-page="pay">
            <main>
                <section>
                    <div className="container" style={containerStyle}>
                        <iframe style={iframeStyle} src={payUrl}></iframe>
                    </div>
                </section>
            </main>
        </Main>
        )
    }
}