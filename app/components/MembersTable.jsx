import React from 'react';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const perPage = 5;
export default class  extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            offset:0,
            members:props.members,
            membersToDisplay: Object.keys(props.members).slice(0,0+perPage),
            pageCount: Math.ceil(Object.keys(props.members).length / perPage)
        }
    }
    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * perPage);
    
        this.setState({
            offset,
            membersToDisplay:Object.keys(this.props.members).slice(offset,offset+perPage),});
    };    
    render(){
        const { members,membersToDisplay } = this.state;
        const { deleteUser } = this.props;
        return (
            <div className="members-table">
                <div className="container">
                <h3>Edit Members:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        
                        membersToDisplay.map((a,index) => {
                            let currentUser = members
                            return (
                                    <tr key={index}>
                                        <td>{currentUser[a].username ? currentUser[a].username : 'NONE'}</td>
                                        <td>
                                        {
                                            ( currentUser[a].username && currentUser[a].username === "admin" )? 
                                            ( <div>
                                                {/*<button name={a} onClick={this.changePassword}>Change Password</button> */}
                                                <button disabled="disabled" name={a}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                            </div> ) :
                                            ( <button name={a} onClick={deleteUser}><FontAwesomeIcon icon={faTrashAlt} /></button> )
                                        }
                                        </td>
                                    </tr>
                                )
                        })
                    }
                    </tbody>                                    
                </table>    
                </div>
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
}