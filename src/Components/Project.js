import React from 'react'
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import notepad from './../image/notepad--.PNG'
import employee from './../image/EmployeeManage.PNG'
import emptrack from './../image/emptracker.png'
import weather from './../image/weather.PNG'
import burger from './../image/burger-APP.PNG'
import boozercise from './../image/boozercise.PNG'
import fitness from './../image/fitness.PNG'
import refactor from './../image/refactor.PNG'
import scheduler from './../image/Scheduler.PNG'
import first_portfolio from './../image/first_portfolio.PNG'
import Code_quiz_app from './../image/Code_quiz_app.PNG'
import OPW_API from './../image/randomPW_app.PNG'
import Resume from './../image/resume.PNG'
import Ecom from './../image/ecom.gif'

export default function Project() {
    const style = {
        margin: '10px',

    }

    return (
        <div style={{ marginTop: "20px" }}>
            <Row style={style}>
                <Col xs="auto" className="gt">
                    <h4>Notepad-- Project Dos</h4>
                    {/* <a href="http://oscarcat.herokuapp.com/"> */}
                    <img className="img img-thumbnail" src={notepad} />
                    {/* </a> */}
                    <div className="overlay">
                        <div className="text">
                            <h3>Notepad--</h3>
                            <br></br>
                            <a href="http://oscarcat.herokuapp.com/"> <div style={{ color: "white" }}>APP</div></a>
                            <div>|||</div>
                            <a href="#github"><div style={{ color: "white" }}>GIT</div></a>
                        </div>
                    </div>
                </Col>

                <Col xs="auto" className="gt">
                    <h4>BeanieG's Ecom</h4>
                    <img className="img img-thumbnail" src={Ecom} />
                    <div className="overlay">
                        <div className="text">
                            <h3>Employee Manager</h3>
                            <br></br>
                            <a href="https://github.com/giotala/ecomProject3"> <div style={{ color: "white" }}>APP</div></a>
                            <div>|||</div>
                            <a href="https://github.com/giotala/ecomProject3"><div style={{ color: "white" }}>GIT</div></a>
                        </div>
                    </div>
                </Col>

            </Row>

            <Row style={style}>
                <Col xs="auto" className="gt">
                    <h4>Fitness Tracker</h4>
                    <img className="img img-thumbnail" src={fitness} />
                    <div className="overlay">
                        <div className="text">
                            <h3>Fitness Tracker</h3>
                            <br></br>
                            <a href="https://warm-waters-69243.herokuapp.com/?id=5f6d1bc709d2890017a909bb"> <div style={{ color: "white" }}>APP</div></a>
                            <div>|||</div>
                            <a href="https://github.com/giotala/Work-Out-Tracker_GT"><div style={{ color: "white" }}>GIT</div></a>
                        </div>
                    </div>
                </Col>
                <Col xs="auto" className="gt">
                    <h4>Burger App</h4>
                    <img className="img img-thumbnail" src={burger} />
                    <div className="overlay">
                        <div className="text">
                            <h3>Burger App</h3>
                            <br></br>
                            <a href="https://burger1232321.herokuapp.com/"> <div style={{ color: "white" }}>APP</div></a>
                            <div>|||</div>
                            <a href="https://github.com/giotala/Node_Express_Handlebars_GT"><div style={{ color: "white" }}>GIT</div></a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={style}>
                <Col xs="auto" className="gt">
                    <h4>Weather App</h4>
                    <img className="img img-thumbnail" src={weather} />
                    <div className="overlay">
                        <div className="text">
                            <h3>Weather App</h3>
                            <br></br>
                            <a href="https://giotala.github.io/weather-app-hw-GT/"> <div style={{ color: "white" }}>APP</div></a>
                            <div>|||</div>
                            <a href="https://github.com/giotala/weather-app-hw-GT"><div style={{ color: "white" }}>GIT</div></a>
                        </div>
                    </div>
                </Col>
                <Col xs="auto" className="gt">
                    <h4>Schedule App</h4>
                    <a href="https://giotala.github.io/third-party-APIs-HM-GT/"><img className="img img-thumbnail" src={scheduler} /></a>
                    <div className="overlay">
                        <div className="text">
                            <h3>Schedule App</h3>
                            <br></br>
                            <a href="https://giotala.github.io/third-party-APIs-HM-GT/"> <div style={{ color: "white" }}>APP</div></a>
                            <div>|||</div>
                            <a href="https://github.com/giotala/third-party-APIs-HM-GT"><div style={{ color: "white" }}>GIT</div></a>
                        </div>
                    </div>
                </Col>

            </Row>


            <Col>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <h4>Other Projects</h4>
                            {/* <a href="https://giotala.github.io/SEO-REFACTOR-DEMO/"><img className="img-thumbnail" src={img}/></a> */}
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Click for More
                                </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Container>
                                    <Row style={style}>
                                        <Col xs="auto" className="gt">
                                            <h4>boozercise Project Uno</h4>
                                            <a href="https://giotala.github.io/Boozercise_project-1/"><img className="img img-thumbnail" src={boozercise} /></a>
                                        </Col>
                                        <Col xs="auto" className="gt">
                                            <h4>Employee Manager</h4>
                                            <img className="img img-thumbnail" src={employee} />
                                            <div className="overlay">
                                                <div className="text">
                                                    <h3>Employee Manager</h3>
                                                    <br></br>
                                                    <a href="https://github.com/giotala/OOP_HW_GT"> <div style={{ color: "white" }}>APP</div></a>
                                                    <div>|||</div>
                                                    <a href="https://github.com/giotala/OOP_HW_GT"><div style={{ color: "white" }}>GIT</div></a>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="auto" className="gt">
                                            <h4>Random PW App</h4>
                                            <a href="https://giotala.github.io/randompwgenerator/"><img className="img img-thumbnail" src={OPW_API} /></a>
                                        </Col>
                                        <Col xs="auto" className="gt">
                                            <h4>Employee Tracker</h4>
                                            <a href="https://github.com/giotala/Employee_Tracker_GT"><img className="img img-thumbnail" src={emptrack} /></a>
                                        </Col>

                                    </Row>
                                </Container>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Col>
            <Col>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <h4>Resume</h4>
                            {/* <a href="https://giotala.github.io/SEO-REFACTOR-DEMO/"><img className="img-thumbnail" src={img}/></a> */}
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Click for More
                                </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Container>
                                    <Row style={style}>
                                        <Col xs="auto">
                                            <img src={Resume} />
                                        </Col>



                                    </Row>
                                </Container>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Col>
        </div>
    )
}
