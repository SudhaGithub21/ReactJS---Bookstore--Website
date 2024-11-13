
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

function App() {
    return (
      <div  className="footer8">
             <container>
                <Row>
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                    <Col xs="12" lg="5" md="5" sm="12">
                    <div className="first_col8">
                    <FaRegCircleDot className="foot_symbols8" /><p className="foot_head8">Mind Breakers </p>
                    
                    <IoCall className="foot_loc8" /><p className="foot_add8"> 91+8987463443</p>
                    <IoMailOpen className="foot_loc8" /><p className="foot_mail8">info@gmail.com</p>
                    <p className="foot_cate28">Subsrcibe with us to get book publisher offers and exciting newsletter</p>
                    <input type="textbox" placeholder="Enter Email Address" className="box8"></input>
                    <IoArrowForwardCircleOutline className="foot_send8" />
                   
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div className="first_col8">
                    <TiDocumentText className="foot_symbols8" /><p className="foot_head8">SelfHelp Books </p>
                    <p className="foot_cate8">Macmillan Publisher</p>
                    <p className="foot_cate8">Happer Collins</p>
                    <p className="foot_cate8">Rupa Publications</p>
                    <p className="foot_cate8">The Walt Disney</p>
                    <p className="foot_cate8">Four Way Books</p>
                    <p className="foot_cate8">Coach House Books</p>
                   
                    </div>
                    </Col>
                    <Col xs="12" lg="2" md="2" sm="12">
                    <div className="four_col8">
                    <RiUserFollowLine className="foot_symbols8" /><p className="foot_head8">Follow Us </p>
                    <FaInstagram className="follow_symbols8" />
                    <ImFacebook2 className="follow_symbols8" />
                    <FaTwitterSquare className="follow_symbols8"/>
                    <FaSquareYoutube className="follow_symbols8"/>
                    <FaSquareWhatsapp  className="follow_symbols8"/> 
                    </div>
                    <img className="foot5" src="https://i.pinimg.com/originals/aa/f3/3f/aaf33fddc28a3bc8c629caf2e2fa8ea6.jpg"/>
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



