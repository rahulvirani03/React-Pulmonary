import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1 align="center">Pulmonary Disease Detection and Analysis using Deep Learning</h1>
                <Navbar variant="dark" collapseOnSelect expand="lg"  className="nav1">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link href="/" className="navitem">Home</Nav.Link>
                                <Nav.Link href="/Guidelines" className="navitem">Guidelines</Nav.Link>
                                <Nav.Link href="/Diagnosis" className="navitem">Diagnosis</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
