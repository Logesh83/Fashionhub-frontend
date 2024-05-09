import React, { useState} from 'react'
import { Button, Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router';
import formal1 from '../Images/Men/formal1.webp'
import formal2 from '../Images/Men/formal2.webp'
import formal3 from '../Images/Men/formal3.webp'
import { MdCurrencyRupee } from "react-icons/md";
import Swal from 'sweetalert2'







function Formal() {

    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState('');
    
    const handleClick = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added successfully",
            showConfirmButton: false,
            timer: 1500
        });
        const itemDetails = {
            name: "Formals Solid Grey Relaxed Fit Dobby Shirt",
            description: "Choose sophistication, choose comfort, choose the WES Formals grey shirt",
            price: "1999",
            image: formal1,
            size: selectedSize 
        };
        navigate('/Cartbag', { state: { itemDetails } });
    }

    const arrow = () => {
        navigate('/Men');
    };
    return (
        <div>
            <br />
            <Row>
                <Col md={2} xs={12}><div >&nbsp;<FaArrowLeft onClick={arrow} style={{ fontSize: "30px", cursor: "pointer" }}></FaArrowLeft></div></Col>
                <Col md={4} xs={12}>
                    <Carousel>
                        <Carousel.Item interval={1600}>
                            <img src={formal1} style={{ width: "100%" }} />
                        </Carousel.Item>
                        <Carousel.Item interval={1600}>
                            <img src={formal2} style={{ width: "100%" }} />
                        </Carousel.Item>
                        <Carousel.Item interval={1600}>
                            <img src={formal3} style={{ width: "100%" }} />
                        </Carousel.Item>
                    </Carousel><hr />
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>Delivery, Return & Exchange Policy :</Card.Title><br />
                            <Card.Text style={{ textAlign: "justify" }}>
                                Our Delivery, Return & Exchange Policy aims to ensure a seamless shopping experience for our customers. We strive to deliver your orders promptly, to your provided address.<br /><br />
                                Please note that certain items may be ineligible for return or exchange due to hygiene reasons or other restrictions, as outlined in our Terms and Conditions."
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
                <Col md={4} xs={12}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>Formals Solid Grey Relaxed Fit Dobby Shirt</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Choose sophistication, choose comfort, choose the WES Formals grey shirt </Card.Subtitle><hr />
                            <Card.Subtitle className="mb-2 text-muted"><h3><MdCurrencyRupee /> 1999/-</h3></Card.Subtitle><br />
                            <Card.Text>
                                <h6>SIZE</h6><br />
                                <Button
                                    variant={selectedSize === 'XS' ? 'dark' : 'outline-dark'}
                                    onClick={() => setSelectedSize('XS')}
                                >
                                    XS
                                </Button>&nbsp;
                                <Button
                                    variant={selectedSize === 'S' ? 'dark' : 'outline-dark'}
                                    onClick={() => setSelectedSize('S')}
                                >
                                    S
                                </Button>&nbsp;
                                <Button
                                    variant={selectedSize === 'M' ? 'dark' : 'outline-dark'}
                                    onClick={() => setSelectedSize('M')}
                                >
                                    M
                                </Button>&nbsp;
                                <Button
                                    variant={selectedSize === 'L' ? 'dark' : 'outline-dark'}
                                    onClick={() => setSelectedSize('L')}
                                >
                                    L
                                </Button>&nbsp;
                                <Button
                                    variant={selectedSize === 'XL' ? 'dark' : 'outline-dark'}
                                    onClick={() => setSelectedSize('XL')}
                                >
                                    XL
                                </Button>&nbsp;
                            </Card.Text>
                            <br />

                            <Button variant='dark' onClick={handleClick} style={{ fontSize: "20px", fontFamily: "monospace", paddingRight: "5%", paddingLeft: "5%" }}> ADD TO BAG</Button><hr />
                            <Card.Text>
                                <h4>Product Details and Overview : </h4>
                                <p>Description: Shirt<br /><br />
                                    Dimensions: 96cm<br /><br />
                                    Choose sophistication, choose comfort, choose the WES Formals grey shirt - because excellence knows no compromise. Perfect for holding pens, small notepads, or simply adding an extra dash of style to your ensemble, is the chest pocket. Opt for classic formal trousers in a complementary color.<br /><br />
                                    Net Quantity: 1N<br /><br />
                                    Fit: Relaxed Fit<br /><br />
                                    Care Instruction: Machine Wash<br /><br />
                                    Fabric Composition: Cotton<br /><br />
                                    Model Fit: The Model is 6 feet and Wearing a Size 40<br /><br />
                                    Manufactured and Marketed By:
                                    Trent Limited, Bombay House, 24, Homi Mody Street, Fort, Mumbai – 400001<br /><br />
                                    Country Of Origin: India<br /><br />
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Col>
                <Col md={2} xs={12}></Col>
            </Row>

        </div>
    )
}

export default Formal
