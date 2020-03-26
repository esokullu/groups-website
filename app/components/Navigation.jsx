import React from 'react';
import { NavLink } from 'react-router-dom';

import Switch from './Switch';

import logout from '../scripts/logout';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [ // Add similar objects to this array to add external product links
                {
                    id: 'grou.ps',
                    target: 'https://groupsville.com',
                    content: (
                        <React.Fragment>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 125"><path d="M14.5778 32.193c3.8135 3.8015 9.9962 3.8015 13.8097 0 3.8135-3.8014 3.8135-9.9648 0-13.7667-3.8135-3.8014-9.9962-3.8014-13.8097 0-3.8135 3.8019-3.8135 9.9653 0 13.7667zm22.4513 50.5403c5.208-1.391 8.2987-6.7275 6.9033-11.9192-1.3958-5.1917-6.7486-8.2725-11.957-6.8814-5.2076 1.3911-8.2983 6.7271-6.9029 11.9188 1.3953 5.1917 6.7486 8.2729 11.9566 6.8818zM31.8538 7.3494L39.3471 0l8.1522 7.99615-7.5097 7.36615c4.5535 7.9751 3.373 18.251-3.5415 25.0332-1.2536 1.2294-2.6244 2.2741-4.0774 3.134l2.5484 9.328c9.3189.1199 17.8023 6.2608 20.3331 15.5247 3.052 11.1715-3.7074 22.6541-15.0972 25.6477-11.3902 2.9935-23.0976-3.6365-26.1496-14.8075-2.5389-9.2936 1.7121-18.8028 9.771-23.4603l-2.5226-9.2334c-5.4315-.0241-10.8561-2.0688-15.00045-6.1332-8.3378-8.178-8.3378-21.4371 0-29.6155C13.1902 3.9768 23.7119 2.83327 31.8538 7.3494z" fill="#fff"/><path d="M50.248 47H62.2V25.544c0-5.616 2.88-7.848 9-7.848h.432V5.672c-6.912 0-9 3.672-10.152 5.832V7.04H50.248V47zM73.5496 26.984c0 9.792 6.984 21.24 21.528 21.24 14.5444 0 21.5284-11.448 21.5284-21.24 0-9.792-6.984-21.24-21.5284-21.24-14.544 0-21.528 11.448-21.528 21.168v.072zm11.952 0c0-5.832 4.392-10.08 9.576-10.08 5.1844 0 9.5764 4.248 9.5764 10.08s-4.392 10.08-9.5764 10.08c-5.184 0-9.576-4.248-9.576-10.008v-.072zM160.383 7.04h-11.952v21.744c0 4.104-.936 8.352-6.912 8.352-5.4 0-6.336-3.888-6.336-8.28V7.04h-11.952v24.984c0 5.4 1.368 16.344 14.904 16.344 7.2 0 9.72-3.672 11.088-5.616V47h11.16V7.04zM169.008 60.32h11.952V43.4c1.44 1.512 4.824 4.968 12.024 4.968 11.376 0 19.44-9.432 19.44-20.952 0-9.288-5.328-21.744-19.513-21.744-6.12 0-10.079 2.736-12.671 5.76V7.04h-11.232v53.28zm31.463-33.264c0 5.04-3.743 10.152-10.007 10.152-2.808 0-5.329-1.152-7.129-2.952-1.8-1.8-2.879-4.32-2.879-7.128 0-2.88 1.08-5.472 2.808-7.272 1.8-1.872 4.32-3.024 7.2-3.024 6.552 0 10.007 5.472 10.007 10.152v.072zM247.939 18.272c-1.008-10.512-10.08-12.6-15.336-12.6-8.28 0-15.48 5.256-15.48 13.536 0 5.4 4.32 8.784 9.504 10.44 7.632 2.952 10.584 3.312 10.584 6.048 0 1.944-2.16 3.096-4.176 3.096-.504 0-4.032 0-4.536-3.672h-11.88c1.08 10.512 10.224 13.248 16.272 13.248 8.856 0 16.272-5.184 16.272-13.968 0-8.64-7.2-10.656-13.968-12.528-3.168-.936-6.12-2.16-6.12-3.96 0-1.08.864-2.664 3.384-2.664 3.528 0 3.672 2.16 3.744 3.024h11.736zM80.5229 87.4339c-.8418 0-1.5258-.8466-1.5258-2.2223 0-4.1799 3.1568-14.2857 3.1568-14.8148 0-1.0582-2.315-2.0106-4.5773-2.2222-1.6836-.1587-2.7885 0-3.4198 1.4286C72.8414 72.5661 71 80.873 71 86.5873 71 90.291 72.9993 95 76.8926 95c9.8386 0 16.3626-19.2064 16.6783-25.9788 0-1.6402-.7366-3.0159-2.7359-3.0159-2.7359 0-6.1031 7.1429-3.3146 10.2645-1.6836 4.9736-4.4195 11.1641-6.9975 11.1641zM98.5136 68.1217c-1.0523.0529-1.7889.4233-2.2624 1.4815-1.5784 3.5979-3.4198 14.6561-3.4198 18.3068 0 2.0106.947 7.09 6.9449 7.09 5.3667 0 8.9967-4.8677 11.0487-10.2645.368-.8466.789-2.8043.105-3.5979-.263-.2646-.631-.3704-.894-.3704-1.789 0-2.473 1.9048-2.841 2.963-.737 1.6931-1.526 3.1216-2.473 3.9682-.474.4233-1.052.7408-1.631.7408-1.684 0-2.157-1.6403-2.157-3.3863 0-4.0741 3.209-14.0741 3.209-14.6561 0-1.6931-4.4193-2.2751-5.6294-2.2751zm.4735-9.2064c-1.4206 2.8043-.8944 5.9789 1.2099 7.0371 2.526 1.4285 5.367-.8995 6.472-2.963 1.42-2.8042.894-5.9788-1.263-7.037-2.578-1.2699-5.261.7407-6.4189 2.9629z" fill="#fff"/><path d="M129.796 55c-1.052.0529-1.789.4233-2.262 1.4815-1.579 3.5979-6.419 26.3492-6.419 31.4285 0 2.0106.947 7.09 6.945 7.09 5.366 0 8.997-4.8677 11.048-10.2645.369-.8466.79-2.8043.106-3.5979-.263-.2646-.632-.3704-.895-.3704-1.789 0-2.473 1.9048-2.841 2.963-.736 1.6931-1.526 3.1216-2.473 3.9682-.473.4233-.999.7408-1.631.7408-1.683 0-2.157-1.6932-2.157-3.4392 0-5.1323 6.209-26.0317 6.209-27.7249 0-1.6931-4.42-2.2751-5.63-2.2751zm-14.205 0c-1.053.0529-1.789.4233-2.263 1.4815-1.578 3.5979-6.419 26.3492-6.419 31.4285 0 2.0106.737 7.09 6.419 7.09 6.156 0 7.524-7.672 5.945-7.672-.473 0-1.104 1.1112-2.104 1.1112-1.736 0-2.157-1.7461-2.157-3.545 0-5.1323 6.208-25.9789 6.208-27.6191 0-1.6931-4.419-2.2751-5.629-2.2751z" fill="#fff"/><path d="M158.79 80.7672c-1.578 0-2.262 1.4815-2.42 1.9048-1.473 3.8624-4.472 6.0317-7.734 6.0317-1.421 0-4.42-.582-5.525-3.2804 8.366 0 17.573-17.672 6.261-17.672-9.628 0-14.679 10.0529-14.679 16.5609 0 5.3439 3.42 10.6878 11.628 10.6878 10.891 0 16.257-14.2328 12.469-14.2328zm-10.628-6.5608c.737 0 .947.3174.947.7407V75c0 2.8571-4.051 6.0317-6.418 6.5608.42-3.7566 3.209-7.3544 5.471-7.3544z" fill="#fff"/></svg>
                            <span className="beta-wrapper"> beta 🙀</span>
                        </React.Fragment>
                    )
                }, {
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
        if (this.state.scrollTop > navigationHeight) {
            if (this.state.scrollTop > currentScrollTop) {
                navigation.classList.remove('up');
            } else if (this.state.scrollTop < currentScrollTop) {
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
        if (event && event.target.id === 'toggle') {
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
        logout('id', function () {
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
                            <path d="M145.248,6.163h-35.375c-1.628,0-2.948,1.319-2.948,2.948c0,1.628,1.32,2.947,2.948,2.947h35.375 c1.628,0,2.947-1.319,2.947-2.947C148.195,7.483,146.875,6.163,145.248,6.163z" />
                            <path d="M145.248,19.408h-35.375c-1.628,0-2.948,1.319-2.948,2.948c0,1.628,1.32,2.947,2.948,2.947h35.375 c1.628,0,2.947-1.319,2.947-2.947C148.195,20.728,146.875,19.408,145.248,19.408z" />
                            <path d="M148.195,35.601c0-1.628-1.319-2.947-2.947-2.947h-35.375c-1.628,0-2.948,1.319-2.948,2.947 c0,1.629,1.32,2.948,2.948,2.948h35.375C146.875,38.549,148.195,37.23,148.195,35.601z" />
                        </svg>
                        <svg className="close" fill="white" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 595.28 467.72" xmlSpace="preserve">
                            <path d="M498.265,374.175L357.953,233.863L498.275,93.541L518.316,73.5c16.605-16.604,16.604-43.51,0-60.115 s-43.531-16.604-60.125-0.011L438.15,33.415L297.828,173.738L157.504,33.415l-20.041-20.041c-16.604-16.605-43.51-16.604-60.115,0 s-16.604,43.531-0.011,60.125L97.379,93.54l140.323,140.323L97.39,374.175l-20.04,20.041c-16.605,16.605-16.616,43.521-0.001,60.137 c16.604,16.604,43.521,16.594,60.126-0.012l20.041-20.039l140.312-140.312L438.14,434.3l20.041,20.041 c16.604,16.605,43.521,16.615,60.136,0c16.604-16.604,16.595-43.52-0.011-60.125L498.265,374.175z" />
                        </svg>
                    </a>
                    <ul id="menu">
                        <li>
                            <NavLink className="home" exact to="/" activeClassName="active" onClick={this.handleToggle}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="comparing" exact to="/comparing" activeClassName="active" onClick={this.handleToggle}>
                                Compare
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="docs" exact to="/docs" activeClassName="active" onClick={this.handleToggle}>
                                Developers
                            </NavLink>
                        </li>
                        {/*
                        <li>
                            <a href="https://github.com/phonetworks/grou-ps-v2" target="_blank">
                                Open Source
                            </a>
                        </li>
                         <li>
                            <NavLink className="pricing" to="/pricing" activeClassName="active" onClick={this.handleToggle}>
                                Pricing
                            </NavLink>
                        </li> */}
                        {/* <li>
                            <NavLink className="faq" to="/docs/faq" exact activeClassName="active" onClick={this.handleToggle}>
                                FAQ
                            </NavLink>
                        </li> */}
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
                        {this.props.session ||
                            <li>
                                <NavLink className="setup" to="/setup" className="outstanding" activeClassName="active" onClick={this.handleToggle}>
                                    Get Started
                            </NavLink>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}
