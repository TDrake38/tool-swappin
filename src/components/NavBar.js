import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Nav extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" expand="lg">
                    Home
                </Navbar>
            </div>
        )
    }
}

export default Nav;