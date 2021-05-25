import React from 'react';
import feature_1 from "../../assets/images/features/feature_1.jpg";
import feature_2 from "../../assets/images/features/feature_2.jpg";
import feature_3 from "../../assets/images/features/feature_3.jpg";
import feature_4 from "../../assets/images/features/feature_4.jpg";
import {Paper} from '@material-ui/core';

import{NavLink} from 'react-router-dom';

import {Card,Button} from 'react-bootstrap';

const feature=()=>{
    return(
        <div className="row m-2 ">
            <Paper elevation={3} className="col-sm-12 col-lg-3 col-md-6 p-2 ">
<Card className="bg-info p-2 h-100">
  <Card.Img variant="top" src={feature_1} style={{height:'250px'}} />
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>Abdominal Pain and Gastric problemss</Card.Title>
    <Card.Text>
    The abdomen is the area that falls between your chest and pelvis that is commonly referred to as your belly.
     It consists of stomach, liver, small intestine, large intestine, gallbladder, spleen, kidneys, diaphragm, and pancreas among other organs.
    </Card.Text>
    <Button variant="primary"><NavLink to="/about" className="btn-primary">Read More</NavLink></Button>  </Card.Body>
</Card>
</Paper>
<Paper elevation={3} className="col-sm-12 col-lg-3 col-md-6 p-2 ">
<Card className="bg-primary p-2 h-100">
  <Card.Img variant="top" src={feature_2} style={{height:'250px'}} />
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>Dengue</Card.Title>
    <Card.Text>
    Dengue is a virus-based infection majorly predominant in the tropical regions of the world. 
    The female Aedes mosquito is the vector that transmits dengue causing virus cells from infected people to healthy people through blood-sucking bites.
    </Card.Text>
    <Button variant="warning"><NavLink to="/about" >Read More</NavLink></Button>
  </Card.Body>
</Card>
</Paper>

<Paper elevation={3} className="col-sm-12 col-lg-3 col-md-6  p-2 ">
<Card className="bg-info p-2 h-100">
  <Card.Img variant="top" src={feature_3}  style={{height:'250px'}} />
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>Weight Loss/Bariatric Surgery</Card.Title>
    <Card.Text>
    Bariatric surgery is nothing but the common term collectively used for many types of weight-loss surgeries.
    These surgeries make changes to your digestive system to help you lose weight
    </Card.Text>
    <Button variant="primary"><NavLink to="/about"  className="btn-primary">Read More</NavLink></Button>  </Card.Body>
</Card>
</Paper>

<Paper elevation={3} className="col-sm-12 col-lg-3 col-md-6  p-2 ">
<Card className="bg-primary p-2 h-100">
  <Card.Img variant="top" src={feature_4} style={{height:'250px'}}/>
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>Migraine Headaches</Card.Title>
    <Card.Text>
    Migraine is generally confused with a normal headache, however the severity of the two are incomparable. 
    Migraine presents with a host of other debilitating symptoms such as nausea, vomiting, sensitivity to loud sounds and lights and general discomfort
    </Card.Text>
    <Button variant="warning"><NavLink to="/about" >Read More</NavLink></Button>  </Card.Body>
</Card>
</Paper>
        </div>
    );
}

export default feature;