import React, { useContext } from "react";
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Form, FormGroup, Label, Input
} from "reactstrap";
import { UserContext } from '../UserContext';
import MapLC from "./MapLC";

export default function NavBar() {

  const { markers, setMarkers, mcc, setMcc, mnc, setMnc, isOpen, setIsOpen, isrus, setIsrus, lac, setLac, cid, setCid } = useContext(UserContext)



  const toggle = () => setIsOpen(!isOpen);

  const submit = (e) => {
    e.preventDefault();
    console.log(lac, cid);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Location</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Form inline onSubmit={submit}>
              <FormGroup>
                <Input style={{ marginRight: '.9rem' }} type="text" name="LAC" id="LAC" value={lac} onChange={event => setLac(event.target.value)} placeholder="LAC" />
                <p />
                <Input type="text" name="CID" id="CID" value={cid} onChange={event => setCid(event.target.value)} placeholder="CID" />
              </FormGroup>
            </Form>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                MCC
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => { setIsrus('true'); setMcc('250') }} >Russia</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => { setIsrus('false'); setMcc('255') }}>Ukraine</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {isrus == 'false' ? (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  MNC
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => setMnc('01')}>Vodafone (01)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => setMnc('02')}>Kievstar (02)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => setMnc('03')}>Kievstar (03)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => setMnc('04')}>Intertelekom (04)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => setMnc('06')}>Lifecell (06)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => setMnc('07')}>3Mob; Lycamobile (07)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => setMnc('08')}>Ukr telekom (08)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => setMnc('09')}>Vega (09)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => setMnc('21')}>PEOPLEnet (21)</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  MNC
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => setMnc('32')}>WIN-Mobile (32)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => setMnc('33')}>Sev-Mobile (33)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => setMnc('34')}>Crim-telekom (34)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => setMnc('60')}>Volna-Mobile (60)</DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
            )
            }
            <MapLC />
          </Nav>
        </Collapse>
      </Navbar>
    </div >
  );
}
