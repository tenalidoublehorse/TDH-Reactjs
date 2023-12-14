
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Messenger  from '../home/Messenger';
import Feedback from '../home/Feedback';

import { Fragment } from 'react';
class refunploicy extends Component {
  render() {

return (
    <Fragment>
    <div className="section">
        <h1 className='text-center legeal-title'>Refund Policy</h1>
        <div className='container'>
            <div >
                <h5><u>Cancellation and Exchange</u></h5>
                <ul className='terms'>
                    <li>An order placed and confirmed cannot be cancelled until the Products have been delivered to You. You may deny or refuse to take delivery of the Products, upon which the order will be cancelled, and refund will not be given to You.</li>
                    <li>You are entitled to a 100% replacement of order in case You received something else than what You ordered or Your order reached You in a distorted manner. If Your order includes multiple items, partial replacement of the required items is also possible. If purchase of the Product is made under a special promotional offer or any special scheme, special rules shall apply for replacement.</li>
                    <li>Replacement process must be initiated within 24 (twenty four) hours from the time of receipt of order by the User. The Product must be in an unused state
                        before seeking a for a replacement and should be accompanied by a copy of the original receipt or invoice issued at the time of sale of the Product.</li>
                    <li>Any request for replacement will be accepted only after inspection of the Product. Once the replacement request is placed with the customer service, the logistics partner will arrange for a pickup of the Product from the address provided at the time of placing the order within 3 (three) working days. Once the Product is received, it takes about 1 (one) working day for inspection team to confirm on the replacement. On confirmation of the genuine need for replacement of the Product, we shall replace the desired Product in 5 (five) working days.</li>
                    <li>At every step of the replacement process, we shall keep You updated through emails and/or SMS. However, if You have any queries before, during or after the replacement is completed, feel free to contact us at: <a href="mailto:Info@tenalidoublehorse.com">Info@tenalidoublehorse.com</a> .</li>
                </ul>
            </div>
        </div>
    </div>
  <Messenger/>
  <Feedback/>
  </Fragment>
);
}
}

export default refunploicy;
