/* eslint-disable react/prop-types */

import React from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerInfoWindowGmapsObj from './components/Marker';

/* const AnyReactComponent = ({ text }) => <div>{text}</div>; */


function App() {
/*   const defaultProps = {
    center: {
      lat: 34.0522,
      lng: -118.2437,
    },
    zoom: 11,
  }; */

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact> */}

      <MarkerInfoWindowGmapsObj />
    </div>
  );
}

export default App;
