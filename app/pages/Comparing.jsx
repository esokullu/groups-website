import React from 'react';
import { Link } from 'react-router-dom';

import Main from '~/components/Main';
import Hero from '~/components/Hero';
import Headline from '~/components/Headline';
import Animation from '~/components/Animation';

const animationConfig = {
    staticItems: [
        {
            source: 'compare-page-bg.png',
            order: 1,
            width: 58.7,
            opacity: .6,
            position: {
                top: 0,
                left: 20.65
            }
        }
    ],
    animatedItems: [
        {
            source: 'facebook-logo.png',
            order: 2,
            width: 9,
            initial: {
                top: 50,
                left: 0,
                opacity: 0
            },
            final: {
                top: 22,
                left: 30,
                opacity: 1
            }
        },
        {
            source: 'character-middle-sitting.png',
            order: 3,
            width: 21,
            initial: {
                top: -20,
                left: 40.5,
                opacity: 0
            },
            final: {
                top: 30,
                left: 40.5,
                opacity: 1
            }
        },
        {
            source: 'groups-logo.png',
            order: 2,
            width: 12,
            initial: {
                top: 50,
                left: 100,
                opacity: 0
            },
            final: {
                top: 10,
                left: 60,
                opacity: 1
            }
        }
    ]
}

export default class Comparing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Main id='comparing' data-page='comparing'>
                <Hero>
                    <Animation animationConfig={animationConfig} />
                    <Headline title="Grou.ps vs Facebook Groups" subtitle="Check out our comparison" />
                </Hero>
                <main>
                    <section id="comparing-table">
                        <div className="container">
                            <div className="comparing-table">
                                <div className="comparing-table-item keys">
                                    <div className="header">Specifications</div>
                                    <div className="features-list">
                                        <div className="feature">Color</div>
                                        <div className="feature">Full Page Editing (git)</div>
                                        <div className="feature">Plug & Play</div>
                                        <div className="feature">Full API</div>
                                        <div className="feature">Data Export</div>
                                        <div className="feature">Open Source</div>
                                        <div className="feature">Domain Name</div>
                                        <div className="feature">Privacy (Tor)</div>
                                    </div>
                                </div>
                                <div className="comparing-table-item highlighted">
                                    <div className="header">
                                        <svg viewBox="0 -5 243 100">
                                            <path fill="white" d="M228.757599,47.7543 C223.175779,47.7543 216.990519,45.56683 212.615579,42.02162 L215.557349,37.87297 C219.781429,41.04103 224.458089,42.85135 229.059319,42.85135 C233.735979,42.85135 237.130329,40.43759 237.130329,36.66609 L237.130329,36.51523 C237.130329,32.5928699 232.529099,31.0842699 227.399859,29.6510999 C221.290029,27.9162099 214.501329,25.8041699 214.501329,18.6383199 L214.501329,18.4874599 C214.501329,11.7741899 220.083149,7.3238198 227.777009,7.3238198 C232.529099,7.3238198 237.809199,8.9832798 241.806989,11.6233299 L239.166939,15.9982699 C235.546299,13.6599399 231.397649,12.2267699 227.626149,12.2267699 C223.024919,12.2267699 220.083149,14.6405299 220.083149,17.8840199 L220.083149,18.0348799 C220.083149,21.7309499 224.910669,23.1641199 230.115339,24.7481499 C236.149739,26.5584699 242.636719,28.8967999 242.636719,35.91179 L242.636719,36.06265 C242.636719,43.45479 236.526889,47.7543 228.757599,47.7543 Z M191.384209,42.62506 C198.927209,42.62506 205.112469,37.04324 205.112469,27.6144899 L205.112469,27.4636299 C205.112469,18.2611699 198.776349,12.3776299 191.384209,12.3776299 C184.142929,12.3776299 177.278799,18.4874599 177.278799,27.3881999 L177.278799,27.5390599 C177.278799,36.59066 184.142929,42.62506 191.384209,42.62506 Z M171.696979,59.9483293 L171.696979,8.0026898 L177.505089,8.0026898 L177.505089,15.8474099 C180.673149,11.1707499 185.274379,7.1729598 192.440229,7.1729598 C201.793549,7.1729598 211.071439,14.5650999 211.071439,27.3881999 C211.071439,40.28673 201.868979,47.82973 192.440229,47.82973 C185.198949,47.82973 180.522289,43.90737 177.505089,39.53243 L177.505089,59.9483293 L171.696979,59.9483293 Z M159.699997,47 L159.699997,41 L165.699997,41 L165.699997,47 L159.699997,47 Z M153.71,47 L142.72,47 L142.72,42.87 L142.58,42.87 C140.55,47.07 136.84,48.26 132.5,48.26 C128.23,48.26 123.89,46.79 121.09,43.36 C117.94,39.44 117.59,36.22 117.59,31.39 L117.59,8.15 L129.21,8.15 L129.21,29.64 C129.21,34.05 130.19,37.41 135.44,37.41 C140.27,37.41 142.09,33.98 142.09,29.5 L142.09,8.15 L153.71,8.15 L153.71,47 Z M102.53,27.54 C102.53,22.29 98.61,17.74 93.22,17.74 C87.83,17.74 83.91,22.29 83.91,27.54 C83.91,32.79 87.83,37.34 93.22,37.34 C98.61,37.34 102.53,32.79 102.53,27.54 Z M114.15,27.54 C114.15,39.44 105.12,48.19 93.22,48.19 C81.32,48.19 72.29,39.44 72.29,27.54 C72.29,15.64 81.32,6.89 93.22,6.89 C105.12,6.89 114.15,15.64 114.15,27.54 Z M70.92,18.51 C65.81,18.65 61.75,19.63 61.75,25.65 L61.75,47 L50.13,47 L50.13,8.15 L61.05,8.15 L61.05,12.28 L61.19,12.28 C63.22,8.29 66.44,6.82 70.92,6.82 L70.92,18.51 Z M15.077818,32.384707 C18.891321,36.1861774 25.073975,36.1861774 28.887478,32.384707 C32.700981,28.5832366 32.700981,22.4199211 28.887478,18.6180209 C25.073975,14.8165505 18.891321,14.8165505 15.077818,18.6180209 C11.264315,22.4199211 11.264315,28.5832366 15.077818,32.384707 Z M37.529098,82.925011 C42.737104,81.533947 45.827786,76.197449 44.432424,71.005773 C43.036632,65.8140971 37.683804,62.7332988 32.475368,64.1243637 C27.267792,65.5154285 24.17711,70.8514966 25.572472,76.043172 C26.967835,81.234848 32.321092,84.316076 37.529098,82.925011 Z M32.353752,7.5410707 L39.84711,0.1916758 L47.999257,8.1878278 L40.489569,15.5539825 C45.043083,23.5290772 43.86259,33.8049941 36.948091,40.5871336 C35.694543,41.8166167 34.323676,42.861312 32.870728,43.7212195 L35.41908,53.0491324 C44.737968,53.1690295 53.221444,59.3099986 55.752177,68.5738804 C58.804182,79.745373 52.044819,91.227997 40.655019,94.221558 C29.264789,97.215119 17.557412,90.585108 14.505406,79.414044 C11.966509,70.1205107 16.217486,60.611248 24.27638,55.9537377 L21.753812,46.7203674 C16.322342,46.696302 10.897748,44.6516043 6.753346,40.5871336 C-1.584449,32.4092021 -1.584449,19.1500377 6.753346,10.9716764 C13.690191,4.1684797 24.211919,3.0249445 32.353752,7.5410707 Z"></path>
                                        </svg>
                                    </div>
                                    <div className="features-list">
                                        <div className="feature">✅ Yes!</div>
                                        <div className="feature">✅ Yes!</div>
                                        <div className="feature">✅ Yes!</div>
                                        <div className="feature">✅ Yes!</div>
                                        <div className="feature">✅ Yes!</div>
                                        <div className="feature">✅ Yes!</div>
                                        <div className="feature">✅ Yes!</div>
                                        <div className="feature">✅ Yes!</div>
                                    </div>
                                </div>
                                <div className="comparing-table-item">
                                    <div className="header">Facebook groups</div>
                                    <div className="features-list">
                                        <div className="feature">❌</div>
                                        <div className="feature">❌</div>
                                        <div className="feature">❌</div>
                                        <div className="feature">❌</div>
                                        <div className="feature">❌</div>
                                        <div className="feature">❌</div>
                                        <div className="feature">❌</div>
                                        <div className="feature">❌</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="promotion">
                        <div className="container">
                            <h3>The choice is clear</h3>
                            <Link to="/setup" className="button">start free trial</Link>
                        </div>
                    </section>
                    <img className="separator" src="app/images/illustrations/character-left-sitting.png" />
                    <section className="indication">
                        <div className="container">
                            <div className="brand">
                                <img className="logo" src="app/images/identity/grou.ps-logo.svg" />
                                <p>is proudly open source.</p>
                            </div>
                        </div>
                    </section>
                </main>
            </Main>
        );
    }
}
