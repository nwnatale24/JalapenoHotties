import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../App.css';
import Marker from './Markers'


export default function Map(props) {
  
  const AnyReactComponent = ({text}) => <div className='marker'>{text}</div>;
  
  console.log(props.all_pins);

  const marker_list = props.all_pins.map(rest_1 => (
    <div>
       <AnyReactComponent latitude ={rest_1.latitide} longitude = {rest_1.longitude} text={Array.from(props.names)[0]}/>;
    </div>));

    
    console.log(marker_list);

  //"39.710117443535886", lng: "-75.11916101566422"

  return (
    <div className="Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={{ lat: props.latitide, lng: props.longitude }}
        defaultZoom={8.8}
      >
        {marker_list}
        
      </GoogleMapReact>
      
    </div>
  );
}
