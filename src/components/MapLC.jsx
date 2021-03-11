import React, { useContext, useCallback, useState, useEffect } from 'react'
import axios from 'axios'
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Form, FormGroup, Label, Input
} from "reactstrap";
import { UserContext } from '../UserContext';

function MapLC() {

    const { mcc, mnc, lac, cid, setLon, setLat, isget, setIsget, startLon, setStartLon, starLat, setStarLat, map, setMap, zoom, setZoom, startCenter, setStartCenter } = useContext(UserContext)

    return (
        <div>
            <Button
                onClick={() => { GetLoc() }}
            >Get Location
            </Button>
        </div>
    )

    function GetLoc() {
        setIsget("true")
        console.log('isget =>', isget)
        console.log("GETLOCATIONVITHLC");
        axios.get('https://api.mylnikov.org/mobile/main.py', {
            params: {
                data: "open",
                mcc: mcc,
                mnc: mnc,
                cellid: cid,
                lac: lac,
                v: "1.1"
            }
        }
        ).then(response => {
            const lat = response.data.data.lat
            setLat(lat)
            const lon = response.data.data.lon
            setLon(lon)
            setStartCenter(lat, lon)
            console.log("lat =>", lat);
            console.log("lon =>", lon);

        }).catch(error => {
            console.log("Error =>", error);
        })
    }
}

export default MapLC
