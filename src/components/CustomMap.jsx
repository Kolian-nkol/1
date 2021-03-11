import React from "react";
import 'leaflet/dist/leaflet.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import { MapContainer, TileLayer, Polyline , Marker, Tooltip } from "react-leaflet";

function CustomMap() { 

    const [lon] = React.useState(34.55783892861)
    const [lat] = React.useState(46.02989868676)
    const [lon1] = React.useState(25.5947)
    const [lat1] = React.useState(49.5535)
    const [lon2] = React.useState(33.77633318797)
    const [lat2] = React.useState(46.12978873242)

    const center = [lat, lon]
    const center1 = [lat1, lon1]
    const center2 = [lat2, lon2]

    const polyline = [
        center,
        center1,
        center2
      ]

    const blackOptions = { color: 'blue' }

    return (
        <MapContainer center={center} zoom={11}>
            <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={center} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} >
                <Tooltip sticky minWidth={90}>Base Station</Tooltip>
            </Marker>
            <Marker position={center1} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} >
                <Tooltip sticky minWidth={90}>Base Station</Tooltip>
            </Marker>
            <Marker position={center2} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} >
                <Tooltip sticky minWidth={90}>Base Station</Tooltip>
            </Marker>
            <Polyline pathOptions={blackOptions} positions={polyline} />
        </MapContainer>
    )
}
export default CustomMap
