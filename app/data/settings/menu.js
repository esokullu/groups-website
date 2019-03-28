// Modules
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

// Data
const menu = (account = {}, instances = {}) => ({
    children: [
        // Account Settings
        {
            label: 'Instances',
            id: 'instance-settings',
            children: instances.list.map(instance => (
                {
                    label: instance.slug,
                    id: instance.slug,
                    children: [
                        {
                            passive: true,
                            label: 'Production Mode',
                            id: instance.slug + '-switch',
                            content: (
                                <a className="switcher">
                                    <span>Production Mode:</span>
                                    {instance.content}
                                </a>
                            )
                        },
                        {
                            label: 'Code',
                            id: 'code',
                            content: <Link to={'/settings/instances/' + instance.slug + '/code'}>Code</Link>
                        },
                        {
                            label: 'Content',
                            id: 'content',
                            children: [
                                {
                                    label: 'Publishing',
                                    id: 'publishing',
                                    children: [
                                        {
                                            label: 'Blog Post',
                                            id: 'blog-post',
                                            content: <Link to={'/settings/instances/' + instance.slug + '/blog-post'}>Blog Post</Link>
                                        },
                                        {
                                            label: 'Private Content',
                                            id: 'private-content',
                                            content: <Link to={'/settings/instances/' + instance.slug + '/private-content'}>Private Content</Link>
                                        }
                                    ]
                                },
                                {
                                    label: 'Moderation',
                                    id: 'moderation',
                                    content: <Link to={'/settings/instances/' + instance.slug + '/moderation'}>Moderation</Link>
                                },
                                {
                                    label: 'Export',
                                    id: 'export',
                                    content: <Link to={'/settings/instances/' + instance.slug + '/export'}>Export</Link>
                                }
                            ]
                        },
                        {
                            label: 'Configuration',
                            id: 'configuration',
                            children: [
                                {
                                    label: 'URL',
                                    id: 'url',
                                    content: <Link to={'/settings/instances/' + instance.slug + '/url'}>URL</Link>
                                },
                                {
                                    label: 'Theme',
                                    id: 'theme',
                                    content: <Link to={'/settings/instances/' + instance.slug + '/theme'}>Theme</Link>
                                },
                                {
                                    label: 'Color',
                                    id: 'color',
                                    content: <Link to={'/settings/instances/' + instance.slug + '/color'}>Color</Link>
                                }
                            ]
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
                            label: 'Reboot',
                            id: 'reboot',
                            content: <Link to={'/settings/instances/' + instance.slug + '/reboot'}>Reboot</Link>
                        }
                    ]
                }
            ))
        },
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
        {
            label: 'Help',
            id: 'tickets',
            content: <Link to={'/settings/account/' + account.id + '/tickets'}>Help</Link>
        }
        // Instance Settings
        
    ]
})

export default menu;