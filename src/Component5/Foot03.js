import React from 'react';
import {Row,Col} from "reactstrap";
import { IoIosSend } from "react-icons/io";
import { RiUserFollowLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
/*import F1 from "../images/fantasy.jpg";*/
function App() {
    return (
      <div  className="foot03">
             <container>
                <Row>
                    <Col md="1" lg="1" xs="12" sm="12">
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div className="col17"></div>
                    <img className="pics" srC="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvY-S89-pdt8sMs41HmX4nWCLgBrv_2S9ig&s" alt="bedtym stories"/>
                    </Col>
                    
                    <Col md="3" lg="3" xs="12" sm="12">
                    <div className="col09">
                    <RiUserFollowLine className="sym09" /><p className="head09">Our Bedtime Stories</p>
                    <p className="log09">Graphic Novels</p>
                    <p className="log09">Activity Books</p>
                    <p className="log09">Drawing Books</p>
                    <p className="log09">colouring Books</p>
                    </div>
                    </Col>

                    <Col md="3" lg="3" xs="12" sm="12">
                    <div className="col09">
                    <RiUserFollowLine className="sym09" /><p className="head09">Payment Method</p>
                    <p className="log09">Credit Card</p>
                    <p className="log09">Net Banking</p>
                    <p className="log09">ATM & Debit Cards</p>
                    <p className="log09">COD(Cash on Delivery)</p>
                    </div>
                    </Col>

                    <Col md="3" lg="3" xs="12" sm="12">
                    <div className="col09">
                    <RiUserFollowLine className="sym09" /><p className="head09">Follow Us </p>
                    <FaInstagram className="logo09" />
                    <ImFacebook2 className="logo09" />
                    <FaTwitterSquare className="logo09"/>
                    <FaSquareYoutube className="logo09"/>
                    <FaSquareWhatsapp  className="logo09"/> 
                    <input type="textbox" placeholder="Enter Email Address" className="mail09"></input>
                    <IoIosSend className="foot_send09" />
                    </div>
                    </Col>
            
            </Row>
            </container>
      </div>

    );
}

export default App;