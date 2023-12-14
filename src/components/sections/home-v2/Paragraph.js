import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import pdffile from '../../layouts/tdh-brouchure.pdf'

class Paragraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }
  handleSaveChanges = () => {
    try {
    
      const pdfUrl = process.env.PUBLIC_URL + "/assets/img/people/tdh-brouchure.pdf";
  
      // Open the PDF file URL in a new tab
      window.open(pdfUrl, '_blank');
  
      // Close the modal after saving
      this.handleClose();
    } catch (error) {
      console.error('Error opening PDF:', error);
      // Handle error if needed
    }
  };
  
  

  render() {
    const { show } = this.state;

    return (
      <div className="section suma-section" >
        <div className="container">
          <div className="row align-items-center ">
          <div className="col-sm-12 col-lg-6  content-section order-sm-2 order-lg-1">
              <div className="section-title-wrap mr-lg-30 text-center">
                <h5 className="custom-primary">Explore Our Story</h5>
                <h2 className="title">Download Our Brochure</h2>
                <p className="subtitle mb-3" style={{ textAlign: 'justify' }}>
                Delve into the essence of Tenali Double Horse with our comprehensive company brochure. Uncover our heritage, products, and commitment to quality in this informative guide.
                </p>
                <a
                  href={pdffile}
                  download="tdh-brouchure.pdf"
                  className="btn-custom btn-sm shadow-none suma"
                  target="_blank"
                  type="application/pdf"
                >
                  Download Brochure
                </a>
              
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 mb-lg-30 suma-img-explore order-sm-1 order-lg-2">
              <img src={process.env.PUBLIC_URL + "/assets/img/misc/Suma-1600x1279.png"} alt="img" />
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Paragraph;
