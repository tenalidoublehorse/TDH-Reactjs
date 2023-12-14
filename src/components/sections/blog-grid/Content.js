import React, { Component , Fragment} from 'react';

import Feedback from '../home/Feedback';
import { ComposableMap, Geographies, Geography ,Marker} from "react-simple-maps";
import { Link } from 'react-router-dom';
import Messenger from '../home/Messenger';

const geoUrl ="https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json"

const markers = [
    {
      markerOffset: -30,
      name: "India",
      coordinates: [78.9629, 20.5937], // India coordinates [longitude, latitude]
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
              <div className="container mb-5 pt-5 pb-3">
              <div className="section-title-wrap section-header text-center">
                 <h5 className="custom-primary text-center">Global Presence</h5>
                                <h2 className="title text-center">Discover Where We Deliver</h2>
                                <p>Explore our product availability across the globe. Use the interactive world map to select countries and regions, and find out where you can enjoy the taste of Tenali Double Horse.</p>
                                </div>
    <ComposableMap>
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
      
    </ComposableMap>
    <Feedback/>
    <Messenger/>
  </div>
                
              
                
                
   
            
      
            </Fragment>
        );
    }
}

export default Content;