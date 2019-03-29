// Modules
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

// Data
const menu = (account = {}, instances = {}) => ({
    children: [
        // Instance
        {
            label: 'Instances',
            id: 'instance-settings',
            children: instances.list.map(instance => (
                {
                    label: instance.title,
                    id: instance.slug,
                    children: [
                        {
                            label: 'Basics',
                            id: 'basics',
                            content: <Link to={'/settings/instances/' + instance.slug + '/basics'}>Basics</Link>
                        },
                        {
                            label: 'Administration',
                            id: 'administration',
                            children: [
                                {
                                    label: 'Members',
                                    id: 'members',
                                    content: <Link to={'/settings/instances/' + instance.slug + '/members'}>Members</Link>
                                },
                                {
                                    label: 'Password',
                                    id: 'password',
                                    content: <Link to={'/settings/instances/' + instance.slug + '/password'}>Password</Link>
                                }
                            ]
                        },
                        {
                            label: 'Export',
                            id: 'export',
                            content: <Link to={'/settings/instances/' + instance.slug + '/export'}>Export</Link>
                        },
                        {
                            label: 'Reboot',
                            id: 'reboot',
                            content: <Link to={'/settings/instances/' + instance.slug + '/reboot'}>Reboot</Link>
                        },
                        {
                            label: 'Visit',
                            id: 'visit',
                            content: <a href={'https://gr.ps/' + instance.slug} target="_blank">Visit</a>
                        }
                    ]
                }
            ))
        },
        // Account
        {
            label: 'Account',
            id: 'account-settings',
            children: [
                {
                    label: 'Credentials',
                    id: 'credentials',
                    content: <Link to={'/settings/account/' + account.id + '/credentials'}>Credentials</Link>
                },
                {
                    label: 'Subscriptions',
                    id: 'subscriptions',
                    content: <Link to={'/settings/account/' + account.id + '/subscriptions'}>Subscriptions</Link>
                }
            ]
        },
        // Help
        {
            label: 'Help',
            id: 'tickets',
            content: <Link to={'/settings/account/' + account.id + '/tickets'}>Help</Link>
        }
    ]
})

export default menu;