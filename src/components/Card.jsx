import React,{useState} from 'react';
import {Modal,Button} from 'react-bootstrap';
import './Card.css';

function Card(props){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="cardd">
            
            <img src={props.url} alt="None" />
            <h1>{props.title}</h1>
            <p>{props.overview.substring(0,100)+" ..."}</p>
            <p>Popularity: {props.pop}/10</p>
            <div className="mod">
            <Button variant="danger" onClick={handleShow}>
                Book Now
            </Button>
            <Modal aria-labelledby="contained-modal-title-vcenter"centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Book Tickets - {props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                Date:<input type="date" /><br/><br/>
                No. of Tickets:
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select><br/><br/>
                    Seat Location:
                    <select>
                        <option value="1">Upper Seats</option>
                        <option value="2">Center Seats</option>
                        <option value="3">Towards Screen Seats</option>
                    </select>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Book Now
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    );
}

export default Card;