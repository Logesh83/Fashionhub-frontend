import React, { useState, useEffect } from 'react'
import { Button, Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import womenbanner1 from '../Images/Trend/womenbanner1.avif';
import womenbanner2 from '../Images/Trend/womenbanner2.avif';
import womenbanner3 from '../Images/Trend/womenbanner3.avif';
import { MdCurrencyRupee } from "react-icons/md";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function Women() {
  
  const [witems, setWitems] = useState([]);
  let navigate = useNavigate();

  const clickwt = () => {
    navigate('/Wtshirt')
  }
  const clickws = () => {
    navigate('/Wshirt')
  }
  const clickjk = () => {
    navigate('/Jeanshirt')
  }
  const clickwk = () => {
    navigate('/Wkurtha')
  }
  const clickwp = () => {
    navigate('/Wtop')
  }
  const clickwz = () => {
    navigate('/Wplaz')
  }


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/getAllWomen"
        );
        setWitems(response.data);
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
                <img src={womenbanner1} style={{width:"100%"}} />
              </Carousel.Item>
              <Carousel.Item interval={1600}>
                <img src={womenbanner2} style={{width:"100%"}} />
              </Carousel.Item>
              <Carousel.Item interval={1600}>
                <img src={womenbanner3} style={{width:"100%"}} />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <hr />
        <Container>
        <Row>
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
          {witems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={witems[1].wimage} alt={witems[1].wtitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{witems[1].wname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{witems[1].wname}<br />
                      {witems[1].wdescription}<br /><br />
                      <MdCurrencyRupee />{witems[1].wprice}/-</p>
                    <Button variant='outline-dark' onClick={clickws}>ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
          {witems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={witems[2].wimage} alt={witems[2].wtitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{witems[2].wname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{witems[2].wname}<br />
                      {witems[2].wdescription}<br /><br />
                      <MdCurrencyRupee />{witems[2].wprice}/-</p>
                    <Button variant='outline-dark' onClick={clickjk} >ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
          {witems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={witems[3].wimage} alt={witems[3].wtitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{witems[3].wname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{witems[3].wname}<br />
                      {witems[3].wdescription}<br /><br />
                      <MdCurrencyRupee />{witems[3].wprice}/-</p>
                    <Button variant='outline-dark' onClick={clickwk}>ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
          {witems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={witems[4].wimage} alt={witems[4].wtitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{witems[4].wname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{witems[4].wname}<br />
                      {witems[4].wdescription}<br /><br />
                      <MdCurrencyRupee />{witems[4].wprice}/-</p>
                    <Button variant='outline-dark'  onClick={clickwp} >ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
          {witems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={witems[5].wimage} alt={witems[5].wtitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{witems[5].wname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{witems[5].wname}<br />
                      {witems[5].wdescription}<br /><br />
                      <MdCurrencyRupee />{witems[5].wprice}/-</p>
                    <Button variant='outline-dark'  onClick={clickwz}>ADD TO CART</Button>
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

export default Women
