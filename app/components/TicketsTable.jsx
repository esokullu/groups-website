import React from 'react';
import ReactPaginate from 'react-paginate';
import getTickets from '../scripts/getTickets';
import getTicket from '../scripts/getTicket';
import setTicket from '../scripts/setTicket';
import setTicketMessage from '../scripts/setTicketMessage';

import { throws } from 'assert';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashAlt, faEdit, faTimesCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons'

const perPage = 6;
export default class  extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            pageStatus:'loading',
            offset: 0,
            ticketsToDisplay:[],
            pageCount: 0,
            modalNewTicketOpen: false,
            modalTicketOpen: null,
            ticketInterval: null,
            failMessages: [],
            successMessages: [],
            messageSending: false
        }
    }
    componentDidMount(){
        this.fetchTickets(0);
    }
    componentWillUnmount(){
        if(this.state.ticketInterval)
            clearInterval(this.state.ticketInterval);
    }
    fetchTickets = (page) => {
        const self = this;
        this.setState({
            pageStatus:'loading'
        }, () => getTickets(page,function(response){
            if(response.success){
                self.setState({
                    pageStatus:"loaded",
                    ticketsToDisplay:response.body,
                    pageCount: Math.ceil(response.pagination.total / perPage),
                });
            } else {
                self.setState({
                    pageStatus:"loaded",
                    ticketsToDisplay:[],
                    pageCount: 0,
                });
            }
        })); 
    }
    handlePageClick = (data) => {
        let selected = data.selected;
        this.fetchTickets(selected);
    };
    handleModalNewTicketOpen = () => {
        this.setState({
            modalNewTicketOpen:true,
            successMessages:[],
            failMessages:[]
        });
    }
    handleModalClose = () => {
        this.setState({
            modalNewTicketOpen:false,
            successMessages:[],
            failMessages:[]
        });
    }
    createNewTicket = (e) => {
        const self = this;
        e.preventDefault();
        this.setState({
            successMessages:[],
            failMessages:[]
        })
        setTicket(self.refs.query.value,function(response){
            if(response.success){
                self.setState({
                    successMessages:["Success!"],
                    ticketsToDisplay:[],
                    pageCount: 0,
                },() => {
                    self.handleModalClose();
                    self.fetchTickets(0);
                });
            } else{
                self.setState({
                    failMessages:["There is some error. Please try again later..."]
                })
            }
        });
    }
    handleModalTicketOpen = (uuid) => {
        const self = this;
        this.updateTicket(uuid, (response) => {
            if(!response.success)
                alert("There is an error, please try again");
        });
        var ticketInterval = setInterval(() =>{
            self.updateTicket(uuid);
        }, 60*1000);
        // store intervalId in the state so it can be accessed later:
        this.setState({ticketInterval});
    }
    updateTicket = (uuid,callback = null) => {
        const self = this;
        getTicket(uuid, (response) => {
            if(response.success){
                self.setState({
                    modalTicketOpen:response.body
                }, self.scrollMessages)
            }
            if(callback){
                callback(response);
            }
        });
    }
    scrollMessages = () => {
        var messageBody = document.querySelector('.ticket-messages');
        messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    }
    handleModalTicketClose = () => {
        this.setState({
            modalTicketOpen:null
        })
        if(this.state.ticketInterval)
            clearInterval(this.state.ticketInterval);
    }
    createTicketMessage = () => {
        const self = this;
        this.setState({
            messageSending:true
        },() => {
            setTicketMessage(this.state.modalTicketOpen.uuid,this.refs.newMessage.value,(response) => {
                if(response.success){
                    self.updateTicket(self.state.modalTicketOpen.uuid,(response) => {
                        self.setState({
                            messageSending:false
                        })
                        if(!response.success){
                            alert("There is an error, please try again");
                        } else {
                            this.refs.newMessage.value = "";
                        }
                    });
                } else {
                    alert('There is an error. Please try again later');
                }
            });
        });
    }
    render(){
        let pStyle = {
            textAlign: "left",
            fontSize: "1em"
        }
        let { ticketsToDisplay, pageStatus, modalNewTicketOpen, modalTicketOpen } = this.state;
        ticketsToDisplay = ticketsToDisplay.map(a => {
            return ((a.title.length > 40) ? {...a,title:a.title.slice(0,40).concat('...')} : a)
        })
        return (
            <div>
                <div className={"tickets-table options" + (pageStatus === "loading" ? "" : " hide")}>
                    <h3>Loading...</h3>
                </div>
                <div className={"tickets-table options" + (pageStatus === "loading" ? " hide" : "")}>
                { 
                    ticketsToDisplay.length === 0
                    ? <h3>No Tickets Available</h3>
                    : (
                        <div className="container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Ticket Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                            {
                                ticketsToDisplay.map((a,index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <a onClick={() => this.handleModalTicketOpen(a.uuid)}>{a.title}</a>
                                            </td>
                                            <td>
                                                {a.status==="1" ? "Open" : (a.status==="2" ? "Waiting for answer" : "Closed")}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>                                    
                        </table>    
                        <ReactPaginate previousLabel={"Previous"}
                               nextLabel={"Next"}
                               breakLabel={<a href="">...</a>}
                               breakClassName={"break-me"}
                               pageCount={this.state.pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={2}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination"}
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"} />
                        </div>
                    )
                }
                <fieldset>
                    <button onClick={this.handleModalNewTicketOpen}>Submit new Ticket</button>
                </fieldset>
                { modalNewTicketOpen &&
                    (<div className="Modal-overlay">
                        <div className="content">
                            <form className="options">
                            {(this.state.failMessages.length > 0 || this.state.successMessages.length > 0) &&
                            <div className="warning">
                                {this.state.failMessages.length > 0 &&
                                <ul className="fail">
                                    {this.state.failMessages.map((failMessage, key) => <li key={key}>{failMessage}</li>)}
                                </ul>
                                }
                                {this.state.successMessages.length > 0 &&
                                <ul className="success">
                                    {this.state.successMessages.map((successMessage, key) => <li key={key}>{successMessage}</li>)}
                                </ul>
                                }
                            </div>
                            }
                            <h3>New Ticket</h3>
                            <p style={pStyle}>For a quick answer, please make sure you have read the <a href="https://graphjs.com/faqs" target="_blank">FAQ</a> page.</p>
                            <p style={pStyle}>Below, please enter as many details as possible. If it's a bug report, please report it at <a href="https://github.com/phonetworks/graphjs" target="_blank">https://github.com/phonetworks/graphjs</a> with environment info such as browser/OS used.</p>
                            <fieldset>
                                <textarea
                                    ref="query" 
                                    type="text" 
                                    placeholder="Enter your query here"
                                />
                            </fieldset>
                            <fieldset>
                                <button type="button" onClick={this.createNewTicket}>Submit</button>
                                <button type="button" onClick={this.handleModalClose}>Close</button>
                            </fieldset>
                        </form>
                        </div>
                    </div>)
                }
                { modalTicketOpen &&
                    (<div className="Modal-overlay ticket-modal">
                        <div className="content">
                            <form className="options">
                            <h3>Ticket</h3>
                            <div className="ticket-details">
                                <div>Title : {modalTicketOpen.title}</div>
                                <div>Id : {modalTicketOpen.uuid}</div>
                                <div>Status : {modalTicketOpen.status==="1" ? "Open" : "Closed"}</div>
                            </div>
                            <h4>Messages : </h4>
                            <div className="ticket-messages">
                                <ul>
                                    <li className="ticket-message">
                                        <div>
                                            <div className="time">{modalTicketOpen.open_date}</div>
                                            <div>You opened this Ticket</div>
                                        </div>
                                    </li>
                                    {
                                        modalTicketOpen.service_conversations.map((a,key) => 
                                        (<li 
                                            className={modalTicketOpen.by === a.user_id ? "customer-message" : "support-message" } 
                                            key={key}
                                         >
                                            <div>
                                                <div className="time">{a.created_at}</div>
                                                <div>{a.text}</div>
                                            </div>
                                        </li>))
                                    }
                                    {modalTicketOpen.status === "3" && 
                                    <li className="ticket-message">
                                        <div>
                                            <div className="time">{modalTicketOpen.close_date}</div>
                                            <div>{modalTicketOpen.assignee ? modalTicketOpen.assignee : 'Support' } closed this Ticket</div>
                                        </div>
                                    </li>}
                                </ul>
                            </div>
                            <fieldset>
                                <textarea
                                    ref="newMessage" 
                                    type="text" 
                                    placeholder="Type your message here..."
                                    disabled={this.state.messageSending}
                                />
                            </fieldset>
                            {
                                (this.state.failMessages.length > 0 || this.state.successMessages.length > 0) &&
                                <div className="warning">
                                    {this.state.failMessages.length > 0 &&
                                    <ul className="fail">
                                        {this.state.failMessages.map((failMessage, key) => <li key={key}>{failMessage}</li>)}
                                    </ul>
                                    }
                                    {this.state.successMessages.length > 0 &&
                                    <ul className="success">
                                        {this.state.successMessages.map((successMessage, key) => <li key={key}>{successMessage}</li>)}
                                    </ul>
                                    }
                                </div>
                            }
                            <fieldset>
                                <button type="button" onClick={this.createTicketMessage} disabled={this.state.messageSending}>
                                {this.state.messageSending ? "Sending ..." : "Send Message"}
                                </button>
                                <button type="button" className="close-btn" onClick={this.handleModalTicketClose}>X</button>
                            </fieldset>
                        </form>
                        </div>
                    </div>)
                }
            </div>
            </div>
        )

    }
}