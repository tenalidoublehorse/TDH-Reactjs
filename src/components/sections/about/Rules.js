import React,{Component} from 'react';


class Rules extends Component{
    render(){
        return(
            <div className='pb-4 pt-4 values-section'>
                <div className='container mt-md-5 mt-sm-5 mb-5'>
                    <div className="row  rules-container ">
                        <div className="col-lg-6 col-md-12  ">
                            <div className="tdh-legacy-principles p-3  border-0 shadow rounded-3">
                                <h5 className='custom-primary text-start pt-3'>Our History</h5>
                                <p className="para" style={{ textAlign: 'justify' }}>From the very start, the entire Tenali Double Horse team has always been focused on fanatically serving our consumers. We believe the only way to be successful is to truly understand the market requirements and provide the products our consumers need and cherish.</p>
                                <p className="para" style={{ textAlign: 'justify' }}>Now we have grown to a huge team of service personnel working out of our headquarters in Tenali. By staying humble and focused on bringing the heart to quality, we are encouraging more online business owners to make their impact every day.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 " >
                            <div className="tdh-legacy-principles p-3  border-0 shadow rounded-3">
                                <h5 className='custom-primary text-start pt-3'>Our Core Values </h5>
                                {/* Our Principles */}
                                <p className="para" style={{ textAlign: 'justify' }}>We strongly believe that commitment and loyalty are primary work ethics. And in its decades of service, these are what brought the Tenali Double Horse success without fail. As a result, Tenali Double Horse stands committed to serving its consumers with products of the highest quality and keeps striving to exceed their expectations and remain their favorite choice forever.</p>
                                {/* <br/> */}
                                <p className='para' style={{ textAlign: 'justify' }}>A higher amount of dedication and commitment is shown towards our team, which consists of hundreds of employees, because of whom we are who we are today.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rules;