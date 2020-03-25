// Modules
import React from 'react';
import { NavLink } from 'react-router-dom';

const menu = [
    {
        id: 'introduction',
        label: 'Introduction',
        content: <NavLink exact activeClassName="selected" to="/docs">Getting Started</NavLink>,
        type: 'top-level-item',
    },
    {
        id: 'integrations',
        label: 'Integrations',
        type: 'top-level-item',
        children: [
            {
                id: 'events',
                label: 'Events',
                content: <NavLink exact activeClassName="selected" to="/docs/integrations/events">Events</NavLink>
            },
            {
                id: 'single-sign-on',
                label: 'Wordpress',
                content: <NavLink exact activeClassName="selected" to="/docs/integrations/wordpress">Wordpress</NavLink>
            },
            {
                id: 'events',
                label: 'Single Sign-on',
                content: <NavLink exact activeClassName="selected" to="/docs/integrations/single-sign-on">Single Sign-on</NavLink>
            },
            {
                id: 'react-graphjs',
                label: 'React',
                content: <NavLink exact activeClassName="selected" to="/docs/integrations/react-graphjs">React</NavLink>
            }
        ]
    },
    {
        id: 'faq',
        label: 'FAQ',
        type: 'top-level-item',
        content: <NavLink exact activeClassName="selected" to="/docs/faq">FAQ</NavLink>
    },
    {
        id: 'api_reference_label',
        label: 'API Reference',
        type: 'top-level-label'
    },
    {
        id: 'auth-family',
        label: 'Auth',
        type: 'top-level-item',
        children: [
            // Auth Tags
            {
                id: 'auth-tags',
                label: 'Tags',
                type: 'sub-level-label',
                children: [
                    // Auth
                    {
                        id: 'auth',
                        label: 'Auth',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/auth">Auth</NavLink>
                    },
                    // Auth: State
                    {
                        id: 'auth-state',
                        label: 'Auth: State',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/auth-state">Auth: State</NavLink>
                    },
                    // Auth: Register
                    {
                        id: 'auth-register',
                        label: 'Auth: Register',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/auth-register">Auth: Register</NavLink>
                    },
                    // Auth: Login
                    {
                        id: 'auth-login',
                        label: 'Auth: Login',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/auth-login">Auth: Login</NavLink>
                    },
                    // Auth: Reset
                    {
                        id: 'auth-reset',
                        label: 'Auth: Reset',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/auth-reset">Auth: Reset</NavLink>
                    }
                ]
            },
            // Auth Display Functions
            {
                id: 'auth-display-functions',
                label: 'Display Functions',
                type: 'sub-level-label',
                children: [
                    // showLogin
                    {
                        id: 'showLogin',
                        label: 'showLogin',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showLogin">showLogin</NavLink>
                    },
                    // showRegister
                    {
                        id: 'showRegister',
                        label: 'showRegister',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showRegister">showRegister</NavLink>
                    },
                    // showAlert
                    {
                        id: 'showAlert',
                        label: 'showAlert',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showAlert">showAlert</NavLink>
                    },
                    // showReset
                    {
                        id: 'showReset',
                        label: 'showReset',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showReset">showReset</NavLink>
                    }
                ]
            },
            // Auth API Functions
            {
                id: 'auth-api-functions',
                label: 'API Functions',
                type: 'sub-level-label',
                children: [
                    // getSession
                    {
                        id: 'getSession',
                        label: 'getSession',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getSession">getSession</NavLink>
                    },
                    // login
                    {
                        id: 'login',
                        label: 'login',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/login">login</NavLink>
                    },
                    // logout
                    {
                        id: 'logout',
                        label: 'logout',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/logout">logout</NavLink>
                    },
                    // register
                    {
                        id: 'register',
                        label: 'register',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/register">register</NavLink>
                    },
                    // reset
                    {
                        id: 'reset',
                        label: 'reset',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/reset">reset</NavLink>
                    }
                ]
            }
        ]
    },
    {
        id: 'blog-family',
        label: 'Blog',
        type: 'top-level-item',
        children: [
            // Blog Tags
            {
                id: 'blog-tags',
                label: 'Tags',
                type: 'sub-level-label',
                children: [
                    // Blog
                    {
                        id: 'blog',
                        label: 'Blog',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/blog">Blog</NavLink>
                    },
                    // Blog: List
                    {
                        id: 'blog-list',
                        label: 'Blog: List',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/blog-list">Blog: List</NavLink>
                    },
                    // Blog: Post
                    {
                        id: 'blog-post',
                        label: 'Blog: Post',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/blog-post">Blog: Post</NavLink>
                    },
                    // Blog: Composer
                    {
                        id: 'blog-composer',
                        label: 'Blog: Composer',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/blog-composer">Blog: Composer</NavLink>
                    }
                ]
            },
            // Blog Display Functions
            {
                id: 'blog-display-functions',
                label: 'Display Functions',
                type: 'sub-level-label',
                children: [
                    // showBlog
                    {
                        id: 'showBlog',
                        label: 'showBlog',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showBlog">showBlog</NavLink>
                    },
                    // showBlogComposer
                    {
                        id: 'showBlogComposer',
                        label: 'showBlogComposer',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showBlogComposer">showBlogComposer</NavLink>
                    },
                    // showBlogList
                    {
                        id: 'showBlogList',
                        label: 'showBlogList',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showBlogList">showBlogList</NavLink>
                    },
                    // showBlogPost
                    {
                        id: 'showBlogPost',
                        label: 'showBlogPost',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showBlogPost">showBlogPost</NavLink>
                    }
                ]
            },
            // Blog API Functions
            {
                id: 'blog-api-functions',
                label: 'API Functions',
                type: 'sub-level-label',
                children: [
                    // commentBlogPost
                    {
                        id: 'commentBlogPost',
                        label: 'commentBlogPost',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/commentBlogPost">commentBlogPost</NavLink>
                    },
                    // getBlogComments
                    {
                        id: 'getBlogComments',
                        label: 'getBlogComments',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getBlogComments">getBlogComments</NavLink>
                    },
                    // editBlogComment
                    {
                        id: 'editBlogComment',
                        label: 'editBlogComment',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/editBlogComment">editBlogComment</NavLink>
                    },
                    // removeBlogComment
                    {
                        id: 'removeBlogComment',
                        label: 'removeBlogComment',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/removeBlogComment">removeBlogComment</NavLink>
                    },
                    // startBlogPost
                    {
                        id: 'startBlogPost',
                        label: 'startBlogPost',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/startBlogPost">startBlogPost</NavLink>
                    },
                    // editBlogPost
                    {
                        id: 'editBlogPost',
                        label: 'editBlogPost',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/editBlogPost">editBlogPost</NavLink>
                    },
                    // getBlogPost
                    {
                        id: 'getBlogPost',
                        label: 'getBlogPost',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getBlogPost">getBlogPost</NavLink>
                    },
                    // getBlogPosts
                    {
                        id: 'getBlogPosts',
                        label: 'getBlogPosts',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getBlogPosts">getBlogPosts</NavLink>
                    },
                    // removeBlogPost
                    {
                        id: 'removeBlogPost',
                        label: 'removeBlogPost',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/removeBlogPost">removeBlogPost</NavLink>
                    },
                    // publishBlogPost
                    {
                        id: 'publishBlogPost',
                        label: 'publishBlogPost',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/publishBlogPost">publishBlogPost</NavLink>
                    },
                    // unpublishBlogPost
                    {
                        id: 'unpublishBlogPost',
                        label: 'unpublishBlogPost',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/unpublishBlogPost">unpublishBlogPost</NavLink>
                    }
                ]
            }
        ]
    },
    // Forum Family
    {
        id: 'forum-family',
        label: 'Forum',
        type: 'top-level-item',
        children: [
            // Forum Tags
            {
                id: 'forum-tags',
                label: 'Tags',
                type: 'sub-level-label',
                children: [
                    // Forum
                    {
                        id: 'forum',
                        label: 'Forum',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/forum">Forum</NavLink>
                    },
                    // Forum: List
                    {
                        id: 'forum-list',
                        label: 'Forum: List',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/forum-list">Forum: List</NavLink>
                    },
                    // Forum: Thread
                    {
                        id: 'forum-thread',
                        label: 'Forum: Thread',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/forum-thread">Forum: Thread</NavLink>
                    },
                    // Forum: Composer
                    {
                        id: 'forum-composer',
                        label: 'Forum: Composer',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/forum-composer">Forum: Composer</NavLink>
                    }
                ]
            },
            // Forum Display Functions
            {
                id: 'forum-display-functions',
                label: 'Display Functions',
                type: 'sub-level-label',
                children: [
                    // showForum
                    {
                        id: 'showForum',
                        label: 'showForum',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showForum">showForum</NavLink>
                    },
                    // showForumThread
                    {
                        id: 'showForumThread',
                        label: 'showForumThread',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showForumThread">showForumThread</NavLink>
                    }
                ]
            },
            // Forum API Functions
            {
                id: 'forum-api-functions',
                label: 'API Functions',
                type: 'sub-level-label',
                children: [
                    // startThread
                    {
                        id: 'startThread',
                        label: 'startThread',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/startThread">startThread</NavLink>
                    },
                    // getThreads
                    {
                        id: 'getThreads',
                        label: 'getThreads',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getThreads">getThreads</NavLink>
                    },
                    // getThread
                    {
                        id: 'getThread',
                        label: 'getThread',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getThread">getThread</NavLink>
                    },
                    // replyThread
                    {
                        id: 'replyThread',
                        label: 'replyThread',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/replyThread">replyThread</NavLink>
                    },
                    // removeReply
                    {
                        id: 'removeReply',
                        label: 'removeReply',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/removeReply">removeReply</NavLink>
                    }
                ]
            }
        ]
    },
    // Messages Family
    {
        id: 'messages-family',
        label: 'Messages',
        type: 'top-level-item',
        children: [
            // Messages Tags
            {
                id: 'messages-tags',
                label: 'Tags',
                type: 'sub-level-label',
                children: [
                    // Messages
                    {
                        id: 'messages',
                        label: 'Messages',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/messages">Messages</NavLink>
                    },
                    // Messages: Composer
                    {
                        id: 'messages-composer',
                        label: 'Messages: Composer',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/messages-composer">Messages: Composer</NavLink>
                    }
                ]
            },
            // Messages Display Functions
            {
                id: 'messages-display-functions',
                label: 'Display Functions',
                type: 'sub-level-label',
                children: [
                    // showMessages
                    {
                        id: 'showMessages',
                        label: 'showMessages',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showMessages">showMessages</NavLink>
                    },
                    // showMessagesComposer
                    {
                        id: 'showMessagesComposer',
                        label: 'showMessagesComposer',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showMessagesComposer">showMessagesComposer</NavLink>
                    }
                ]
            },
            // Messages API Functions
            {
                id: 'messages-api-functions',
                label: 'API Functions',
                type: 'sub-level-label',
                children: [
                    // countUnreadMessages
                    {
                        id: 'countUnreadMessages',
                        label: 'countUnreadMessages',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/countUnreadMessages">countUnreadMessages</NavLink>
                    },
                    // getMessage
                    {
                        id: 'getMessage',
                        label: 'getMessage',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getMessage">getMessage</NavLink>
                    },
                    // sendMessage
                    {
                        id: 'sendMessage',
                        label: 'sendMessage',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/sendMessage">sendMessage</NavLink>
                    },
                    // sendAnonymousMessage
                    {
                        id: 'sendAnonymousMessage',
                        label: 'sendAnonymousMessage',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/sendAnonymousMessage">sendAnonymousMessage</NavLink>
                    },
                    // getConversation
                    {
                        id: 'getConversation',
                        label: 'getConversation',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getConversation">getConversation</NavLink>
                    },
                    // getConversations
                    {
                        id: 'getConversations',
                        label: 'getConversations',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getConversations">getConversations</NavLink>
                    }
                ]
            }
        ]
    },
    // Profile Family
    {
        id: 'profile-family',
        label: 'Profile',
        type: 'top-level-item',
        children: [
            // Profile Tags
            {
                id: 'profile-tags',
                label: 'Tags',
                type: 'sub-level-label',
                children: [
                    // Profile
                    {
                        id: 'profile',
                        label: 'Profile',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/profile">Profile</NavLink>
                    },
                    // Profile: Card
                    {
                        id: 'profile-card',
                        label: 'Profile: Card',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/profile-card">Profile: Card</NavLink>
                    },
                    // Profile: List
                    {
                        id: 'profile-list',
                        label: 'Profile: List',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/profile-list">Profile: List</NavLink>
                    }
                ]
            },
            // Profile Display Functions
            {
                id: 'profile-display-functions',
                label: 'Display Functions',
                type: 'sub-level-label',
                children: [
                    // showProfile
                    {
                        id: 'showProfile',
                        label: 'showProfile',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showProfile">showProfile</NavLink>
                    }
                ]
            },
            // Profile API Functions
            {
                id: 'profile-api-functions',
                label: 'API Functions',
                type: 'sub-level-label',
                children: [
                    // follow
                    {
                        id: 'follow',
                        label: 'follow',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/follow">follow</NavLink>
                    },
                    // getFollowers
                    {
                        id: 'getFollowers',
                        label: 'getFollowers',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getFollowers">getFollowers</NavLink>
                    },
                    // getFollowing
                    {
                        id: 'getFollowing',
                        label: 'getFollowing',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getFollowing">getFollowing</NavLink>
                    },
                    // getMembers
                    {
                        id: 'getMembers',
                        label: 'getMembers',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getMembers">getMembers</NavLink>
                    },
                    // unfollow
                    {
                        id: 'unfollow',
                        label: 'unfollow',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/unfollow">unfollow</NavLink>
                    },
                    // getProfile
                    {
                        id: 'getProfile',
                        label: 'getProfile',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getProfile">getProfile</NavLink>
                    },
                    // setProfile
                    {
                        id: 'setProfile',
                        label: 'setProfile',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/setProfile">setProfile</NavLink>
                    },
                    // setPassword
                    {
                        id: 'setPassword',
                        label: 'setPassword',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/setPassword">setPassword</NavLink>
                    }
                ]
            }
        ]
    },
    // Group Family
    {
        id: 'group-family',
        label: 'Group',
        type: 'top-level-item',
        children: [
            // Group Tags
            {
                id: 'group-tags',
                label: 'Tags',
                type: 'sub-level-label',
                children: [
                    // Group
                    {
                        id: 'group',
                        label: 'Group',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/group">Group</NavLink>
                    },
                    // Group: Card
                    {
                        id: 'group-card',
                        label: 'Group: Card',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/group-card">Group: Card</NavLink>
                    },
                    // Group: List
                    {
                        id: 'group-list',
                        label: 'Group: List',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/group-list">Group: List</NavLink>
                    }
                ]
            },
            // Group Display Functions
            {
                id: 'group-display-functions',
                label: 'Display Functions',
                type: 'sub-level-label',
                children: [
                    // showGroup
                    {
                        id: 'showGroup',
                        label: 'showGroup',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showGroup">showGroup</NavLink>
                    },
                    // showGroupCreator
                    {
                        id: 'showGroupCreator',
                        label: 'showGroupCreator',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showGroupCreator">showGroupCreator</NavLink>
                    }
                ]
            },
            // Group API Functions
            {
                id: 'group-api-functions',
                label: 'API Functions',
                type: 'sub-level-label',
                children: [
                    // createGroup
                    {
                        id: 'createGroup',
                        label: 'createGroup',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/createGroup">createGroup</NavLink>
                    },
                    // listGroups
                    {
                        id: 'listGroups',
                        label: 'listGroups',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/listGroups">listGroups</NavLink>
                    },
                    // listMemberships
                    {
                        id: 'listMemberships',
                        label: 'listMemberships',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/listMemberships">listMemberships</NavLink>
                    },
                    // joinGroup
                    {
                        id: 'joinGroup',
                        label: 'joinGroup',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/joinGroup">joinGroup</NavLink>
                    },
                    // getGroup
                    {
                        id: 'getGroup',
                        label: 'getGroup',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getGroup">getGroup</NavLink>
                    },
                    // listMembers
                    {
                        id: 'listMembers',
                        label: 'listMembers',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/listMembers">listMembers</NavLink>
                    },
                    // leaveGroup
                    {
                        id: 'leaveGroup',
                        label: 'leaveGroup',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/leaveGroup">leaveGroup</NavLink>
                    },
                    // setGroupCover
                    {
                        id: 'setGroupCover',
                        label: 'setGroupCover',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/setGroupCover">setGroupCover</NavLink>
                    },
                    // setGroupDescription
                    {
                        id: 'setGroupDescription',
                        label: 'setGroupDescription',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/setGroupDescription">createGroup</NavLink>
                    },
                    // setGroupTitle
                    {
                        id: 'setGroupTitle',
                        label: 'setGroupTitle',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/setGroupTitle">setGroupTitle</NavLink>
                    },
                    // deleteGroup
                    {
                        id: 'deleteGroup',
                        label: 'deleteGroup',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/deleteGroup">deleteGroup</NavLink>
                    }
                ]
            }
        ]
    },
    // Content Family
    {
        id: 'content-family',
        label: 'Content',
        type: 'top-level-item',
        children: [
            // Content Tags
            {
                id: 'content-tags',
                label: 'Tags',
                type: 'sub-level-label',
                children: [
                    // Comments
                    {
                        id: 'comments',
                        label: 'Comments',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/comments">Comments</NavLink>
                    },
                    // Private Content
                    {
                        id: 'private-content',
                        label: 'Private Content',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/private-content">Private Content</NavLink>
                    },
                    // Star: Button
                    {
                        id: 'star-button',
                        label: 'Star: Button',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/star-button">Star: Button</NavLink>
                    },
                    // Star: List
                    {
                        id: 'star-list',
                        label: 'Star: List',
                        content: <NavLink exact activeClassName="selected" to="/docs/components/star-list">Star: List</NavLink>
                    }
                ]
            },
            // Content Display Functions
            {
                id: 'content-display-functions',
                label: 'Display Functions',
                type: 'sub-level-label',
                children: [
                    // showComments
                    {
                        id: 'showComments',
                        label: 'showComments',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/showComments">showComments</NavLink>
                    }
                ]
            },
            // Content API Functions
            {
                id: 'content-api-functions',
                label: 'API Functions',
                type: 'sub-level-label',
                children: [
                    // addComment
                    {
                        id: 'addComment',
                        label: 'addComment',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/addComment">addComment</NavLink>
                    },
                    // getComments
                    {
                        id: 'getComments',
                        label: 'getComments',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getComments">getComments</NavLink>
                    },
                    // removeComment
                    {
                        id: 'removeComment',
                        label: 'removeComment',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/removeComment">removeComment</NavLink>
                    },
                    // star
                    {
                        id: 'star',
                        label: 'star',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/star">star</NavLink>
                    },
                    // getStar
                    {
                        id: 'getStar',
                        label: 'getStar',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getStar">getStar</NavLink>
                    },
                    // getStars
                    {
                        id: 'getStars',
                        label: 'getStars',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getStars">getStars</NavLink>
                    },
                    // getUserStars
                    {
                        id: 'getUserStars',
                        label: 'getUserStars',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getUserStars">getUserStars</NavLink>
                    },
                    // removeStar
                    {
                        id: 'removeStar',
                        label: 'removeStar',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/removeStar">removeStar</NavLink>
                    },
                    // addPrivateContent
                    {
                        id: 'addPrivateContent',
                        label: 'addPrivateContent',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/addPrivateContent">addPrivateContent</NavLink>
                    },
                    // getPrivateContent
                    {
                        id: 'getPrivateContent',
                        label: 'getPrivateContent',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/getPrivateContent">getPrivateContent</NavLink>
                    },
                    // editPrivateContent
                    {
                        id: 'editPrivateContent',
                        label: 'editPrivateContent',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/editPrivateContent">editPrivateContent</NavLink>
                    },
                    // removePrivateContent
                    {
                        id: 'removePrivateContent',
                        label: 'removePrivateContent',
                        content: <NavLink exact activeClassName="selected" to="/docs/functions/removePrivateContent">removePrivateContent</NavLink>
                    }
                ]
            }
        ]
    }
]

export default menu;