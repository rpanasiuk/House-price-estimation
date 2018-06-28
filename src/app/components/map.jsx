import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const MyPopupMarker = ({ lat, long, ...props }) => (
    <Marker position={[lat, long]}>
        <Popup>
            <div>
                <div># of bathrooms: {props.bathrooms}</div>
                <div># of bedrooms: {props.bedrooms}</div>
                <div>Living square feets: {props.sqft_living}</div>
                <div>Year built: {props.yr_built}</div>
                <div>Zipcode: {props.zipcode}</div>
                <div>Price: {props.price} USD</div>
            </div>
        </Popup>
    </Marker>
)

const MyMarkersList = ({ markers }) => {
    const items = markers.map(({ id, ...props }) => (
        <MyPopupMarker key={id} {...props} />
    ))
    return <div style={{ display: 'none' }}>{items}</div>
}

export default class MapComponent extends Component {
    state = {
        lat: 47.608013,
        lng: -122.335167,
        zoom: 10
    }

    render() {
        const center = [this.state.lat, this.state.lng];

        return (
            <section className="map component">
                <Map center={center} zoom={this.state.zoom} style={{height: '100%', width: '100%'}}>
                    <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MyMarkersList markers={this.props.markers} />
                </Map>
            </section>
        )
    }
}