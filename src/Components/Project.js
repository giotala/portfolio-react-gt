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


export default function Project() {
const style = {
    margin: '10px',
    
}

    return (
       <div style={{marginTop: "20px"}}>
            <Row style={style}>
            <Col xs="auto" className="gt">
                <h4>Notepad-- Project Dos</h4>
                {/* <a href="http://oscarcat.herokuapp.com/"> */}
                    <img className="img img-thumbnail" src={notepad}/>
                {/* </a> */}
                <div className= "overlay">
                <div className="text">
                    <h3>Notepad--</h3>
                    <br></br>
                <a  href="http://oscarcat.herokuapp.com/"> <div style={{color: "white"}}>APP</div></a> 
                    <div>|||</div>
                <a href="#github"><div style={{color: "white"}}>GIT</div></a> 
                </div>
                </div> 
            </Col>

            <Col xs="auto">
                <h4>Employee Manager</h4>
                <a href="https://github.com/giotala/OOP_HW_GT"><img className="img img-thumbnail" src={employee}/></a>
            </Col>
            
            </Row>

            <Row style={style}>
            <Col xs="auto">
                <h4>Fitness Tracker</h4>
                <a href="https://warm-waters-69243.herokuapp.com/?id=5f6d1bc709d2890017a909bb"><img className="img img-thumbnail" src={fitness}/></a>
            </Col>
            <Col xs="auto">
                <h4>Burger App</h4>
                <a href="https://burger1232321.herokuapp.com/"><img className="img img-thumbnail" src={burger}/></a>
            </Col>
            </Row>
            <Row style={style}>
            <Col xs="auto">
            <h4>Weather App</h4>
              <a href="https://giotala.github.io/weather-app-hw-GT/"><img className="img img-thumbnail" src={weather}/></a>
            </Col>
             <Col xs="auto">
             <h4>Schedule App</h4>
             <a href="https://giotala.github.io/third-party-APIs-HM-GT/"><img className="img img-thumbnail" src={scheduler}/></a>
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
                                        <Col xs="auto">
                                            <h4>boozercise Project Uno</h4>
                                            <a href="https://giotala.github.io/Boozercise_project-1/"><img className="img img-thumbnail" src={boozercise}/></a>
                                        </Col>
                                        <Col xs="auto">
                                            <h4>Code Quiz app Project</h4>
                                            <a href="https://giotala.github.io/CodeQuiz_HW_GT/"><img className="img img-thumbnail" src={Code_quiz_app}/></a>
                                        </Col>
                                        </Row>
                                        <Row>
                                        <Col xs="auto">
                                        <h4>Random PW App</h4>
                                        <a href="https://giotala.github.io/randompwgenerator/"><img className="img img-thumbnail" src={OPW_API}/></a>
                                        </Col>
                                        <Col xs="auto">
                                            <h4>Employee Tracker</h4>
                                            <a href="https://github.com/giotala/Employee_Tracker_GT"><img className="img img-thumbnail" src={emptrack}/></a>
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
                                            <img src={Resume}/>
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
