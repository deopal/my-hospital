import React from 'react';

import logo from "../../assets/images/logo.jpg";


import {Navbar,Nav,NavDropdown,Image,Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import { useSelector ,useDispatch} from 'react-redux';
import * as doc_actions from "../../store/actions/doc_auth_action";
import * as pat_actions from "../../store/actions/pat_auth_action";




export default function SignIn() {

  const doc_auth=useSelector(state=>state.docauth.token!==null);
  const pat_auth=useSelector(state=>state.patauth.token!==null);
  const pat_username=useSelector(state=>state.patauth.username);
  const doc_username=useSelector(state=>state.docauth.username);
  const dispatch=useDispatch();
   
        return(
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
  <Navbar.Brand href="/" ><Image src={logo} className="w-50 h-50"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto" style={{fontSize:'1.5em', color:'black'}} >
      <Nav.Link><NavLink to="/" exact activeClassName="active" style={{color:'gray'}}>Home</NavLink></Nav.Link>
      <Nav.Link><NavLink to="/about" activeClassName="active" style={{color:'gray'}}>About</NavLink></Nav.Link>
      <NavDropdown title="Pages" id="collasible-nav-dropdown" style={{color:'gray'}}>
        <NavDropdown.Item ><NavLink to="/about">Action</NavLink></NavDropdown.Item>
        <NavDropdown.Item >Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Admin panel</NavDropdown.Item>
        
      </NavDropdown>
      <Nav.Link><NavLink to="/contact" activeClassName="active" style={{color:'gray'}}>Contact Us</NavLink></Nav.Link>
    </Nav>
    {!doc_auth && !pat_auth ?
      <Nav>

      <Button className="mr-5" variant="primary">
      <NavDropdown title="Register" id="collasible-nav-dropdown" >
        <NavDropdown.Item style={{zIndex:99}}><NavLink to="/patient_signin">As a patient</NavLink></NavDropdown.Item>
        <NavDropdown.Item style={{zIndex:99}}><NavLink to="/doctor_signin">As a doctor</NavLink></NavDropdown.Item>
        </NavDropdown></Button>
      
    </Nav> 
    : doc_auth ?
    <Nav className="m-auto">

      <h4 style={{color:'black',textTransform:'capitalize'}} className="m-auto mr-4">{doc_username}</h4>
      <Button className="m-2" variant="success" onClick={()=>dispatch(doc_actions.logout())}>
      Logout
      </Button>
      
    </Nav> 
    :
    <Nav>

      <h4 style={{color:'black',textTransform:'capitalize'}} className="m-auto mr-4">{pat_username}</h4>

      <Button className="m-2" variant="primary" onClick={()=>dispatch(pat_actions.logout())}>
        Logout
        </Button>
      
    </Nav> 

    
    }
    
  </Navbar.Collapse>
</Navbar>

        );

};

