
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Messenger from '../home/Messenger';
import { Fragment } from 'react';
import Feedback  from '../home/Feedback';
class Shippingpolicy extends Component {
  render() {

return (
  <Fragment>
    <div className="section">
        <h1 className='text-center legeal-title'> Shipping Policy</h1>
        <div className='container'>
        <div >
                <h5><u>Shipping of Products</u></h5>
                <ul className='terms'>
                    <li>Orders placed by You on the Platform are typically processed within 2 (two) business days from the date of purchase. The Products ordered will be delivered
to You within 2 (two) – 5 (five) business days. At times when we are experiencing high volume of orders, shipments may get delayed by a few days, in which case, You will be intimated by email or telephone call (on the details shared by You at the time of placing Your order/registering on the Platform).</li>
                    <li>Once Your order is dispatched, You will receive an e-mail or SMS updating You with the details of the time and progress of the delivery. On the date of delivery, the person delivering the Product will reach out to You (on the number shared by You at the time of placing Your order/registering on the Platform) to confirm Your presence to receive the Order.</li>
                    <li>You are requested to be available on the date of delivery since the Products will either be hand delivered to You or to someone appointed by You to collect the order on Your behalf.</li>
                    <li>All deliveries sent to residential or commercial spaces require a receipt signature for authentication. We take no responsibility for shipment receipt signed by an alternative person other than the person ordering the Product or someone appointed by You to receive the order at the delivery address. Maximum of 2
(two) attempts will be made on the date of delivery to deliver the Product at the address indicated as the delivery point, at the time of placing the order post which the order will be cancelled, and refund will not be given to You.</li>
                    <li> We do not take responsibility for an incorrect address that was provided at the time of placing the order. In case of an incorrect address, the product will be
returned by the rider and refund will not be given to You.</li>
                      <li>All claims for damages must be reported to customer service through an email at: <a href="mailto:Info@tenalidoublehorse.com">Info@tenalidoublehorse.com</a> within 24 (twenty four) hours of order delivery.</li>
                      <li>For each order, a shipment charge will have to be paid by the customer. The exact shipment charges for the order will be shown to the customer at the order checkout page.</li>
                      <li>As soon as the customer receives the Product, the customer should store it under the storage conditions mentioned on the back of the pack. No  replacement or refunds will be done for any quality loss or damages if the Product is not stored in the storage conditions mentioned at the back of the pack.</li>
 
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

export default Shippingpolicy;
