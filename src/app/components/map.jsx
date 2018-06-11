import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const MyPopupMarker = ({ lat, long, price }) => (
    <Marker position={[lat, long]}>
      <Popup><div>{price} USD</div></Popup>
    </Marker>
)

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ id, ...props }) => (
    <MyPopupMarker key={id} {...props} />
  ))
  return <div style={{ display: 'none' }}>{items}</div>
}

class MapComponent extends Component {
  state = {
    lat: 47.608013,
    lng: -122.335167,
    zoom: 13
  }

  render() {
    const center = [this.state.lat, this.state.lng];

    return (
      <section className="main-map component">
        <Map center={center} zoom={this.state.zoom} style={{height: '500px', width: '500px'}}>
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

function mapStateToProps({ markers }) {
  return { markers };
}

export default connect(mapStateToProps)(MapComponent);