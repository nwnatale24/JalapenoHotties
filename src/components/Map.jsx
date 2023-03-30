import React from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'
import '../App.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends React.Component{

    

    async getCoordinates() {
        const answer = await axios.get("http://127.0.0.1:8000/api/restaurants");
        const data = await answer.data.restaurants 

        
        
    }

    render() { 
        
        return(
             
                <div className="map">
                <div className="google-map">
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={{ lat: 39.9355, lng: -75.1587 }}
                    defaultZoom={0}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div> 
                
                </div>
                
            
        )
    }

}
