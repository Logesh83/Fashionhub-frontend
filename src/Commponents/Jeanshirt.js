import React, { useState } from 'react'
import { Button, Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import wjeans1 from '../Images/Women/wshik1.webp'
import wjeans2 from '../Images/Women/wshik2.webp'
import wjeans3 from '../Images/Women/wshik3.webp'
import { MdCurrencyRupee } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
function Jeanshirt() {
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
            name: "Light Blue Seam Detail Denim Shirt Dress",
            description: "Nuon presents above the knee length , short sleeves light blue dress in denim made cotton blend",
            price: "1999",
            image: wjeans1,
            size: selectedSize 
        };
        navigate('/Cartbag', { state: { itemDetails } });
    }
    const arrow = () => {
        navigate('/Women')
    }
    return (
        <div>
            <br />
            <Row>
                <Col md={2} xs={12}><div >&nbsp;<FaArrowLeft onClick={arrow} style={{ fontSize: "30px", cursor: "pointer" }}></FaArrowLeft></div></Col>
                <Col md={4} xs={12}>
                    <Carousel>
                        <Carousel.Item interval={1600}>
                            <img src={wjeans1} style={{ width: "100%" }} />
                        </Carousel.Item>
                        <Carousel.Item interval={1600}>
                            <img src={wjeans2} style={{ width: "100%" }} />
                        </Carousel.Item>
                        <Carousel.Item interval={1600}>
                            <img src={wjeans3} style={{ width: "100%" }} />
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
                            <Card.Title>Light Blue Seam Detail Denim Shirt Dress</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Nuon presents above the knee length , short sleeves light blue dress in denim made cotton blend</Card.Subtitle><hr />
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
                                <p>Description: Dress<br/><br/>
                                    Dimensions: 75cm<br/><br/>
                                    Nuon presents above the knee length , short sleeves light blue dress in denim made cotton blend, Collar neckline, metal buttons down the front, a yoke at the back and flap chest pockets with a button.<br/><br/>
                                    Net Quantity: 1N<br/><br/>
                                    Dress Type: Shirt Dress<br/><br/>
                                    Fit: Regular Fit<br/><br/>
                                    Care Instruction: Machine Wash<br/><br/>
                                    Fabric Composition: 98% Cotton, 2% Elastane<br/><br/>
                                    Model Fit: Model is 5ft 8in/172cm and is wearing a Size Small<br/><br/>
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

export default Jeanshirt
