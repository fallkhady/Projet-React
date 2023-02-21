import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsCheckCircleFill, BsCommand } from "react-icons/bs";
import { AiFillCloseCircle, AiOutlineDelete } from "react-icons/ai";
import { CiDeliveryTruck, CiRead } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";

const Client = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="contenu">
            <Navbar />
            <div className="table1">
                <div className="tabcom1">
                    <p>Clients</p>

                    <div className="sous-nav1">
                        <ul className="bg1">
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
                            <form id="searchbox1" method="get" action="/search">
                                <input name="q" type="text" size="15" placeholder="Rechercher" />
                                <input id="button-submit" type="submit" value="Search" />
                            </form>
                        </ul>

                    </div>

                    <Table striped bordered hover size="sm" responsive="sm">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prenom </th>
                                <th>Genre</th>
                                <th>Adresse</th>
                                <th>Ville</th>
                                <th>Pays</th>
                                <th>Email</th>
                                <th>Telephone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>FALL</td>
                                <td>Khady</td>
                                <td>Femme</td>
                                <td>Thiaroye Azur</td>
                                <td>Dakar</td>
                                <td>Senegal</td>
                                <td>Khadyfall298@gmail.com</td>
                                <td>77 950 42 42</td>
                                <td>
                                    <a href="" className="cicol"> <CiRead onClick={handleShow} /> </a>

                                    <a href="" ><FiEdit2 /> </a>
                                    <a href="" className="aicol"><AiOutlineDelete /></a>

                                </td>
                            </tr>
                            <tr>
                                <td>FALL</td>
                                <td>Khady</td>
                                <td>Femme</td>
                                <td>Thiaroye Azur</td>
                                <td>Dakar</td>
                                <td>Senegal</td>
                                <td>Khadyfall298@gmail.com</td>
                                <td>77 950 42 42</td>
                                <td>
                                    <a href="" className="cicol"> <CiRead /> </a>
                                    <a href="" ><FiEdit2 /> </a>
                                    <a href="" className="aicol"><AiOutlineDelete /></a>
                                </td>
                            </tr>
                            <tr>
                                <td>FALL</td>
                                <td>Khady</td>
                                <td>Femme</td>
                                <td>Thiaroye Azur</td>
                                <td>Dakar</td>
                                <td>Senegal</td>
                                <td>Khadyfall298@gmail.com</td>
                                <td>77 950 42 42</td>
                                <td>
                                    <a href="" className="cicol"> <CiRead /> </a>
                                    <a href="" ><FiEdit2 /> </a>
                                    <a href="" className="aicol"><AiOutlineDelete /></a> </td>
                            </tr>
                            <tr>
                                <td>FALL</td>
                                <td>Khady</td>
                                <td>Femme</td>
                                <td>Thiaroye Azur</td>
                                <td>Dakar</td>
                                <td>Senegal</td>
                                <td>Khadyfall298@gmail.com</td>
                                <td>77 950 42 42</td>
                                <td>
                                    <a href="" className="cicol"> <CiRead /> </a>
                                    <a href="" ><FiEdit2 /> </a>
                                    <a href="" className="aicol"><AiOutlineDelete /></a>
                                </td>
                            </tr>
                            <tr>
                                <td>FALL</td>
                                <td>Khady</td>
                                <td>Femme</td>
                                <td>Thiaroye Azur</td>
                                <td>Dakar</td>
                                <td>Senegal</td>
                                <td>Khadyfall298@gmail.com</td>
                                <td>77 950 42 42</td>
                                <td>
                                    <a href="" className="cicol"> <CiRead /> </a>
                                    <a href="" ><FiEdit2 /> </a>
                                    <a href="" className="aicol"><AiOutlineDelete /></a>
                                </td>
                            </tr>
                            <tr>
                                <td>FALL</td>
                                <td>Khady</td>
                                <td>Femme</td>
                                <td>Thiaroye Azur</td>
                                <td>Dakar</td>
                                <td>Senegal</td>
                                <td>Khadyfall298@gmail.com</td>
                                <td>77 950 42 42</td>
                                <td>
                                    <a href="" className="cicol"> <CiRead /> </a>
                                    <a href="" ><FiEdit2 /> </a>
                                    <a href="" className="aicol"><AiOutlineDelete /></a> </td>
                            </tr>
                            <tr>
                                <td>FALL</td>
                                <td>Khady</td>
                                <td>Femme</td>
                                <td>Thiaroye Azur</td>
                                <td>Dakar</td>
                                <td>Senegal</td>
                                <td>Khadyfall298@gmail.com</td>
                                <td>77 950 42 42</td>
                                <td>
                                    <a href="" className="cicol"> <CiRead /> </a>
                                    <a href="" ><FiEdit2 /> </a>
                                    <a href="" className="aicol"><AiOutlineDelete /></a> </td>
                            </tr>
                            <tr>
                                <td>FALL</td>
                                <td>Khady</td>
                                <td>Femme</td>
                                <td>Thiaroye Azur</td>
                                <td>Dakar</td>
                                <td>Senegal</td>
                                <td>Khadyfall298@gmail.com</td>
                                <td>77 950 42 42</td>
                                <td>
                                    <a href="" className="cicol"> <CiRead /> </a>
                                    <a href="" ><FiEdit2 /> </a>
                                    <a href="" className="aicol"><AiOutlineDelete /></a> </td>
                            </tr>
                            <tr>
                                <td>FALL</td>
                                <td>Khady</td>
                                <td>Femme</td>
                                <td>Thiaroye Azur</td>
                                <td>Dakar</td>
                                <td>Senegal</td>
                                <td>Khadyfall298@gmail.com</td>
                                <td>77 950 42 42</td>
                                <td>
                                    <a href="" className="cicol"> <CiRead /> </a>
                                    <a href="" ><FiEdit2 /> </a>
                                    <a href="" className="aicol"><AiOutlineDelete /></a> </td>
                            </tr>
                            <tr>
                                <td>FALL</td>
                                <td>Khady</td>
                                <td>Femme</td>
                                <td>Thiaroye Azur</td>
                                <td>Dakar</td>
                                <td>Senegal</td>
                                <td>Khadyfall298@gmail.com</td>
                                <td>77 950 42 42</td>
                                <td>
                                    <a href="" className="cicol"> <CiRead /> </a>
                                    <a href="" ><FiEdit2 /> </a>
                                    <a href="" className="aicol"><AiOutlineDelete /></a> </td>
                            </tr>
                            <tr>
                                <td>FALL</td>
                                <td>Khady</td>
                                <td>Femme</td>
                                <td>Thiaroye Azur</td>
                                <td>Dakar</td>
                                <td>Senegal</td>
                                <td>Khadyfall298@gmail.com</td>
                                <td>77 950 42 42</td>
                                <td>
                                    <a href="" className="cicol"> <CiRead /> </a>
                                    <a href="" ><FiEdit2 /> </a>
                                    <a href="" className="aicol"><AiOutlineDelete /></a> </td>
                            </tr>
                            <tr>
                                <td>FALL</td>
                                <td>Khady</td>
                                <td>Femme</td>
                                <td>Thiaroye Azur</td>
                                <td>Dakar</td>
                                <td>Senegal</td>
                                <td>Khadyfall298@gmail.com</td>
                                <td>77 950 42 42</td>
                                <td>
                                    <a href="" className="cicol"> <CiRead /> </a>
                                    <a href="" ><FiEdit2 /> </a>
                                    <a href="" className="aicol"><AiOutlineDelete /></a> </td>
                            </tr>
                        </tbody >
                    </Table >
                </div >



            </div >
        </div >
    );
};

export default Client;