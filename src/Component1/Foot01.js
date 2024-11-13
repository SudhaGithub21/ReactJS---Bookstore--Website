import React from 'react';
import {Row,Col} from "reactstrap";
import { IoIosSend } from "react-icons/io";
import { RiUserFollowLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import M1 from "../marvel.png";

function App() {
    return (
      <div  className="foot01">
             <container>
                <Row>
                    <Col md="1" lg="1" xs="12" sm="12">
                    </Col>


                    <Col md="2" lg="2" xs="12" sm="12">
                    <div className="col03"></div>
                    <img className="logo01" src={M1} alt="marvel"/>
                    </Col>

                    
                    <Col md="3" lg="3" xs="12" sm="12">
                    <div className="col02">
                    <RiUserFollowLine className="sym01" /><p className="head01">About Marvel</p>
                    <p className="log">Help/FAQs</p>
                    <p className="log">Careers</p>
                    <p className="log">Internships</p>
                    </div>
                    </Col>

                    <Col md="3" lg="3" xs="12" sm="12">
                    <div className="col02">
                    <RiUserFollowLine className="sym01" /><p className="head01">Advertising</p>
                    <p className="log">Disney+</p>
                    <p className="log">Marvelhq.com</p>
                    <p className="log">Redeem Digital Comics</p>
                    </div>
                    </Col>

                    <Col md="3" lg="3" xs="12" sm="12">
                    <div className="col02">
                    <RiUserFollowLine className="sym01" /><p className="head01">Follow Us </p>
                    <FaInstagram className="logo" />
                    <ImFacebook2 className="logo" />
                    <FaTwitterSquare className="logo"/>
                    <FaSquareYoutube className="logo"/>
                    <FaSquareWhatsapp  className="logo"/> 
                    <input type="textbox" placeholder="Enter Email Address" className="mail01"></input>
                    <IoIosSend className="foot_send01" />
                    </div>
                    </Col>
            
            </Row>
            </container>
      </div>
    );
}

export default App;
