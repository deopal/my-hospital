import React from 'react';

import{Form,Button,Card} from 'react-bootstrap';
import "./contact.css";


export default function Contact(){
    

    return(
        <React.Fragment>
        <div className="main">
         <div className="bg-dark m-auto row p-2 nav" style={{color:'white'}}>
      <h4>hospital@treatment.com</h4>
      <h4>+1 23456 78945</h4>
      </div>
     
   

      
   
        <div className=" m-auto container">
            
            <div className=" row">
                <div className="col-sm-12 col-lg-6 col-md-6 m-auto">
                <iframe 
                title="Contact us"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13707.115616540275!2d76.72321033030771!3d30.808834005769004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff1794ffb9189%3A0x9e945acc3513dfd4!2sNew%20Chandigarh%2C%20Punjab!5e0!3m2!1sen!2sin!4v1619439583100!5m2!1sen!2sin" 
                    width="100%" height="500"  allowfullscreen="" loading="lazy">
                    </iframe>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-6 p-4 m-auto">
                <Card className="bg-info p-2 h-100">
                <Card.Body >
                <Card.Title className="head"><h2>Contact us</h2></Card.Title>
               
 
                <Form>
                   
                    <Form.Group controlId="name" className="input">
                        <Form.Label>Name*</Form.Label>
                        <Form.Control  placeholder="Name" />
                    </Form.Group>
                   
                  
                    
                    <Form.Group controlId="email" className="input">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email address" />
                    </Form.Group>
                    <Form.Group controlId="number" className="input">
                        <Form.Label>Contact number*</Form.Label>
                        <Form.Control type="email" placeholder="Contact number" />
                    </Form.Group>
                    
                  
                   
                    <Form.Group controlId="message" className="input">
                        <Form.Label>Your message*</Form.Label>
                        <Form.Control as="textarea" placeholder="Write your message here" />
                    </Form.Group>
                   
                    <Button variant="success" type="submit" className="btn">
                    Submit
                    </Button>

                </Form>
            </Card.Body>
            </Card>
                </div>
            </div>
        </div>
        </div>
        </React.Fragment>
    );
}