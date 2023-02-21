import React from 'react';
import Navbar from '../Components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import logo1 from '../Images/1.jpg';
import logo2 from '../Images/2.jpg';
import logo3 from '../Images/3.jpg';
import logo5 from '../Images/5.jpg';
import logo4 from '../Images/4.jpg';


const Produit = () => {
    return (
        <div>
            <Navbar />
            <nav className="navbar-container active">
                <a href="" className="navbar-logo">
                    <p>Produit</p>
                </a>


                <ul className="nav-menu1 active">

                    <Dropdown as={ButtonGroup}>


                        <Dropdown.Toggle variant="success" id="dropdown-basic">

                            Chaussures
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/produit">Homme</Dropdown.Item>
                            <Dropdown.Item href="#">Femme</Dropdown.Item>
                            <Dropdown.Item href="#">Enfant</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <li className="nav-link-items">
                        <a href="/" className="nav-links">Tissu</a></li>
                    <li className="nav-link-items">
                        <a href="/" className="nav-links">Foulard</a></li>

                </ul>
            </nav>

            <Container className="img-container">
                <Row className="justify-content-md-center">
                    <Col xs lg="4" className="colimage">
                        <a href=""><img src={logo1} alt="" width="150" height="150" /></a>
                    </Col>
                    <Col xs lg="4" className="colimage">
                        <a href=""><img src={logo2} alt="" width="150" height="150" /></a>

                    </Col>
                    <Col xs lg="4" className="colimage">
                        <a href=""><img src={logo3} alt="" width="150" height="150" /></a>

                    </Col>

                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="4" className="colimage">
                        <a href=""><img src={logo4} alt="" width="150" height="150" /></a>

                    </Col>
                    <Col xs lg="4" className="colimage">
                        <a href=""><img src={logo5} alt="" width="150" height="150" /></a>

                    </Col>
                    <Col xs lg="4" className="colimage">
                        <a href=""><img src={logo1} alt="" width="150" height="150" /></a>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="4" className="colimage">
                        <a href=""><img src={logo4} alt="" width="150" height="150" /></a>

                    </Col>
                    <Col xs lg="4" className="colimage">
                        <a href=""><img src={logo5} alt="" width="150" height="150" /></a>

                    </Col>
                    <Col xs lg="4" className="colimage">
                        <a href=""><img src={logo1} alt="" width="150" height="150" /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Produit;