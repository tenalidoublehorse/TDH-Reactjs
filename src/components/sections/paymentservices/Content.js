
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Messenger  from '../home/Messenger';
import Feedback from '../home/Feedback';

import { Fragment } from 'react';
class paymentservices extends Component {
  render() {

return (
    <Fragment>
    <div className="section">
        <h1 className='text-center legeal-title'> Payment Services</h1>
        <div className='container'>
            <div >
                <ul className='terms'>
                    <li>All payments in respect of the Products shall be made to Us through the Platform. To the extent permitted by applicable law and subject to Our Privacy Policy, You acknowledge and agree that We may use certain third-party vendors and service providers, including payment gateways, to process payments and manage payment card information.</li>
                    <li> In order to make payments online, You undertake to use a valid payment card or bank details or third party wallets or details required for any other mode of
payment (“Payment Details”) with the authority to use the same, to have sufficient funds or credit available to complete the payment on the Platform in good
standing. By providing the Payment Details, You represent, warrant, and covenant that.</li>
                    <li> You are legally authorized to provide such Payment Details.</li>
                    <li>You are legally authorized to perform payments using such Payment Details and such action does not violate the terms and conditions applicable to Your use of such Payment Details or applicable law.</li>
                </ul>
            </div>
            <div >
                <h5>You agree that You are responsible for any fees charged by Your mobile carrier in connection with Your use of the payment services through Your mobile. We shall use the Payment Details as described in Our Privacy Policy. You may add, delete, and edit the Payment Details You have provided from time to time through the Platform.</h5>
                <div className='terms-p' >
                <p>The payment receipt for completion of a transaction shall be made available on the Platform and also sent to Your email address.
                </p>
                <p>Your payment card or bank account or third party wallet does not contain sufficient funds to complete the transaction or the transaction exceeds the credit limit in respect of the Payment Details provided;
                </p>
                <p>You have not provided Us with correct Payment Details.
                </p>
                <p>Your payment card has expired.</p>
                <p>Circumstances beyond Our control (such as, but not limited to, power outages, interruptions of cellular service, or any other interferences from an outside force) prevent the execution of the transaction.</p>
                <p>The Platform shall not be responsible for any unauthorized transactions conducted on our Platform using Your payment card or internet banking. The
                Platform shall not be obligated to refund any money to You in such instances.</p>
                <p>All information that is collected at the time of payment, like card details, names, passwords etc. are encrypted using Secure Socket Layer (SSL) coding</p>
            </div>
            </div>
          
           
        </div>
    </div>
    <Messenger/>
    <Feedback/>
  </Fragment>
);
}
}

export default paymentservices;
