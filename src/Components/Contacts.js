import React from 'react'
import { Container, Col, Form, Button, Row } from 'react-bootstrap';


export default function Contacts() {
const style = {
    marginTop: '70px',
    background: 'rgba(255, 255, 255, 0.548)'
}
const myContact = {
    textAlign: 'center',
    fontSize: '3vw 3vh'
}
    return (
        <Container style={style}>
            <h1 className='center'> Contact ME </h1>
            <Form.Group>
                <Form.Row>
                    <Col>
                    <Form.Control type="text" placeholder="Full name" />
                    </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col>
                    <Form.Control type="text" placeholder="Email Adress" />
                    </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col>
                    <Form.Control type="text" placeholder="Subject" />
                    </Col>
                </Form.Row>
                <br/>
                <Form.Row>
                    <Col>
                    <Form.Control type="text" placeholder="Comments" />
                    </Col>
                </Form.Row>
            </Form.Group>
            <Row>
            <Col  xs="auto">
                <Button type="submit" className="mb-2">
                    Submit
                </Button>
            </Col>
            </Row>
            
            <Row>
            <Col></Col>
            <Col style={myContact}>
            <ul className="list-unstyled mb-0">
            <li>
                <p className="text-white">gio.talabong@gmail.com</p>
            </li>
            <li>
                <p className="text-white">Temecula, CA 92592 USA</p>
            </li>
            <li>
                <p className="text-white">(951)-421-5649</p>
            </li>
            

            </ul>
            </Col>
            <Col></Col>
            </Row>
           
        </Container>
    )
}
