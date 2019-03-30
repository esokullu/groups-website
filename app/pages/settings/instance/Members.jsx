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
            pagination: {
                total: 0,
                current_page: 1,
                last_page: 1
            }
        }
        this.pageLimit = 5;
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
        return (
            <section className="members">
                <Table
                    members={this.state.members}
                    pagination={this.state.pagination}
                    deleteMember={this.deleteMember}
                    paginate={this.paginate} />
            </section>
        )
    }
}