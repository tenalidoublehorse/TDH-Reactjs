import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import $ from 'jquery';
// import 'magnific-popup';
import instaData from '../../../data/awards.json';
import ReactPaginate from 'react-paginate';
import { Card, Button, Modal } from 'react-bootstrap';
import Feedback from '../home/Feedback';
import Messenger from '../home/Messenger';
function Awards() {

  const [selectedCardData, setSelectedCardData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);

  const publicUrl = process.env.PUBLIC_URL;
  const itemsPerPage = 6;
  const [pageNumber, setPageNumber] = useState(0);

  const pageCount = Math.ceil(instaData.length / itemsPerPage);
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  const handleShow = (item) => {
    setSelectedCardData(item); // Set the selected card's data
    setShowModal(true); // Open the modal
  };

  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = instaData.slice(startIndex, endIndex);

  return (
    <div className="ltn__gallery-area mt-5 mb-5">
      <div className="section-title-wrap section-header text-center">
        <h5 className="custom-primary text-center">Proud Moments</h5>
        <h2 className="title text-center">Honors and Accolades That Define Us</h2>
      </div>
      <div className="container">
      <div className='row awards '>
       
            {displayedItems.map(item => (
                <div className='col-sm-12 col-md-4 col-lg-4 mb-5'>
                <Card key={item.id} className='shadow'>
                <img src={process.env.PUBLIC_URL + "/" + item.imageUrl} alt="img" />
                <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                    <Card.Title>{item.year}</Card.Title>
                    <Button className='btn-sm more-btn'  onClick={() => handleShow(item)}>
                        View
                    </Button>
                    </div>
                    <Card.Text className='c-title'>
                    {item.title}
                    </Card.Text>
                    {/* <Card.Text>
                    {item.description}
                    </Card.Text> */}
                </Card.Body>
                </Card>
                </div>
            ))}
       
            <Modal show={showModal} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                <Modal.Title>{selectedCardData ? selectedCardData.imageUrl : ''}</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <div >
                    
                       <div className='row d-flex'>
                          <div>
                          <img src={process.env.PUBLIC_URL + "/" +  (selectedCardData ? selectedCardData.imageUrl : "")} alt="img" />
                          </div>
                          <div className='pop-text'>
                          <p className='px-2'>{selectedCardData ? selectedCardData.year : ''}</p>
                          <h5 className='px-2'>{selectedCardData ? selectedCardData.title : ''}</h5>
                          <p className='px-2'>{selectedCardData ? selectedCardData.description : ''}</p>
                          </div>
                          <Button variant="secondary" className='cross-btn' onClick={handleClose}>
                            X
                          </Button>
                       </div>
                    </div>
                  
                    
                </Modal.Body>
          </Modal>
    </div>
 
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
        <Feedback/>
        <Messenger/>
      </div>
    </div>
    
  );
}



export default Awards;
