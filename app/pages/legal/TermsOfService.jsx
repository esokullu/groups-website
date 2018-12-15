import React from 'react';
import {Link} from 'react-router-dom';

import Main from '../../components/Main';

export default class TermsOfService extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Main data-page="terms-of-service" className="terms-of-service document">
                <div className="container">
                    <section className="terms-of-service">
                        <h1>Terms of Service</h1>
                        <div className="block">
                            <h4>Grou.ps, INC. TERMS OF SERVICE</h4>
                            <p>
                                THESE TERMS OF SERVICE (“AGREEMENT”) DESCRIBE THE TERMS AND CONDITIONS ON
                                WHICH Grou.ps, INC. (“Grou.ps”) PROVIDES ITS SERVICES TO ANY CUSTOMER
                                ACCESSING Grou.ps’ PROPRIETARY SYSTEMS AND APPLICATION PROGRAMMING INTERFACES
                                (THE “API”) TO BUILD CUSTOMIZED SCALABLE NEWSFEEDS OR OTHERWISE RECEIVING THE
                                BENEFIT OF Grou.ps SERVICES (THE “CUSTOMER” or “YOU”). BY INDICATING ACCEPTANCE
                                OF THIS AGREEMENT OR BY OTHERWISE USING THE SERVICE, CUSTOMER IS ENTERING INTO A
                                LEGALLY BINDING AGREEMENT WITH Grou.ps. IF CUSTOMER DOES NOT AGREE TO THIS
                                AGREEMENT, CUSTOMER MUST NOT COMPLETE THE ORDER PROCESS AND MUST NOT USE THE
                                SERVICE.
                            </p>
                            <p>
                                IF CUSTOMER OR THE THIRD-PARTY ON BEHALF OF WHOM CUSTOMER IS ACTING (ALSO, A
                                “CUSTOMER”) AND Grou.ps HAVE ALREADY ENTERED A SEPARATE AGREEMENT GOVERNING
                                PROVISION OF Grou.ps’ SERVICES THAT HAS BEEN SIGNED ON BEHALF OF BOTH Grou.ps
                                AND CUSTOMER, THEN THAT OTHER AGREEMENT SHALL APPLY IN PLACE OF THE TERMS
                                HEREIN, NOTWITHSTANDING ANY CHECKBOX OR ELECTRONIC ACCEPTANCE REQUIRED IN ORDER
                                TO USE THE SERVICE.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Provision of the Service.</h3>
                            <ol>
                                <li>
                                    <h4>Provision Generally.</h4>
                                    <p>
                                        During the Term as defined in (Section 5.1) Grou.ps
                                        will provide Customer with access to Grou.ps’ proprietary service that allows
                                        users to build customized scalable social networking solutions via an API
                                        (collectively the “Service”) in accordance with the terms and conditions of this
                                        Agreement. In order to access and use the Service, Customer is responsible at
                                        its own expense for obtaining its own Internet access, and any hardware and
                                        software required therefor. The use of any registration-related information you
                                        provide us and the information we collect about you in connection with your
                                        subscription to the Service is governed by our Privacy Policy, available <Link to="/legal/privacy">here</Link>.
                                    </p>
                                </li>
                                <li>
                                    <h4>Grant of Rights.</h4>
                                    <p>
                                        Subject to the terms and conditions of this Agreement,
                                        Grou.ps hereby grants to Customer a limited, non-exclusive, non-transferable
                                        right to access and use the Service, solely for Customer’s internal business
                                        purposes during the Term. All rights not expressly granted to Customer are
                                        reserved by Grou.ps and its licensors. There are no implied rights.
                                    </p>
                                </li>
                                <li>
                                    <h4>Eligibility Requirements.</h4>
                                    <p>
                                        By entering into this Agreement, Customer
                                        represents and warrants that Customer meets the following minimum requirements
                                        (“Eligibility Requirements”): (a) Customer is at least 18 years old and has the
                                        legal capacity to be bound by this Agreement; (b) Customer has the necessary
                                        rights and authority to enter into and perform the obligations required of
                                        Customer under this Agreement including entering into this Agreement on behalf
                                        of and binding a third-party, if so applicable; (c) All information which
                                        Customer provides, including but not limited to information provided during
                                        registration, information about Customer and any third -party business, and all
                                        relevant payment information, is within Customer’s right to use, and is and will
                                        remain accurate, complete and current; (d) Customer is in compliance with all
                                        applicable laws, including but not limited to all applicable laws and
                                        regulations pertaining to data privacy; (e) None of the Customer Data (as
                                        defined herein) will contain any unlawful, defamatory, offensive, libelous,
                                        harassing, abusive, fraudulent, pornographic or obscene content or material; and
                                        (f) Customer will provide Grou.ps with any information, records, or materials
                                        that we request to verify Customer’s compliance with the eligibility
                                        requirements set forth above and the terms and conditions of this Agreement.
                                    </p>
                                </li>
                                <li>
                                    <h4>Restrictions.</h4>
                                    <p>
                                        Customer shall not (and shall not allow any third party to):
                                        (a) use the Service for the benefit of any third party, or to develop or market
                                        any product, software or service that is functionally similar to or derivative
                                        of the Service, or for any other purpose not expressly permitted herein; (b)
                                        permit any third party to access or use the Service except as envisioned by the
                                        Service in its normal operation or specified herein; (c) sell, distribute, rent,
                                        lease, service bureau, post, link, disclose or provide access to the Service,
                                        directly or indirectly, to any third party; (d) alter, modify, debug, reverse
                                        engineer, decompile, disassemble, or otherwise attempt to derive or gain access
                                        to any software (including source code) associated with the Service; or (e) use
                                        any unauthorized robot, spider, scraper or other automated means to access the
                                        Service, or engage in any scraping, data-mining, harvesting, data aggregating or
                                        indexing of the Service. Customer shall keep all passwords and API Keys provided
                                        to it safe and secure, and shall be responsible for all use of the Service using
                                        passwords or API keys issued to Customer. Customer shall notify Grou.ps
                                        immediately of any actual or suspected unauthorized use of its passwords or API
                                        keys for the Service. Without limiting any of its other rights or remedies,
                                        Grou.ps reserves the right to suspend access to the Service if Grou.ps
                                        reasonably believes that Customer has materially violated the restrictions and
                                        obligations in this Agreement (in which case, it shall provide Customer prompt
                                        written notice of such suspension).
                                    </p>
                                </li>
                                <li>
                                    <h4>Customer Cooperation.</h4>
                                    <p>
                                        Customer shall: (a) reasonably cooperate with Grou.ps
                                        in all matters relating to the Service; (b) respond promptly to any Grou.ps
                                        request to provide information, approvals, authorizations or decisions that are
                                        reasonably necessary for Grou.ps to provide the Service in accordance with
                                        this Agreement; and (c) provide such Customer materials or information as
                                        Grou.ps may reasonably request to provide the Service and ensure that such
                                        materials or information are complete and accurate in all material respects.
                                    </p>
                                </li>
                            </ol>
                        </div>
                        <div className="block">
                            <h3>Grou.ps Technology.</h3>
                            <p>
                                In connection with providing the Service, Grou.ps and its licensors shall
                                operate and support the hosted environment used by Grou.ps to provide the
                                Service, including the Grou.ps Technology (as defined below), the server
                                hardware, disk storage, firewall protection, server operating systems,
                                management programs, web server programs, documentation and all other technology
                                or information so used by Grou.ps. As used herein, “Grou.ps Technology”
                                means all of Grou.ps’ proprietary technology (including software, hardware,
                                products, processes, algorithms, user interfaces, know-how, techniques, designs
                                and other tangible or intangible technical material or information) made
                                available to Customer by Grou.ps in providing the Service.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Ownership.</h3>
                            <p>
                                Customer acknowledges and agrees that as between Grou.ps and Customer, all
                                right, title and interest in and to the Service (including the data,
                                information, text, images, designs, sound, music, marks, logos, compilations
                                (meaning the collection, arrangement and assembly of information other than
                                Customer Data) and other content on or made available through the Service, other
                                than Customer Data), the Grou.ps Technology and all improvements and
                                derivatives of the foregoing (including all intellectual property and
                                proprietary rights embodied therein or associated therewith) are and shall
                                remain owned by Grou.ps or its licensors, and this Agreement in no way conveys
                                any right, title or interest in the Service or the Grou.ps Technology other
                                than a limited right to use the Service in accordance with this Agreement.
                                Grou.ps acknowledges and agrees that as between Customer and Grou.ps, all
                                right, title and interest in and to the Customer Data are and shall remain owned
                                by Customer or its licensors, and this Agreement in no way conveys any right,
                                title or interest in the Customer Data other than a limited right to use the
                                Customer Data in accordance with the terms and conditions herein. No right or
                                license is granted hereunder to Customer under any trademarks, service marks,
                                trade names or logos. Customer shall not remove any Grou.ps trademark, service
                                mark or logo, or any proprietary notices or labels (including any copyright or
                                trademark notices) from the Service. Grou.ps acknowledges and agrees that as
                                between Customer and Grou.ps, all right, title and interest in and to the
                                Customer Data are and shall remain owned by Customer or its licensors, and this
                                Agreement in no way conveys any right, title or interest in the Customer Data
                                other than a limited right to use the Customer Data in accordance with the terms
                                and conditions set forth and agreed to herein.
                            </p>
                        </div>
                        <div className="block">
                            <h3>Fees; Payments; Taxes.</h3>
                            <ol>
                                <li>
                                    <h4>Fees.</h4>
                                    <p>
                                        In consideration of the provision of the Services, Customer shall pay
                                        Grou.ps the monthly fees pursuant to the fee schedule and Grou.ps service
                                        plan chosen by Customer at [https://grou.ps/pricing/] and make such payment
                                        in accordance with the instructions and schedule provided for by Grou.ps.
                                    </p>
                                </li>
                                <li>
                                    <h4>Increases.</h4>
                                    <p>
                                        Grou.ps reserves the right to increase its fees at any time on
                                        30 days’ notice to Customer. If Customer objects to the fee increase, Customer
                                        may terminate the Service by written notice during such 30 day period. If
                                        Customer does not exercise its right of termination during such period, Customer
                                        will be deemed to have accepted the increased fees.
                                        </p>
                                </li>
                                <li>
                                    <h4>Taxes.</h4>
                                    <p>
                                        All amounts due hereunder are exclusive of all sales, use, excise,
                                        service, value added, or other taxes, duties and charges of any kind (whether
                                        foreign, federal, state, local or other) associated with this Agreement, the
                                        Service, or Customer’s access to the Service. Customer shall be solely
                                        responsible for all such taxes, duties and charges (except for taxes imposed on
                                        Grou.ps’ income), which may be invoiced by Grou.ps from time-to-time.
                                    </p>
                                </li>
                                <li>
                                    <h4>Late Payments.</h4>
                                    <p>
                                        Customer shall pay interest on all late payments at the lesser
                                        of (a) 1.5% per month or (b) the highest rate permissible under applicable law,
                                        calculated daily and compounded monthly. Customer shall reimburse Grou.ps for
                                        all costs and expenses, including attorneys’ fees, incurred in collecting any
                                        unpaid amounts owed by Customer hereunder.
                                    </p>
                                </li>
                            </ol>
                        </div>
                        <div className="block">
                            <h3>Term; Termination.</h3>
                            <ol>
                                <li>
                                    <h4>Term, Termination and Automatic Renewal.</h4>
                                    <p>
                                        The term of this Agreement shall
                                        commence upon Customer’s subscription to the Service and shall continue for the
                                        period of the initial subscription selected by the Customer (the “Initial
                                        Term”). After the initial term of the contract (as specified in the proposal),
                                        the Customer may terminate this Agreement upon 30 day’s written notice to
                                        Grou.ps. Grou.ps reserves the right to terminate this Agreement at any time
                                        upon written notice to the Customer and shall repay to Customer any pro-rated
                                        portion of the fees paid to it in connection with the Services that the Customer
                                        would have received but for Grou.ps’ cancellation. In the event that the
                                        Agreement is not terminated as set forth herein it shall continue to
                                        automatically renew for the length of the Initial Term (a “Renewal Term”). The
                                        Initial Term and any Renewal Term is referred to herein as a “Subscription
                                        Term”, and the Subscription Terms are referred to collectively as the “Term.”
                                    </p>
                                </li>
                                <li>
                                    <h4>Termination for Breach.</h4>
                                    <p>
                                        Either Party may terminate this Agreement by written
                                        notice thereof to the other Party, if the other Party materially breaches this
                                        Agreement and does not cure such breach within 30 days after written notice
                                        thereof.
                                    </p>
                                </li>
                                <li>
                                    <h4>Effects of Termination; Survival.</h4>
                                    <p>
                                        Upon any termination of this Agreement: (a)
                                        all rights granted to Customer hereunder shall terminate and Grou.ps shall no
                                        longer provide access to the Service to Customer, and (b) Customer shall cease
                                        using the Service. Any obligations that have accrued prior to termination shall
                                        survive termination of this Agreement. In addition, the following Sections, as
                                        well as any other provisions herein which by their nature should survive, shall
                                        survive termination of this Agreement: Sections 4 through 11.
                                    </p>
                                </li>
                            </ol>
                        </div>
                        <div className="block">
                            <h3>Customer Data.</h3>
                            <ol>
                                <li>
                                    <h4>Data Generally.</h4>
                                    <p>
                                        All data and information which the Customer inputs into the
                                        Service (the “Customer Data”) is stored in a private and secure fashion, and
                                        will not be used by Grou.ps except as permitted herein. Customer hereby grants
                                        to Grou.ps a limited, non-exclusive, non-transferable, royalty-free right to
                                        use, reproduce, manipulate, and display the Customer Data solely in connection
                                        with providing the Service to Customer, and improving, developing and marketing
                                        the Service (provided that Grou.ps may only use anonymized and aggregated
                                        Customer Data to improve, develop and market the Services). Grou.ps may
                                        analyze Customer Data, and data of other customers, to create aggregated and
                                        anonymized statistics or data that do not identify Customer or any individual,
                                        household, user, browser, or device and Grou.ps may during and after the Term
                                        use and disclose such statistics or data in its discretion. Except as specified
                                        otherwise in this Agreement, Customer shall be solely responsible for providing,
                                        updating, uploading and maintaining all Customer Data. The content of Customer
                                        Data shall be Customer’s sole responsibility. Grou.ps shall operate the
                                        Service in a manner that provides reasonable information security for Customer
                                        Data, using commercially reasonable data backup, security, and recovery
                                        protections.
                                    </p>
                                </li>
                                <li>
                                    <h4>Additional Customer Responsibilities.</h4>
                                    <p>
                                        Customer is solely responsible for all
                                        Customer Data. Grou.ps does not guarantee the accuracy, integrity or quality
                                        of Customer Data. Customer shall not: (a) upload or otherwise make available to
                                        Grou.ps any Customer Data that is unlawful or that violates the rights of any
                                        third parties; (b) upload or otherwise make available to Grou.ps any Customer
                                        Data that Customer does not have a right to transmit due to any law, rule,
                                        regulation or other obligation; (c) use, upload or otherwise transmit any
                                        Customer Data that infringes any intellectual property or other proprietary
                                        rights of any third party; (d) upload or otherwise make available to Grou.ps
                                        any material that contains software viruses or any other computer code, files or
                                        programs designed to interrupt, destroy, limit the functionality of any computer
                                        software or hardware or telecommunications equipment; (e) interfere with or
                                        disrupt the Service or servers or networks connected to the Service; (f) upload
                                        or otherwise make available to Grou.ps any Customer Data that constitutes
                                        protected health information subject to the Health Insurance Portability and
                                        Accountability Act or any regulation, rule or standards issued thereunder, or
                                        constitutes similarly protected information under any applicable state, rule or
                                        regulation; or (g) violate any applicable law, rule or regulation, including
                                        those regarding the export of technical data.
                                    </p>
                                </li>
                            </ol>
                        </div>
                        <div className="block">
                            <h3>Representations and Warranties; Disclaimer.</h3>
                            <ol>
                                <li>
                                    <h4>General Representations and Warranties.</h4>
                                    <p>
                                        Each Party hereby represents and
                                        warrants to the other Party that: (a) if such Party is a corporation, company or
                                        other entity (as applicable), such entity is duly organized, validly existing
                                        and in good standing in its jurisdiction of organization; (b) such Party’s
                                        execution, delivery and performance of this Agreement have been duly and validly
                                        authorized by all necessary organizational action on its part or, if such Party
                                        is an individual, such Party has legal capacity to enter into this Agreement;
                                        (c) the provisions set forth in this Agreement constitute legal, valid, and
                                        binding obligations of such Party enforceable against such Party in accordance
                                        with their terms, subject to bankruptcy, insolvency and other laws affecting
                                        creditors’ rights generally; and (d) its execution, delivery and performance of
                                        this Agreement does not and will not conflict with, result in a breach of,
                                        constitute a default under, or require the consent of any third party under, any
                                        agreement or other obligation to which such Party is subject.
                                    </p>
                                </li>
                                <li>
                                    <h4>Grou.ps Limited Warranty.</h4>
                                    <p>
                                        Grou.ps further represents and warrants that
                                        (a) it will provide the Service in a competent and workmanlike manner; and (b)
                                        it owns or otherwise has sufficient rights (including without limitation all
                                        intellectual property rights thereto) to grant the licenses to Customer under
                                        this Agreement. Grou.ps does not warrant that it will be able to correct all
                                        reported defects or that use of the Service will be uninterrupted or error free.
                                        Grou.ps makes no warranty regarding features or services provided by any third
                                        parties. Grou.ps retains the right to modify its services and the Grou.ps
                                        Technology in its sole discretion. Customer’s sole remedy for Grou.ps’ breach
                                        of the warranty in this paragraph shall be that Grou.ps shall remedy the
                                        applicable error, or if Grou.ps is unable to do so in a timely manner, refund
                                        to Customer actual damages up to a limit of the fees paid for the Service for
                                        the Subscription Term during which the breach of warranty occurred.
                                    </p>
                                </li>
                                <li>
                                    <h4>Disclaimer.</h4>
                                    <p>
                                        EXCEPT FOR THE WARRANTIES SET FORTH IN SECTIONS 8.1-8.2 ABOVE,
                                        Grou.ps MAKES NO REPRESENTATION OR WARRANTY WHATSOEVER, AND HEREBY DISCLAIMS
                                        ALL REPRESENTATIONS AND WARRANTIES WITH RESPECT TO THE SERVICE (IN EACH CASE
                                        WHETHER EXPRESS OR IMPLIED BY LAW, COURSE OF DEALING, COURSE OF PERFORMANCE,
                                        USAGE OF TRADE OR OTHERWISE), INCLUDING ANY WARRANTY (A) OF MERCHANTABILITY,
                                        FITNESS FOR A PARTICULAR PURPOSE, OR NONINFRINGEMENT, (B) THAT THE SERVICE WILL
                                        MEET CUSTOMER’S REQUIREMENTS, WILL ALWAYS BE AVAILABLE, ACCESSIBLE,
                                        UNINTERRUPTED, TIMELY, SECURE OR OPERATE WITHOUT ERROR, (C) AS TO THE RESULTS
                                        THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE, OR (D) AS TO THE ACCURACY OR
                                        RELIABILITY OF ANY INFORMATION OBTAINED FROM THE SERVICE.
                                    </p>
                                </li>
                                <li>
                                    <h4>Additional Disclaimer.</h4>
                                    <p>
                                        CUSTOMER ACKNOWLEDGES THAT THE SERVICE IS HOSTED BY A
                                        THIRD PARTY HOSTING PROVIDER (THE “HOSTING CONTRACTOR”) AND USES THIRD PARTY
                                        SERVER HARDWARE, DISK STORAGE, FIREWALL PROTECTION, SERVER OPERATING SYSTEMS,
                                        MANAGEMENT PROGRAMS, WEB SERVER PROGRAMS FOR DELIVERY OF THE SERVICES (THE
                                        “HOSTING CONTRACTOR SERVICES”). ADDITIONALLY, Grou.ps USES THIRD PARTIES TO
                                        HELP RECEIVE PAYMENTS (“PAYMENT PROCESSOR”). Grou.ps MAY CHANGE ITS HOSTING
                                        CONTRACTOR AND PAYMENT PROCESSOR AT ANY TIME. YOUR USE OF THE SERVICE IS SUBJECT
                                        TO ANY RESTRICTIONS IMPOSED BY THE HOSTING CONTRACTOR AND THE PAYMENT PROCESSOR,
                                        AS APPLICABLE. NOTWITHSTANDING ANY OTHER PROVISION OF THIS AGREEMENT, Grou.ps
                                        SHALL NOT BE LIABLE FOR ANY PROBLEMS, FAILURES, DEFECTS OR ERRORS WITH THE
                                        SERVICE TO THE EXTENT CAUSED BY THE HOSTING CONTRACTOR OR PAYMENT PROCESSOR.
                                        CUSTOMER ACKNOWLEDGES THAT THE FEES PAYABLE FOR THE SERVICE REFLECT THE FACT
                                        THAT Grou.ps IS NOT RESPONSIBLE FOR THE ACTS AND OMISSIONS OF THE HOSTING
                                        CONTRACTOR OR PAYMENT PROCESSOR, AND THAT Grou.ps COULD NOT AFFORD TO PROVIDE
                                        THE SERVICE AT THE PRICES OFFERED IF IT WERE RESPONSIBLE FOR THE ACTS OR
                                        OMISSIONS OF THE HOSTING CONTRACTOR OR PAYMENT PROCESSOR
                                    </p>
                                </li>
                            </ol>
                        </div>
                        <div className="block">
                            <h3>Limitations of Liability.</h3>
                            <ol>
                                <li>
                                    <h4>Damages Cap.</h4>
                                    <p>
                                        TO THE FULLEST EXTENT PERMISSIBLE BY LAW, Grou.ps’ TOTAL
                                        LIABILITY FOR ALL DAMAGES ARISING OUT OF OR RELATED TO THE SERVICE OR THIS
                                        AGREEMENT, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, SHALL
                                        NOT EXCEED THE TOTAL AMOUNT OF FEES PAID BY CUSTOMER TO Grou.ps UNDER THIS
                                        AGREEMENT WITH RESPECT TO THE THEN-CURRENT SUBSCRIPTION TERM.
                                    </p>
                                </li>
                                <li>
                                    <h4>Disclaimer of Indirect Damages.</h4>
                                    <p>
                                        EXCEPT FOR (A) CUSTOMER’S OBLIGATION TO PAY
                                        ALL AMOUNTS DUE HEREUNDER; (B) ITS INDEMNIFICATION OBLIGATIONS; AND (C) ITS
                                        BREACH OF ANY INTELLECTUAL PROPERTY OR CONFIDENTIALITY OBLIGATIONS OR
                                        RESTRICTIONS HEREIN (INCLUDING ANY LIMITATIONS OR RESTRICTIONS ON USE OF THE
                                        SERVICE), IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR ANY INDIRECT,
                                        CONSEQUENTIAL, INCIDENTAL, SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES (INCLUDING
                                        LOSS OF DATA, PROFITS OR REVENUE) ARISING OUT OF OR RELATED TO THE SERVICE OR
                                        THIS AGREEMENT, WHETHER SUCH DAMAGES ARISE IN CONTRACT, TORT (INCLUDING
                                        NEGLIGENCE) OR OTHERWISE.
                                    </p>
                                </li>
                                <li>
                                    <h4>Basis of the Bargain.</h4>
                                    <p>
                                        THE PARTIES AGREE THAT THE LIMITATIONS OF LIABILITY SET
                                        FORTH IN THIS SECTION 8 ARE A FUNDAMENTAL BASIS OF THE BARGAIN, THAT Grou.ps
                                        HAS SET ITS FEES IN RELIANCE ON THE ENFORCEABILITY OF THESE PROVISIONS, AND THAT
                                        THEY SHALL APPLY NOTWITHSTANDING THAT ANY REMEDY SHALL FAIL ITS ESSENTIAL
                                        PURPOSE.
                                    </p>
                                </li>
                            </ol>
                        </div>
                        <div className="block">
                            <h3>Indemnification.</h3>
                            <ol>
                                <li>
                                    <h4>Grou.ps Indemnification.</h4>
                                    <p>
                                        Grou.ps shall defend, indemnify and hold
                                        harmless Customer and its directors, officers, and employees (“Customer
                                        Indemnified Parties”) from and against any third party claims, actions,
                                        proceedings, demands, lawsuits, damages, liabilities and expenses (including
                                        reasonable attorneys’ fees and court costs) (collectively, “Claims”) to the
                                        extent the Service infringes, misappropriates or otherwise violates
                                        (collectively, “Infringes”) any third party intellectual property or proprietary
                                        right (excluding patents).
                                    </p>
                                </li>
                                <li>
                                    <h4>Customer Indemnification.</h4>
                                    <p>
                                        Customer shall defend, indemnify and hold harmless
                                        Grou.ps and its directors, officers, employees, agents and providers
                                        (“Grou.ps Indemnified Parties”) from and against any Claims based on the
                                        Customer Data and to the extent that such Claim does not arise out of any action
                                        of Grou.ps in the manipulating and transmitting the Customer Data in a manner
                                        not related to the provision of the Services.
                                    </p>
                                </li>
                                <li>
                                    <h4>Indemnification Process.</h4>
                                    <p>
                                        As conditions of the indemnification obligations in
                                        Sections 9.1-9.2 above: (a) the applicable Customer Indemnified Party or
                                        Grou.ps Indemnified Party (the “Indemnitee”) will provide the indemnifying
                                        Party (the “Indemnitor”) with prompt written notice of any Claim for which
                                        indemnification is sought (provided that failure to so notify will not remove
                                        the Indemnitor’s indemnification obligations except to the extent it is
                                        prejudiced thereby), (b) the Indemnitee will permit the Indemnitor to control
                                        the defense and settlement of such Claim, and (c) the Indemnitee will reasonably
                                        cooperate with the Indemnitor in connection with the Indemnitor’s evaluation,
                                        defense and settlement of such Claim. In defending any Claim, the Indemnitor
                                        shall use counsel reasonably satisfactory to the other Party. The Indemnitor
                                        shall not settle or compromise any such Claim or consent to the entry of any
                                        judgment without the prior written consent of the other Party (not unreasonably
                                        withheld).
                                    </p>
                                </li>
                                <li>
                                    <h4>Exclusions.</h4>
                                    <p>
                                        Grou.ps’ obligations in Section 9.1 above shall not apply to
                                        any Claim to the extent arising from or relating to (a) misuse of the Service
                                        not strictly in accordance with the documentation therefor, Grou.ps’
                                        instructions, and this Agreement; (b) any modification, alteration or conversion
                                        of the Service not created or approved in writing by Grou.ps; (c) any
                                        combination of the Service with any computer, hardware, software or service not
                                        provided by Grou.ps; (d) Grou.ps’ compliance with specifications or other
                                        requirements of Customer; or (e) any third party data or Customer Data. If the
                                        Service is or may be subject to a Claim of Infringement described in Section 9.1
                                        above, Grou.ps may, at its cost and sole discretion: (i) obtain the right for
                                        Customer to continue using the Service as contemplated herein; (ii) replace or
                                        modify the Service so that it becomes non-Infringing without substantially
                                        compromising its principal functions; or (iii) to the extent the foregoing are
                                        not commercially reasonable, terminate this Agreement and return to Customer any
                                        pre-paid fees for the Service associated with the then-current Subscription
                                        Term. Grou.ps’ obligations in this Section 9 shall be Grou.ps’ sole
                                        obligations, and Customer’s sole remedies, in the event of any Infringement of
                                        intellectual property or proprietary rights by or related to the Service.
                                    </p>
                                </li>
                            </ol>
                        </div>
                        <div className="block">
                            <h3>Confidentiality.</h3>
                            <ol>
                                <li>
                                    <h4>Definition.</h4>
                                    <p>
                                        “Confidential Information” means information that is disclosed by
                                        either Party (the “Disclosing Party”) to the other Party (the “Receiving Party”)
                                        hereunder during the Term that is clearly labeled or identified as confidential
                                        or proprietary when disclosed, or that, under the circumstances, should
                                        reasonably be treated as confidential, including without limitation information
                                        (tangible or intangible) regarding a Party’s technology, designs, techniques,
                                        research, know-how, specifications, product plans, pricing, customer
                                        information, user data, current or future strategic information, current or
                                        future business plans, policies or practices, employee information, and other
                                        business and technical information. “Confidential Information” shall not include
                                        any information that (a) is or becomes generally known to the public through no
                                        fault of, or breach of this Agreement by, the Receiving Party; (b) is rightfully
                                        in the Receiving Party’s possession at the time of disclosure without an
                                        obligation of confidentiality; (c) is independently developed by the Receiving
                                        Party without use of the Disclosing Party’s Confidential Information; or (d) is
                                        rightfully obtained by the Receiving Party from a third party without
                                        restriction on use or disclosure. In addition, (i) the terms and conditions of
                                        this Agreement shall be deemed to be Confidential Information of both Parties;
                                        (ii) the Service and Grou.ps Technology shall be deemed Confidential
                                        Information of Grou.ps, regardless of whether or not they are labeled or
                                        identified, or would reasonably be considered confidential; and (iii) Customer
                                        Data shall be deemed Confidential Information of Customer.
                                    </p>
                                </li>
                                <li>
                                    <h4>General Obligations.</h4>
                                    <p>
                                        Each Party agrees that it will during the Term and
                                        thereafter (a) not disclose the other Party’s Confidential Information to any
                                        third party (other than as permitted in the last sentence of this paragraph);
                                        (b) use the other Party’s Confidential Information only to the extent reasonably
                                        necessary to perform its obligations or exercise its rights under this
                                        Agreement; (c) disclose the other Party’s Confidential Information only to those
                                        of its employees and independent contractors who reasonably need to know such
                                        information for purposes of this Agreement and who are bound by confidentiality
                                        obligations offering substantially similar protection to those in this Section
                                        10; and (d) protect all Confidential Information of the other Party from
                                        unauthorized use, access, or disclosure in the same manner as it protects its
                                        own confidential information of a similar nature, and in no event with less than
                                        reasonable care. Notwithstanding the above, this paragraph shall not prohibit:
                                        (i) a Party from disclosing Confidential Information of the other Party to the
                                        extent required by applicable law, rule or regulation (including a court order
                                        or other government order); provided that such Party provides the other Party
                                        prior written notice of such disclosure, to the extent practicable, and
                                        reasonably cooperates with efforts of the other Party to seek confidential
                                        treatment thereof, to the extent such cooperation is requested by the other
                                        Party; or (ii) a Party from disclosing the terms and conditions of this
                                        Agreement to its attorneys and financial advisors, or current or potential
                                        lenders, other sources of financing, investors or acquirors; provided that such
                                        third parties are bound by confidentiality obligations offering substantially
                                        similar protection to those in this Section 10 (provided further that such third
                                        parties are only permitted to use such information for the purpose of advising,
                                        lending or providing financing to, or investing in or acquiring, such Party, as
                                        applicable).
                                    </p>
                                </li>
                                <li>
                                    <h4>Return or Destruction.</h4>
                                    <p>
                                        Except as otherwise expressly provided in this
                                        Agreement, the Receiving Party will return to the Disclosing Party, or destroy
                                        or erase, the Disclosing Party’s Confidential Information in tangible form, upon
                                        the termination of this Agreement; provided that (a) Receiving Party may retain
                                        a copy of Disclosing Party’s Confidential Information solely for the purposes of
                                        tracking Receiving Party’s rights and obligations hereunder with respect
                                        thereto, (b) Receiving Party may retain copies of Disclosing Party’s
                                        Confidential Information solely to the extent required by law or by applicable
                                        professional standards which require such Party to retain copies of its working
                                        papers, and (c) Receiving Party may retain Disclosing Party’s Confidential
                                        Information solely to the extent reasonably necessary for Receiving Party to
                                        exercise rights or perform obligations under this Agreement that survive such
                                        termination.
                                    </p>
                                </li>
                                <li>
                                    <h4>Feedback.</h4>
                                    <p>
                                        Notwithstanding the above or anything to the contrary herein, to
                                        the extent that Customer at any time provides Grou.ps with any feedback or
                                        suggestions regarding the Service, including potential improvements or changes
                                        thereto (collectively, “Feedback”), the Feedback shall not be considered
                                        Confidential Information of Customer, and Grou.ps may use, disclose and
                                        exploit the Feedback in any manner it chooses. All Feedback provided by Customer
                                        is provided “AS IS” and without warranty or representation of any kind.
                                    </p>
                                </li>
                            </ol>
                        </div>
                        <div className="block">
                        <h3>Miscellaneous.</h3>
                        <ol>
                            <li>
                                <h4>Compliance with Laws.</h4>
                                <p>
                                    Each Party shall comply with all laws, rules,
                                    regulations and ordinances applicable to its activities hereunder.
                                </p>
                            </li>
                            <li>
                                <h4>Assignment.</h4>
                                <p>
                                    Customer may not assign this Agreement, or assign any of its
                                    rights or delegate any of its obligations under this Agreement, without the
                                    prior written consent of Grou.ps. Any purported assignment or delegation in
                                    violation of this paragraph is null and void. This Agreement will bind and inure
                                    to the benefit of each Party’s successor and permitted assigns. Notwithstanding
                                    the foregoing, Grou.ps may assign this Agreement to any acquirer of all or
                                    substantially all of its assets as they relate to this Agreement.
                                </p>
                            </li>
                            <li>
                                <h4>Entire Agreement; Amendment.</h4>
                                <p>
                                    This Agreement along with the subscription
                                    arrangement chosen by the Customer at [https://grou.ps/pricing/] contains
                                    the complete understanding and agreement of the Parties with respect to the
                                    subject matter hereof, and supersedes all prior or contemporaneous agreements or
                                    understandings, oral or written, with respect thereto.
                                </p>
                            </li>
                            <li>
                                <h4>Notices.</h4>
                                <p>
                                    Grou.ps may give any notices issued in connection with this
                                    Agreement by email to Customer at the email address given by Customer when
                                    creating its account, and such notices shall be effective upon confirmation of
                                    transmission to Customer.
                                </p>
                            </li>
                            <li>
                                <h4>Force Majeure.</h4>
                                <p>
                                    Grou.ps shall not be liable or responsible to Customer, nor
                                    be considered to have defaulted or breached this Agreement, for any failure or
                                    delay in fulfilling or performing any provision of this Agreement to the extent
                                    such failure or delay is caused by or results from any act, circumstance or
                                    other cause beyond the reasonable control of Grou.ps, including acts of God,
                                    flood, fire, earthquake, explosion, governmental actions, war, invasion or
                                    hostilities (whether war is declared or not), terrorist threats or acts, riot,
                                    or other civil unrest, national emergency, revolution, insurrection, epidemic,
                                    lockouts, strikes or other labor disputes (whether or not relating to either
                                    Party’s workforce), or restraints or delays affecting carriers or inability or
                                    delay in obtaining supplies of adequate or suitable technology or components,
                                    telecommunication breakdown, or power outage.
                                </p>
                            </li>
                            <li>
                                <h4>Publicity.</h4>
                                <p>
                                    Grou.ps shall have the right to use Customer’s name and logo on
                                    client lists published on Grou.ps’ website and in marketing materials.
                                    Grou.ps may announce the relationship hereunder in a press release provided
                                    that Grou.ps obtains Customer’s prior approval of the wording of the release
                                    (not unreasonably withheld).
                                </p>
                            </li>
                            <li>
                                <h4>Choice of Law.</h4>
                                <p>
                                    This Agreement is and will be governed by and construed under
                                    the Federal Arbitration Act, applicable federal law, and the laws of the State
                                    of Nevada, without giving effect to any conflicts of laws provision thereof or
                                    of any other jurisdiction that would produce a contrary result.
                                </p>
                            </li>
                            <li>
                                <h4>Disputes; Arbitration.</h4>
                                <p>
                                    Any and all controversies, disputes, demands, counts,
                                    claims, or causes of action (including the interpretation and scope of this
                                    clause, and the arbitrability of the controversy, dispute, demand, count, claim,
                                    or cause of action) between Customer and Grou.ps or its employees, agents,
                                    successors, or assigns, will exclusively be settled through binding and
                                    confidential arbitration. Arbitration will be subject to the Federal Arbitration
                                    Act and not any state arbitration law. The arbitration will be conducted before
                                    one commercial arbitrator with substantial experience in resolving commercial
                                    contract disputes from the American Arbitration Association (“AAA”). As modified
                                    by this Agreement, and unless otherwise agreed upon by the parties in writing,
                                    the arbitration will be governed by the AAA’s Commercial Arbitration Rules and,
                                    if the arbitrator deems them applicable, the Supplementary Procedures for
                                    Consumer Related Disputes (collectively “Rules and Procedures”). For more
                                    information on AAA, its Rules and Procedures, and how to file an arbitration
                                    claim, you may call AAA at 800-778-7879 or visit the AAA website at
                                    http://www.adr.org.
                                </p>
                                <p>
                                    There is no judge or jury in arbitration, and court review of an arbitration
                                    award is limited. However, an arbitrator can award on an individual basis the
                                    same damages and relief as a court (including injunctive and declaratory relief
                                    or statutory damages), and must follow the terms of this Agreement as a court
                                    would.
                                </p>
                                <p>
                                    Customer and Grou.ps agree as follows: (a) ANY CLAIMS BROUGHT BY A PARTY
                                    MUST BE BROUGHT IN SUCH PARTY’S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR
                                    CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING; (b) THE
                                    ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON’S CLAIMS, MAY NOT OTHERWISE
                                    PRESIDE OVER ANY FORM OF A REPRESENTATIVE OR CLASS PROCEEDING, AND MAY NOT AWARD
                                    CLASS-WIDE RELIEF, (c) in the event that Customer is able to demonstrate that
                                    the costs of arbitration will be prohibitive as compared to costs of litigation,
                                    Grou.ps will pay as much of your filing and hearing fees in connection with
                                    the arbitration as the arbitrator deems necessary to prevent the arbitration
                                    from being cost-prohibitive as compared to the cost of litigation, (d) Grou.ps
                                    also reserves the right in its sole and exclusive discretion to assume
                                    responsibility for all of the costs of the arbitration; (e) the arbitrator will
                                    honor claims of privilege and privacy recognized at law; (f) the arbitration
                                    will be confidential, and neither you nor we may disclose the existence, content
                                    or results of any arbitration, except as may be required by law or for purposes
                                    of enforcement of the arbitration award; (g) the arbitrator may award any
                                    individual relief or individual remedies that are permitted by applicable law;
                                    and (h) each side pays its own attorneys’ fees and expenses unless there is a
                                    statutory provision that requires the prevailing party to be paid its fees and
                                    litigation expenses, and then in such instance, the fees and costs awarded will
                                    be determined by the applicable law.
                                </p>
                                <p>
                                    Notwithstanding the foregoing (i) either Customer or Grou.ps may bring an
                                    individual action in small claims court to the extent eligible, and (ii) either
                                    Party may seek emergency equitable relief before the state or federal courts
                                    located in Colorado in order to maintain the status quo pending arbitration, and
                                    hereby agree to submit to the exclusive personal jurisdiction of the courts
                                    located within Colorado for such purposes. A request for interim measures will
                                    not be deemed a waiver of the right to arbitrate.
                                </p>
                            </li>
                            <li>
                                <h4>Relationship of the Parties.</h4>
                                <p>
                                    The relationship between the Parties is that of
                                    independent contractors. Nothing contained in this Agreement shall be construed
                                    as creating any agency, partnership, joint venture or other form of joint
                                    enterprise or employment relationship between the Parties, and neither Party
                                    shall have authority to contract for or bind the other Party in any manner
                                    whatsoever.
                                </p>
                            </li>
                            <li>
                                <h4>Waiver.</h4>
                                <p>
                                    No waiver by either Party of any of the provision of this Agreement
                                    is effective unless explicitly set forth in writing and signed by such Party. No
                                    failure to exercise, or delay in exercising, any right, remedy, power or
                                    privilege arising from this Agreement operates, or may be construed, as a waiver
                                    thereof. No single or partial exercise of any right, remedy, power or privilege
                                    hereunder precludes any other or further exercise thereof or the exercise of any
                                    other right, remedy, power or privilege.
                                </p>
                            </li>
                            <li>
                                <h4>Severability.</h4>
                                <p>
                                    If any provision of this Agreement is invalid, illegal or
                                    unenforceable in any jurisdiction, such invalidity, illegality or
                                    unenforceability shall not affect any other provision of this Agreement or
                                    invalidate or render unenforceable such provision in any other jurisdiction.
                                </p>
                            </li>
                            <li>
                                <h4>Headings; Interpretation.</h4>
                                <p>
                                    Headings are provided for convenience only and will
                                    not be used to interpret the substance of this Agreement. Unless the intent is
                                    expressly otherwise in specific instances, use of the words “include,”
                                    “includes,” or “including” in this Agreement shall not be limiting and “or”
                                    shall not be exclusive.
                                </p>
                            </li>
                        </ol>
                        </div>
                    </section>
                </div>
            </Main>
        )
    }
}