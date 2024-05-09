import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import { MdCurrencyRupee } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'
import './Cartbag.css'

function Cartbag() {
let usernameInput;
let passwordInput;



const handleClickBuyNow = async () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        iconColor: 'white',
        customClass: {
            popup: 'colored-toast',
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
    });

    await Toast.fire({
        icon: 'success',
        title: 'Processing',
    });

    Swal.fire({
        title: 'Login Form',
        html: `
            <input type="text" id="username" class="swal2-input" placeholder="Username">
            <input type="password" id="password" class="swal2-input" placeholder="Password">
        `,
        confirmButtonText: 'Sign in',
        focusConfirm: false,
        didOpen: () => {
            const popup = Swal.getPopup();
            usernameInput = popup.querySelector('#username');
            passwordInput = popup.querySelector('#password');
            usernameInput.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    Swal.clickConfirm();
                }
            });
            passwordInput.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    Swal.clickConfirm();
                }
            });
        },
        preConfirm: () => {
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();
            if (!username || !password) {
                Swal.showValidationMessage(`Please enter username and password`);
            }
            // Show success message if the login is successful
            else {
                Swal.fire({
                    title: "Sucessfully login !",
                    text: "We contact on E-mail !",
                    icon: "success"
                });
            }
            return { username, password };
        },
    });
};

   
    const location = useLocation(); // Use the useLocation hook to get the location object
    const { itemDetails } = location.state || {}; // Destructure the itemDetails property from location.state

    const [cards, setCards] = useState([]);

    useEffect(() => {
        if (itemDetails) {
            // Retrieve item details from props and add them to the cards array
            setCards([{
                id: 1,
                name: itemDetails.name,
                description: itemDetails.description,
                price: parseInt(itemDetails.price, 10),
                image: itemDetails.image,
                size: itemDetails.size,
                quantity: 1
            }]);
        }
    }, [itemDetails]);

    // Function to handle adding quantity
    const handleAdd = (id) => {
        setCards(prevCards =>
            prevCards.map(card =>
                card.id === id ? { ...card, quantity: card.quantity + 1 } : card
            )
        );
    };

    // Function to handle removing quantity
    const handleRemoveQuantity = (id) => {
        setCards(prevCards =>
            prevCards.map(card =>
                card.id === id && card.quantity > 1 ? { ...card, quantity: card.quantity - 1 } : card
            )
        );
    };

    // Function to handle removing the card
    const handleRemove = (id) => {
        // Filter out the card with the given id
        const updatedCards = cards.filter(card => card.id !== id);
        // Update the state to remove the card
        setCards(updatedCards);
    };

    // Calculate total item, total MRP, discount on MRP, and total amount
    const totalItem = cards.reduce((total, card) => total + card.quantity, 0);
    const totalMRP = cards.reduce((total, card) => total + (card.price * card.quantity), 0);
    const discountOnMRP = 0; // Assuming no discount for now
    const totalAmount = totalMRP - discountOnMRP;

    return (
        <div>
            <br />
            <Container>
                <Row>
                    <Col md={8} xs={12}>
                        <Card>
                            <Card.Header><h4 style={{ fontFamily: "-moz-initial", fontSize: "35px" }}>Shopping Bag</h4></Card.Header>
                            {cards.length === 0 ? (
                                <p style={{ fontFamily: "-moz-initial", fontSize: "15px", padding: "15%", textAlign: "center" }}>No items are added</p>
                            ) : (
                                cards.map(card => (
                                    <Card key={card.id} className="card flex-fill">
                                        <Card.Img style={{ width: "30%" }} variant="top" src={card.image} />
                                        <Card.Body className="color d-flex flex-column">
                                            <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                                                <b>{card.name}</b>
                                            </Card.Title>
                                            <Card.Text className="flex-grow-1">
                                                <p style={{ fontSize: "20px", fontFamily: "-moz-initial" }}>
                                                    {card.description}<br /><br />Size :&nbsp;{card.size}<br /><br />
                                                    <MdCurrencyRupee />{card.price}/- {/* Display total price */}
                                                </p>
                                            </Card.Text>
                                            <div>
                                                <Button variant="outline-dark" onClick={() => handleAdd(card.id)}>+</Button>&nbsp;
                                                <span>&nbsp;{card.quantity}&nbsp;</span>&nbsp;
                                                <Button variant="outline-dark" onClick={() => handleRemoveQuantity(card.id)}>-</Button><br /><br />
                                                <Button variant="danger" onClick={() => handleRemove(card.id)}>Remove</Button>&nbsp;
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ))
                            )}
                        </Card>
                    </Col>

                    <Col md={4} xs={12}>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title><h2>Total Amount</h2></Card.Title><hr />
                                <Card.Text>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>Total Item:</div>
                                        <div>{totalItem}</div>
                                    </div><br />
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>Total MRP: </div>
                                        <div><MdCurrencyRupee />{totalMRP}/-</div>
                                    </div><br />
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>Discount on MRP:</div>
                                        <div><MdCurrencyRupee />{discountOnMRP}/-</div>
                                    </div><br />
                                    <hr />
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>Total Amount:</div>
                                        <div> <MdCurrencyRupee />{totalAmount}/-</div>
                                    </div><hr /><br />
                                    <div style={{ textAlign: "center" }}>
                                        <Button variant='outline-dark' onClick={handleClickBuyNow}>BUY NOW</Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cartbag;
