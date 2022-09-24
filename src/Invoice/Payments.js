import Button from '@material-ui/core/Button';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Modal, Row, Col } from 'react-bootstrap';
import { Alert, AlertTitle } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentIcon from '@mui/icons-material/Payment';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

function PayNowButton(props) {
    const [modalShow, setModalShow] = useState(false);
    const [element, setElement] = useState(<div></div>)
    const [validated, setValidated] = useState(false);
    const [Message, setMessage] = useState("");
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {

            event.stopPropagation();
            setMessage("All Fields are Mandetory")
            console.log("in invlalid")
        }
        else {
            setValidated(true);
            onConfirm(true)
            setMessage("")
        }


    };
    const onHide = () => setModalShow(false);
    const onPayNow = () => setModalShow(true);
    const onConfirm = (check) => {

        console.log("confirm")
        setElement(<Successful show={check} />);
        props.onBuyHandlerCall();
        setModalShow(false);


    }
    return (
        <div>
            <Button
                size="large"
                className='btncolor'
                onClick={onPayNow}
                // disabled={props.isDisabled}
            >
                <AccountBalanceWalletIcon fontSize="small" className='me-2' />
                Pay Now
            </Button>
            <Modal
                show={modalShow}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Select Payment Method
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" >
                            <Form.Check
                                inline
                                reverse
                                label={<span><PaymentIcon className='me-1' />Debit card</span>}
                                name="group1"
                                type="radio"
                                id={"1"}
                            />
                            <Form.Check
                                inline
                                reverse
                                label={<span><PaymentIcon className='me-1' />Debit card</span>}
                                name='group1'
                                type="radio"
                                id={"1"}
                                required
                            />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" >
                                <Form.Label>Enter CVV</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter CVV"

                                    required
                                />

                            </Form.Group>
                            <Form.Group as={Col} md="6" >
                                <Form.Label>Expairy Date</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="eg. 05/23"
                                    required
                                />

                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-2">
                            <Form.Label>Enter card Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter card number"
                                required
                            />
                        </Form.Group>
                        <span style={{ color: "Red" }}>{Message}</span>
                        <Form.Group className='d-flex justify-content-center mt-3' >
                            <Button
                                 className='me-3'
                                style={{ backgroundColor: "#7c7777", color: "#ffffff" }}
                                onClick={onHide}>Close</Button>
                            <Button 
                                className='btncolor ms-2'
                                type='submit'>
                                    confirm
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>

            </Modal>
            {element}
        </div>
    );
}


function Successful(props) {

    const navigate = useNavigate();
    const GotoHome = () => {
        navigate('/');
    }
    const GotoShelf = () => {
        navigate('/Shelf');
    }

    return (
        <div>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Body className="m-3">
                    <Alert style={{ backgroundColor: "#a5eaa2" }} severity="success">
                        <AlertTitle>Your Order is Successful</AlertTitle>
                        You Can view Books in Shelf</Alert>
                </Modal.Body>
                <Modal.Footer className="justify-content-center mb-3">
                    <Button className='btncolor me-3'
                    onClick={()=>{
                        GotoShelf()}} >
                        Go To Shelf
                    </Button>
                    <Button className='btncolor me-2'
                    onClick={()=>{
                        GotoHome()}}  >
                        <HomeIcon className="me-1" fontSize="small" /> Home
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default PayNowButton;