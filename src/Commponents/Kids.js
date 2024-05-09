import React, { useState, useEffect } from 'react'
import { Button, Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import kidbanner1 from '../Images/Trend/kidbanner1.avif'
import kidbanner2 from '../Images/Trend/kidbanner2.avif'
import kidbanner3 from '../Images/Trend/kidbanner3.jpg'
import { MdCurrencyRupee } from "react-icons/md";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


function Kids() {
  const [kitems, setKitems] = useState([]);
  let navigate = useNavigate();

  const clickkp = () => {
    navigate('/Kparty')
  }
  const clickkt = () => {
    navigate('/Ktshirt')
  }
  const clickkg = () => {
    navigate('/Kdress')
  }
  const clickks = () => {
    navigate('/Kshirt')
  }
  const clickkn = () => {
    navigate('/Kpant')
  }
  const clickkd = () => {
    navigate('/Kgdress')
  }


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/getAllKids"
        );
        setKitems(response.data);
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
                <img src={kidbanner1} className='im1' />
              </Carousel.Item>
              <Carousel.Item interval={1600}>
                <img src={kidbanner2} className='im1' />
              </Carousel.Item>
              <Carousel.Item interval={1600}>
                <img src={kidbanner3} className='im1' />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row><hr/>
        <Container>
        <Row>
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
                    <Button variant='outline-dark'onClick={clickkp}>ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
            {kitems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={kitems[1].kimage} alt={kitems[1].ktitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{kitems[1].kname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{kitems[1].kname}<br />
                      {kitems[1].kdescription}<br /><br />
                      <MdCurrencyRupee />{kitems[1].kprice}/-</p>
                    <Button variant='outline-dark'onClick={clickkt}>ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
            {kitems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={kitems[2].kimage} alt={kitems[2].ktitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{kitems[2].kname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{kitems[2].kname}<br />
                      {kitems[2].kdescription}<br /><br />
                      <MdCurrencyRupee />{kitems[2].kprice}/-</p>
                    <Button variant='outline-dark'onClick={clickkg}>ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
            {kitems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={kitems[3].kimage} alt={kitems[3].ktitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{kitems[3].kname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{kitems[3].kname}<br />
                      {kitems[3].kdescription}<br /><br />
                      <MdCurrencyRupee />{kitems[3].kprice}/-</p>
                    <Button variant='outline-dark'onClick={clickks}>ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
            {kitems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={kitems[4].kimage} alt={kitems[4].ktitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{kitems[4].kname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{kitems[4].kname}<br />
                      {kitems[4].kdescription}<br /><br />
                      <MdCurrencyRupee />{kitems[4].kprice}/-</p>
                    <Button variant='outline-dark'onClick={clickkn}>ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )}
            {kitems.length > 0 && (
            <Col md={4} xs={12} className="mb-4 d-flex">
              <Card className="card flex-fill">
                <Card.Img className="picture" variant="top" src={kitems[5].kimage} alt={kitems[5].ktitle} />
                <Card.Body className="color d-flex flex-column">
                  <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                    <b>{kitems[5].kname}</b>
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>{kitems[5].kname}<br />
                      {kitems[5].kdescription}<br /><br />
                      <MdCurrencyRupee />{kitems[5].kprice}/-</p>
                    <Button variant='outline-dark'onClick={clickkd}>ADD TO CART</Button>
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

export default Kids
