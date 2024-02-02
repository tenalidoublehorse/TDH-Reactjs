import React, { Component , Fragment} from 'react';

import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import $ from 'jquery';
import 'magnific-popup';
import Feedback from '../home/Feedback';
import { ComposableMap, Geographies, Geography ,Marker} from "react-simple-maps";

import India from './India';

const geoUrl ="https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json"

const markers = [
    {
      markerOffset: -30,
      name: "India",
      coordinates: [78.9629, 20.5937], 
    },
    {
      markerOffset: 15,
      name: "Australia",
      coordinates: [133.7751, -25.2744], // Australia coordinates [longitude, latitude]
    },
    
    {
      markerOffset: 15,
      name: "USA",
      coordinates: [-95.7129, 37.0902], // USA coordinates [longitude, latitude]
    },
    {
      markerOffset:-30,
      name: "UK",
      coordinates: [-3.4359, 55.3781], // UK coordinates [longitude, latitude]
    },
    
    {
      markerOffset: -30,
      name: "UAE",
      coordinates: [54.366669, 24.466667], // UAE coordinates [longitude, latitude]
    },
    {
      markerOffset: 15,
      name: "SINGAPORE",
      coordinates: [103.8198, 1.3521], // UAE coordinates [longitude, latitude]
    },
    {
      markerOffset: 15,
      name: "QATAR",
      coordinates: [53.595284 ,16.564328], // UAE coordinates [longitude, latitude]
    },
    {
      markerOffset: 15,
      name: "PARIS",
      coordinates: [2.3522, 48.8566], // UAE coordinates [longitude, latitude]
    },
    {
      markerOffset: 15,
      name: "CANADA",
      coordinates: [-106.3468, 56.1304], // UAE coordinates [longitude, latitude]
    },
    {
      markerOffset: 15,
      name: "GHANA-WEST AFRICA",
      coordinates: [-1.0232, 7.9465], // UAE coordinates [longitude, latitude]
    },
    {
      markerOffset: 15,
      name: "SEYCHELLES",
      coordinates: [55.4919, -4.6796], // UAE coordinates [longitude, latitude]
    },
   
  ];
  


