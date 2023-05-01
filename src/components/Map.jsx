import React from 'react'
import GoogleMapReact from 'google-map-react'
import '../App.css'

export default function Map(props){
    
    const AnyReactComponent = ({text}) => <div className='marker'>{text}</div>;

        return(    
                <div className="Map">
                
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY}}
                    defaultCenter={{ lat: props.latitide, lng: props.longitude }}
                    defaultZoom={8.8}
                    >
                        <AnyReactComponent
                            lat={props.latitide}
                            lng={props.longitude}
                            text={Array.from(props.names)[0]}
                            
                        />
                    </GoogleMapReact>
                </div> 
        )
    }