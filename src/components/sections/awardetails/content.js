
import instaData from '../../../data/awards.json';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Relatedaward from '../../layouts/Relatedaward';

function ViewPage() {
  const { id } = useParams();
  const history = useHistory();

  // Fetch the specific award data based on the id from your data source
 
  const [selectedAward, setSelectedAward] = useState(null);

  useEffect(() => {
    const currentAward = instaData.find(item => item.id === parseInt(id, 10));
    setSelectedAward(currentAward);
  }, [id,instaData]);

  // const handleNext = () => {
  //   const currentIndex = instaData.findIndex(item => item.id === selectedAward.id);
  //   const nextIndex = (currentIndex + 1) % instaData.length;
  //   history.push(`/awardetails/${instaData[nextIndex].id}`);
  // };


  // const handlePrevious = () => {
  //   const currentIndex = instaData.findIndex(item => item.id === selectedAward.id);
  //   const previousIndex = (currentIndex - 1 + instaData.length) % instaData.length;
  //   history.push(`/awardetails/${instaData[previousIndex].id}`);
  // };
  const handleNext = () => {
    const currentIndex = instaData.findIndex(item => item.id === selectedAward.id);
    console.log('Current Index:', currentIndex);
    const nextIndex = (currentIndex + 1) % instaData.length;
    console.log('Next Index:', nextIndex);
    history.push(`/awardetails/${instaData[nextIndex].id}`);
  };
  
  const handlePrevious = () => {
    const currentIndex = instaData.findIndex(item => item.id === selectedAward.id);
    console.log('Current Index:', currentIndex);
    const previousIndex = (currentIndex - 1 + instaData.length) % instaData.length;
    console.log('Previous Index:', previousIndex);
   
    history.push(`/awardetails/${instaData[previousIndex].id}`);
  };
  
  if (!selectedAward) {
    // Handle the case where the award with the specified id is not found
    return <div> Award not found </div>;
  }

  return (
 
      
      
   
     <div className="post-single">
     <div className="section">
         <div className="container">
             <div className="row">
                 <div className="col-lg-12">
                     <div className="post-content-wrapper">
                     <div className="about-author-content">
                        <div className="post-thumbnail">
                  
                        <img src={selectedAward.fullimage } className='borderradius' alt="img" />
                 
                </div>
                <p className='font-bold mt-3 custom-primary'>{selectedAward.year}</p>           
      <h2>{selectedAward.title}</h2>
     
     
      <div className="post-desc">
                    <p>{selectedAward.description}</p>
                </div>
                     </div>
                   
                       
                    
                     </div>
                     <div className='navgiation d-flex justify-content-between align-items-center'>
        <button className='btn navgiation-button' onClick={handlePrevious}><i className=" fas fa-arrow-left mr-2  mt-1"></i>Previous</button>
        <button  className='btn navgiation-button'   onClick={handleNext}>Next<i className=" fas fa-arrow-right ml-2  mt-1"></i></button>
      </div>
                 </div>
             </div>
         </div>
     </div>
    <Relatedaward  productId={selectedAward.id}/>
 </div>
  );
}

export default ViewPage;
