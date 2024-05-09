import React, { useState } from 'react'
import { Button, Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router';
import hood1 from '../Images/Men/hood1.webp'
import hood2 from '../Images/Men/hood2.jpg'
import hood3 from '../Images/Men/hood3.webp'
import { MdCurrencyRupee } from "react-icons/md";
import Swal from 'sweetalert2'

function Hood() {
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
            name: "ETA Solid Brown Resort Fit sweatshirt",
            description: "Jump into effortless style with the ETA brown resort fit sweatshirt",
            price: "999",
            image: hood1,
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
                <Col md={2} xs={12}><div>&nbsp;<FaArrowLeft onClick={arrow} style={{ fontSize: "30px", cursor: "pointer" }}></FaArrowLeft></div></Col>
                <Col md={4} xs={12}>
                    <Carousel>
                        <Carousel.Item interval={1600}>
                            <img src={hood1} style={{ width: "100%" }} />
                        </Carousel.Item>
                        <Carousel.Item interval={1600}>
                            <img src={hood2} style={{ width: "100%" }} />
                        </Carousel.Item>
                        <Carousel.Item interval={1600}>
                            <img src={hood3} style={{ width: "100%" }} />
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
                            <Card.Title>ETA Solid Brown Resort Fit sweatshirt</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Jump into effortless style with the ETA brown resort fit sweatshirt</Card.Subtitle><hr />
                            <Card.Subtitle className="mb-2 text-muted"><h3><MdCurrencyRupee /> 999/-</h3></Card.Subtitle><br/>
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
                                    Dimensions: 38cm<br/><br/>
                                    Jump into effortless style with the ETA brown resort fit sweatshirt. This cozy cotton masterpiece features a clever pocket-like hoodie, a chic collar, and full sleeves for that laid-back yet polished look. No buttons, just a stylish knot to tighten the end Ãƒ ¢Ã¢â€š ¬Ã¢â‚¬Å“ it's the perfect match for your favorite black jeans, making you the trendsetter of every resort getaway.<br/><br/>
                                    Net Quantity: 1N<br/><br/>
                                    Fit: Resort Fit<br/><br/>
                                    Care Instruction: Machine Wash<br/><br/>
                                    Fabric Composition: Cotton<br/><br/>
                                    Model Fit: The Model is 5 feet 8 inch and is Wearing Size M<br/><br/>
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

export default Hood;
