import React, { Component } from "react";
import { ComposableMap, Geographies, Geography,Marker} from "react-simple-maps";
import Mapdata from "../../../data/Mapdata.json";
import { Link } from 'react-router-dom';


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
  
  const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"


class Mapointing extends Component {
    render() {
        return (
          <div className="container mb-5 pt-5 pb-3">
                 <h5 className="custom-primary text-center">Where to Find Us</h5>
                                <h2 className="title text-center">Explore Our Operating Locations</h2>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <ComposableMap width={800} height={600} tyle={{ width: '100%', height: 'auto' }}>
                    <Geographies geography={Mapdata}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC"
                                stroke="#D6D6DA"/>
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
                        title="Click for more info"
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
            </div>
            </div>
        );
    }
}

export default Mapointing;
