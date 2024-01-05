import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import axios from '../../../api/axios';

function Content(props) {
    const [item, setItem] = useState({});
    const { blogId } = props;

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
             
    //             const response = await axios.get(`api/blogsingle/${blogId}`); 
    //             setItem(response.data);
    //         } catch (error) {
          
    //             console.error('Error fetching blog post data:', error);
    //         }
    //     };

    //     fetchData();
    // },[blogId]);
    return (
        <div className="post-single">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div>
                                <form className='  px-3 pb-4 pt-4' style={{ borderRadius: '8px' }}>
                                    <div className=''>
                                        <p className='text-center text-danger form-hedline'>Connect With Us</p>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                required
                                                className="form-control"
                                                name="fname"
                                                pattern="[A-Za-z]+"
                                                // value={formData.fname}
                                                // onChange={this.handleInputChange}
                                            />

                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                required
                                                className="form-control"
                                                name="lname"
                                                pattern="[A-Za-z]+"
                                                // value={formData.lname}
                                                // onChange={this.handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group col-lg-12">

                                            <input
                                                type="text"
                                                placeholder="Email Address"
                                                required
                                                className="form-control"
                                                name="email"
                                                // value={formData.email}
                                                pattern=".\.com."
                                                // onChange={this.handleInputChange}

                                            />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input
                                                type="text"
                                                placeholder="Phone no"
                                                required
                                                className="form-control"
                                                name="Phonenumber"
                                                // value={formData.Phonenumber}
                                                // onChange={this.handleInputChange}
                                                pattern="[0-9]*"
                                                maxLength="10"

                                            />

                                        </div>
                                        <div className="form-group col-lg-6">
                                            <select
                                                className="form-control"
                                                name="Purpose of Contact"
                                                required
                                                // value={formData.purpose}
                                                // onChange={this.handleInputChange}
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
                                                name="message"
                                                className="form-control"
                                                required
                                                placeholder="Type your message"
                                                rows={3}
                                                // value={formData.message}
                                                // onChange={this.handleInputChange}
                                                pattern="[A-Za-z.,]+"
                                                maxLength="50"
                                            />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <button type="submit" value="Send" className="btn-custom primary mt-3 mx-auto" name="button">Send Message</button>
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
