import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component{
    
    render() {
        return (
                <div className="nav-container">
                    <Navbar id="menu" collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">Permit.ng</Link>
                            </Navbar.Brand>
                          <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullLeft>
                               <NavItem eventKey={1} componentClass={Link} href="/Booking" to="/Booking">
                                    Booking
                                </NavItem>
                                <NavItem eventKey={2} componentClass={Link} href="/FAQ" to="/FAQ">
                                    FAQ
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
        )
    }
}