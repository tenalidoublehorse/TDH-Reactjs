import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'magnific-popup';
import instaData from '../../../data/insta.json';
import ReactPaginate from 'react-paginate';
import { Tab, Nav } from 'react-bootstrap';
import Masonry from 'react-masonry-component';
import videoData from '../../../data/video.json';

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
  const [activeTab, setActiveTab] = useState('images'); // 'images' or 'videos'

  const pageCount = Math.ceil(instaData.length / itemsPerPage);
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    $('a[data-rel^=magnific]').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
    });
  }, [pageNumber]);

  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = instaData.slice(startIndex, endIndex);
  const displayedItemstwo = videoData.slice(startIndex, endIndex);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  

  return (
    <div className="ltn__gallery-area mt-5 mb-5">
      <div className="section-title-wrap section-header text-center wow animate__animated  animate__fadeInUp" data-wow-delay="0.2s">
        <h5 className="custom-primary text-center">Get real-time updates on events</h5>
        <h2 className="title text-center">That Impact Our World</h2>
      </div>
      <div className="product-additional-info">
        <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
          <Nav variant="tabs" className="nav mt-5 mb-5" style={{ display: 'flex', justifyContent: 'center' }}>
            <Nav.Item>
              <Nav.Link eventKey="images">News Articles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="videos">Media Broadcasts </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane>
            
            </Tab.Pane>
            <Tab.Pane >
             
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
      <div className={`container ${activeTab === 'images' ? 'tab1' : 'tab2'}`}>
        <div className="ltn__gallery-active row ltn__gallery-style-2 ltn__gallery-info-hide--- " >
          {activeTab === 'images' &&
            displayedItems.map((item) => (
              <div key={item.id} className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12 wow animate__animated  animate__fadeInUp" data-wow-delay={item.delay}>
               <div className="layer-1">.</div>
              <div className="ltn__gallery-item-inner" style={{ boxShadow: '1px 2px 4px' }}>
                <div className="ltn__gallery-item-img" >
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
          {activeTab === 'videos' &&
            displayedItemstwo.map((item) => (
              <div key={item.id} className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12 wow animate__animated  animate__fadeInUp" data-wow-delay={item.delay}>
                 <div className="layer-1">.</div>
                 <div className="ltn__gallery-item-inner" style={{ boxShadow: '1px 2px 4px' }}>
                
                
                <iframe src={item.videoEmbedLink} width="100%" height="240px" alt="img" className="img-overflow"></iframe>
                {/* <span className="ltn__gallery-action-icon">
                      <i className="fas fa-search" />
                    </span> */}
                   
              
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
        {activeTab === 'images' && (
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        )}
      </div>
    </div>
  );
}

export default PortfolioV2;
