import React from 'react';
import {Link} from 'react-router-dom';

import Main from '../../components/Main';
import Code from '../../components/Code';

export default class Integrations extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { item } = this.props
        return (
            <Main data-page="integrations">
                <div className="container">
                    <section className="integrations">
                        <h1>Integrations</h1>
                        {item === "events" && <div className="block">
                            <h3>Events</h3>
                            <p>GraphJS is event-driven. You can trigger certain functions at given hooks. Each method represented under the "Functions" tab in the navigation menu comes with a "after" and "before" hook.</p>
                            <p>For example, login comes with "beforeLogin" and "afterLogin" hooks. You may use them to trigger certain functions at specific times. Presently available events are all authentication-related, and they are: </p>
                                <ul>
                                    <li>beforeLogin</li>
                                    <li>afterLogin</li>
                                    <li>beforeRegister</li>
                                    <li>afterRegister</li>
                                    <li>beforeLogout</li>
                                    <li>afterLogout</li>
                                </ul>
                            <p>Please note, while before* events do not trigger functions with any parameters, after* events do trigger with two parameters, first one being "args" which consists of an array of all arguments passed to the function that was triggered, and second one being "data" which is the successful response.data result of the function that was triggered.</p>
                            <p>Besides these authentication related functions, all show* functions also come with "before" and "after" events. To illustrate, showLogin has beforeShowLogin and afterShowLogin hooks.</p>
                            <p>You may bind a function to a hook by using GraphJS' <span className="code-block">on</span> method. So, in order to trigger a <span className="code-block">console.log</span> after logging in, you type in:</p>
                            <Code type="events" id="block-events" specs={{}} />
                            <p>Please note, the "before" events may interrupt the progression of the call. The code block fired after the "before" event must finish with the <span className="code-block">goToNextStep(true);</span> call.
                            This ensures that the actual call gets executed.</p>
                        </div>}
                        {item === "wordpress" && <div className="block">
                            <h3>GraphJS on Wordpress</h3>
                            <p>It's very easy to install and use GraphJS on Wordpress, the most popular CMS (content management system). Once logged in with your admin credentials, all you need to do is to go to the Extensions page in your admin dashboard, search "GraphJS" and install.
                                Then you can use all GraphJS tags described in this documentation using brackets like <span className="code-block">[graphjs-forum]</span> instead of greater-than <span className="code-block">&gt;</span>, less-than <span className="code-block">&lt;</span> signs (e.g. <span className="code-block">&lt;graphjs-forum&gt;</span>).
                            </p>
                            <p>Below you can watch a tutorial to show you how:</p>
                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HApVxrMOgHE?controls=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>}
                        {item === "single-sign-on" && <div className="block">
                            <h3>Single Sign-on</h3>
                            <p><i>This page is intended for the technically-inclined.</i></p>
                            <p>As of version 1.6, it is possible to integrate GraphJS with your existing authentication infrastructure. This means, if you have a dynamic application with an existing user registration backend, you may authenticate your online users on GraphJS simultaneously and seamlessly. There are three steps to achieve this:
                            </p>
                            <ol>
                                <li>Present your existing users to GraphJS (using <span className="code-block">tokenSignup</span> call)</li>
                                <li>Make sure each new user on your platform is presented to GraphJS, using tokenSignup call. More information is available below.</li>
                                <li>Every time you will present a GraphJS tag on a page that is shown to your logged in users, create a token with the "secret key" provided to you, and initialize GraphJS with that parameter.</li>
                            </ol>
                            <h4>About your single sign-on key</h4>
                            <p>Your single sign-on key is tied to your subscription. To fetch it, sign in to GraphJS.com, go to Accounts > Subscriptions -- and it will be there:
                            <br />
                            <img src="/app/images/email/single-signon.png" style={{width: "70%", "height": "70%"}} />
                            </p>
                            <p>If you're using the open source version of GraphJS-Server, then it is set by an environment variable called "SINGLE_SIGNON_TOKEN_KEY". Check out <a href="https://github.com/phonetworks/graphjs-server/blob/d3b6c66472746800d4a1c6f2285121d6944d9e73/src/GraphJS/Controllers/AuthenticationController.php#L34" target="_blank">AuthenticationController.php</a> to see its use in action.</p>
                            <h4>tokenSignup</h4>
                            <p>The <span className="code-block">tokenSignup</span> call accepts three parameters; <span className="code-block">token</span>, <span className="code-block">username</span> and <span className="code-block">email</span> where "token" is the "username" encoded with your "secret key". We use AES for symmetrical-encryption. To see how that works in PHP 7.2+, check out: <a href="https://github.com/phonetworks/graphjs-server/blob/master/src/GraphJS/Crypto.php" target="_blank">https://github.com/phonetworks/graphjs-server/blob/master/src/GraphJS/Crypto.php</a></p>
                            <Code type="single-signon"></Code>
                            <h4>tokenLogin</h4>
                            <p>The <span className="code-block">tokenLogin</span> call accepts only a single parameter; <span className="code-block">token</span> where "token" is encrypted the same way, by AES encrypting the username with your secret key.</p>
                            <p>&nbsp;</p>
                            <p>You may  use single sign-on not only with tags but with call functions as well. Just generate a token and use tokenLogin call to sign your users in automatically.</p>
                            <p>Should you have any questions, please contact us at <a href="http://risg.co/contact.html" target="_blank">http://risg.co/contact.html</a>, we'd love to hear more about your use case.</p>

                            <h4>Presenting your users to GraphJS</h4>
                            <p>This is pretty simple. All you need to do, on the server-side, is to go through your database in a while loop and:</p>
                            <ol>
                                    <li>Fetch all users</li>
                                    <li>Compute "token" for each user, as described above.</li>
                                    <li>Make a GET request to https://accounts.graphjs.com/getComments?public_id=$YOUR-PUBLIC-ID$&username=$THEIR_USERNAME$&email=$THEIR_EMAIL$&token=$THEIR_COMPUTED_TOKEN$ for each user.</li>
                            </ol>
                            <p>The piece of code that handles this GET request on the server-side can be found on <a href="https://github.com/phonetworks/graphjs-server/blob/0edb106f69ac012e0b174ea5d44bdeb6e376ad1c/src/GraphJS/Controllers/AuthenticationController.php#L32" target="_blank">Github</a>.</p>
                            <p>If you're hosting the GraphJS Server on your own, you should change https://accounts.graphjs.com to your domain name.</p>
                            <h3>Encrypting username in NodeJS:</h3>
                            <p>Using Javascript we can easyly generate a <span className="code-block">token</span> using the following encrypt method by passing username and SSO key:</p>
                            <Code type="single-signon-js"></Code>
                            <p>Using above encrypt method you can generate a token that can be passed to <span className="code-block">tokenSignup</span> and <span className="code-block">tokenLogin</span> calls</p>
                        </div>}
                        {item === "react-graphjs" && <div className="block">
                            <h3>GraphJS in React</h3>
                            <p>
                                To Use GraphJS with in your React application as components, Please check <a target="_blank" href="https://github.com/phonetworks/react-graphjs">react-graphjs</a> repo for more information
                            </p>
                            <h3>Installation :</h3>
                            <p>
                                react-graphjs is available as an npm package.
                            </p>
                                <pre className='prettyprint lang-html'>
                                    <xmp 
                                        ref="inputCode" 
                                        className="code"
                                    >
                                    {
                                        `
npm install --save react-graphjs
or 
yarn add react-graphjs
                                        `
                                    }
                                    </xmp> 
                                </pre>
                                <p>To get started with Graph.js, you need to include graph.js file to your project. Then you have to initiate it with GraphJS.init function in your html file like shown below example.</p>
                                <pre className='prettyprint lang-html'>
                                    <xmp 
                                        ref="inputCode" 
                                        className="code"
                                    >
                                    {
                                        `
    <script src="https://graphjs.com/v2/graph.js"></script>
    <script>
    GraphJS.init("{{YOUR-PUBLIC-ID}}", {
        host:  "{{URL-OF-GRAPHJS-INSTANCE}}",
        theme: "{{YOUR-THEME-PREFERENCE}}",
        color: "{{YOUR-COLOR-PREFERENCE}}",
        language: "{{YOUR-LANGUAGE-OF-CHOICE}}",
        defaultAvatar: "{{URL-TO-YOUR-DEFAULT-AVATAR}}"
    })
    </script>
                                        `
                                    }
                                    </xmp> 
                                </pre>
                                <p>
                                The init function comes with three options:<br/>
                                <br/>
                                <b>host:</b> a URL pointing to your instance of GraphJS-Server<br/>
                                <b>theme:</b> either 'light' or 'dark'<br/>
                                <b>color:</b> a string representing any color of your preference in HEX format<br/>
                                <b>language:</b> current available options are en-US (English), fr-FR (French) in beta and tr-TR (Turkish). For more translations and languages, see Translations section below.<br/>
                                <b>defaultAvatar:</b> either "gravatar" so all no-avatar accounts show with their Gravatar counterparts (if it exists) or a URL that points to your default avatar in png, gif or jpeg formats.<br/>
                                </p>
                                <h3>Usage :</h3>
                                <pre className='prettyprint lang-js'>
                                    <xmp 
                                        ref="inputCode" 
                                        className="code"
                                    >
                                    {
                                        `
import React from 'react';
import ReactDOM from 'react-dom';
import { GraphJSAuthRegister } from 'react-graphjs';

function App() {
return (
    <GraphJSAuthRegister 
        title="Register"
    >
    </GraphJSAuthRegister>
);
}

ReactDOM.render(<App />, document.querySelector('#app'));
                                        `
                                    }
                                    </xmp> 
                                </pre>
                                <p>
                                For all the GraphJS tags, just capitalize the tag name in PascalCase and use it as a Component.</p>
                                <p><b>Example:</b> graphjs-profile-card => GraphJSProfileCard</p>
                        </div>}
                    </section>
                </div>
            </Main>
        )
    }
}