import React, { useEffect, useState } from 'react';

import instaData from '../../../data/awards.json';
import ReactPaginate from 'react-paginate';
import { Card, Button, Modal } from 'react-bootstrap';
import Feedback from '../home/Feedback';
import { useHistory } from 'react-router-dom';

import Messenger from '../home/Messenger';

function Awards() {

  const [selectedCardData, setSelectedCardData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);


  const publicUrl = process.env.PUBLIC_URL;
  const itemsPerPage = 6;
  const [pageNumber, setPageNumber] = useState(0);

  const pageCount = Math.ceil(instaData.length / itemsPerPage);
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  const history = useHistory();
  const handleShow = (item) => {
    setSelectedCardData(item); // Set the selected card's data
    // setShowModal(true);
    history.push(`/awardetails/${item.id}`);
  };
  

  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = instaData.slice(startIndex, endIndex);

  return (
    // <div className="ltn__gallery-area mt-5 mb-5">
    //   <div className="section-title-wrap section-header text-center">
    
    //     <h2 className="title text-center">Honors and Accolades That Define Us</h2>
    //   </div>
    //   <div className="container">
    //   <div className='row awards '>
      
    //         {displayedItems.map(item => (
               
    //             <Card  className=' d-flex flex-row flex-wrap mb-5 template-shadow rounded-3 wow animate__animated animate__fadeInUp' data-wow-delay={item.delay}>
    //             <div  key={item.id} className='col-12 col-md-6 col-lg-6 py-3' >
                
    //             <img src={process.env.PUBLIC_URL + "/" + item.imageUrl} className='article-img' alt="img" />
                
                
    //             </div>
    //             <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center '>
    //             <Card.Body className='spaces' >
                    
    //                 <Card.Title className='c-title font-bold mb-2 custom-primary'>{item.year}</Card.Title>
                    
                    
                 
    //                 <Card.Text className='c-title font-bold-two mt-2 mb-4' >
    //                 {item.title}
    //                 </Card.Text>
    //                 <Button className='order-item btn-custom btn-sm shadow-none 
    //                  '  onClick={() => handleShow(item)} style={{maxWidth:'fit-content'}}>
    //                     View More<i className=" fas fa-arrow-right ml-2  mt-1"></i>
    //                 </Button>
               
    //             </Card.Body>

    //             </div>
    //             </Card>
                
    //         ))}
       
          
    // </div>
 
    //     <ReactPaginate
    //       previousLabel={'Previous'}
    //       nextLabel={'Next'}
    //       pageCount={pageCount}
    //       onPageChange={handlePageChange}
    //       containerClassName={'pagination'}
    //       activeClassName={'active'}
    //     />
    //     <Feedback/>
 
    //   </div>
    // </div>
    <div className="ltn__gallery-area pt-5 pb-5 awards">
    <div className="section-title-wrap section-header text-center">
      <h2 className="title text-center">Honors and Accolades That Define Us</h2>
    </div>
    <div className="container">
      <div className='row '>
        {displayedItems.map((item, index) => (
          <div key={item.id} className='col-lg-12 '>
            <Card style={{backgroundColor:'#fff7ef'}} className={`d-flex flex-row flex-wrap pb-5 border-middle  wow animate__animated animate__fadeInUp ${index % 2 === 0 ? 'even' : 'odd'}`} data-wow-delay={item.delay}>
              <div className={`col-lg-6 bubble ${index % 2 === 0 ? 'order-lg-1 order  ' : 'order-lg-2 ' }`}>
                <img src={process.env.PUBLIC_URL + "/" + item.imageUrl} className=' img-padding article-img  template-shadow rounded-3 ' alt="img" />
              </div>
              <div className={`col-lg-6 d-flex justify-content-center align-items-start ${index % 2 === 0 ? 'order-lg-2 ' : 'order-lg-1 '}`}>
                <Card.Body className='spaces'>
                  <Card.Title className='c-title font-bold mb-2 custom-primary'>{item.year}</Card.Title>
                  <Card.Text className='c-title font-bold-two mt-2 mb-4'>{item.title}</Card.Text>
                  <Button className='order-item btn-custom btn-sm shadow-none' onClick={() => handleShow(item)} style={{ maxWidth: 'fit-content' }}>
                    View More<i className="fas fa-arrow-right ml-2 mt-1"></i>
                  </Button>
                </Card.Body>
              </div>
              { <div className="vertical-border"></div>}
            </Card>
          </div>
        ))}
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
     
    </div>
  </div>
   
  );
}



export default Awards;
