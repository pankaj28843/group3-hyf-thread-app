import React from "react";
import "./MapComponent.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class MapComponent extends React.Component {
  render() {
    const GoogleMapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultCenter={{ lat: 55.676098, lng: 12.568337 }}
          defaultZoom={12}
        >
          <Marker position={{ lat: 55.676098, lng: 12.568337 }} />
          <Marker position={{ lat: 55.696098, lng: 12.578337 }} />
        </GoogleMap>
      ))
    );

    return (
      <div className="grid">
        <div className="sidebar">
          <div className="card">
            <h2>Location 1</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            illo quo tempora explicabo omnis mollitia ipsam, pariatur totam nam!
            Quibusdam error unde mollitia optio quo porro atque, obcaecati ad?
            Necessitatibus earum inventore mollitia doloremque, perferendis
            quidem, illum distinctio est quos rem fugit expedita unde amet nihil
            velit perspiciatis. Non, nihil?
          </div>
          <div className="card">
            <h2>Location 2</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            illo quo tempora explicabo omnis mollitia ipsam, pariatur totam nam!
            Quibusdam error unde mollitia optio quo porro atque, obcaecati ad?
            Necessitatibus earum inventore mollitia doloremque, perferendis
            quidem, illum distinctio est quos rem fugit expedita unde amet nihil
            velit perspiciatis. Non, nihil?
          </div>
        </div>
        <GoogleMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: "100%", width: "100%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default MapComponent;
