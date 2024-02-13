import React, { useEffect, useState } from 'react';
// import { Link,useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';

function Content(){
     //  start main function
     const currentTimestamp = new Date().toISOString();
  const [formData, setformData] = useState({
    id :'',
    Firstname :'',
    Lastname  :'',
    Email :'',
    Phonenumber :'',
    PurposeofContact :'',
    Message:'',
    AddedTimeStamp :currentTimestamp,
    updatedTimeStamp :currentTimestamp,
  });

  const handleChange = (event) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value
    })
};

    const handlAddData = async (event) => {
        // event.preventDefault();
    
        try{
          let res = await axios.post('api/addindusdata/',formData  );
          alert("Successfully Submited Your Query Thank You!")
        }
        catch(error){
            // alert("Oops! Unable to send information. Please check the provided details and try again later.")
        }
      }

      useEffect (()=>{
        handlAddData();
      },{})

    return (
        <div className="post-single" style={{backgroundColor:"#efeddc"}}>
            <div className="section">
                <div className="container-fluid">
                    <div className="row">
                        <div className='col-md-3'></div>
                        <div className="col-md-6 my-auto">
                            <div>
                                <form className='  px-3 pb-4 pt-4' style={{ borderRadius: '8px' }}>
                                    <div className=''>
                                        <p className='text-center text-danger form-hedline'>Book an Appointment</p>
                                        <p className="subtitle" style={{ textAlign: 'center' }}>
                                            Interested in discussing potential collaborations, exploring our product range, or learning more about Tenali Double Horse? Leave your details below, and our team will get in touch with you to schedule a personalized appointment at the Gulfood Expo.
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-lg-12">
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                required
                                                className="form-control"
                                                name="Firstname"
                                                pattern="[A-Za-z]+"
                                                onChange={handleChange}
                                            />

                                        </div>
                                        <div className="form-group col-lg-12">
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                required
                                                className="form-control"
                                                name="Lastname"
                                                pattern="[A-Za-z]+"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group col-lg-12">

                                            <input
                                                type="text"
                                                placeholder="Email Address"
                                                required
                                                className="form-control"
                                                name="Email"
                                                // pattern=".\.com."
                                                onChange={handleChange}

                                            />
                                        </div>
                                        <div className="form-group col-lg-12">
                                            <input
                                                type="text"
                                                placeholder="Phone no"
                                                required
                                                className="form-control"
                                                name="Phonenumber"
                                                onChange={handleChange}
                                                pattern="[0-9]*"
                                                maxLength="10"

                                            />

                                        </div>
                                        <div className="form-group col-lg-12">
                                            <select
                                                className="form-control"
                                                name="PurposeofContact"
                                                required
                                                onChange={handleChange}
                                            >
                                                <option value="">Purpose of Contact</option>
                                                <option value="export">export</option>
                                                <option value="distribution">Distribution Enquiry</option>
                                                <option value="Feedback">Feedback</option>
                                                <option value="Suggestions">Suggestions</option>
                                                <option value="Other">Job Enquiry</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-lg-12">
                                            <textarea
                                                name="Message"
                                                className="form-control"
                                                required
                                                placeholder="Type your message"
                                                rows={3}
                                                onChange={handleChange}
                                                pattern="[A-Za-z.,]+"
                                                maxLength="500"
                                            />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <button type="submit" value="Send" className="btn-custom primary mt-3 mx-auto" name="button" onClick={handlAddData} >Send Message</button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 my-auto">
                        <img src={process.env.PUBLIC_URL + "/assets/img/banner/dal-se-lekar.png"} alt="img" className='' style={{height:"40%"}}/>
                        </div>*/ }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
