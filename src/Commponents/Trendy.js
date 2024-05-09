import React, { useState, useEffect } from 'react';
import "./Trendy.css";
import { Button, Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import avater1 from '../Images/Trend/avater1.avif';
import avater2 from '../Images/Trend/avater2.avif';
import avater3 from '../Images/Trend/avater3.avif';
import welcome from '../Images/Trend/welcome.gif';
import { BiSolidShoppingBags } from "react-icons/bi";
import { LuHeartHandshake } from "react-icons/lu";
import { IoBagCheckSharp } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Trendy() {
  const [showTerms, setShowTerms] = useState(false);
  const [showCondition, setShowCondition] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [mitems, setMitems] = useState([]);
  const [witems, setWitems] = useState([]);
  const [kitems, setKitems] = useState([]);
  let navigate = useNavigate();

  const clickt = () => {
    navigate('/Tshirt')
  }
  const clickwt = () => {
    navigate('/Wtshirt')
  }
  const clickkt = () => {
    navigate('/Kparty')
  }

  const handleClick = () => {
    setShowTerms(true);
  };
  const handleChange = () => {
    setShowCondition(true);
  };
  const handleClick1 = () => {
    setShowPolicy(true);
  };
  const handleClick2 = () => {
    setShowPrivacy(true);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/getAllMen");
        setMitems(response.data);
      } catch (error) {
        console.error("Error fetching men's items:", error);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/getAllWomen");
        setWitems(response.data);
      } catch (error) {
        console.error("Error fetching women's items:", error);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/getAllKids");
        setKitems(response.data);
      } catch (error) {
        console.error("Error fetching kids' items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <img src={welcome} style={{ width: "100%",height:"40%"}} />
      <Row>
        <Col md={12} xl={12}>
          <Carousel>
            <Carousel.Item interval={1600}>
              <img src={avater1} className='im1' />
            </Carousel.Item>
            <Carousel.Item interval={1600}>
              <img src={avater2} className='im1' />
            </Carousel.Item>
            <Carousel.Item interval={1600}>
              <img src={avater3} className='im1' />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Container>
        <br />
        <hr />
        <Row>
          <h1 style={{textAlign:"center", fontFamily:"-moz-initial"}}><u>BRAND NEW COLLECTIONS</u></h1>
          {mitems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={mitems[0].mimage} alt={mitems[0].mtitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{mitems[0].mname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{mitems[0].mname}<br />
                      {mitems[0].mdescription}<br /><br />
                      <MdCurrencyRupee />{mitems[0].mprice}/-</p>
                    <Button variant='outline-dark' onClick={clickt}>ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
          {witems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={witems[0].wimage} alt={witems[0].wtitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{witems[0].wname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{witems[0].wname}<br />
                      {witems[0].wdescription}<br /><br />
                      <MdCurrencyRupee />{witems[0].wprice}/-</p>
                    <Button variant='outline-dark' onClick={clickwt}>ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
          {kitems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={kitems[0].kimage} alt={kitems[0].ktitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{kitems[0].kname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{kitems[0].kname}<br />
                      {kitems[0].kdescription}<br /><br />
                      <MdCurrencyRupee />{kitems[0].kprice}/-</p>
                    <Button variant='outline-dark' onClick={clickkt}>ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col xs={12}>
            <div className="footer">
              <br />
              <h2 style={{ color: "Black", textAlign: "center", fontFamily: "-moz-initial" }}>Fashion Hub Cares</h2>
              <hr />
              <p style={{ textAlign: "center" }}>WE DO NOT ASK FOR YOUR BANK ACCOUNT OR CARD DETAILS VERBALLY OR TELEPHONICALLY.<br /><br />
                WE ALSO DO NOT ASK FOR MONEY TO PARTICIPATE IN ANY OF OUR OFFERS OR RUN ANY LUCKY DRAWS</p>
              <hr />
              <Row>
                <Col md={4} style={{ textAlign: "center", fontSize: "50px" }}><BiSolidShoppingBags /><br /><p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>EASY EXCHANGE</p></Col>
                <Col md={4} style={{ textAlign: "center", fontSize: "50px" }}><LuHeartHandshake /><br /><p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>100% HANDPICKED</p></Col>
                <Col md={4} style={{ textAlign: "center", fontSize: "50px" }}><IoBagCheckSharp /><br /><p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>ASSURED QUALITY</p></Col>
              </Row>
              <hr />
              <br />
              <h2 style={{ color: "Black", textAlign: "center", fontFamily: "-moz-initial" }}>Fashion hub Conditions</h2>
              <hr />
              <Row>
                <Col md={3} style={{ textAlign: "center" }}><Button className='cards' variant='secondary' onClick={handleClick}>Promotions Terms & Conditions</Button></Col><br />
                <Col md={3} style={{ textAlign: "center" }}><Button className='cards' variant='secondary' onClick={handleChange}>Terms & Conditions</Button></Col><br />
                <Col md={3} style={{ textAlign: "center" }}><Button className='cards' variant='secondary' onClick={handleClick1}>Returns & Refunds Policy</Button></Col><br />
                <Col md={3} style={{ textAlign: "center" }}><Button className='cards' variant='secondary' onClick={handleClick2}>We Respect Your Privacy</Button></Col><br />
              </Row>
              <br />
              <Row>
                <Col md={12}>
                  <div>
                    {showTerms && (
                      <Card className='design'>
                        <Card.Header>Promotions Terms & Conditions</Card.Header>
                        <Card.Body>
                          <Card.Text>
                            With a plethora of attractive offers and promotions running on our site, it’s you we want, to be the winner all the way. While every product we host on the site is something we would want to wear ourselves, not each of them is eligible for coupons, promotions or offers. They apply on select merchandise only. You can refer to individual offer eligibilities on a product page, to choose what you like best.<br />
                            What’s foremost to note is that the maximum amount you could get off on your choice of product depends on the site discount threshold or coupon threshold, which in turn could vary from 41% to 60% or higher or lower. For example, a product on 50% discount – after applying an extra 30% discount may result in total product discount of 60% only.<br />
                            If you are buying more than one product, the benefit of the coupon discount would collectively apply on all your products, albeit taking into account the individual pricing of each product. You could refer to your purchase invoice to know all the details around the final pricing.<br />
                            If you choose to return or cancel purchase of any product, the amount that would be refunded to you would be the final product price on your invoice that you may have received after availing all offer benefits. This will, of course, be subject to a sign-off from our QC team after inspecting the returned items.<br />
                            You would be eligible for the First Purchase Coupon if and only if you are about to make your first-ever buy on the site. However, if you wish to cancel or return your purchase, you will no longer be eligible for availing this offer again.<br />
                            Please note that FASHION HUB reserves the right to modify the terms and conditions of any of the promotions offered on the Platforms at any given time.<br />
                            Now that we have got your attention, we hope you will read on to know more about the attractive offers and promotions we have in store for you. Happy shopping!<br />
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={12}>
                  <div>
                    {showCondition && (
                      <Card className='design'>
                        <Card.Header>FASHION HUB TERMS AND CONDITIONS</Card.Header>
                        <Card.Body>
                          <Card.Text>
                            Welcome to FASHION HUB and FASHION HUB !<br />
                            The portals www.FASHION HUB.com (“FASHION HUB”), www...FASHION HUB.com (“FASHION HUB .”) and the corresponding mobile application (collectively, “Platforms”), are managed and operated by Reliance Retail Limited (“Reliance”, “we”, “us” or “our”). Any natural or legal person who accesses and/or uses the Platforms in any manner (“you” or “your”) or uses any current or future service or functionality or offer made available on the Platforms (“Service”) will be subject to these terms and conditions for use of the Platforms (“Terms”), as updated from time to time. Your access to Services, other platforms or utilisation of Products (defined below), offers or promotions in relation to the Products, as may be provided by us or our affiliates, may be governed by other terms and conditions, policies or guidelines (“Additional Terms”) along with these Terms. If these Terms are inconsistent with such Additional Terms, the Additional Terms will control to the extent of such inconsistency with respect to the applicable Service or utilisation of the Product.<br />
                            These Terms constitute an electronic record within the meaning of the Information Technology Act, 2002. This electronic record is generated by a computer system and does not require any physical or digital signatures. Please read these Terms carefully before using or accessing the Platforms or availing any Service. By using the Platforms or availing any Service, you signify your agreement to be bound by these Terms.<br />
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={12}>
                  <div>
                    {showPolicy && (
                      <Card className='design'>
                        <Card.Header>CANCELLATION, RETURN AND REFUND POLICY</Card.Header>
                        <Card.Body>
                          <Card.Text>
                            Reliance Retail Limited, a company incorporated under the laws of India, having its registered office at 3rd Floor, Court House, Lokmanya Tilak Marg, Dhobi Talao, Mumbai – 400 002, Maharashtra, India (“Reliance”, “we”, “us” or “our”) is managing and operating the websites www.FASHION HUB.com (“FASHION HUB”) and ..FASHION HUB.com (“FASHION HUB .”) and the corresponding mobile and tablet applications thereof (FASHION HUB and FASHION HUB . are collectively referred to as the “Platforms”) through which it inter alia, offers various retail solutions, facilitates the online sale and purchase of a diverse range of products including lifestyle, fashion, clothing, appeal, footwear, accessories, electronic and home appliances, beauty, toys and other products listed on the Platforms from time to time (“Products”) to the users of the Platforms (“User” or “Users” or “you” or “your”).<br />
                            We aim to provide the best customer experience to our Users beginning from placing an order to initiating a return on the Platforms. While transacting on the Platforms, you can expect a hassle-free experience in returning, cancelling the Products that you have ordered/booked and can rely on us as your preferred shopping destination.<br />
                            The Terms and Conditions published on the Platforms shall be read by reference here. This cancellation, return, and refund policy (“Policy”), together with the Terms and Conditions sets out Reliance’s procedures and policies in accepting: (a) cancellation, (b) Product return once the Product is delivered to the User, and (c) refund thereof. Any cancellation or refund of Products by you are subject to the terms and conditions set out under this Policy.<br />
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={12}>
                  <div>
                    {showPrivacy && (
                      <Card className='design'>
                        <Card.Header>PRIVACY POLICY</Card.Header>
                        <Card.Body>
                          <Card.Text>
                            1. General<br /><br />
                            1.1 Reliance Retail Limited, having its registered office at 3rd Floor, Court House, Lokmanya Tilak Marg, Dhobi Talao, Mumbai – 400 002, Maharashtra, India (“Reliance”, “we”, “us” or “our”) is managing and operating the websites: WWW.FASHION HUB.COM (“FASHION HUB”), WWW...FASHION HUB.COM (“FASHION HUB .”) and the mobile application thereof (FASHION HUB and FASHION HUB . are collectively referred to as the “Platforms”) through which Reliance inter alia facilitates the sale and purchase of a diverse range of fashion, home, lifestyle and other products and services listed on and sold on the Platforms from time to time (“Products”) to the users of the Platforms (“User” or “Users” or “you” or “your”).  The term User/User(s) means any individual or entity which uses, accesses or browses the Platform and/or purchases Products from the Platform.<br />
                            1.2 Reliance is committed to protecting and respecting your privacy. This privacy policy (“Privacy Policy”), together with the FASHION HUB and FASHION HUB . TERMS AND CONDITIONS (“Terms of Use”) and all other policies notified by us from time to time governs your use of the Platforms.  This Privacy Policy  describes our policies and procedures on the collection, use, disclosure, sharing, processing, transfer  storage, retention and safeguarding of the Information (defined hereinafter) provided to us by you through the use of the Platforms and/or pursuant to the purchase of the Products on the Platforms.<br />
                            2. Applicability of the Privacy Policy:<br /><br />
                            2.1 By using, browsing, accessing, or purchasing Products from the Platforms and/or by submission of Information (and in case of a minor - submission of such minor’s Information either by the parents or the legal guardian),  you agree to be bound by the terms of this Privacy Policy and consent to the collection, use, storage, possession, dealing, processing, handling, sharing, disclosure, transfer or retention of your Information in accordance with the terms of the Privacy Policy and agree to be governed by the laws of India including but not limited to the laws applicable to data protection and privacy. We shall not use the User’s Information in any manner except as provided under this Privacy Policy and to the extent permitted under the laws applicable to data protection and privacy. All capitalized terms used herein if not defined shall have the same meaning as ascribed to them under the Terms of Use.<br />
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      &nbsp;
    </div>
  );
}

export default Trendy;
