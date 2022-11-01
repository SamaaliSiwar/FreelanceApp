import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function FilterPostes() {
  return (
    <Navbar expand="lg">
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        <NavDropdown title="Categories" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Offers</NavDropdown.Item>
          <NavDropdown.Item href="#action4">
            Freelencers Posts
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Price" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Croissant</NavDropdown.Item>
          <NavDropdown.Item href="#action4">
            Décroissant
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="warning">Search</Button>
      </Form>
    </Navbar.Collapse>

</Navbar>
  )
}
