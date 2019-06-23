// Modules
import React, {Fragment} from 'react';

// Submodules
import Table from './tickets/Table';
import Display from './tickets/Display';
import Create from './tickets/Create';

// Scripts
import getTickets from '~/scripts/getTickets';

// Page: Settings > Account > Tickets
export default class Tickets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            tickets: []
        }
        this.pageLimit = 40;
        this.handlePage = this.handlePage.bind(this);
        this.getTickets = this.getTickets.bind(this);
        this.createTicket = this.createTicket.bind(this);
        this.displayTicket = this.displayTicket.bind(this);
    }
    componentWillMount() {
        this.getTickets();
    }
    handlePage(page) {
        // This will display the requested page if argument exists, loading page if it doesn't.
        let loading = !page;
        this.setState({page, loading});
    }
    getTickets(page = 1) {
        this.handlePage();
        // The function below is not same with this.getTickets
        getTickets(page, this.pageLimit, (response) => {
            if(response.success) {
                this.setState({
                    tickets: response.body,
                    pagination: response.pagination
                });
            } else {
                this.setState({
                    tickets: []
                });
            }
            this.handlePage('table');
        });
    }
    createTicket() {
        this.handlePage('create');
    }
    displayTicket(uuid) {
        this.setState({
            activeTicket: uuid
        });
        this.handlePage('display');
    }
    render() {
        let {loading, page, pagination, tickets, activeTicket} = this.state;
        return (
            <section className={'tickets options ' + (page || '')}>
                <h1>{this.props.label}</h1>
                {loading === true
                    ? <h3>Loading...</h3>
                    : <Fragment>
                        {page === 'table' &&
                            <Table
                                tickets={tickets}
                                pagination={pagination}
                                getTickets={this.getTickets}
                                createTicket={this.createTicket}
                                displayTicket={this.displayTicket} />
                        }
                        {page === 'display' &&
                            <Display
                                ticket={activeTicket}
                                goBack={() => this.handlePage('table')} />
                        }
                        {page === 'create' &&
                            <Create
                                displayTicket={this.displayTicket}
                                goBack={(refresh) => refresh
                                    ? this.getTickets()
                                    : this.handlePage('table')
                                } />
                        }
                    </Fragment>
                }
            </section>
        )
    }
}