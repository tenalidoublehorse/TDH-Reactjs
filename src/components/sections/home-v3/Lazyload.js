import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

function Popup() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Set showModal to true when the component mounts (page loads)
    setShowModal(false);
  }, []);
  

  const handleClose = () => {
    // Close the modal
    setShowModal(false);
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose} centered className='popkl' >
      <Button variant="danger" onClick={handleClose} className='closebutton ml-auto' >
      <i className="fas fa-times" />
          </Button>
          
        <div><a href={process.env.PUBLIC_URL + "/#gulfoodexpo"}><img className='relative'  src={process.env.PUBLIC_URL + "/assets/img/misc/tdh-gulfood.jpg"} alt="Gulfood Expo"  /></a></div>
      </Modal>
    </>
  );
}

export default Popup;
