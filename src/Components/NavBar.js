import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'


export default function NavBar() {
    const style = {
        position: 'fixed',
        right: "10%"
    }
    const fontStyle = {
        fontSize: "2rem"
    }
    const gio = {
        position: 'relative',
        left: "10%",
        fontSize: "2.2rem"
    }
    return (
        <div className="bg-transparent" style={{marginTop: "10px"}}>
        
        <Navbar bg="transparent"expand="lg">
        <Navbar.Brand href="/portfolio-react-gt/" style={gio} className='text-white'>Gio Talabong</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='text-white float-right' id="basic-navbar-nav">
        <Nav className="" style={style}>
        <Nav.Link href="/portfolio-react-gt/" style={fontStyle} className='text-white float-right' >About</Nav.Link>
        <Nav.Link href="projects" style={fontStyle} className='text-white float-right'>Projects</Nav.Link>  
        <Nav.Link href="contacts" style={fontStyle} className='text-white float-right'>Contacts</Nav.Link>  
        </Nav>
  </Navbar.Collapse>
</Navbar>

    </div>
    )
}
