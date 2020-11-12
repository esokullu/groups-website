// Modules
import React from 'react';

// Submodules
import Table from './members/Table';

// Scripts
import deleteMember from '~/scripts/deleteMember';

// Page: Settings > Instance > Members
export default class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupsid: this.props.configuration.name || '',
            pagination: {
                total: 0,
                current_page: 1,
                last_page: 1
            }
        }
        this.pageLimit = 100;
        this.paginate = this.paginate.bind(this);
        this.deleteMember = this.deleteMember.bind(this);
    }
    componentWillMount() {
        this.paginate();
    }
    paginate(index = 1) {
        let {members} = this.props.configuration;
        let total = Object.keys(members).length;
        this.setState({
            members: Object.keys(members).map(id => ({
                ...members[id],
                id
            })).slice((index - 1) * this.pageLimit, index * this.pageLimit),
            pagination: {
                current_page: index,
                last_page: Math.ceil(total / this.pageLimit),
                total
            }
        });
    }
    deleteMember(userId) {
        if (confirm('Are you sure? You won\'t be able to recover this.')) {
            let {uuid, hash, members} = this.props.configuration;
            // The function below is not same with this.deleteMember
            deleteMember(userId, uuid, hash, (response) => {
                if(response.success){
                    delete members[userId];
                    this.props.reconfigure({members});
                    this.paginate();
                } else {
                    alert('There is some error, please try again later.')
                }
            });
        }
    }
    render() {
        let address = "https://groups2.com/" + this.state.groupsid;
        let password_page = "/settings/instances/" + this.state.initial_groupsid + "/password";
        return (
            <section className="members">
                {/*
                <Table
                    members={this.state.members}
                    pagination={this.state.pagination}
                    deleteMember={this.deleteMember}
                    paginate={this.paginate} />
                */}
                <p>You can manage the members from <a href={address}>your network</a>. To do so:</p>
                <p>(1) Visit your <a href={address}>network</a></p>
                <p>(2) Log in with the "admin" account provided at sign-up (<a href={password_page}>the password would be different from this account, c/o the Password page to see the admin password of the instance</a>.)</p>
                <p>(3) Then, click the wheel icon as shown below:</p>
                <p><img src="/app/images/screenshots/network-management.png" style={{width: "60%", height: "60%"}}></img></p>
            </section>
        )
    }
}