import React, { Component, Fragment } from 'react';
// import location from '../../../data/restaurant.json';
import L from 'leaflet';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Factorylocation from './Factorylocation';
import Messenger from '../home/Messenger';
import Feedback from '../home/Feedback';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import Maplocations from './Maplocations';



const customMarker = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
    iconSize: [32, 32],
});

class Content extends Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.state = {
          isSubmitted: false,
          formData: {
            fname: '',
            lname: '',
            email: '',
            Phonenumber: '',
            purpose: '',
            subject: '',
            message: '',
          },
         
        };
      }
    
      handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
          formData: {
            ...prevState.formData,
            [name]: value,
          },
        }));
      };

      // handleRecaptchaChange = (value) => {
      //   this.setState({ recaptchaValue: value });
      // };

      sendEmail = async (e) => {
        e.preventDefault();
       
    
        try {
          await emailjs.sendForm('service_u0jehlt', 'template_3b2mxe5', this.form.current, 'cjCRUWDX0cKAQSKL6')
          
          // Reset the form fields
          this.setState((prevState) => ({
            formData: {
              fname: '',
              lname: '',
              email: '',
              Phonenumber: '',
              purpose: '',
              subject: '',
              message: '',
            },
            isSubmitted: true,
           
          }));
          alert("Message successfully sent!");
        } catch (error) {
          console.log(error.text);
        }
      };
    
    render() {
        const { formData, isSubmitted } = this.state;
        return (
            <Fragment>
            
            <div className="section1" style={{ paddingBottom: '0px' }}>

              <div className="fluid-container locations-wrapper ">
                <div className="container">
                  <div className="row  p-2">
                    <div className="col-lg-7  mb-lg-5 d-flex align-items-center">
                      <div className='container contact-container'>
                      <div className="row ">
                      <h5 className="custom-primary text-start white-bg">Contact Us</h5>
                        <h3 className="">Honors and Accolades That<br />Define Us</h3>
                        <p>Find our corporate and factory addresses along with contact information. We're here to assist you. Feel free to get in touch for inquiries, feedback, or any assistance you need.</p>
                      </div>
                      <div className="row contact-info d-flex " style={{marginLeft:"-30px"}}>
                        <div className="col-lg-6">
                          <div className='card shadow p-3 mb-3'>
                          <i className='fas fa-phone mt-3'></i>
                            <h5 className="custom-primary">Toll Free Number</h5>
                            <p><a href="tel: 1800 270 567567">1800 270 567567</a></p>
                          </div>


                        </div>
                        <div className="col-lg-6">
                          <div className='card shadow p-3 mb-3'>
                          <i className='fas fa-envelope mt-3 phone-email'></i>
                            <h5 className="custom-primary">Email Address</h5>
                            <p> <a href="mailto: info@tenalidoublehorse.com">info@tenalidoublehorse.com</a></p>
                          </div>

                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="col-lg-5 mt-5">
                      {/* <div className="row  top-row">
                        
                      </div> */}
                      <div>
                      
                        <form className='mb-5 shadow px-3 bg-light pb-4 pt-4' style={{borderRadius:'8px'}} ref={this.form} onSubmit={this.sendEmail}>
                        <div className='form-mess'>
                          <p className='py-3 text-danger'>We Value Your Input</p>
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
                                value={formData.fname}
                                onChange={this.handleInputChange}
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
                                value={formData.lname}
                                onChange={this.handleInputChange}
                              />
                            </div>
                            <div className="form-group col-lg-12">

                              <input
                                type="text"
                                placeholder="Email Address"
                                required
                                className="form-control"
                                name="email"
                                value={formData.email}
                                pattern=".\.com."
                                onChange={this.handleInputChange}
                               
                              />
                            </div>
                            <div className="form-group col-lg-6">
                              <input
                                type="text"
                                placeholder="Phone no"
                                required
                                className="form-control"
                                name="Phonenumber"
                                value={formData.Phonenumber}
                                onChange={this.handleInputChange}
                                pattern="[0-9]*"
                                maxLength="10"
    
                              />

                            </div>
                            <div className="form-group col-lg-6">
                              <select
                                className="form-control"
                                name="purpose"
                                required
                                value={formData.purpose}
                                onChange={this.handleInputChange}
                              >
                                <option value="" disabled>Purpose of Contact</option>
                                <option value="export">Export</option>
                                <option value="distribution">Distribution Enquiry</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Suggestions">Suggestions</option>
                                <option value="Other">Job Enquiry</option>
                              </select>
                            </div>
                            <div className="form-group col-lg-12">
                              <input
                                type="text"
                                placeholder="Subject"
                                required
                                className="form-control"
                                name="subject"
                                value={formData.subject}
                                onChange={this.handleInputChange}
                                pattern="[A-Za-z.,]+"
                                maxLength="50"
                              />
                            </div>
                            <div className="form-group col-lg-12">
                              <textarea
                                name="message"
                                className="form-control"
                                required
                                placeholder="Type your message"
                                rows={3}
                                value={formData.message}
                                onChange={this.handleInputChange}
                                pattern="[A-Za-z.,]+"
                                maxLength="50"
                              />
                            </div>
                          </div>
                          {/* <div className="" >
          <ReCAPTCHA
              ref={this.recaptchaRef}
              sitekey="6LcwDQcoAAAAAIkSarHAe3BinIu75WQ0Ay26ypbP"
          />
        </div> */}

                          <button type="submit" value="Send" className="btn-custom primary mt-3" name="button">Send Message</button>
                        </form>
                        {/* <form className='mb-5' ref={this.form} onSubmit={this.sendEmail}>
                          <div className="row">
                            <div className="form-group col-lg-6">
                              <input
                                type="text"
                                placeholder="First Name"
                                required
                                className="form-control"
                                name="fname"
                                pattern="[A-Za-z]+"
                                value={formData.fname}
                                onChange={this.handleInputChange}
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
                                value={formData.lname}
                                onChange={this.handleInputChange}
                              />
                            </div>
                            <div className="form-group col-lg-12">

                              <input
                                type="text"
                                placeholder="Email Address"
                                required
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={this.handleInputChange}
                                pattern=".*\.com.*"
                               
                                
                               
                              />
                            </div>
                            <div className="form-group col-lg-6">
                              <input
                                type="text"
                                placeholder="Phone no"
                                required
                                className="form-control"
                                name="Phonenumber"
                                value={formData.Phonenumber}
                                onChange={this.handleInputChange}
                                pattern="[0-9]*"
                                maxLength="10"
    
                              />

                            </div>
                            <div className="form-group col-lg-6">
                              <select
                                className="form-control"
                                name="purpose"
                                required
                                value={formData.purpose}
                                onChange={this.handleInputChange}
                              >
                                <option value="" disabled>Purpose of Contact</option>
                                <option value="export">Export</option>
                                <option value="distribution">Distribution Enquiry</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Suggestions">Suggestions</option>
                                <option value="Other">Job Enquiry</option>
                              </select>
                            </div>
                            <div className="form-group col-lg-12">
                              <input
                                type="text"
                                placeholder="Subject"
                                required
                                className="form-control"
                                name="subject"
                                value={formData.subject}
                                onChange={this.handleInputChange}
                                pattern="[A-Za-z.,]+"
                                maxLength="50"
                              />
                            </div>
                            <div className="form-group col-lg-12">
                              <textarea
                                name="message"
                                className="form-control"
                                required
                                placeholder="Type your message"
                                rows={3}
                                value={formData.message}
                                onChange={this.handleInputChange}
                                pattern="[A-Za-z.,]+"
                                maxLength="50"
                              />
                            </div>
                          </div>
                          {/* <div className="" >
          <ReCAPTCHA
              ref={this.recaptchaRef}
              sitekey="6LcwDQcoAAAAAIkSarHAe3BinIu75WQ0Ay26ypbP"
          />
        </div> */}

                          {/* <button type="submit" value="Send" className="btn-custom primary mt-3" name="button">Send Message</button> */}
                        {/* </form> */}

                      </div>
                    </div>
                  </div>
                </div>

                 <Maplocations/>
                <Factorylocation />
              </div>
            </div>
            <Messenger/>
            <Feedback/>
            </Fragment>
        );
    }
}

export default Content;