import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'


export default function NavBar() {
    const style = {
        position: 'fixed',
        right: "1%"
    }
    return (
        <div className="bg-transparent">
        
        <Navbar bg="transparent"expand="lg">
        <Navbar.Brand href="/portfolio-react-gt/"  className='text-white'>Gio Talabong</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="" style={style}>
        <Nav.Link href="/portfolio-react-gt/"  className='text-white' >About</Nav.Link>
        <Nav.Link href="projects"  className='text-white float-right'>Projects</Nav.Link>  
        <Nav.Link href="contacts"  className='text-white float-right'>Contacts</Nav.Link>  
        </Nav>
  </Navbar.Collapse>
</Navbar>

    </div>
    )
}
