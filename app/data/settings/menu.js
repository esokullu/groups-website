// Modules
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';


// Data
const menu = (account = {}, instance = {}) => ([
    {
        label: 'Basics',
        id: 'basics',
        content: <NavLink exact to={'/settings/instances/' + instance.slug + '/basics'}>Basics</NavLink>,
        type: 'top-level-item',
    },
    {
        label: 'Administration',
        id: 'administration',
        type: 'top-level-item',
        children: [
            {
                label: 'Members',
                id: 'members',
                content: <NavLink exact to={'/settings/instances/' + instance.slug + '/members'}>Members</NavLink>
            },
            {
                label: 'Password',
                id: 'password',
                content: <NavLink exact to={'/settings/instances/' + instance.slug + '/password'}>Password</NavLink>
            }
        ]
    },
    {
        label: 'Export',
        id: 'export',
        content: <NavLink exact to={'/settings/instances/' + instance.slug + '/export'}>Export</NavLink>,
        type: 'top-level-item',
    },
    {
        label: 'Reboot',
        id: 'reboot',
        content: <NavLink exact to={'/settings/instances/' + instance.slug + '/reboot'}>Reboot</NavLink>,
        type: 'top-level-item',
    },
    {
        label: 'Visit',
        id: 'visit',
        content: <a href={'https://gr.ps/' + instance.slug} target="_blank">Visit</a>,
        type: 'top-level-item',
    },
    // Account
    {
        label: 'Account',
        id: 'account-settings',
        type: 'top-level-item',
        children: [
            {
                label: 'Credentials',
                id: 'credentials',
                content: <NavLink exact to={'/settings/account/' + account.id + '/credentials'}>Credentials</NavLink>
            },
            {
                label: 'Subscriptions',
                id: 'subscriptions',
                content: <NavLink exact to={'/settings/account/' + account.id + '/subscriptions'}>Subscriptions</NavLink>
            }
        ]
    },
    // Help
    {
        label: 'Help',
        id: 'tickets',
        type: 'top-level-item',
        content: <NavLink exact to={'/settings/account/' + account.id + '/tickets'}>Help</NavLink>
    }
])

export default menu;