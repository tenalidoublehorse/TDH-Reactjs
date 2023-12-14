import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';

const locations = {
  guntur: {
    position: [16.268, 80.639],
    name: 'Tenali',
    description: 'Description for Guntur',
    url :'https://www.google.com/maps/place/Tenali+Double+Horse/@16.268832,80.639928,8z/data=!4m6!3m5!1s0x3a4a062f6663586f:0x47ee4650ea8b815d!8m2!3d16.2688321!4d80.6399277!16s%2Fg%2F11dz0y28f_?hl=en&entry=ttu'
  },
  hyderabad: {
    position: [17.437, 78.414],
    name: 'HYDERABAD',
    description: 'Description for Hyderabad',
    url :'https://www.google.com/maps?ll=17.437395,78.414571&z=8&t=m&hl=en&gl=IN&mapclient=embed&cid=15603634934683396795'
  },
};

const customMarker = L.icon({
  iconUrl: process.env.PUBLIC_URL + "/assets/img/misc/marker.png",
  iconSize: [32, 32],
});

const MapWithClickableLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState('guntur');
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      map.setView(locations[selectedLocation].position, 12);
    }
  }, [map, selectedLocation]);

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className='container'>
       <div className="row ">
       <div className="col-lg-12">
      <div style={{backgroundColor:'#ED4E53'}}>
        <ul className="ullist controls" style={{ display: 'flex',margin: '0', padding: '0', listStyleType: 'none' }}>
          <li key="guntur" style={{margin: '0'}} className={selectedLocation === 'guntur' ? 'active' : ''} >
            {/* <a
              data-load="guntur"
              id="ullist_a_guntur"
              href="#guntur"
              title="GUNTUR"
              style={{ color: '#ffffff', display: 'block', padding: '15px', fontSize: '18px',fontWeight:'600',borderRight:'2px solid #ffffff', textDecoration: 'none' }}
              onClick={() => handleLocationChange('guntur')}
              tabIndex="0"
            >
              <span>TENALI</span>
            </a> */}
              <Link to="#guntur" className="location-link" onClick={() => handleLocationChange('guntur')} style={{ color: '#ffffff', display: 'block', padding: '15px', fontSize: '18px',fontWeight:'600',borderRight:'2px solid #ffffff', textDecoration: 'none' }}>  TENALI </Link>
          </li>
          <li key="hyderabad" style={{margin: '0'}}  className={selectedLocation === 'hyderabad' ? 'active' : ''}>
            {/* <a
              data-load="hyderabad"
              id="ullist_a_hyderabad"
              href="#hyderabad"
              title="HYDERABAD"
              style={{ color: '#ffffff', display: 'block', padding: '15px', fontSize: '18px',fontWeight:'600',borderRight:'2px solid #ffffff', textDecoration: 'none' }}
              onClick={() => handleLocationChange('hyderabad')}
              tabIndex="0"
            >
              <span>HYDERABAD</span>
            </a> */}
            <Link to="#hyderabad" className="location-link" onClick={() => handleLocationChange('hyderabad')} style={{ color: '#ffffff', display: 'block', padding: '15px', fontSize: '18px',fontWeight:'600',borderRight:'2px solid #ffffff', textDecoration: 'none' }}> HYDERABAD </Link>
          </li>
        </ul>
      </div>
      <MapContainer
        whenCreated={setMap}
        center={locations[selectedLocation].position}
        zoom={8}
        style={{ height: '400px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
          maxZoom={16}
        />
        {Object.keys(locations).map((locationKey) => (
          <LocationMarker key={locationKey} position={locations[locationKey].position} name={locations[locationKey].name} url={locations[locationKey].url}>
            {locationKey === selectedLocation && (
              <Popup>{locations[locationKey].description}</Popup>
            )}
          </LocationMarker>
        ))}
      </MapContainer>
      </div>
     </div>
   </div>
  );
};

const LocationMarker = ({ position, name,url }) => {
  const handleMarkerClick = () => {
    // Open the URL in a new tab
    window.open(url, '_blank');
  };
  return (
    <Marker position={position} icon={customMarker} eventHandlers={{ click: handleMarkerClick }}>
      <Tooltip>{name}</Tooltip>
      
    </Marker>
  );
};

export default MapWithClickableLocations;
