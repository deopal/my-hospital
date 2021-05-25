import React from 'react';

import {Form,Col,Button} from 'react-bootstrap';
import "./appointment.css";

export default function appointment(){
    return(
        
        <div className=" bg ">
            <div className="row main p-4">
                <div className="col-sm-12 col-lg-7 p-4 slot" >
                <h2>Book You Slot Now and Save your time</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis at lacus at rhoncus. Integer pharetra lacus vitae sapien blandit eleifend. </p>
    <h2>For Help Call : +189-123-453</h2>
    
                </div>
                <div className=" col-sm-12 col-lg-5 p-2">
                <Form>
                    <h2 className="head">Make an appointment</h2>
                    <Form.Row>
                    <Form.Group as={Col} controlId="name">
                        <Form.Label>Patient name*</Form.Label>
                        <Form.Control  placeholder="Patient name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="age">
                        <Form.Label>Age*</Form.Label>
                        <Form.Control  placeholder="Age" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="adhar">
                        <Form.Label>Adhar number*</Form.Label>
                        <Form.Control  placeholder="Adhar number" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address*</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City*</Form.Label>
                        <Form.Control placeholder="city"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State*</Form.Label>
                        <Form.Control placeholder="state"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip*</Form.Label>
                        <Form.Control placeholder="zip"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Contact number*</Form.Label>
                        <Form.Control placeholder="contact number"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="number">
                        <Form.Label>Gender*</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Health problems*</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter health problems" />
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Upload past reports" />
                    </Form.Group>
                    <Button variant="success" type="submit" className="m-auto">
                    Submit
                    </Button>

                </Form>

                </div>
            </div>
        </div>
    )
}