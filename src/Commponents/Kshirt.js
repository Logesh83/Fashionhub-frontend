import React, { useState } from 'react'
import { Button, Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import kshirt1 from '../Images/Kids/shirt1.webp'
import kshirt2 from '../Images/Kids/shirt2.webp'
import kshirt3 from '../Images/Kids/shirt3.jpg'
import { MdCurrencyRupee } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'

function Kshirt() {
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
            name: "Kids Dino Printed Green Shirt",
            description: "Let your little one's style roar with the HOP kids green shirt",
            price: "699",
            image: kshirt1,
            size: selectedSize 
        };
        navigate('/Cartbag', { state: { itemDetails } });
    }
    const arrow = () => {
        navigate('/Kids')
    }
    return (
        <div>
            <br />
            <Row>
                <Col md={2} xs={12}><div >&nbsp;<FaArrowLeft onClick={arrow} style={{ fontSize: "30px", cursor: "pointer" }}></FaArrowLeft></div></Col>
                <Col md={4} xs={12}>
                    <Carousel>
                        <Carousel.Item interval={1600}>
                            <img src={kshirt1} style={{ width: "100%" }} />
                        </Carousel.Item>
                        <Carousel.Item interval={1600}>
                            <img src={kshirt2} style={{ width: "100%" }} />
                        </Carousel.Item>
                        <Carousel.Item interval={1600}>
                            <img src={kshirt3} style={{ width: "100%" }} />
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
                            <Card.Title>Kids Dino Printed Green Shirt</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Let your little one's style roar with the HOP kids green shirt</Card.Subtitle><hr />
                            <Card.Subtitle className="mb-2 text-muted"><h3><MdCurrencyRupee /> 699/-</h3></Card.Subtitle><br />
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
                                <p>Description: Shirt<br/><br/>
                                    Dimensions: 56cm X 54cm<br/><br/>
                                    Let your little one's style roar with the HOP kids green shirt. This adorable short-sleeve shirt features a playful dinosaur print that adds a fun and vibrant touch to their outfit. The classic collar neckline adds a touch of sophistication to the overall look.<br/><br/>
                                    Net Quantity: 1N<br/><br/>
                                    Fit: Comfort Fit<br/><br/>
                                    Care Instruction: Machine Wash<br/><br/>
                                    Fabric Composition: Woven Cotton Slub<br/><br/>
                                    Manufactured and Marketed By:
                                    Trent Limited, Bombay House, 24, Homi Mody Street, Fort, Mumbai – 400001<br/><br/>
                                    Country Of Origin: India



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

export default Kshirt
