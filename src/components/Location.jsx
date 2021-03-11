import React, { useContext, useMemo } from "react";
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Circle, Marker, Tooltip, LayersControl } from "react-leaflet";
import { UserContext } from '../UserContext';
import MapLC from "./MapLC";

function Location() {

    const { lon, lat, isget, startCenter, setStartCenter, zoom, setZoom, map, setMap } = useContext(UserContext)

    const center = [lat, lon]

    return (
        <div>
            <MapContainer center={startCenter} zoom={zoom} scrollWheelZoom={true}>
                <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="Color MAP">
                        <TileLayer
                            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="Black-White MAP">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    {isget == "false" ? null :
                        (
                            <div>
                                <LayersControl.Overlay name="Base station">
                                    <Marker position={center} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} >
                                        <Tooltip sticky minWidth={90}>Base Station</Tooltip>
                                    </Marker>
                                </LayersControl.Overlay>
                                <LayersControl.Overlay checked name="Radius BS">
                                    <Circle
                                        center={center}
                                        pathOptions={{ fillColor: 'blue' }}
                                        radius={15000}>
                                        <Tooltip>Radius BS</Tooltip>
                                    </Circle>
                                </LayersControl.Overlay>
                            </div>

                        )
                    }
                </LayersControl>
            </MapContainer>
        </div>
    )

    // const displayMap = useMemo(
    //     () => (
    //         <MapContainer
    //             center={center}
    //             zoom={zoom}
    //             scrollWheelZoom={false}
    //             whenCreated={setMap}>
    //             <TileLayer
    //                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //             />
    //         </MapContainer>
    //     ),
    //     [],
    // )

    // return (
    //     <div>
    //         {map ? <MapLC map={map} /> : null}
    //         {displayMap}
    //     </div>
    // )
}

export default Location
