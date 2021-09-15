import React, { Component } from "react";
import { Navbar, NavDropdown, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    Home
                </Navbar>
            </div>
        )
    }
}

export default Nav;