
import '../Component/Style.css';
import React from 'react';
import {Row,Col} from "reactstrap";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMailOpen } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { IoIosDocument } from "react-icons/io";
import { RiUserFollowLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import F6 from './Foot.png';
function App() {
    return (
      <div  className="footer6">
             <container>
                <Row>
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                    <Col xs="12" lg="5" md="5" sm="12">
                    <div className="first_col6">
                    <FaRegCircleDot className="foot_symbols6" /><p className="foot_head6">Mind Breakers </p>
                    
                    <IoCall className="foot_loc6" /><p className="foot_add6"> 91+8987463443</p>
                    <IoMailOpen className="foot_loc26" /><p className="foot_mail6">info@gmail.com</p>
                    <p className="foot_cate26">Subsrcibe with us to get book publisher offers and exciting newsletter</p>
                    <input type="textbox" placeholder="Enter Email Address" className="box6"></input>
                    <IoArrowForwardCircleOutline className="foot_send6" />
                   
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div className="first_col16">
                    <TiDocumentText className="foot_symbols6" /><p className="foot_head6">Kids Books </p>
                    <p className="foot_cate6">Macmillan Publisher</p>
                    <p className="foot_cate6">Happer Collins</p>
                    <p className="foot_cate6">Rupa Publications</p>
                    <p className="foot_cate6">The Walt Disney</p>
                    <p className="foot_cate6">Four Way Books</p>
                    <p className="foot_cate6">Coach House Books</p>
                   
                    </div>
                    </Col>
                    <Col xs="12" lg="2" md="2" sm="12">
                    <div className="four_col6">
                    <RiUserFollowLine className="foot_symbols6" /><p className="foot_head6">Follow Us </p>
                    <FaInstagram className="follow_symbols6" />
                    <ImFacebook2 className="follow_symbols6" />
                    <FaTwitterSquare className="follow_symbols6"/>
                    <FaSquareYoutube className="follow_symbols6"/>
                    <FaSquareWhatsapp  className="follow_symbols6"/> 
                    </div>
                    <img className="follow_symbols26" src={F6}/>
                    </Col>
                   
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                    
                  
                </Row>
            </container>
      </div>
    );
  }
    
  export default App;



