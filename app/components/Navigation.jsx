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
                    target: 'https://grou.ps',
                    content: (
                        <svg viewBox="0 -5 243 100">
                            <path fill="white" d="M228.757599,47.7543 C223.175779,47.7543 216.990519,45.56683 212.615579,42.02162 L215.557349,37.87297 C219.781429,41.04103 224.458089,42.85135 229.059319,42.85135 C233.735979,42.85135 237.130329,40.43759 237.130329,36.66609 L237.130329,36.51523 C237.130329,32.5928699 232.529099,31.0842699 227.399859,29.6510999 C221.290029,27.9162099 214.501329,25.8041699 214.501329,18.6383199 L214.501329,18.4874599 C214.501329,11.7741899 220.083149,7.3238198 227.777009,7.3238198 C232.529099,7.3238198 237.809199,8.9832798 241.806989,11.6233299 L239.166939,15.9982699 C235.546299,13.6599399 231.397649,12.2267699 227.626149,12.2267699 C223.024919,12.2267699 220.083149,14.6405299 220.083149,17.8840199 L220.083149,18.0348799 C220.083149,21.7309499 224.910669,23.1641199 230.115339,24.7481499 C236.149739,26.5584699 242.636719,28.8967999 242.636719,35.91179 L242.636719,36.06265 C242.636719,43.45479 236.526889,47.7543 228.757599,47.7543 Z M191.384209,42.62506 C198.927209,42.62506 205.112469,37.04324 205.112469,27.6144899 L205.112469,27.4636299 C205.112469,18.2611699 198.776349,12.3776299 191.384209,12.3776299 C184.142929,12.3776299 177.278799,18.4874599 177.278799,27.3881999 L177.278799,27.5390599 C177.278799,36.59066 184.142929,42.62506 191.384209,42.62506 Z M171.696979,59.9483293 L171.696979,8.0026898 L177.505089,8.0026898 L177.505089,15.8474099 C180.673149,11.1707499 185.274379,7.1729598 192.440229,7.1729598 C201.793549,7.1729598 211.071439,14.5650999 211.071439,27.3881999 C211.071439,40.28673 201.868979,47.82973 192.440229,47.82973 C185.198949,47.82973 180.522289,43.90737 177.505089,39.53243 L177.505089,59.9483293 L171.696979,59.9483293 Z M159.699997,47 L159.699997,41 L165.699997,41 L165.699997,47 L159.699997,47 Z M153.71,47 L142.72,47 L142.72,42.87 L142.58,42.87 C140.55,47.07 136.84,48.26 132.5,48.26 C128.23,48.26 123.89,46.79 121.09,43.36 C117.94,39.44 117.59,36.22 117.59,31.39 L117.59,8.15 L129.21,8.15 L129.21,29.64 C129.21,34.05 130.19,37.41 135.44,37.41 C140.27,37.41 142.09,33.98 142.09,29.5 L142.09,8.15 L153.71,8.15 L153.71,47 Z M102.53,27.54 C102.53,22.29 98.61,17.74 93.22,17.74 C87.83,17.74 83.91,22.29 83.91,27.54 C83.91,32.79 87.83,37.34 93.22,37.34 C98.61,37.34 102.53,32.79 102.53,27.54 Z M114.15,27.54 C114.15,39.44 105.12,48.19 93.22,48.19 C81.32,48.19 72.29,39.44 72.29,27.54 C72.29,15.64 81.32,6.89 93.22,6.89 C105.12,6.89 114.15,15.64 114.15,27.54 Z M70.92,18.51 C65.81,18.65 61.75,19.63 61.75,25.65 L61.75,47 L50.13,47 L50.13,8.15 L61.05,8.15 L61.05,12.28 L61.19,12.28 C63.22,8.29 66.44,6.82 70.92,6.82 L70.92,18.51 Z M15.077818,32.384707 C18.891321,36.1861774 25.073975,36.1861774 28.887478,32.384707 C32.700981,28.5832366 32.700981,22.4199211 28.887478,18.6180209 C25.073975,14.8165505 18.891321,14.8165505 15.077818,18.6180209 C11.264315,22.4199211 11.264315,28.5832366 15.077818,32.384707 Z M37.529098,82.925011 C42.737104,81.533947 45.827786,76.197449 44.432424,71.005773 C43.036632,65.8140971 37.683804,62.7332988 32.475368,64.1243637 C27.267792,65.5154285 24.17711,70.8514966 25.572472,76.043172 C26.967835,81.234848 32.321092,84.316076 37.529098,82.925011 Z M32.353752,7.5410707 L39.84711,0.1916758 L47.999257,8.1878278 L40.489569,15.5539825 C45.043083,23.5290772 43.86259,33.8049941 36.948091,40.5871336 C35.694543,41.8166167 34.323676,42.861312 32.870728,43.7212195 L35.41908,53.0491324 C44.737968,53.1690295 53.221444,59.3099986 55.752177,68.5738804 C58.804182,79.745373 52.044819,91.227997 40.655019,94.221558 C29.264789,97.215119 17.557412,90.585108 14.505406,79.414044 C11.966509,70.1205107 16.217486,60.611248 24.27638,55.9537377 L21.753812,46.7203674 C16.322342,46.696302 10.897748,44.6516043 6.753346,40.5871336 C-1.584449,32.4092021 -1.584449,19.1500377 6.753346,10.9716764 C13.690191,4.1684797 24.211919,3.0249445 32.353752,7.5410707 Z"></path>
                        </svg>
                    )
                },{
                    id: 'graphjs',
                    target: 'https://graphjs.com',
                    content: (
                        <svg viewBox="0 0 200 76">
                            <g transform="translate(-620.000000, -18.000000)">
                                <path fill="white" d="M674.455446,35.7851486 C670.318365,35.8917598 667.03137,36.6380379 667.03137,41.2223178 L667.03137,57.4805195 L657.623762,57.4805195 L657.623762,27.8959229 L666.464646,27.8959229 L666.464646,31.0409521 L666.577991,31.0409521 C668.221489,28.0025341 670.828416,26.8831169 674.455446,26.8831169 L674.455446,35.7851486 Z M708.118812,57.4555529 L698.942919,57.4555529 L698.942919,54.2598279 L698.832366,54.2598279 C697.174072,57.2957666 693.194167,58.4675325 689.877579,58.4675325 C680.425304,58.4675325 674.455446,51.4369374 674.455446,42.6486936 C674.455446,34.0202361 680.646409,26.8831169 689.877579,26.8831169 C693.249443,26.8831169 697.008243,28.1081448 698.832366,31.0375594 L698.942919,31.0375594 L698.942919,27.8950965 L708.118812,27.8950965 L708.118812,57.4555529 Z M699.207921,42.1556606 C699.207921,37.9181313 696.044608,34.7792208 691.701755,34.7792208 C687.358902,34.7792208 684.356436,38.127392 684.356436,42.2602909 C684.356436,46.2885595 687.573364,49.5844156 691.75537,49.5844156 C696.098224,49.5844156 699.207921,46.3408747 699.207921,42.1556606 Z M746.732673,42.9848228 C746.732673,51.2489434 740.703414,58.5000428 731.659524,58.5000428 C727.974977,58.5000428 724.848694,57.4337046 722.336502,54.8211762 L722.336502,67.3506494 L713.069307,67.3506494 L713.069307,27.8961381 L721.778238,27.8961381 L721.778238,31.1484694 L721.945717,31.1484694 C724.346256,28.2693565 727.807497,26.8831169 731.603698,26.8831169 C741.205852,26.8831169 746.732673,34.4008008 746.732673,42.9848228 Z M736.831683,42.2079758 C736.831683,38.0750769 733.46962,34.7792208 728.910891,34.7792208 C724.352162,34.7792208 720.990099,38.0750769 720.990099,42.2079758 C720.990099,46.2885595 724.409146,49.5844156 728.910891,49.5844156 C733.412636,49.5844156 736.831683,46.2885595 736.831683,42.2079758 Z M777.425743,57.4805195 L768.152664,57.4805195 L768.152664,41.3681994 C768.152664,38.1670762 767.203019,35.1793612 763.180993,35.1793612 C759.158967,35.1793612 757.985876,37.6869077 757.985876,41.048087 L757.985876,57.4805195 L748.712871,57.4805195 L748.712871,18 L757.985876,18 L757.985876,30.5910846 L758.097599,30.5910846 C759.717582,27.8167778 762.957547,26.8564409 766.08579,26.8564409 C769.102309,26.8564409 772.509859,27.8701299 774.520872,30.1109161 C777.48153,33.3653914 777.425669,36.8866269 777.425669,40.9413829 L777.425743,57.4805195 Z M781.386139,58.4675325 L781.386139,54.5194805 L785.346535,54.5194805 L785.346535,58.4675325 L781.386139,58.4675325 Z M784.536438,67.3506494 C783.67726,67.3506494 786.268605,67.3506494 784.523089,67.3506494 L784.523089,64.7049266 C786.093872,64.7049266 783.861369,64.7049266 784.536438,64.7049266 C786.745755,64.7049266 788.280003,63.3219351 788.280003,60.4356921 L788.280003,26.8831169 L791.287129,26.8831169 L791.287129,60.2553019 C791.287129,65.065707 788.586853,67.3506494 784.536438,67.3506494 Z M788.316832,23.9220779 L788.316832,18 L791.287129,18 L791.287129,23.9220779 L788.316832,23.9220779 Z M809.137199,58.4675325 C804.569886,58.4675325 799.570528,56.6238667 796.237624,53.9198236 L798.027517,51.5230581 C801.483863,54.1656457 805.310531,55.6405783 809.322361,55.6405783 C813.581072,55.6405783 816.913977,53.3052683 816.913977,49.6793923 L816.913977,49.5564813 C816.913977,45.8691497 812.963868,44.5171282 808.581715,43.2880176 C803.458917,41.813085 797.780635,40.2766969 797.780635,34.6842441 L797.780635,34.561333 C797.780635,29.5219799 802.039347,25.8961039 808.149672,25.8961039 C811.91462,25.8961039 816.173332,27.2481255 819.321075,29.3376133 L817.716343,31.8572899 C814.815482,29.9521686 811.359136,28.7230581 808.026231,28.7230581 C803.705799,28.7230581 800.866658,31.058368 800.866658,34.1925999 L800.866658,34.3155109 C800.866658,37.8184759 805.12537,39.1090419 809.630963,40.3996079 C814.692041,41.813085 820,43.6567508 820,49.1877481 L820,49.3106592 C820,54.903112 815.185804,58.4675325 809.137199,58.4675325 Z M644.223506,27.5368478 L649.921683,21.9480519 L656.12137,28.0287315 L650.410346,33.6301281 C653.873285,39.6947521 652.97562,47.5094104 647.71735,52.6667441 C646.76394,53.601852 645.72146,54.3963545 644.616695,55.0502516 L646.554631,62.1438924 C653.64101,62.234779 660.092324,66.9045865 662.016984,73.9496353 C664.337851,82.4449639 659.197676,91.1771075 650.536082,93.453424 C641.874487,95.7297404 632.971443,90.6882349 630.650576,82.1929063 C628.719812,75.1255165 631.952703,67.8942312 638.080998,64.3523626 L636.162765,57.3308403 C632.032091,57.3125692 627.90717,55.7578705 624.755545,52.6667441 C618.414818,46.4477319 618.414818,36.364721 624.755545,30.1457088 C630.03049,24.9720204 638.031978,24.1024 644.223506,27.5368478 Z M648.15907,84.8628715 C652.119469,83.8049934 654.469746,79.7468828 653.408561,75.7988279 C652.347375,71.850773 648.276576,69.5078218 644.316177,70.5656999 C640.355778,71.6235781 638.005501,75.6816886 639.066687,79.6297435 C640.127873,83.5777984 644.198671,85.9207496 648.15907,84.8628715 Z M631.085841,46.429232 C633.985774,49.3201261 638.687494,49.3201261 641.587427,46.429232 C644.487359,43.5383379 644.487359,38.8512725 641.587427,35.9603784 C638.687494,33.0694843 633.985774,33.0694843 631.085841,35.9603784 C628.185908,38.8512725 628.185908,43.5383379 631.085841,46.429232 Z"></path>
                            </g>
                        </svg>
                    )
                }
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
        if(event && event.target.id === 'toggle') {
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
                            <a href="https://github.com/phonetworks/grou-ps-v2" target="_blank">
                                Open Source
                            </a>
                        </li>
                        */}
                        
                        <li>
                            <NavLink className="pricing" to="/pricing" activeClassName="active" onClick={this.handleToggle}>
                                Pricing
                            </NavLink>
                        </li>
                        {/*
                        <li>
                            <NavLink className="blog" to="/blog" activeClassName="active" onClick={this.handleToggle}>
                                Blog
                            </NavLink>
                        </li>
                        */}
                        {this.props.session &&
                        <li>
                            <NavLink className="settings" to="/settings" activeClassName="active" onClick={this.handleToggle}>
                                Settings
                            </NavLink>
                        </li>
                        }
                        {this.props.session &&
                        <li>
                            <a className="logout" onClick={this.handleLogout}>
                                Log out
                            </a>
                        </li>
                        }
                        {
                        this.props.session ||
                        <li>
                            <NavLink className="login" to="/login" activeClassName="active" onClick={this.handleToggle}>
                                Log in
                            </NavLink>
                        </li>
                        }
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
