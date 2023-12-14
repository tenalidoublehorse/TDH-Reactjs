
import React, { Component } from "react";
// import { geoCentroid } from "d3-geo";
// import { ComposableMap, Geographies, Geography, Marker, Annotation } from "react-simple-maps";
import Eastcoast from "./Eastcoast";
import WestCoast from "./Westcoast";
import Messenger from "../home/Messenger";
import { Fragment } from "react";
import Feedback from "../home/Feedback";





const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  // ... other offsets ...
};

class MapChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "match_1" // Default option (East Coast)
    };
  }

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Fragment>
      <div className="section">
        <div className="container">
          {/* <ComposableMap  
      projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fill="#DDD"
              />
            ))}
            {geographies.map(geo => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find(s => s.val === geo.id);
             
            })}
          </>
        )}
      </Geographies>
          </ComposableMap>
        */}
          <div className="section-title-wrap section-header text-center">
            <h5 className="custom-primary">Discover Our USA Stores</h5>
            <h2 className="title ">Locate Tenali Double Horse Near You</h2>
            <p className="subtitle ">
            Find convenient addresses of our stores across the USA. Experience the essence of quality and taste as you explore our products in a store near you.
            </p>
          </div>

          <div className="section text-center cta-2 cta bg-cover bg-center dark-overlay dark-overlay-2 bg-parallax" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/usa-locations.png)" }}>
            <div className="form">
              <form>
                <fieldset className="form__options"  >
                  <p className="form__answer">
                    <input
                      type="radio"
                      name="match"
                      id="match_1"
                      value="match_1"
                      checked={selectedOption === "match_1"}
                      onChange={this.handleOptionChange}
                    />
                    <label htmlFor="match_1" className="text-white">
                      <img src={process.env.PUBLIC_URL + "/assets/img/ig/1.png"} alt="img" />
                      East Coast
                    </label>
                  </p>
                  <p className="form__answer">
                    <input
                      type="radio"
                      name="match"
                      id="match_2"
                      value="match_2"
                      checked={selectedOption === "match_2"}
                      onChange={this.handleOptionChange}
                    />
                    <label htmlFor="match_2" className="text-white">
                      <img src={process.env.PUBLIC_URL + "/assets/img/ig/2.png"} alt="img" />
                      West Coast
                    </label>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>

          {/* east coast */}
          {selectedOption === "match_1" && <Eastcoast />}
          {/* west coast */}
          {selectedOption === "match_2" && <WestCoast />}

        
        </div>
      </div>
      <Messenger/>
      <Feedback/>
      </Fragment>
    );
  }
}

export default MapChart;




// {cur.id}
// return (
//   <g key={geo.rsmKey + "-name"}>
//     {cur &&
//       centroid[0] > -160 &&
//       centroid[0] < -67 &&
//       (Object.keys(offsets).indexOf(cur.id) === -1 ? (
//         <Marker coordinates={centroid}>
//           <text y="2" fontSize={10} textAnchor="middle">
//             {cur.id}
//           </text>
//         </Marker>
//       ) : (
//         <Annotation
//           subject={centroid}
//           dx={offsets[cur.id][0]}
//           dy={offsets[cur.id][1]}
//         >
//           <text x={4} fontSize={14} alignmentBaseline="middle">
            
//           </text>
//         </Annotation>
//       ))}
//   </g>
// );