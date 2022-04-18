import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Checkout = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        if (email) {
            toast("Thank You For Checkout")
        }
    }
    return (
        <div className='container my-4'>
            <div className="row">

                <Form onSubmit={handleSubmit} className='col-10 col-md-6 mx-auto special p-3'>
                    <h2 className='text-center my-3'>Detail Information</h2>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" name="email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" placeholder="Address" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control type="text" placeholder="Phone Number" />
                    </Form.Group>
                    <Button className='w-50 mx-auto d-block' variant="dark" type="submit">
                        Proceed To Pay
                    </Button>
                    <ToastContainer></ToastContainer>
                </Form>
            </div>
        </div>
    );
};

export default Checkout;