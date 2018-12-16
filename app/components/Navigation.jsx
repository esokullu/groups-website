import React from 'react';
import {NavLink} from 'react-router-dom';

import Switch from './Switch';

import logout from '../scripts/logout';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [ // Add similar objects to this array to add external product links
                {
                    id: 'grou.ps',
                    target: 'https://grou.ps'
                },{
                    id: 'graphjs',
                    target: 'https://graphjs.com'
                }/*,
                {
                    id: 'gapp.build',
                    target: 'http://gapp.build'
                }*/
            ],
            open: false,
            scrollTop: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        let currentScrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        let navigation = document.getElementById('navigation');
        let navigationHeight = navigation.offsetHeight;
        if(this.state.scrollTop > navigationHeight) {
            if(this.state.scrollTop > currentScrollTop) {
                navigation.classList.remove('up');
            } else if(this.state.scrollTop < currentScrollTop) {
                navigation.classList.add('up');
                this.state.open && this.setState({
                    open: false
                });
            }
        }
        this.setState({
            scrollTop: currentScrollTop
        });
    }
    handleToggle(event) {
        if(event && event.target.id == 'toggle') {
            event.preventDefault();
            this.setState({
                open: !this.state.open
            });
        } else {
            this.setState({
                open: false
            });
        }
    }
    handleLogout() {
        this.props.logout(); // Logout anyway
        this.handleToggle();
        logout('id', function() {
            console.log('Logged out!');
        });
    }
    render() {
        return (
            <nav id="navigation" className={'scroll' + (this.state.open ? ' open' : '')}>
                <div className="container">
                    <Switch items={this.state.links} />
                    <a id="toggle" onClick={this.handleToggle}>
                        <svg className="open" fill="white" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="106.925 6.163 41.27 32.386" xmlSpace="preserve">
                            <path d="M145.248,6.163h-35.375c-1.628,0-2.948,1.319-2.948,2.948c0,1.628,1.32,2.947,2.948,2.947h35.375 c1.628,0,2.947-1.319,2.947-2.947C148.195,7.483,146.875,6.163,145.248,6.163z"/>
                            <path d="M145.248,19.408h-35.375c-1.628,0-2.948,1.319-2.948,2.948c0,1.628,1.32,2.947,2.948,2.947h35.375 c1.628,0,2.947-1.319,2.947-2.947C148.195,20.728,146.875,19.408,145.248,19.408z"/>
                            <path d="M148.195,35.601c0-1.628-1.319-2.947-2.947-2.947h-35.375c-1.628,0-2.948,1.319-2.948,2.947 c0,1.629,1.32,2.948,2.948,2.948h35.375C146.875,38.549,148.195,37.23,148.195,35.601z"/>
                        </svg>
                        <svg className="close" fill="white" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 595.28 467.72" xmlSpace="preserve">
                            <path d="M498.265,374.175L357.953,233.863L498.275,93.541L518.316,73.5c16.605-16.604,16.604-43.51,0-60.115 s-43.531-16.604-60.125-0.011L438.15,33.415L297.828,173.738L157.504,33.415l-20.041-20.041c-16.604-16.605-43.51-16.604-60.115,0 s-16.604,43.531-0.011,60.125L97.379,93.54l140.323,140.323L97.39,374.175l-20.04,20.041c-16.605,16.605-16.616,43.521-0.001,60.137 c16.604,16.604,43.521,16.594,60.126-0.012l20.041-20.039l140.312-140.312L438.14,434.3l20.041,20.041 c16.604,16.605,43.521,16.615,60.136,0c16.604-16.604,16.595-43.52-0.011-60.125L498.265,374.175z"/>
                        </svg>
                    </a>
                    <ul id="menu">
                        <li>
                            <NavLink className="home" exact to="/" activeClassName="active" onClick={this.handleToggle}>
                                Home
                            </NavLink>
                        </li>
                        
                        {/*
                        <li>
                            <NavLink className="pricing" to="/pricing" activeClassName="active" onClick={this.handleToggle}>
                                Pricing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="blog" to="/blog" activeClassName="active" onClick={this.handleToggle}>
                                Blog
                            </NavLink>
                        </li>
                        */}
                        {this.props.session &&
                        <li>
                            <a className="logout" onClick={this.handleLogout}>
                                Logout
                            </a>
                        </li>
                        }
                        {/*this.props.session ||
                        <li>
                            <NavLink className="login" to="/login" activeClassName="active" onClick={this.handleToggle}>
                                Login
                            </NavLink>
                        </li>
                        */}
                        <li>
                            <NavLink className="setup" to="/setup" className="outstanding" activeClassName="active" onClick={this.handleToggle}>
                                Get Started
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
