import React, { useEffect, useState } from 'react';
// import { Link,useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';

function Content(){
     //  start main function
  const [formData, setformData] = useState({
    id :'',
    Firstname :'',
    Lastname  :'',
    Email :'',
    Phonenumber :'',
    PurposeofContact :'',
    Message:'',
    AddedTimeStamp :'2023-04-05T13:05:52Z',
    updatedTimeStamp :'2023-04-05T13:05:52Z',
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
            debugger;
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
        <div className="post-single">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div>
                                <form className='  px-3 pb-4 pt-4' style={{ borderRadius: '8px' }}>
                                    <div className=''>
                                        <p className='text-center text-danger form-hedline'>Get In Touch</p>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-lg-6">
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
                                        <div className="form-group col-lg-6">
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
                                        <div className="form-group col-lg-6">
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
                                        <div className="form-group col-lg-6">
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
                                                maxLength="50"
                                            />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <button type="submit" value="Send" className="btn-custom primary mt-3 mx-auto" name="button" onClick={handlAddData} >Send Message</button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
