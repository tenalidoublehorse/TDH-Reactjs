import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Tab, Nav } from 'react-bootstrap';
import instaData from '../../../data/insta.json';
import videoData from '../../../data/video.json';

function PortfolioV2() {
  const publicUrl = process.env.PUBLIC_URL;
  const itemsPerPage = 6;
  const [pageNumber, setPageNumber] = useState(0);
  const [activeTab, setActiveTab] = useState('images'); // 'images' or 'videos'

  const pageCount = Math.ceil(instaData.length / itemsPerPage);
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = instaData.slice(startIndex, endIndex);
  const displayedItemstwo = videoData.slice(startIndex, endIndex);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div className="ltn__gallery-area mt-5 mb-5">
      <div className="section-title-wrap section-header text-center">
        <h5 className="custom-primary text-center">Get real-time updates on events</h5>
        <h2 className="title text-center">That Impact Our World</h2>
      </div>
     
      <div className="container">
        <div className="ltn__gallery-active row ltn__gallery-style-2 ltn__gallery-info-hide---">
          {displayedItems.map((item) => (
            <div key={item.id} className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
              <div className="layer-1">.</div>
              <div className="ltn__gallery-item-inner" style={{ boxShadow: '1px 2px 4px' }}>
                {item.type === 'image' && (
                  <div className="ltn__gallery-item-img">
                    <img src={publicUrl + "/" + item.imageUrl} alt="img" className="img-overflow" />
                    <span className="ltn__gallery-action-icon">
                      <i className="fas fa-search" />
                    </span>
                  </div>
                )}
                {item.type === 'video' && (
                  <div className="ltn__gallery-item-img">
                    <iframe src={item.videoEmbedLink} width="100%" height="240px" title={`Video ${item.id}`} className="img-overflow"></iframe>
                  </div>
                )}
                <div className="ltn__gallery-item-info">
                  {/* Additional information if needed */}
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
