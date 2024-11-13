
import './Style.css';
import React from 'react';
import { useNavigate } from "react-router-dom"; 
import '../Component/Header';
import {Form, FormGroup, Label, Input,Row,Col} from 'reactstrap';

/*import { FacebookLoginButton } from 'react-social-login-buttons';*/



function Login() {
  const navigate = useNavigate();  
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/Header');
  };

  return (

<div className="color">
<container>
      <Row>
        <Col xs="2" lg="2" md="2" sm="2"></Col>
        <Col xs="4" lg="4" md="4" sm="4">
        <img src="https://img.freepik.com/premium-vector/cute-brain-is-sitting-books-that-piles-floor_105783-37.jpg" className="img-login" alt="book"/>
        </Col>
        <Col xs="4" lg="4" md="4" sm="4">
      <Form className="login-form">
      
      <div className="Welcome">
      
        <h1>
          <span className="heelo">Hello,</span>
        </h1>
        <p  className="simple"><b>Welcome!</b></p>
      </div>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="valami@valami.hu" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="password" />
      </FormGroup> 
              
      <button type="button" class="btn btn-lg btn-light btn1" onClick={handleClick}>Login</button>
      
      
      <button type="button" class="btn btn-lg btn-light btn1">Sign Up</button>
      <FormGroup>
        <div className="text-center">Or continue with your social account.</div>
        {/*<FacebookLoginButton className="mt-3 mb-3" />*/}
      </FormGroup>
      <FormGroup>
         
      
        
        
<div className="media-img">
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_2GDBELyW1p4emezv1S0x8k-7CT4ojC8eQ&s"
          alt="Pet"
        />
         <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdCgjrn-P_XDbBiVSxffdmIbTsgLa-USmeg&s"
          alt="Pet"
        />
        <img
          className="img"
          src="https://i.pinimg.com/originals/ea/7a/f2/ea7af2007c2e5e62d5aa355570f2d115.png"
          alt="Pet"
        />
      </div>
        
      </FormGroup>
    </Form>
    </Col>
    <Col xs="2" lg="2" md="2" sm="2"></Col>
    </Row>
    </container>
    

  </div>
  
  );
}
export default Login;
