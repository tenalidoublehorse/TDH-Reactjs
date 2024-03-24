import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

function Popup() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Set showModal to true when the component mounts (page loads)
    setShowModal(true);
  }, []);
  

  const handleClose = () => {
    // Close the modal
    setShowModal(false);
  };

  return (
    <>
    <Modal show={showModal} onHide={handleClose} centered className='popkl'>
  <div style={{ position: 'relative' }}>
    <Button variant="danger" onClick={handleClose} className='closebutton' style={{ position: 'absolute', top: '0', right: '0', zIndex: '999' }}>
      <i className="fas fa-times" />
    </Button>
    <a href='https://ipltenalidoublehorse.com/' target='_blank'>
      <img className='relative' src={process.env.PUBLIC_URL + "/assets/img/popup-banner-img.jpg"} alt="Gulfood Expo" />
      <Button variant="primary" className="participate-button" style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)' }}>Participate</Button>
    </a>
  </div>
</Modal>
    </>
  );
}

export default Popup;
