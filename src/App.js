import React, { useMemo, useState } from "react";
import CustomMap from "./components/CustomMap";
import NavBar from "./components/NavBar";
import { UserContext } from "./UserContext";
import "./App.css";
import Location from "./components/Location";

export default function App() {
  const [markers, setMarkers] = useState([]);
  const [mcc, setMcc] = useState("");
  const [mnc, setMnc] = useState("");
  const [lac, setLac] = useState("");
  const [cid, setCid] = useState("");
  const [isOpen, setIsOpen] = useState("false");
  const [isrus, setIsrus] = useState("false");
  const [isget, setIsget] = useState("false");
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const [zoom, setZoom] = useState("7");
  const [startCenter, setStartCenter] = useState([45.71168, 34.39274]);
  const [map, setMap] = useState(null);

  const providerValue = useMemo(
    () => ({
      mcc,
      setMcc,
      mnc,
      setMnc,
      isOpen,
      setIsOpen,
      isrus,
      setIsrus,
      lac,
      setLac,
      cid,
      setCid,
      markers,
      setMarkers,
      lon,
      setLon,
      lat,
      setLat,
      isget,
      setIsget,
      startCenter,
      setStartCenter,
      zoom,
      setZoom,
      map,
      setMap,
    }),
    [
      mcc,
      setMcc,
      mnc,
      setMnc,
      isOpen,
      setIsOpen,
      isrus,
      setIsrus,
      lac,
      setLac,
      cid,
      setCid,
      markers,
      setMarkers,
      lon,
      setLon,
      lat,
      setLat,
      isget,
      setIsget,
      startCenter,
      setStartCenter,
      zoom,
      setZoom,
      map,
      setMap,
    ]
  );

  return (
    <div className="app">
      <UserContext.Provider value={providerValue}>
        <NavBar />
        <Location markers={markers} />
      </UserContext.Provider>
    </div>
  );
}