class Content extends Component {
    render() {
        return (
            <Fragment>
              <div className="fluid-container  pt-5 pb-3" style={{backgroundColor:"#F9FAE6"}}>
              <div className="section-title-wrap section-header text-center  wow animate__animated  animate__fadeInUp"  data-wow-delay="0.4s">
                
                                <h2 className="title text-center">Pan-India Presence</h2>
                                {/* <p>Explore our product availability across the globe. Use the interactive world map to select countries and regions, and find out where you can enjoy the taste of Tenali Double Horse.</p> */}
                                </div>
                                <div className='container mb-5  wow animate__animated  animate__fadeInUp' data-wow-delay="0.4s" style={{backgroundColor:"white",borderRadius:'10px'}}>
                                <div className="row ">
                       
                        <div className="col-lg-6 order-2  order-lg-1 alignments d-flex flex-column">
                        <div className="section-title-wrap mr-lg-30 mt-lg-3 mb-lg-3">
                               
                                <h2  style={{fontSize:'22px'}}>Our  Presence Across India</h2>
                                <p className="subtitle" style={{ textAlign: 'justify' }}>
                                At <b style={{color:'#77241D'}}>Tenali Double Horse</b>, our journey is driven by a vision to deliver excellence and trust in every corner of <b style={{color:'#77241D'}}>India</b>. We are proud to be available in the following states and Union Territories, contributing to our commitment of providing quality products:
<div className='col-lg-12 d-flex flex-wrap mt-3'>
<div className='col-lg-6 col-12'>
                               <li><b>Andhra Pradesh</b></li>
<li><b>Telangana</b></li>
<li><b>Kerala</b></li>
<li><b>Odisha</b></li>
<li><b>Tamil Nadu</b></li>
<li><b>Haryana</b></li>
<li><b>Punjab</b></li>
<li><b>Delhi</b></li>
</div>
<div className='col-lg-6 col-12'>

<li><b>Puducherry</b></li>
<li><b>Jharkhand</b></li>
<li><b>Uttar Pradesh</b></li>
<li><b>Rajasthan</b></li>
<li><b>Assam</b></li>
<li><b>Maharashtra</b> </li>
<li><b>Karnataka</b></li>
</div>
</div>                          
                                </p>
                              


                            </div>
                           
                        </div>
                        <div className="col-lg-6 mb-lg-30 order-1  order-lg-2 alignments d-flex flex-column " >
                        <img src={process.env.PUBLIC_URL + "/assets/img/about/india-map.png"} alt="img" className=' mb-2' />
                       
                        </div>
                    </div>
                    </div>
                 
    {/* <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC"
                                stroke="#D6D6DA" />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
              <Marker key={name} coordinates={coordinates}>
                <g>
                  {name === "USA" ? (
                    <Link to="/usa-shops">
                      <g
                        fill="none"
                        stroke="#FF5533"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-12, -24)"
                      >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                      </g>
                      <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                      >
                        {name}
                      </text>
                    </Link>
                  ) : (
                    <>
                      <g
                        fill="none"
                        stroke="#FF5533"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-12, -24)"
                      >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                      </g>
                      <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                      >
                        {name}
                      </text>
                    </>
                  )}
                </g>
              </Marker>
            ))}
      
    </ComposableMap> */}
    
    <Feedback/>
    {/* <Messenger/> */}
  </div>
  <div className="fluid-container  pt-5 pb-3" style={{backgroundColor:"#F9F9F9"}}>             
  <div className="section-title-wrap section-header text-center  wow animate__animated  animate__fadeInUp" data-wow-delay="0.4s">
                
                <h2 className="title text-center">International Expansion</h2>
                {/* <p>Explore our product availability across the globe. Use the interactive world map to select countries and regions, and find out where you can enjoy the taste of Tenali Double Horse.</p> */}
                </div>
                <div className='container mb-5 wow animate__animated  animate__fadeInUp' data-wow-delay="0.6s" style={{backgroundColor:"white",borderRadius:'10px'}}>
                <div className="row ">
        <div className="col-lg-6 mb-lg-30 alignments d-flex flex-column " >
        <img src={process.env.PUBLIC_URL + "/assets/img/about/worldmap-block.png"} alt="img" className=' mb-2' />
       
        </div>
        <div className="col-lg-6 alignments d-flex flex-column">
        <div className="section-title-wrap mr-lg-30 mt-lg-2 mb-lg-4">
               
                <h2  style={{fontSize:'22px'}}>Our Global Presence</h2>
                <p className="subtitle" style={{ textAlign: 'justify' }}>
                Embracing a global footprint,<b style={{color:'#77241D'}}> Tenali Double Horse</b> is dedicated to extending its promise of excellence and trust to discerning consumers across the world. Our range of products  is accessible in 12 countries, underscoring our steadfast commitment to delivering exceptional quality experiences on an <b style={{color:'#77241D'}}>international level</b>.
                </p>
                <div className='col-lg-12 d-flex flex-wrap mt-3'>
<div className='col-lg-6 col-12'>
                               
<li><b>United States (US)</b></li>
<li><b>United Kingdom (UK)</b></li>
<li><b>Australia</b></li>
<li><b>Canada</b></li>
<li><b>Qatar</b></li>
<li><b>United Arab Emirates (UAE)</b></li>


</div>
<div className='col-lg-6 col-12'>

<li><b>Singapore</b></li>
<li><b>Malaysia</b></li>
<li><b>France</b></li>
<li><b>South Africa</b></li>
<li><b>Saudi Arabia</b></li>
<li><b>Ghana</b> </li>

</div>
</div>            


            </div>
           
        </div>
    </div>
    </div>      
    </div>       
                
                
   
            
  <India/>
            </Fragment>
        );
    }
}

export default Content;