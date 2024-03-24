import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

function Popup() {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose} centered className='popkl'>
        <div style={{ position: 'relative' }}>
          <Button  onClick={handleClose} className='closebutton model-close-button' style={{ position: 'absolute', top: '0', right: '0', zIndex: '999' }}>
            <i className="fas fa-times" />
          </Button>
          <a href='https://ipltenalidoublehorse.com/' target='_blank'>
            <img className='relative' src={process.env.PUBLIC_URL + "/assets/img/popup-banner-img.jpg"} alt="Gulfood Expo" />
          </a>
          <Button variant="primary" className="participate-button mb-3" style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}>Click Here</Button>
        </div>
      </Modal>
    </>
  );
}

export default Popup;
