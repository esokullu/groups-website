import React from 'react';
import {Link} from 'react-router-dom';

import Main from '../../components/Main';

export default class Privacy extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Main data-page="privacy" className="privacy document">
                <div className="container">
                    <section className="privacy-policy-abstract">
                        <h1>Privacy Policy</h1>
                        <div className="introduction block">
                            <h3>Introduction</h3>
                            <p>
                                Research in Social Graph (“us,” “we,” or ”RISG”) is committed to respecting the
                                privacy rights of our customers (“Customers”) and their end users (“End Users”),
                                as well as other users of the RISG newsfeed API and related services
                                (“Services”) and the RISG websites, including (risg.co) and any
                                successor sites (collectively, “Websites” and each individually, a “Website”).
                                We created this privacy policy (“Privacy Policy”) to give you confidence as you
                                use the Services and Websites, and to demonstrate our commitment to fair
                                information practices and the protection of privacy. This Privacy Policy is only
                                applicable to the Services and Websites, and not to any other websites that you
                                may be able to access from the Services Websites or any websites of the partners
                                or Customers of RISG, each of which may have data collection, storage, and
                                use practices and policies that differ materially from this Privacy Policy. Your
                                use of the Websites and certain aspects of the Services are governed by this
                                Privacy Policy and the Terms of Service and in some instances a Subscription
                                Agreement by and between you and RISG. The use of information collected
                                through our service shall be limited to the purpose of providing the service for
                                which our Customer has engaged RISG.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Traffic Data Collected</h3>
                            <p>
                                When you visit the Websites, web servers collect information about your visit
                                (known as “traffic data”), which is stored as anonymous, aggregate data. We use
                                traffic data to learn more about visitors’ use of the Websites and to improve
                                the quality of the content and functionality of the Websites, as well as to
                                target our offerings to the people most interested in them based on their use of
                                the Websites. In order to provide the Services to our Customers, RISG
                                collects certain information and data about End Users (“End User Information”).
                                RISG provides analyses of anonymized, aggregate End User Information to its
                                Customers and to other third parties (“Analyzed Data”). RISG takes
                                commercially reasonable efforts to ensure that Analyzed Data does not include
                                any PII, as defined below
                            </p>
                        </div>
                        <div className="block">
                            <h3>Personally Identifiable Information</h3>
                            <p>
                                Personally identifiable information (“PII”) is information that can be used
                                to identify an individual user, for example, a person’s name, home address,
                                email address or phone number. We also, through third party services, collect
                                billing information such as credit card number. We receive and store any PII
                                users enter on our Websites, send to us in an email or voluntarily provide to us
                                in any other way. We may also collect PII that is necessary to fulfill
                                RISG’ legitimate interests, which will be described to you at the time of
                                collection. We will use this information for the purposes of which it was
                                collected.
                            </p>
                        </div>
                        <div className="block">
                            <h3>PII Collected for Website Registration</h3>
                            <p>
                                In order for you to access certain Services, we may require you to provide us
                                with certain PII, such as your name, phone number and e-mail address. You may
                                also provide RISG with certain optional information at your sole discretion
                                (“Optional Information”). For the purpose of this Privacy Policy, all Optional
                                Information that you provide us will be deemed PII.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Use of PII Collected on the Websites</h3>
                            <p>
                                The use of PII collected through our Websites shall be limited to the
                                purposes of providing the Services to process any applicable payment and
                                communicate with you as needed in connection with the Services.
                            </p>
                        </div>
                        <div className="block">
                            <h3>PII Collected via the Services</h3>
                            <p>
                                Use of the Services does not require that RISG’ customers provide to
                                RISG, and RISG requests that its Customers do not provide to it, any
                                PII relating to their End Users. End Users should be aware, however, that
                                RISG’ Customers may request such information from End Users in order to
                                enable their use of and access to the Services and such PII may be included in
                                the End User Information provided to RISG. To the extent RISG does
                                receive any PII as part of the End User Information, RISG shall make
                                reasonable efforts, consistent with the terms of this Privacy Policy, to
                                maintain the confidentiality of such PII.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Log Files</h3>
                            <p>
                                As is true of most web sites, we gather certain information automatically and
                                store it in log files. This information may include internet protocol (IP)
                                addresses, browser type, internet service provider (ISP), referring/exit pages,
                                operating system, date/time stamp, and/or clickstream data.
                            </p>

                            <p>
                                We may combine this automatically collected log information with other
                                information we collect about you. We do this to improve marketing, analytics,
                                and site functionality.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Cookies and Tracking technologies</h3>
                            <p>
                                Technologies such as: cookies, beacons, tags and scripts are used by
                                RISG and our marketing partners, affiliates, analytics, and marketing
                                service providers. These technologies are used in analyzing trends,
                                administering the site, tracking users’ movements around the site and to gather
                                demographic information about our user base as a whole. We may receive reports
                                based on the use of these technologies by these companies on an individual as
                                well as aggregated basis.
                            </p>
                            <p>
                                We use cookies to remember users’ form submitted information. Users can
                                control the use of cookies at the individual browser level. If you reject
                                cookies, you may still use our site, but your ability to use some features or
                                areas of our site may be limited.
                            </p>
                            <p>
                                Our Website may now or in the future include social media features, such as
                                the Facebook “like” button and widgets, such as the “share this” button or
                                interactive mini-programs that run on our site. These features may collect your
                                IP address, which page you are visiting on our site, and may set a cookie to
                                enable the feature to function properly. These features are either hosted by a
                                third party or hosted directly on our Website. Your interactions with these
                                features are governed by the privacy policies of the company providing them.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Use of PII</h3>
                            <p>
                                When you send e-mail or other communications to RISG, we may retain
                                those communications in order to process your inquiries, respond to your
                                requests and improve our services. RISG may also use PII for various
                                purposes, including without limitation to:
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        To help diagnose problems with the Website or Services, to administer the
                                    Website or Services, and to enhance the Website or Services for optimal user
                                    experience.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To monitor the usage and performance of the Website or Services, and to
                                        determine aggregate information about our users and usage patterns.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To customize content that may be of interest to Customers or End Users.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To identify you when you access and use any Website or Services.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To facilitate transactions and process payments.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To send users materials, updates, and product information regarding 
                                        the Website or Services.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To provide maintenance, support, and customer service for the Website 
                                        or Services.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To conduct research and analysis.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To contact users for information verification purposes.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        To fulfil other legitimate purposes permitted by applicable law.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="block">
                            <h3>Choice/Opt-Out</h3>
                            <p>
                                You may choose to stop receiving marketing emails or other informational
                                emails from us by following the unsubscribe instructions included in these
                                emails or you can contact us at <a href="mailto:business@risg.co">business@risg.co</a>. 
                                If you opt out, we may still send you non-marketing emails. Non-marketing 
                                emails include emails about your account with us (if you have one) and 
                                our business dealings with you.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Information Sharing</h3>
                            <p>
                                RISG may share PII with any third parties in the following limited
                                circumstances:
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        We may ask if you would like us to share your PII with other unaffiliated
                                        third parties who are not described elsewhere in this policy, and we may do so
                                        with your consent.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We may share your PII with companies that are affiliated with us (that is,
                                        that control, are controlled by, or are under common control with RISG).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        We may share any PII with other trusted business partners (“Partners”) for
                                        the purpose of processing PII or Analyzed Data on our behalf, but only to
                                        provide the requested Services and subject to this Privacy Policy. Such Partners
                                        shall be bound to uphold the same standards of security and confidentiality that
                                        we have promised to you in this Privacy Policy, and they will only use your PII
                                        to carry out their specific business obligations to RISG and to provide
                                        your requested Services.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        If RISG is involved in a merger, acquisition, or sale of all or a
                                        portion of its assets, you will be notified via email and/or a prominent notice
                                        on our Website of any change in ownership or uses of your PII, as well as any
                                        choices you may have regarding your PII.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="block">
                            <h3>Confidentiality and Security</h3>
                            <p>
                                Except as otherwise provided in this Privacy Policy, we will keep your PII
                                private and will not share it with third parties, unless we believe in good
                                faith that disclosure of your PII or any other information we collect about you
                                is necessary to: (1) comply with applicable laws, or a court order or other
                                legal process; (2) protect the rights, property or safety of RISG or
                                another party; (3) enforce our Terms of Service (or applicable Subscription
                                Agreement) or (4) respond to claims that any posting or other content violates
                                the rights of third parties.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Information Security and Data Integrity</h3>
                            <p>
                                The security of your PII is important to us. We follow reasonable and
                                appropriate security measures and standards to protect the PII submitted to us,
                                both during transmission and once we receive it. These include internal reviews
                                of our data collection, storage and processing practices and security measures,
                                as well as physical security measures to guard against unauthorized access to
                                systems where we store personal data. Although we make good faith efforts to
                                store PII in a secure operating environment that is not open to the public, you
                                should understand that there is no such thing as complete security, and we do
                                not guarantee that there will be no unintended disclosures of your PII. If we
                                become aware that your PII has been disclosed in a manner not in accordance with
                                this Privacy Policy, we will use reasonable efforts to notify you of the nature
                                and extent of the disclosure (to the extent we know that information) as soon as
                                reasonably possible and as permitted by law. If we need, or are required, to
                                contact you concerning any event that involves information about you, we may do
                                so by email, telephone, or mail.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Lost or Stolen Information</h3>
                            <p>
                                You must promptly notify us if your PII is lost, stolen, or used without
                                permission. In such an event, we will remove that PII from your account and
                                update our records accordingly.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Updates and Changes to Privacy Policy</h3>
                            <p>
                                We may update this privacy policy to reflect changes to our information
                                practices. If we make any change in how we use your PII we will notify you by
                                email (sent to the e-mail address specified in your account) or by means of a
                                notice on this Website prior to the change becoming effective. We encourage you
                                to periodically review this page for the latest information on our privacy
                                practices.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Controlling Your PII Controlled by Us</h3>
                            <p>
                                As a registered user of the Websites, you can modify or delete some of the
                                PII you have included in your profile by logging in and accessing your account.
                                You cannot, however, change your username once you have registered. Upon your
                                request, RISG will use commercially reasonable efforts to delete your
                                account and the PII in your profile; however, it may be impossible to remove
                                your account without some residual information being retained by RISG. We
                                will respond to your request to access within 30 days. We may withhold
                                information where the search for that information would require disproportionate
                                effort or have a disproportionate effect to, for example, the cost of providing
                                the information, the time it would take to retrieve the data, or how difficult
                                it may be to obtain the information requested. To exercise your rights under
                                these provisions, please contact us at the “Contact” details below. When we
                                receive your requests, we may ask you to verify your identity before we can act
                                on your request.
                            </p>
                            <p>
                                We will retain your information for as long as your account is active or as
                                needed to provide you services. If you wish to cancel your account or request
                                that we no longer use your information to provide you services contact us 
                                at <a href="mailto:business@risg.co">business@risg.co</a>. We will retain
                                and use your information as necessary to comply with our legal obligations,
                                resolve disputes, and enforce our agreements.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Notice to Residents of the European Economic Area</h3>
                            <p>
                                In accordance with applicable data protection laws, you may have the right to
                                request: access to, rectification, and erasure of your PII; restriction of
                                processing of PII; objecting to certain processing of PII; and the right to data
                                portability. Where any processing of PII is solely dependent upon your consent,
                                you have the right to withdraw such consent at any time. Where you believe that
                                we have not processed your PII in accordance with applicable data protection
                                laws, you may lodge a complaint with the respective supervisory authority or
                                data protection regulator. The provision of PII by you will be for contractual,
                                marketing, or analytical purposes as referred to in this Privacy Policy. If we
                                do not have access to such PII from you, then we will not be able to undertake
                                certain Services for you.
                            </p>
                        </div>
                        <div className="block">
                            <h3>International Operations</h3>
                            <p>
                                RISG is based in the United States of America. If you are from a country
                                outside of the United States of America with laws governing data collection,
                                use, and disclosure that may differ from U.S. law and you provide PII to us,
                                please note that any PII that you provide to us may be transferred to the United
                                States of America. By providing your PII, you hereby specifically and expressly
                                consent to such transfer and processing and the collection, use, and disclosure
                                set forth herein or in any terms and conditions related to the use of and access
                                to the Website or Services.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Blogs</h3>
                            <p>
                                Our Website may offer publicly accessible blogs or community forums. You
                                should be aware that any information you provide in these areas may be read,
                                collected, and used by others who access them.
                            </p>
                            <p>
                                To request removal of your PII from our blog or community forum, contact us 
                                at <a href="mailto:business@risg.co">business@risg.co</a>. In some cases,
                                we may not be able to remove your PII, in which case we will let you know if we
                                are unable to do so and why.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Testimonials</h3>
                            <p>
                                We may display personal testimonials of satisfied customers on our site in
                                addition to other endorsements. With your consent we may post your testimonial
                                along with your name. If you wish to update or delete your testimonial, you can
                                contact us at <a href="mailto:business@risg.co">business@risg.co</a>.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Links to Other Websites</h3>
                            <p>
                                Our Websites includes links to other websites whose privacy practices may
                                differ from those of RISG. If you submit PII to any of those sites, your
                                information is governed by their privacy statements. We encourage you to
                                carefully read the privacy statement of any website you visit.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Information Related to Data Collected through the RISG Service</h3>
                            <p>
                                RISG collects information under the direction of its Customers, and has
                                no direct relationship with the individuals whose personal data it processes.
                                Where RISG collects information on behalf of its Customers, RISG shall
                                be considered the processor of such information.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Service Provider, Sub-Processors/Onward Transfer</h3>
                            <p>
                                RISG may transfer PII to companies that help us provide our service.
                                Transfers to subsequent third parties are covered by the provisions in this
                                Privacy Policy regarding notice and agreements with our Customers.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Access to Data Controlled by our Customers</h3>
                            <p>
                                RISG has no direct relationship with the individuals whose personal data
                                it processes. An individual who seeks access, or who seeks to correct, amend, or
                                delete inaccurate data should direct his query to the RISG’ Customer (the
                                data controller). If the Customer requests RISG to remove the data, we will
                                respond to their request within 30 business days.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Data Retention</h3>
                            <p>
                                RISG will retain personal data we process on behalf of our Customers for
                                as long as needed to provide services to our Customers. RISG will also
                                retain and use this PII as necessary to comply with our legal obligations,
                                resolve disputes, and enforce our agreements.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Contacts</h3>
                            <p>
                                If you have any comments, concerns or questions about this Privacy Policy,
                                send us an email at <a href="mailto:business@risg.co">business@risg.co</a>
                            </p>
                        </div>
                        <div className="block">
                            <p>
                                Last Updated on Sept 13, 2018
                            </p>
                        </div>
                    </section>
                </div>
            </Main>
        )
    }
}