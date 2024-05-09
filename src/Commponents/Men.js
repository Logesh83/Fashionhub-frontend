import React, { useState, useEffect } from 'react'
import { Button, Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import menbanner1 from '../Images/Trend/menbanner1.avif'
import menbanner2 from '../Images/Trend/menbanner2.avif'
import menbanner3 from '../Images/Trend/menbanner3.avif'
import { MdCurrencyRupee } from "react-icons/md";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function Men() {
  const [mitems, setMitems] = useState([]);
  let navigate = useNavigate();

  const clickt = () => {
    navigate('/Tshirt')
  }
  const clickH = () => {
    navigate('/Hood')
  }
  const clickS = () => {
    navigate('/Shirt')
  }
  const clickF = () => {
    navigate('/Formal')
  }
  const clicks = () => {
    navigate('/Shorts')
  }
  const clickJ = () => {
    navigate('/Jeans')
  }



  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/getAllMen"
        );
        setMitems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);
  return (
    <div>
      
        <Row >
          <Col md={12} xl={12} >
            <Carousel>
              <Carousel.Item interval={1600}>
                <img src={menbanner1} style={{width:"100%"}} />
              </Carousel.Item>
              <Carousel.Item interval={1600}>
                <img src={menbanner2} style={{width:"100%"}} />
              </Carousel.Item>
              <Carousel.Item interval={1600}>
                <img src={menbanner3} style={{width:"100%"}} />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <hr />
        <Container>
        <Row>
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
                    <Button variant='outline-dark' onClick={clickt} >ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}  
          {mitems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={mitems[1].mimage} alt={mitems[1].mtitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{mitems[1].mname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{mitems[1].mname}<br />
                      {mitems[1].mdescription}<br /><br />
                      <MdCurrencyRupee />{mitems[1].mprice}/-</p>
                    <Button variant='outline-dark' onClick={clickH} >ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
          {mitems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={mitems[2].mimage} alt={mitems[2].mtitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{mitems[2].mname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{mitems[2].mname}<br />
                      {mitems[2].mdescription}<br /><br />
                      <MdCurrencyRupee />{mitems[2].mprice}/-</p>
                    <Button variant='outline-dark' onClick={clickS} >ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )} 
          {mitems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={mitems[3].mimage} alt={mitems[3].mtitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{mitems[3].mname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{mitems[3].mname}<br />
                      {mitems[3].mdescription}<br /><br />
                      <MdCurrencyRupee />{mitems[3].mprice}/-</p>
                    <Button variant='outline-dark'onClick={clickF} >ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )} 
          {mitems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={mitems[4].mimage} alt={mitems[4].mtitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{mitems[4].mname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{mitems[4].mname}<br />
                      {mitems[4].mdescription}<br /><br />
                      <MdCurrencyRupee />{mitems[4].mprice}/-</p>
                    <Button variant='outline-dark' onClick={clicks} >ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )} 
          {mitems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={mitems[5].mimage} alt={mitems[5].mtitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{mitems[5].mname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{mitems[5].mname}<br />
                      {mitems[5].mdescription}<br /><br />
                      <MdCurrencyRupee />{mitems[5].mprice}/-</p>
                    <Button variant='outline-dark' onClick={clickJ}  >ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )} 
        </Row>
        </Container>
    </div>
  )
}

export default Men



