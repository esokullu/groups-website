import React from 'react';
import { Link } from 'react-router-dom';

import Main from '~/components/Main';
import Hero from '~/components/Hero';
import Headline from '~/components/Headline';
import Animation from '~/components/Animation';
import {
    Tooltip,
  } from 'react-tippy';

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

    toggleOverlay(name) {
        let overlay = this.refs['overlay-' + name];
        overlay.style.display = overlay.style.display === 'none'
            ? 'block' : 'none';
    }

    render() {
        return (
            <Main id='comparing' data-page='comparing'>
                <Hero>
                    <Animation animationConfig={animationConfig} />
                    <Headline title="Groupsville vs Facebook Groups" subtitle="Why pay $8/month, right?" />
                    <a className="lightbox-toggle" onClick={() => this.toggleOverlay('compare')}>🔗 you may also compare with Buddypress, Mastodon and others...</a>
                </Hero>
                <main>
                    <section id="comparing-table">
                        <div className="container">
                            <div className="comparing-table">
                                <div className="comparing-table-item keys">
                                    <div className="header">Specifications</div>
                                    <div className="features-list">
                                        <Tooltip title="At Groupsville, we don't show ads. But you're free to show advertising to your members." arrow="true">
                                            <div className="feature">Annoying Ads</div>
                                        </Tooltip>
                                        {/*
                                        <Tooltip title="Our business model is straightforward. We charge a small subscription fee. Your data is yours. 😇" arrow="true">
                                            <div className="feature">Selling your data</div>
                                        </Tooltip>
                                        */}
                                        <Tooltip title="Unlike Facebook Groups, Groupsville is not one-size-fits-all. You can change the look'n feel of your network in click of a button." arrow="true">
                                            <div className="feature">Themes</div>
                                        </Tooltip>
                                        <Tooltip title="In addition to themes, you may also fully customize your Groupsville template. All changes are tracked via git, so it's easy to go back in time." arrow="true">
                                            <div className="feature">Full Template Editing</div>
                                        </Tooltip>
                                        <Tooltip title="Exclusive to Groupsville, you may port any page of your network to a Drupal/Wordpress site just by copy/pasting a simple HTML tag." arrow="true">
                                            <div className="feature">Plug & Play Features</div>
                                        </Tooltip>
                                        <Tooltip title="Groupsville comes with rich API. Nothing like you've seen before. 💪" arrow="true">
                                            <div className="feature">Full API</div>
                                        </Tooltip>
                                        <Tooltip title="With Groupsville, it is possible to export the full database. Try that with Facebook Groups 🙄" arrow="true">
                                            <div className="feature">Data Export</div>
                                        </Tooltip>
                                        <Tooltip title="Groupsville is open source. So you can also run it on your own servers. Try that with Facebook Groups 🙄" arrow="true">
                                            <div className="feature">Open Source</div>
                                        </Tooltip>
                                        <Tooltip title="Put your group under your domain name, and earn reputation/SEO love for your own website, not Facebook!" arrow="true">
                                            <div className="feature">Custom Domain Name</div>
                                        </Tooltip>
                                        <Tooltip title="Facebook Groups is a product of Facebook Inc, if you didn't know... The same company which *accidentally* scraped your contact list, and known to store your passwords in plaintext format 🤦‍♀️ And we're 100% confident they won't put your network behind Tor for added privacy." arrow="true">
                                            <div className="feature">Privacy (and Tor)</div>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className="comparing-table-item highlighted">
                                    <div className="header groups-logo">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 95"><path d="M14.5778 32.193c3.8135 3.8015 9.9962 3.8015 13.8097 0 3.8135-3.8014 3.8135-9.9648 0-13.7667-3.8135-3.8014-9.9962-3.8014-13.8097 0-3.8135 3.8019-3.8135 9.9653 0 13.7667zm22.4513 50.5403c5.208-1.391 8.2987-6.7275 6.9033-11.9192-1.3958-5.1917-6.7486-8.2725-11.957-6.8814-5.2076 1.3911-8.2983 6.7271-6.9029 11.9188 1.3953 5.1917 6.7486 8.2729 11.9566 6.8818zM31.8538 7.3494L39.3471 0l8.1522 7.99615-7.5097 7.36615c4.5535 7.9751 3.373 18.251-3.5415 25.0332-1.2536 1.2294-2.6244 2.2741-4.0774 3.134l2.5484 9.328c9.3189.1199 17.8023 6.2608 20.3331 15.5247 3.052 11.1715-3.7074 22.6541-15.0972 25.6477-11.3902 2.9935-23.0976-3.6365-26.1496-14.8075-2.5389-9.2936 1.7121-18.8028 9.771-23.4603l-2.5226-9.2334c-5.4315-.0241-10.8561-2.0688-15.00045-6.1332-8.3378-8.178-8.3378-21.4371 0-29.6155C13.1902 3.9768 23.7119 2.83327 31.8538 7.3494z" fill="#fff"/><path d="M50.248 47H62.2V25.544c0-5.616 2.88-7.848 9-7.848h.432V5.672c-6.912 0-9 3.672-10.152 5.832V7.04H50.248V47zM73.5496 26.984c0 9.792 6.984 21.24 21.528 21.24 14.5444 0 21.5284-11.448 21.5284-21.24 0-9.792-6.984-21.24-21.5284-21.24-14.544 0-21.528 11.448-21.528 21.168v.072zm11.952 0c0-5.832 4.392-10.08 9.576-10.08 5.1844 0 9.5764 4.248 9.5764 10.08s-4.392 10.08-9.5764 10.08c-5.184 0-9.576-4.248-9.576-10.008v-.072zM160.383 7.04h-11.952v21.744c0 4.104-.936 8.352-6.912 8.352-5.4 0-6.336-3.888-6.336-8.28V7.04h-11.952v24.984c0 5.4 1.368 16.344 14.904 16.344 7.2 0 9.72-3.672 11.088-5.616V47h11.16V7.04zM169.008 60.32h11.952V43.4c1.44 1.512 4.824 4.968 12.024 4.968 11.376 0 19.44-9.432 19.44-20.952 0-9.288-5.328-21.744-19.513-21.744-6.12 0-10.079 2.736-12.671 5.76V7.04h-11.232v53.28zm31.463-33.264c0 5.04-3.743 10.152-10.007 10.152-2.808 0-5.329-1.152-7.129-2.952-1.8-1.8-2.879-4.32-2.879-7.128 0-2.88 1.08-5.472 2.808-7.272 1.8-1.872 4.32-3.024 7.2-3.024 6.552 0 10.007 5.472 10.007 10.152v.072zM247.939 18.272c-1.008-10.512-10.08-12.6-15.336-12.6-8.28 0-15.48 5.256-15.48 13.536 0 5.4 4.32 8.784 9.504 10.44 7.632 2.952 10.584 3.312 10.584 6.048 0 1.944-2.16 3.096-4.176 3.096-.504 0-4.032 0-4.536-3.672h-11.88c1.08 10.512 10.224 13.248 16.272 13.248 8.856 0 16.272-5.184 16.272-13.968 0-8.64-7.2-10.656-13.968-12.528-3.168-.936-6.12-2.16-6.12-3.96 0-1.08.864-2.664 3.384-2.664 3.528 0 3.672 2.16 3.744 3.024h11.736zM80.5229 87.4339c-.8418 0-1.5258-.8466-1.5258-2.2223 0-4.1799 3.1568-14.2857 3.1568-14.8148 0-1.0582-2.315-2.0106-4.5773-2.2222-1.6836-.1587-2.7885 0-3.4198 1.4286C72.8414 72.5661 71 80.873 71 86.5873 71 90.291 72.9993 95 76.8926 95c9.8386 0 16.3626-19.2064 16.6783-25.9788 0-1.6402-.7366-3.0159-2.7359-3.0159-2.7359 0-6.1031 7.1429-3.3146 10.2645-1.6836 4.9736-4.4195 11.1641-6.9975 11.1641zM98.5136 68.1217c-1.0523.0529-1.7889.4233-2.2624 1.4815-1.5784 3.5979-3.4198 14.6561-3.4198 18.3068 0 2.0106.947 7.09 6.9449 7.09 5.3667 0 8.9967-4.8677 11.0487-10.2645.368-.8466.789-2.8043.105-3.5979-.263-.2646-.631-.3704-.894-.3704-1.789 0-2.473 1.9048-2.841 2.963-.737 1.6931-1.526 3.1216-2.473 3.9682-.474.4233-1.052.7408-1.631.7408-1.684 0-2.157-1.6403-2.157-3.3863 0-4.0741 3.209-14.0741 3.209-14.6561 0-1.6931-4.4193-2.2751-5.6294-2.2751zm.4735-9.2064c-1.4206 2.8043-.8944 5.9789 1.2099 7.0371 2.526 1.4285 5.367-.8995 6.472-2.963 1.42-2.8042.894-5.9788-1.263-7.037-2.578-1.2699-5.261.7407-6.4189 2.9629z" fill="#fff"/><path d="M129.796 55c-1.052.0529-1.789.4233-2.262 1.4815-1.579 3.5979-6.419 26.3492-6.419 31.4285 0 2.0106.947 7.09 6.945 7.09 5.366 0 8.997-4.8677 11.048-10.2645.369-.8466.79-2.8043.106-3.5979-.263-.2646-.632-.3704-.895-.3704-1.789 0-2.473 1.9048-2.841 2.963-.736 1.6931-1.526 3.1216-2.473 3.9682-.473.4233-.999.7408-1.631.7408-1.683 0-2.157-1.6932-2.157-3.4392 0-5.1323 6.209-26.0317 6.209-27.7249 0-1.6931-4.42-2.2751-5.63-2.2751zm-14.205 0c-1.053.0529-1.789.4233-2.263 1.4815-1.578 3.5979-6.419 26.3492-6.419 31.4285 0 2.0106.737 7.09 6.419 7.09 6.156 0 7.524-7.672 5.945-7.672-.473 0-1.104 1.1112-2.104 1.1112-1.736 0-2.157-1.7461-2.157-3.545 0-5.1323 6.208-25.9789 6.208-27.6191 0-1.6931-4.419-2.2751-5.629-2.2751z" fill="#fff"/><path d="M158.79 80.7672c-1.578 0-2.262 1.4815-2.42 1.9048-1.473 3.8624-4.472 6.0317-7.734 6.0317-1.421 0-4.42-.582-5.525-3.2804 8.366 0 17.573-17.672 6.261-17.672-9.628 0-14.679 10.0529-14.679 16.5609 0 5.3439 3.42 10.6878 11.628 10.6878 10.891 0 16.257-14.2328 12.469-14.2328zm-10.628-6.5608c.737 0 .947.3174.947.7407V75c0 2.8571-4.051 6.0317-6.418 6.5608.42-3.7566 3.209-7.3544 5.471-7.3544z" fill="#fff"/></svg>
                                        
                                    </div>
                                    <div className="features-list">
                                        <div className="feature">❌</div>
                                        
                                        <div className="feature">✅</div>
                                        <div className="feature">✅</div>
                                        <div className="feature">✅</div>
                                        <div className="feature">✅</div>
                                        <div className="feature">✅</div>
                                        <div className="feature">✅</div>
                                        <div className="feature">✅</div>
                                        <div className="feature">✅</div>
                                    </div>
                                </div>
                                <div className="comparing-table-item">
                                    <div className="header">Facebook Groups</div>
                                    <div className="features-list">
                                        <div className="feature">✅</div>
                                        
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
                </main>
                <div ref="overlay-compare" className="overlay" style={{display: 'none'}}>
                    <div className="container">
                        <div>
                            <h1>Compare with others....</h1>
                            <p>Groupsville is not the only open source social networking software out there. There are many great efforts visioning the same, replacing Facebook with something more privacy-concerned. Buddypress, Mastodon are just a couple of some of your options.</p>
                            <p>What sets us apart is our 10+ years in experience in building online communities, some with more than millions of members. Our social software is created in a unique scale-out architecture which ensures your network will perform seamlessly  once it reaches huge amounts of traffic, following and popularity. Plus, it will cost much less than others to operate. </p>
                            <p>How do we do that? Groupsville is written in a unique way with an in-memory graph datastore. This is *NOT* like anything you've seen before. Thus, the difference between Groupsville and other open source stacks is similar to the difference between hosting files on a regular disk vs OpenStack, or MySQL vs MongoDB. Also, we look cooler - we think :)</p>
                            <p>For more information, check out https://github.com/phonetworks/pho-microkernel and https://github.com/phonetworks/benchmarks for benchmarks.</p>
                            <br /><br /><br />
                            <a onClick={() => this.toggleOverlay('compare')}>Close This</a>
                        </div>
                    </div>
                </div>
            </Main>
        );
    }
}
