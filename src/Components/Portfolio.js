import React from 'react';
import { Container, Row, Col, Jumbotron, Breadcrumb } from 'react-bootstrap';
import { ChevronRight, ChevronLeft, EmojiExpressionless, EmojiDizzy } from 'react-bootstrap-icons';
import Modals from './Projects/Modals'
import emoji from './../image/emoji.png'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'


export default function Portfolio() {
   
    const portStyle = {
        backgroundColor: '#ffffff6e'
    }
    return (
        <div>
            <Container fluid className='portfolioContainer'>
                <Row>
                    <Col></Col>
                    <Col sm={10} className="center" >
                        <Jumbotron fluid style={portStyle}>

                            <h1 className='me'> <ChevronLeft> </ChevronLeft>Gio Talabong<ChevronRight /></h1>
                            <Breadcrumb >
                                <Breadcrumb.Item href="https://github.com/giotala">
                                    Github
            </Breadcrumb.Item>
                                <Breadcrumb.Item href="https://www.linkedin.com/in/gio-talabong-79086b103/">
                                    LinkedIn
            </Breadcrumb.Item>
                                {/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Instagram
            </Breadcrumb.Item>
            <Breadcrumb.Item href="https://www.facebook.com/gio.talabong.1/">
            <i class="fas fa-facebook"></i>FB
                <Modals/>
            </Breadcrumb.Item> */}

                            </Breadcrumb>

                            <div>
                                <ChevronLeft />
                                id
                                <ChevronRight />
                            You are special! <img className="emoji" src={emoji}/>
                            </div>
                        </Jumbotron>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <div class="boxes">
                <ul class="single-box">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}
