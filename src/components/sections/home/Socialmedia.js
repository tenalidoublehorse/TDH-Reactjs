import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';





class Socialmedia extends Component {
  componentDidMount() {
    AOS.init({
        duration: 1500, 
    });
}
    render() {
        return (
        <div className=''>
          <div className="social-icons mb-5 mt-3" data-aos="fade-in" data-aos-delay="400" style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
         
          <ul className="wrapper" >
            <li className="icon facebookf">
            <a href="https://www.facebook.com/tenalidoublehorse" target="_blank" rel="noopener noreferrer" className="icon facebookf">
              <span className="tooltip">Facebook</span>
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
              </a>
            </li>
            <li className="icon twittert">
            <a href="https://twitter.com/tnldoublehorse" target="_blank" rel="noopener noreferrer" className="icon twittert">
              <span className="tooltip">Twitter</span>
              <span>
                <i className="fab fa-twitter"></i>
              </span>
              </a>
            </li>
            <li className="icon instagram">
            <a href="https://www.instagram.com/tenalidoublehorse/" target="_blank" rel="noopener noreferrer" className="icon instagram">
              <span className="tooltip">Instagram</span>
              <span>
                <i className="fab fa-instagram"></i>
              </span>
              </a>
            </li>
           
            <li className="icon youtubey">
            <a href="https://www.youtube.com/c/TenaliDoubleHorse" target="_blank" rel="noopener noreferrer" className="icon youtubey">
              <span className="tooltip">Youtube</span>
              <span>
                <i className="fab fa-youtube"></i>
              </span>
              </a>
            </li>
            <li className="icon linked-m">
            <a href="https://www.linkedin.com/company/tenalidoublehorse/" target="_blank" rel="noopener noreferrer" className="icon linked-m">
              <span className="tooltip">Linkedin</span>
              <span>
                <i className="fab fa-linkedin"></i>
              </span>
              </a>
            </li>
          </ul>
          </div>
          </div>
        );
    }
}

export default Socialmedia;