import React from 'react';
import {TwitterPicker} from 'react-color';


import Main from '../../components/Main';
// import Demo from '../../components/Demo';
// import Code from '../../components/Code';

import generateRandomKey from '../../scripts/generateRandomKey';
// import setURL from '../../scripts/setURL';
// import setTheme from '../../scripts/setTheme';
// import setColor from '../../scripts/setColor';
import deleteMember from '../../scripts/deleteMember';
// import setPasswordGjs from '../../scripts/setPasswordGjs';
// import moderatePendingComment from '../../scripts/moderatePendingComment';
// import setModeration from '../../scripts/setModeration';
import reboot from '../../scripts/reboot';
import MembersTable from '../../components/MembersTable';

export default class Instance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            failMessages: [],
            successMessages: []
        }
        this.setItemProperties = this.setItemProperties.bind(this);
        // this.initiateDemo = this.initiateDemo.bind(this);
        // this.changeURL = this.changeURL.bind(this);
        // this.changeTheme = this.changeTheme.bind(this);
        // this.changeColor = this.changeColor.bind(this);
        // this.changeModeration = this.changeModeration.bind(this);
        // this.handleURLSubmit = this.handleURLSubmit.bind(this);
        // this.handleThemeSubmit = this.handleThemeSubmit.bind(this);
        // this.handleColorSubmit = this.handleColorSubmit.bind(this);
        // this.handleModerationSubmit = this.handleModerationSubmit.bind(this);
        // this.handleCommentModerate = this.handleCommentModerate.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        // this.changePassword = this.changePassword.bind(this);
        this.handleRebootSubmit = this.handleRebootSubmit.bind(this);
    }
    componentWillMount() {
        this.setItemProperties(this.props.list, this.props.item);
    }
    // componentDidMount() {
    //     this.state.configuration && this.initiateDemo({
    //         theme: this.state.configuration.theme,
    //         color: this.state.configuration.color
    //     })
    // }
    componentWillReceiveProps(nextProps) {
        if(nextProps.item != this.state.id) {
            this.setItemProperties(nextProps.list, nextProps.item);
        }
    }
    setItemProperties(list, item) {
        let object = list.filter(function(element) {
            return element.id == item;
        })[0];
        this.setState({
            key: generateRandomKey(),
            id: object.id,
            label: object.label,
            parent: object.parent
        });
        let self = this;
        this.props.instances && this.props.instances.forEach(function(instance) {
            let label = instance.url;
            label = label.replace('https://', '');
            label = label.replace('http://', '');
            label = label.replace('www.', '');
            label = label.replace(/\/$/, '');
            label = label.replace('.', '-');
            if(label = object.parent) {
                self.setState({
                    configuration: {
                        id: instance.id,
                        uuid: instance.uuid,
                        theme: instance.theme,
                        color: instance.color,
                        url: instance.url,
                        moderated: instance.moderated,
                        members: instance.members || {},
                        pendingComments: instance.pendingComments || [],
                        hash: instance.hash
                    }
                });
                // self.initiateDemo({
                //     theme: instance.theme,
                //     color: instance.color
                // })
            }
        });
    }
    // initiateDemo(options) {
    //     if(window.location.href.includes('graphjs.com')) {
    //         GraphJS.init("16D58CF2-FD88-4A49-972B-6F60054BF023", {
    //             theme: options.theme || this.state.theme,
    //             color: options.color || this.state.color
    //         });
    //     } else {
    //         GraphJS.init("79982844-6a27-4b3b-b77f-419a79be0e10", {
    //             theme: options.theme || this.state.theme,
    //             color: options.color || this.state.color
    //         });
    //     }
    // }
    // changeURL(event) {
    //     let configuration = this.state.configuration;
    //     configuration['url'] = event.currentTarget.value;
    //     this.setState({
    //         configuration: configuration
    //     });
    // }
    // changeTheme(event) {
    //     let configuration = this.state.configuration;
    //     configuration['theme'] = event.currentTarget.id;
    //     this.setState({
    //         configuration: configuration
    //     });
    //     this.initiateDemo({
    //         theme: event.currentTarget.id,
    //         color: this.state.configuration.color
    //     });
    // }
    // changeColor(color) {
    //     let configuration = this.state.configuration;
    //     configuration['color'] = color.hex;
    //     this.setState({
    //         configuration: configuration
    //     });
    //     this.initiateDemo({
    //         theme: this.state.configuration.theme,
    //         color: color.hex
    //     });
    // }
    // changeModeration(event) {
    //     let configuration = this.state.configuration;
    //     configuration['moderated'] = event.currentTarget.id == 'on';
    //     this.setState({
    //         configuration: configuration
    //     });
    // }
    // handleURLSubmit(event) {
    //     event.preventDefault();
    //     let self = this;
    //     let oldSlug = self.state.parent;
    //     let uuid = self.state.configuration.uuid;
    //     let url = self.refs.url.value;
    //     self.refs.submitURL.classList.add('loading');
    //     setURL(uuid, url, function(response) {
    //         if(response.success) {
    //             self.refs.submitURL.classList.remove('loading');
    //             self.refs.submitURL.classList.add('done');
    //             setTimeout(function() {
    //                 self.refs.submitURL.classList.remove('done');
    //             }, 2500);
    //             //self.props.update(self.state.parent);
    //             let slug = url.replace('https://', '');
    //             slug = slug.replace('http://', '');
    //             slug = slug.replace('www.', '');
    //             slug = slug.replace(/\/$/, '');
    //             slug = slug.replace('.', '-');
    //             self.props.update(self.state.parent);
    //             history.pushState('', document.title, window.location.href.replace(oldSlug, slug));
    //         }
    //     });
    // }
    // handleThemeSubmit(event) {
    //     event.preventDefault();
    //     let self = this;
    //     let uuid = self.state.configuration.uuid;
    //     let id = self.state.configuration.id;
    //     let theme = self.state.configuration.theme;
    //     self.refs.submitTheme.classList.add('loading');
    //     setTheme(uuid, theme, function(response) {
    //         if(response.success) {
    //             self.refs.submitTheme.classList.remove('loading');
    //             self.refs.submitTheme.classList.add('done');
    //             setTimeout(function() {
    //                 self.refs.submitTheme.classList.remove('done');
    //             }, 2500);
    //             self.props.update(self.state.parent);
    //         }
    //     });
    // }
    // handleCommentModerate(event) {
    //     let self = this;
    //     let configuration = self.state.configuration;
    //     let hash = configuration.hash;
    //     let uuid = configuration.uuid;
    //     let pendingComments = configuration.pendingComments;
    //     let newPendingComments = [];
    //     let commentId = event.target.dataset.id;
    //     let isApproved = event.target.dataset.approve == 1;
    //     moderatePendingComment(isApproved, commentId, uuid, hash, 
    //         function(response) {
    //             if(response.success) {
    //                 pendingComments.forEach(
    //                     function(value, index) {
    //                         if(value.comment_id!=commentId) {
    //                             newPendingComments[index] = value;
    //                         }
    //                     }
    //                 );
    //                 configuration.pendingComments = newPendingComments;
    //                 self.setState({
    //                     configuration: configuration
    //                 });
    //             }
    //             else {
    //                 window.alert("There was an error. Please try again later.")
    //             }
    //         }
    //     );
    // }
    // handleModerationSubmit(event) {
    //     event.preventDefault();
    //     let self = this;
    //     let configuration = self.state.configuration;
    //     let hash = configuration.hash;
    //     let uuid = configuration.uuid;
    //     let isModerated = configuration.moderated;
    //     self.refs.submitModeration.classList.add('loading');
    //     if(isModerated || window.confirm("If there are pending comments, all will be approved. Are you sure?")) {
    //         setModeration(isModerated, uuid, hash, function(response) {
    //             if(response.success) {
    //                 self.refs.submitModeration.classList.remove('loading');
    //                 self.refs.submitModeration.classList.add('done');
    //                 setTimeout(function() {
    //                     self.refs.submitModeration.classList.remove('done');
    //                 }, 2500);
    //                 self.props.update(self.state.parent);
    //                 /*
    //                 configuration = self.state.configuration;
    //                 configuration.moderated = isModerated;
    //                 configuration.pendingComments = [];
    //                 self.setState({
    //                     configuration: configuration
    //                 });
    //                 */
    //             }
    //             else {
    //                 self.refs.submitModeration.classList.remove('loading');
    //                 window.alert("There was an error. Please try again later.")
    //             }
    //         });
    //     } else {
    //         self.refs.submitModeration.classList.remove('loading');
    //     }
    // }
    handleRebootSubmit(event) {
        event.preventDefault();
        let self = this;
        let uuid = self.state.configuration.uuid;
        self.refs.submitReboot.classList.add('loading');
        reboot(uuid, function(response) {
            if(response.success) {
                self.refs.submitReboot.classList.remove('loading');
                self.refs.submitReboot.classList.add('done');
                setTimeout(function() {
                    self.refs.submitReboot.classList.remove('done');
                }, 120000);
                self.props.update(self.state.parent);
            }
        });
    }
    // handleColorSubmit(event) {
    //     event.preventDefault();
    //     let self = this;
    //     let uuid = self.state.configuration.uuid;
    //     let id = self.state.configuration.id;
    //     let color = self.state.configuration.color;
    //     self.refs.submitColor.classList.add('loading');
    //     setColor(uuid, color, function(response) {
    //         if(response.success) {
    //             self.refs.submitColor.classList.remove('loading');
    //             self.refs.submitColor.classList.add('done');
    //             setTimeout(function() {
    //                 self.refs.submitColor.classList.remove('done');
    //             }, 2500);
    //             self.props.update(self.state.parent);
    //         }
    //     });
    // }
    deleteUser (event) {
        event.preventDefault();
        let userId = event.target.name
        let r = confirm("Are your sure you want to delete this User? You won't be able to recover the user again");
        if (r == true) {
            let self = this;
            let configuration = self.state.configuration;
            let hash = configuration.hash;
            let uuid = configuration.uuid;

            deleteMember(userId,uuid,hash,function(response){
                if(response.success){
                    let configuration = self.state.configuration
                    let members = configuration.members
                    delete members[userId]
                    configuration.members = members
                    self.setState({
                        configuration
                    })
                } else{
                    alert('There is some error, please try again later')
                }
            });
        }
    }
    // changePassword (event) {
    //     event.preventDefault();
    //     var r = prompt("Enter your new Password")
    //     if(r !== ''){
    //         let self = this;
    //         let configuration = self.state.configuration;
    //         let hash = configuration.hash;
    //         let uuid = configuration.uuid;

    //         setPasswordGjs(r,uuid,hash,function(response){
    //             if(response.success){
    //                 alert('Password for Admin changed Successfully!')
    //             }else{
    //                 alert('There is some error, please try again later')
    //             }
    //         });
    //     }
    // }
    render() {
        return (
            <Main data-page="instance">
                <div className="container">
                    <h1>{this.state.label}</h1>
                    {this.props.item == 'url' &&
                    <section className="url">
                        <form className="narrow options">
                            <fieldset>
                                <input ref="url" type="text" placeholder="Enter your website URL" defaultValue={this.state.configuration.url} />
                                <button ref="submitURL" onClick={this.handleURLSubmit}>
                                    <span className="idle">Save Changes</span>
                                    <span className="success">Saved</span>
                                </button>
                            </fieldset>
                        </form>
                    </section>
                    }
                    {/* {this.props.item == 'theme' &&
                    <section className="theme">
                        <form className="narrow options">
                            <fieldset>
                                <div className="radiobutton">
                                    <span>
                                        <input onChange={this.changeTheme} type="radio" name="theme" id="light" defaultChecked={this.state.configuration.theme == 'light'} />
                                        <label htmlFor="light">Light</label>
                                    </span>
                                    <span>
                                        <input onChange={this.changeTheme} type="radio" name="theme" id="dark" defaultChecked={this.state.configuration.theme == 'dark'} />
                                        <label htmlFor="dark">Dark</label>
                                    </span>
                                </div>
                                <button ref="submitTheme" onClick={this.handleThemeSubmit}>
                                    <span className="idle">Save Changes</span>
                                    <span className="success">Saved</span>
                                </button>
                            </fieldset>
                        </form>
                    </section>
                    }
                    {this.props.item == 'color' &&
                    <section className="color">
                        <form className="narrow options">
                            <fieldset>
                                <TwitterPicker onChange={this.changeColor} color={this.state.configuration.color} width="204px" triangle="hide" colors={['#FFAD0A', '#FF8421', '#F92F39', '#ED2D96', '#8B5EFF', '#5D3CF6', '#007FFF', '#00C3D8', '#00C853', '#6F879F']} />
                                <button ref="submitColor" onClick={this.handleColorSubmit}>
                                    <span className="idle">Save Changes</span>
                                    <span className="success">Saved</span>
                                </button>
                            </fieldset>
                        </form>
                    </section>
                    }
                    {this.props.item == 'moderation' &&
                    <section className="moderation">
                        <form className="narrow options">
                            <fieldset>
                                <p>Would you like to enable moderation of Comments?</p>
                                <div className="radiobutton">
                                    <span>
                                        <input onChange={this.changeModeration} type="radio" name="moderation" id="on" defaultChecked={this.state.configuration.moderated === true} />
                                        <label htmlFor="on">Yes</label>
                                    </span>
                                    <span>
                                        <input onChange={this.changeModeration} type="radio" name="moderation" id="off" defaultChecked={this.state.configuration.moderated === false} />
                                        <label htmlFor="off">No</label>
                                    </span>
                                </div>
                                <button ref="submitModeration" onClick={this.handleModerationSubmit}>
                                    <span className="idle">Save Changes</span>
                                    <span className="success">Saved</span>
                                </button>
                            </fieldset>
                        </form>
                        {this.state.configuration.moderated === true && this.state.configuration.pendingComments.length > 0 &&
                        <h3>Comments in Moderation</h3>
                        }
                        {this.state.configuration.moderated === true && this.state.configuration.pendingComments.length > 0 &&
                        <form>
                            <fieldset>
                                <ul>
                                    {this.state.configuration.pendingComments.map((item, key) =>
                                    <li key={key} style={{width: "100%", lineHeight: "1.2em"}}>
                                        <div style={{padding: "1em 1.5em"}}>
                                            <big style={{lineHeight: "2em"}}>{item.comment}</big>
                                            <br />
                                            <i>by {item.author_email} on <a href="{item.page_url}">{item.page_title}</a> </i>
                                        </div>
                                        <div className="properties">
                                            <a onClick={this.handleCommentModerate} data-approve={0} data-id={item.comment_id}>Delete</a> &middot; 
                                            <a onClick={this.handleCommentModerate} data-approve={1} data-id={item.comment_id}>Approve</a>
                                        </div>
                                    </li>
                                    )}
                                </ul>
                            </fieldset>
                        </form>
                        }
                    </section>
                    } */}
                    {this.props.item == 'reboot' &&
                    <section className="reboot">
                        <form className="narrow options">
                            <p>Would you like to reboot your instance?</p>
                            <fieldset>
                                <button ref="submitReboot" onClick={this.handleRebootSubmit}>
                                    <span className="idle">Reboot</span>
                                    <span className="success">Success</span>
                                </button>
                            </fieldset>
                            <small>This may take about 2 minutes to complete.</small>
                        </form>
                    </section>
                    }
                    {this.props.item == 'members' &&
                    <section className="members">
                        <MembersTable members={this.state.configuration.members} deleteUser={this.deleteUser} />
                    </section>
                    }
                    {this.props.item == "adminpassword" &&
                        <section className="adminpassword">
                        The password you use to log in to this administration panel, and the passwords on your instance(s) are different. The admin password for this instance is: %s
                        </section>
                    }
                    <section className="demo" style={{display: (this.props.item == 'color' || this.props.item == 'theme') ? 'block' : 'none'}}>
                        <h3>Preview</h3>
                        <graphjs-forum-list id="component" max-width="50em" limit={5}></graphjs-forum-list>
                    </section>
                    {this.props.item == 'code' &&
                    <section className="code">
                        <p>Initiate your GraphJS components by adding this code into your HTML, just before the end of body tag.</p>
                        {/* <Code type="initiation" id={this.state.configuration.uuid} specs={this.state.configuration} /> */}
                        <p>Here's a short tutorial. Also, check out the <a href="/docs">Docs</a> for more info.</p>
                        <iframe height="315" src="https://www.youtube-nocookie.com/embed/PiIUXHnAk1Q?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </section>
                    }
                </div>
            </Main>
        )
    }
}