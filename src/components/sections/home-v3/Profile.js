import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';
import instaData from '../../../data/insta.json';
import ReactPaginate from 'react-paginate';

function PortfolioV2() {
  useEffect(() => {
    $('a[data-rel^=magnific]').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
    });
  }, []);

  const publicUrl = process.env.PUBLIC_URL;
  const itemsPerPage = 6;
  const [pageNumber, setPageNumber] = useState(0);

  const pageCount = Math.ceil(instaData.length / itemsPerPage);
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  
  // Use useEffect to reinitialize magnificPopup whenever pageNumber changes
  useEffect(() => {
    $('a[data-rel^=magnific]').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
    });
  }, [pageNumber]); // This will trigger the effect whenever pageNumber changes
  

  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = instaData.slice(startIndex, endIndex);

  return (
    <div className="ltn__gallery-area mt-5 mb-5">
      <div className="section-title-wrap section-header text-center">
        <h5 className="custom-primary text-center">Get real-time updates on events</h5>
        <h2 className="title text-center">That Impact Our World.</h2>
      </div>
      <div className="container">
        <div className="ltn__gallery-active row ltn__gallery-style-2 ltn__gallery-info-hide---">
          {displayedItems.map((item) => (
            <div key={item.id} className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
              <div className="layer-1">.</div>
              <div className="ltn__gallery-item-inner" style={{ boxShadow: '1px 2px 4px' }}>
                <div className="ltn__gallery-item-img">
                  <a href={publicUrl + "/" + item.imageUrl} data-rel="magnific:myCollection">
                    <img src={process.env.PUBLIC_URL + "/" + item.imageUrl} alt="img" className="img-overflow" />
                    <span className="ltn__gallery-action-icon">
                      <i className="fas fa-search" />
                    </span>
                  </a>
                </div>
                <div className="ltn__gallery-item-info">
                  {/* <h4 className="go-top">
                    <Link to="/portfolio-details">Portfolio Link </Link>
                  </h4> */}
                  {/* <p>{item.caption}</p> */}
                </div>
              </div>
              <div className="layer-2">.</div>
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
      </div>
    </div>
  );
}

export default PortfolioV2;
