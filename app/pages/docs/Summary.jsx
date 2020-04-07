// Modules
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import Main from '~/components/Main';
import Code from '~/components/Code';

export default class Summary extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Main data-page="summary">
                <div className="container">
                    <section className="summary">
                        <h1>Summary</h1>
                        <div className="block">
                            <h3 id="introduction-block">Introduction</h3>
                            <p>GraphJS is a Javascript client-side library to help developers easily enable social features on their web sites. GraphJS is built upon the Pho framework, and it's open source. With only a few lines of code, you can easily add authentication, comments, messages, forum, groups, profiles etc. to your static web pages.</p>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PiIUXHnAk1Q?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                        <div className="block">
                            <h3 id="gettingstarted-block">Getting Started</h3>
                            <p>For a quick intro, read this <a href="https://medium.com/@emresokullu/graphjs-manifesto-19456e2b8ab3" target="_blank">blog post</a> by the founder of Graph.js, and don't forget to give applause 😃</p>
                            <p>To get started with GraphJS, you need to include <span className="code-block">graph.js</span> file to your project. Then you can initiate it with <span className="code-block">GraphJS.init</span> function.</p>
                            <p>Simply, add this code into your HTML, just before the end of body tag. Don't forget to replace your public ID, theme, color, language and defaultAvatar options as follows:</p>
                            
                            <Code type="initiation" id="YOUR-PUBLIC-ID" specs={{
                                host:  "https://YOUR-HOST",
                                theme: "YOUR-THEME-PREFERENCE",
                                color: 'YOUR-COLOR-PREFERENCE',
                                language: 'LANGUAGE-OF-YOUR-PREFERENCE',
                                defaultAvatar: 'URL-FOR-DEFAULT-AVATAR'
                            }} />
                            <p>To clarify:</p>
                            <ul>
                                <li>Your public ID should be a string which can be provided by GraphJS after <Link to="/setup">Setup</Link> process.</li>
                                <li>Theme option should be a string, and it has to be either 'light' or 'dark'.</li>
                                <li>Color option should be a string representing any color of your preference in HEX format.</li>
                                <li>The defaultAvatar option should point to an jpg, gif or png image or it should be simply "gravatar" so that all undefined avatars are based off of user's email address as per <a href="https://en.gravatar.com/" target="_blank">Gravatar</a> protocol.</li>
                                <li>Also, please note, as of the time of this writing, the only languages supported by GraphJS are French (alpha), Turkish and English. If the language option is left blank, the tags will display in English. For most updated languages, you may check <a href="https://github.com/phonetworks/graphjs/tree/master/lib/language" target="_blank">GraphJS Github Repository</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </Main>
        )
    }
}
