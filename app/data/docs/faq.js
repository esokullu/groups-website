// Modules
import React, {Fragment} from 'react';

// Data
const faq = [
    // Integrations
    {
        title: <h3>GraphJS and Integrations</h3>,
        items: [
            {
                label: 'Where can I find the open source code?',
                content: (
                    <Fragment>
                        <p>The client-side components can be found at <a  target="_blank" href='https://github.com/phonetworks/graphjs'>https://github.com/phonetworks/graphjs</a>.</p>
                        <p>Server-side code can be found at <a  target="_blank" href='https://github.com/phonetworks/graphjs-server'>https://github.com/phonetworks/graphjs-server</a>.</p>
                    </Fragment>
                )
            },
            {
                label: 'What Javascript framework is the frontend created with?',
                content: (
                    <Fragment>
                        <p>It is created using <b>Riot.js</b>.</p>
                        <p>The frontend code can be found at <a href='https://github.com/phonetworks/graphjs' target="_blank">https://github.com/phonetworks/graphjs</a>.</p>
                    </Fragment>
                )
            },
            {
                label: 'Is there a Wordpress plugin for GraphJS?',
                content: (
                    <Fragment>
                        <p>Yes! There is one in beta. Just go to Extensions in the admin panel, and search "GraphJS". For more information, check out the video below:</p>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube-nocookie.com/embed/HApVxrMOgHE?controls=0"
                            allow="autoplay; encrypted-media"
                            frameBorder="0"
                            allowFullScreen>
                        </iframe>
                    </Fragment>
                )
            },
            {
                label: 'Is there a Drupal plugin for GraphJS?',
                content: (
                    <Fragment>
                        <p>Not yet, but we'll be happy if you contribute one :)</p>
                    </Fragment>
                )
            },
            {
                label: 'Is GraphJS available in ReactJS?',
                content: (
                    <p>Yes! Check <a target="_blank" href="https://github.com/phonetworks/react-graphjs">react-graphjs</a> repo for more information</p>
                )
            },
            {
                label: 'Where can I find a demo for GraphJS?',
                content: (
                    <p>You can find GraphJS in production live at <a target="_blank" href="blocksplain.com">blocksplain.com</a> --a tech blog by Richard MacManus-- in forums and blog post comments, and <a target="_blank" href="blocksplain.com">emresokullu.com</a> in contact form.</p>
                )
            },
            {
                label: 'Is GraphJS open source? What are the limitations of the open source version?',
                content: (
                    <Fragment>
                        <p>Yes! GraphJS is entirely open source. The code can be found at <a target="_blank" href="https://github.com/phonetworks/graphjs">github.com/phonetworks/graphjs</a> and <a target="_blank" href="https://github.com/phonetworks/graphjs-server">github.com/phonetworks/graphjs-server</a>.</p>
                        <p>The code that runs the instances created on this website is exactly the same as the one shared above. GraphJS is licensed under AGPL, which basically means, there are no limitations except you need to share your changes with the community under the same license, and give credit to the original authors. See LICENSE file in each repo for more detailed information.</p>
                    </Fragment>
                )
            },
            {
                label: 'How will GraphJS affect my search engine rankings (e.g. SEO)?',
                content: (
                    <Fragment>
                        <p>Googlebot is <a href="_blank" href="https://twitter.com/mattcutts/status/131425949597179904">known</a> to parse Ajax and JavaScript contents since 2011. This was tested and approved by <a href="https://searchengineland.com/tested-googlebot-crawls-javascript-heres-learned-220157" target="_blank">Search Engine Land</a> as well. GraphJS uses dynamically inserted content which is, according to Search Engine Land, is crawled and indexed, thus ranking the page for content.</p>
                    </Fragment>
                )
            },
            {
                label: 'What are the languages supported in GraphJS?',
                content: (
                    <Fragment>
                        <p>The only languages supported by GraphJS are English, French and Turkish. If the language option is left blank, the tags will display in English. For most updated languages, you may check <a href="https://github.com/phonetworks/graphjs/tree/master/lib/language" target="_blank">GraphJS Github Repository</a></p>
                    </Fragment>
                )
            },
            {
                label: 'My Grou.ps instance has been activated. Can I use the same instance for GraphJS?',
                content: (
                    <Fragment>
                        <p>This is currently not allowed, but it may change soon with an upgrade fee.</p>
                    </Fragment>
                )
            },
            {
                label: 'Can I start using your GraphJS host now then move my data to my own server later?',
                content: (
                    <Fragment>
                        <p>Yes, absolutely. You can export your data (there is an option in your GraphJS Settings page) and import them into the redis cache of your own GraphJS server.</p>
                    </Fragment>
                )
            }
        ]
    },
    // Account and Payment
    {
        title: <h3>Account and Payment</h3>,
        items: [
            {
                label: 'I would like to cancel my subscription and receive a refund of the money charged by your service.',
                content: (
                    <Fragment>
                        <p>We are sorry to see you go. You may cancel the subcription in the Account > Subscription tab of your Settings page. We cannot refund the money charged for a membership period that has passed.</p>
                        <p><img src="/app/images/cancellation.png"></img></p>
                    </Fragment>
                )
            },
            {
                label: 'How do I change my credit card on file.',
                content: (
                    <Fragment>
                        <p>You may do so in the Account > Subscription tab of your Settings page.</p>
                        <p><img src="/app/images/cancellation.png"></img></p>
                    </Fragment>
                )
            },
            {
                label: 'Does the paid subscription plans remove your GraphJS brand image from the components?',
                content: (
                    <Fragment>
                        <p>No.</p>
                    </Fragment>
                )
            }
        ]
    },
    // Components
    {
        title: <h3>Components</h3>,
        items: [
            {
                label: 'Is the RSVP feature or a similar function to sign up for events available in GraphJS?',
                content: (
                    <Fragment>
                        <p>We are still developing GraphJS and will definitely consider creating a component equivalent to the RSVP feature. However, you can make use of the sign-up component and the star buttons to have users use them to react to an event, which also results in an effect like the RSVP feature does.</p>
                    </Fragment>
                )
            },
            {
                label: 'How can I add a contact form to my website?',
                content: (
                    <Fragment>
                        <p>A creative way to achieve it would be using GraphJS Messages: Composer in anonymous mode. Here is an example to show how it would work:</p>
                        <code>&lt;graphjs-messages-composer id="[USER_ID_OF_THE_PERSON_THIS_MESSAGE_WILL_GO_TO]" anonymity="on"&gt;&lt;/graphjs-messages-composer&gt;</code>
                        <p>All you need to do is to find your user id and replace [USER_ID_OF_THE_PERSON_THIS_MESSAGE_WILL_GO_TO] with it.</p>
                    </Fragment>
                )
            },
            {
                label: 'Can I add custom fields such as LinkedIn URLs and other metadata to the user registration?',
                content: (
                    <Fragment>
                        <p>This feature in on our list and still under development now. We will provide official updates once it is ready. Stay tuned!</p>
                    </Fragment>
                )
            },
            {
                label: 'I want to obscure or remove certain content if the visitor is not signed in. How can I do it?',
                content: (
                    <Fragment>
                        <p>You can use the <code>&lt;graphjs-private-content&gt;</code> tag if the elements already exist. Another approach is making the elements private using the API call addPrivateContent then displaying it with the call getPrivateContent. The second approach is also useful in case the elements do not exist yet (you’re planning to add them)</p>
                    </Fragment>
                )
            },
            {
                label: 'How can I assign an ID to a private-content component?',
                content: (
                    <Fragment>
                        <p>You don’t need to as the ID is assigned automatically. I you want to know the ID of the component when you create it, this is an example of the API call you can use to reveal the ID: <code>{`GraphJS.addPrivateContent("&lt;div&gt;Some very secret info&lt;/div&gt;", function(response) { console.log(response); })`}</code> where the first argument is the content you'd like to hide, and the second logs the content ID in response. The same method can be used to see the ID of other types of components such as with listGroups, getMembers, addComment, etc.</p>
                    </Fragment>
                )
            },
            {
                label: 'Does GraphJS work with my own login and authentication?',
                content: (
                    <Fragment>
                        <p>Yes, this is possible with single-signon. For more information, check out https://graphjs.com/docs/integrations/single-sign-on and <a href="mailto:business@risg.co">contact us</a> to get your token.</p>
                    </Fragment>
                )
            },
            {
                label: 'Can I use single sign-on so that users can use the credentials across platforms and applications?',
                content: (
                    <Fragment>
                        <p>Yes, this is possible with single-signon. For more information, check out https://graphjs.com/docs/integrations/single-sign-on and <a href="mailto:business@risg.co">contact us</a> to get your token.</p>
                    </Fragment>
                )
            },
            {
                label: 'Can my users make a comment without having to log in?',
                content: (
                    <Fragment>
                        <p>This feature is on our development list. Stay tuned for more updates in the future!</p>
                    </Fragment>
                )
            },
            {
                label: 'How to remove boxes from GraphJS components?',
                content: (
                    <Fragment>
                        <p>You noticed that each GraphJS component come within a padded box, right? You can remove these boxes if you want. This way, you can make the components blend in your design. You just need to change the box attribute to disable it; just add <b>box="disabled"</b> and that should do it.</p>
                    </Fragment>
                )
            },
            {
                label: 'How to add/change titles to GraphJS components?',
                content: (
                    <Fragment>
                        <p>Sometimes we need titles to clarify things. You can see titles on top of some GraphJS components. If you want, you can add titles to almost every component using title attribute. You can also change the existing ones as you see in the example.</p>
                        <code>&lt;graphjs-messages title="Custom title goes here."&gt;&lt;graphjs-messages&gt;</code>
                    </Fragment>
                )
            },
            {
                label: 'How to limit a GraphJS component\'s width?',
                content: (
                    <Fragment>
                        <p>A good layout design is important for web design. In order to not ruin it, GraphJS components takes its parent element’s shape thanks to their 100% width rule. However, you can change this using max/min-width/height attributes, if you please. You can use px, em, and % to achieve that.</p>
                        <code>&lt;graphjs-forum max-width="800px"&gt;&lt;graphjs-forum&gt;</code>
                    </Fragment>
                )
            }
        ]
    }
];

export default faq;