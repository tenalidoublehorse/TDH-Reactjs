import React, { Component, Fragment } from 'react';
// import location from '../../../data/restaurant.json';
import L from 'leaflet';
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';





// const customMarker = L.icon({
//     iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
//     iconSize: [32, 32],
// });

class Maplocations extends Component {
    constructor(props) {
        super(props);
    this.state = {
      mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1948910.6054168588!2d78.414571!3d17.437395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913a445cb59b%3A0xd88b3f4d2eadeabb!2sTenali%20Double%20Horse!5e0!3m2!1sen!2sin!4v1702444110012!5m2!1sen!2sin"
    };
  }



        handleGetDirectionsClick = () => {
            // Update the map source with the new location
            const newLocationSrc = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.382857024815!2d78.41126053186996!3d17.443159675070767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913a445cb59b%3A0xd88b3f4d2eadeabb!2sTenali%20Double%20Horse!5e0!3m2!1sen!2sin!4v1702445421636!5m2!1sen!2sin";
            this.setState({ mapSrc: newLocationSrc });
          };
          handleGetDirectionsClick2 = () => {
            // Update the map source with the new location
            const newLocationSrc = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3829.643593793057!2d80.6611076!3d16.2900271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a0742c8079549%3A0x650fe44585f2ddad!2sMahadeva%20Dall%20Industries%20Pvt.%20Ltd.!5e0!3m2!1ste!2sin!4v1704347505364!5m2!1ste!2sin";
            this.setState({ mapSrc: newLocationSrc });
          };
    
    render() {
    
        return (
         
            <div className="section" style={{ paddingBottom: '0px' }}>

              <div className="fluid-container" style={{ backgroundColor: 'white' }}>
                <div className="container-fluid">
                  <div className="section-title-wrap text-center mb-2 ">
                    <h2 className="title pt-4">Our Office & Factory Location</h2>
                  
                  </div>
                  <div className="row  p-2">
                    <div className="col-lg-6 mb-3 mb-lg-0 ">
                     
                      {/* <div className="col-lg-12  " > */}
                        <div className='location-card shadow pb-3 '>
                            <h5 className="custom-primary">Regional Office Address</h5>
                            <p className='text-start'><i className='fas fa-phone pr-2' /> 1800 270 567567</p>
                            <div className='d-flex'>
                            <div>
                                <i class='fas fa-location-arrow pr-2' style={{ textAlign: "justify" }} />
                            </div>
                            <div>
                                <p> JK TOWERS, 8-2-293/82/B/S-7, 2nd Floor, Road Number 10C, Gayatri Hills,
                                Jubilee Hills, Hyderabad, Telangana 500033</p>
                            </div>
                            </div>
                            <button type="button" className="btn-custom btn-sm order-btn"  onClick={this.handleGetDirectionsClick}>Get directions
                          
                            </button>
                        </div>
                      {/* </div> */}

                      {/* <div className="col-lg-12 "> */}
                      <div className='location-card shadow  mt-5 '>
                            <h5 className="custom-primary">Factory  Address</h5>
                            <p className='text-start'><i className='fas fa-phone pr-2' /> +91 91333 45456</p>
                            <div className='d-flex'>
                            <div>
                                <i class='fas fa-location-arrow pr-2' style={{  textAlign: "justify" }} />
                            </div>
                            <div>
                                <p>Mahadeva Dall Industries Pvt. Ltd , S.No 212-B1 & 212-B2. Nandivelugu, 522 306 TENALI, Guntur Dist, A.P</p>
                            </div>
                            </div>
                            <button type="button" className="btn-custom btn-sm order-btn"  onClick={this.handleGetDirectionsClick2}>Get directions <i class='fas fa-solid fa-right-long '/>
                           
                            </button>
                        </div>
                      {/* </div> */}

           


                    </div>
                    <div className="col-lg-6 mb-5 ">
                      <div className='map-frame mt-3'>
                      <iframe
                            src={this.state.mapSrc}
                            width="100%"
                            height="525"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
        );
    }
}

export default Maplocations;