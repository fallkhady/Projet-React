import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Navbar from '../Components/Navbar'
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsCheckCircleFill, BsCommand } from "react-icons/bs";
import { AiFillCloseCircle, AiOutlineDelete } from "react-icons/ai";
import { CiDeliveryTruck, CiRead } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";


const Home = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="contenu">
            <Navbar />

            <div className="container">
                <div className="titre">
                    <p>Tableau de bord</p>
                </div>
                <span className="content-item bleu">
                    <div className="inner1 ima">
                        <p>Produits Totaux</p>

                        <h3>10</h3>
                    </div>
                    <div className="ima">
                        <div className="icon">
                            <MdProductionQuantityLimits />

                        </div>

                    </div>


                </span>

                <span className="content-item vert">
                    <div className="inner1 ima">
                        <p>Livraison du jour</p>
                        <h3>02</h3>
                    </div>
                    <div className="ima">
                        <div className="icon">
                            <CiDeliveryTruck />

                        </div>

                    </div>



                </span>
                <span className="content-item blue">
                    <div className="inner1 ima">
                        <p>Commandes payées</p>
                        <h3>03</h3>
                    </div>
                    <div className="ima">
                        <div className="icon">
                            <BsCommand />

                        </div>

                    </div>


                </span>
                <span className="content-item jaune">
                    <div className="inner1 ima">
                        <p>Produits Totaux</p>
                        <h3>10</h3>
                    </div>
                    <div className="ima">
                        <div className="icon">
                            <MdProductionQuantityLimits />

                        </div>

                    </div>



                </span>


                <div className="table">
                    <div className="tabcom">
                        <p>Commandes</p>

                        <div className="sous-nav">
                            <ul className="bg">
                                <Button variant="primary" onClick={handleShow}>Ajouter</Button>{' '}
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Ajouter une commande</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Reférence</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Date</Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    placeholder=""
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Etat</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Client</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Produit</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Prix</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    autoFocus
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Taxe</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    autoFocus
                                                />
                                            </Form.Group>

                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Fermer
          </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Sauvegarder
          </Button>
                                    </Modal.Footer>
                                </Modal>
                                <form id="searchbox" method="get" action="/search">
                                    <input name="q" type="text" size="15" placeholder="Rechercher" />
                                    <input id="button-submit" type="submit" value="Search" />
                                </form>
                            </ul>

                        </div>

                        <Table striped bordered hover size="sm" responsive="sm" className="tab">
                            <thead>
                                <tr>
                                    <th>Référence</th>
                                    <th>Date </th>
                                    <th>Etat</th>
                                    <th>Client</th>
                                    <th>Adresse</th>
                                    <th>Produit</th>
                                    <th>Prix</th>
                                    <th>Taxe</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>01-02-2023</td>
                                    <td> <BsCheckCircleFill className="icolor" /> Payé</td>
                                    <td>Khady</td>
                                    <td>Matam</td>
                                    <td>Getzner</td>
                                    <td>100000</td>
                                    <td>0 FCFA</td>
                                    <td>
                                        <a href="" className="cicol"> <CiRead onClick={handleShow} /> </a>

                                        <a href="" ><FiEdit2 /> </a>
                                        <a href="" className="aicol"><AiOutlineDelete /></a>

                                    </td>
                                </tr>
                                <tr>
                                    <td>002</td>
                                    <td>03-01-2023</td>
                                    <td> <AiFillCloseCircle className="icred" /> Non payé</td>
                                    <td>Fatim</td>
                                    <td>Thies</td>
                                    <td>Getzner</td>
                                    <td>150000</td>
                                    <td>300 FCFA</td>
                                    <td>
                                        <a href="" className="cicol"> <CiRead /> </a>
                                        <a href="" ><FiEdit2 /> </a>
                                        <a href="" className="aicol"><AiOutlineDelete /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>003</td>
                                    <td>01-02-2023</td>
                                    <td> <BsCheckCircleFill className="icolor" /> Payé</td>
                                    <td>Khady</td>
                                    <td>Mbour</td>
                                    <td>Getzner</td>
                                    <td>100000</td>
                                    <td>0 FCFA</td>
                                    <td>
                                        <a href="" className="cicol"> <CiRead /> </a>
                                        <a href="" ><FiEdit2 /> </a>
                                        <a href="" className="aicol"><AiOutlineDelete /></a> </td>
                                </tr>
                                <tr>
                                    <td>004</td>
                                    <td>03-01-2023</td>
                                    <td> <AiFillCloseCircle className="icred" /> Non payé</td>
                                    <td>Fatim</td>
                                    <td>Fatick</td>
                                    <td>Getzner</td>
                                    <td>150000</td>
                                    <td>300 FCFA</td>
                                    <td>
                                        <a href="" className="cicol"> <CiRead /> </a>
                                        <a href="" ><FiEdit2 /> </a>
                                        <a href="" className="aicol"><AiOutlineDelete /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>004</td>
                                    <td>03-01-2023</td>
                                    <td> <AiFillCloseCircle className="icred" /> Non payé</td>
                                    <td>Fatim</td>
                                    <td>Kaolack</td>
                                    <td>Getzner</td>
                                    <td>150000</td>
                                    <td>300 FCFA</td>
                                    <td>
                                        <a href="" className="cicol"> <CiRead /> </a>
                                        <a href="" ><FiEdit2 /> </a>
                                        <a href="" className="aicol"><AiOutlineDelete /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>003</td>
                                    <td>01-02-2023</td>
                                    <td> <BsCheckCircleFill className="icolor" /> Payé</td>
                                    <td>Khady</td>
                                    <td>Dakar</td>
                                    <td>Getzner</td>
                                    <td>100000</td>
                                    <td>0 FCFA</td>
                                    <td>
                                        <a href="" className="cicol"> <CiRead /> </a>
                                        <a href="" ><FiEdit2 /> </a>
                                        <a href="" className="aicol"><AiOutlineDelete /></a> </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>


                    <div className="section">
                        <p className="pcol">Caisse du jour</p>

                        <div className="card1">
                            <p>EN CAISSE
                                <br /> 0 FCFA
                            </p>
                        </div>
                        <div className="card2">
                            <p>  Dépense du jour <br />
12000 FCFA</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Home;