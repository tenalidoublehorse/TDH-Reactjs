import React, { useEffect, useState } from 'react';
import instaData from '../../data/awards.json';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Relatedaward() {
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 6;
  const pageCount = Math.ceil(instaData.length / itemsPerPage);

  const history = useHistory();

  // Shuffle the array to get random order
  const shuffledData = instaData.sort(() => Math.random() - 0.5);

  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = shuffledData.slice(0, 2);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleShow = (item) => {
    setSelectedCardData(item);
    history.push(`/awardetails/${item.id}`);
  };

  return (
    <div className="ltn__gallery-area mt-5 mb-5">
      <div className="container">
        <h3>You might also like</h3>
        <div className='row awards '>
          {displayedItems.map(item => (
            <div className='col-sm-12 col-md-6 col-lg-6 mb-5' key={item.id}>
              <Card className='shadow'>
                <img src={process.env.PUBLIC_URL + "/" + item.imageUrl} alt="img" />
                <Card.Body>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Card.Title className='c-title mb-0'>{item.year}</Card.Title>
                    <Button className='btn-md more-btn' onClick={() => handleShow(item)}>
                      View
                    </Button>
                  </div>
                  <Card.Text className='c-title mt-2' >
                    {item.title}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Relatedaward;
