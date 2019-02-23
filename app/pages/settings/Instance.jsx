import React from 'react';
import Main from '../../components/Main';
import generateRandomKey from '../../scripts/generateRandomKey';
import deleteMember from '../../scripts/deleteMember';
import reboot from '../../scripts/reboot';
import fetchAdminPassword from '../../scripts/fetchAdminPassword';
import MembersTable from '../../components/MembersTable';
import {TwitterPicker} from 'react-color';
import setBasics from '../../scripts/setBasics';

export default class Instance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adminPassword:"N/A",
            failMessages: [],
            successMessages: []
        }
        this.setItemProperties = this.setItemProperties.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.handleRebootSubmit = this.handleRebootSubmit.bind(this);
        this.handleBasicsSubmit = this.handleBasicsSubmit.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }
    componentWillMount() {
        this.setItemProperties(this.props.list, this.props.item);
    }
    componentDidMount() {
        const self = this;
        let uuid = self.state.configuration.uuid;
        fetchAdminPassword(function(response) {
            self.setState({
                adminPassword: response.success ? response.body.password: "N/A"
            })
        });
    }
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
                        groupsTitle: instance.groupsTitle,
                        theme: instance.theme,
                        color: instance.color,
                        url: instance.url,
                        moderated: instance.moderated,
                        members: instance.members || {},
                        pendingComments: instance.pendingComments || [],
                        hash: instance.hash
                    }
                });
            }
        });
    }
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
    changeTheme(event) {
        let configuration = this.state.configuration;
        configuration['theme'] = event.currentTarget.id;
        this.setState({
            configuration: configuration
        });
    }
    changeColor(color) {
        let configuration = this.state.configuration;
        configuration['color'] = color.hex;
        this.setState({
            configuration: configuration
        });
    }
    handleBasicsSubmit(event){
        event.preventDefault();
        let self = this;
        let uuid = self.state.configuration.uuid;
        // let id = self.state.configuration.id;
        let groupsTitle = self.refs.groupsTitle.value;
        let theme = self.state.configuration.theme;
        let color = self.state.configuration.color;
        self.refs.submitBasics.classList.add('loading');
        setBasics(uuid, {
            groupsTitle,
            theme,
            color
        }, function(response) {
            if(response.success) {
                self.refs.submitBasics.classList.remove('loading');
                self.refs.submitBasics.classList.add('done');
                setTimeout(function() {
                    self.refs.submitBasics.classList.remove('done');
                }, 2500);
                self.props.update(self.state.parent);
            }
        });
    }
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
                        The password you use to log in to this administration panel, and the passwords on your instance(s) are different. The admin password for this instance is: {this.state.adminPassword}
                        </section>
                    }
                    {this.props.item == "export" &&
                        <section className="export">
                           <a href="https://www.groups-inc.com/contact.html">Contact Us</a>
                        </section>
                    }
                    {this.props.item == "basics" &&
                        <section className="basics">
                            <form className="narrow options">
                                <fieldset>
                                    <h3>Title</h3>
                                    <input 
                                        ref="groupsTitle" 
                                        id="groupsTitle"
                                        type="text" 
                                        placeholder="Enter your groups Title" 
                                        defaultValue={this.state.configuration.groupsTitle} 
                                    />
                                    <h3>Theme</h3>
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
                                    <h3>Color</h3>
                                    <TwitterPicker onChange={this.changeColor} color={this.state.configuration.color} width="204px" triangle="hide" colors={['#FFAD0A', '#FF8421', '#F92F39', '#ED2D96', '#8B5EFF', '#5D3CF6', '#007FFF', '#00C3D8', '#00C853', '#6F879F']} />
                                    <button ref="submitBasics" onClick={this.handleBasicsSubmit}>
                                        <span className="idle">Save Changes</span>
                                        <span className="success">Saved</span>
                                    </button>
                                </fieldset>
                            </form>
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