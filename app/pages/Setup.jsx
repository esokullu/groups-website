import React from 'react';
import {Link} from 'react-router-dom';

export default class Setup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main data-page="setup">
                <section>
                    <form action="https://www.phonetworks.com">
                        <input type="hidden" name="site" value="https://gr.ps"></input>
                        Email:<br />
                        <input type="text" name="mail" value=""></input>
                        Pass:<br />
                        <input type="text" name="pass" value=""></input>
                        <input type="hidden" name="theme" value=""></input>
                        <input type="hidden" name="color" value=""></input>
                        <input type="hidden" name="groups_v2" value="1"></input>
                        Group Name:<br />
                        <input name="groups_name" type="text"></input>
                        Group Title:<br />
                        <input name="groups_title" type="text"></input>
                        Verification (leave blank if you have no idea):<br />
                        <input name="verification" type="text"></input>
                        <input type="submit"></input>
                    </form>
                </section>
            </main>
        )
    }
}