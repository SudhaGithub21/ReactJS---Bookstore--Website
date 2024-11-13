import React from 'react';
import {Row,Col} from "reactstrap";
import { IoIosSend } from "react-icons/io";
import { RiUserFollowLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
function App() {
    return (
      <div  className="foot02">
             <container>
                <Row>
                    <Col md="1" lg="1" xs="12" sm="12">
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div className="col09"></div>
                    <img className="pic" srC="https://i.ytimg.com/vi/TP-G0I2pir0/maxresdefault.jpg" alt="bedtym stories"/>
                    </Col>
                    
                    <Col md="3" lg="3" xs="12" sm="12">
                    <div className="col07">
                    <RiUserFollowLine className="sym07" /><p className="head07">Our Bedtime Stories</p>
                    <p className="log07">Graphic Novels</p>
                    <p className="log07">Activity Books</p>
                    <p className="log07">Drawing Books</p>
                    <p className="log07">colouring Books</p>
                    </div>
                    </Col>

                    <Col md="3" lg="3" xs="12" sm="12">
                    <div className="col07">
                    <RiUserFollowLine className="sym07" /><p className="head07">Payment Method</p>
                    <p className="log07">Credit Card</p>
                    <p className="log07">Net Banking</p>
                    <p className="log07">ATM & Debit Cards</p>
                    <p className="log07">COD(Cash on Delivery)</p>
                    </div>
                    </Col>

                    <Col md="3" lg="3" xs="12" sm="12">
                    <div className="col07">
                    <RiUserFollowLine className="sym07" /><p className="head07">Follow Us </p>
                    <FaInstagram className="logo07" />
                    <ImFacebook2 className="logo07" />
                    <FaTwitterSquare className="logo07"/>
                    <FaSquareYoutube className="logo07"/>
                    <FaSquareWhatsapp  className="logo07"/> 
                    <input type="textbox" placeholder="Enter Email Address" className="mail07"></input>
                    <IoIosSend className="foot_send07" />
                    </div>
                    </Col>
            
            </Row>
            </container>
      </div>
    );
}

export default App;