
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
      <div  className="footer4">
             <container>
                <Row>
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                    <Col xs="12" lg="5" md="5" sm="12">
                    <div className="first_col4">
                    <FaRegCircleDot className="foot_symbols4" /><p className="foot_head4">Mind Breakers </p>
                    
                    <IoCall className="foot_loc4" /><p className="foot_add4"> 91+8987463443</p>
                    <IoMailOpen className="foot_loc24" /><p className="foot_mail4">info@gmail.com</p>
                    <p className="foot_cate24">Subsrcibe with us to get book publisher offers and exciting newsletter</p>
                    <input type="textbox" placeholder="Enter Email Address" className="box4"></input>
                    <IoArrowForwardCircleOutline className="foot_send4" />
                   
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div className="first_col4">
                    <TiDocumentText className="foot_symbols4" /><p className="foot_head4">Poetry </p>
                    <p className="foot_cate4">Macmillan Publisher</p>
                    <p className="foot_cate4">Happer Collins</p>
                    <p className="foot_cate4">Rupa Publications</p>
                    <p className="foot_cate4">The Walt Disney</p>
                    <p className="foot_cate4">Four Way Books</p>
                    <p className="foot_cate4">Coach House Books</p>
                   
                    </div>
                    </Col>
                    <Col xs="12" lg="2" md="2" sm="12">
                    <div className="four_col4">
                    <RiUserFollowLine className="foot_symbols4" /><p className="foot_head4">Follow Us </p>
                    <FaInstagram className="follow_symbols4" />
                    <ImFacebook2 className="follow_symbols4" />
                    <FaTwitterSquare className="follow_symbols4"/>
                    <FaSquareYoutube className="follow_symbols4"/>
                    <FaSquareWhatsapp  className="follow_symbols4"/> 
                    </div>
                    <img className="follow_symbols14" src="https://tse1.mm.bing.net/th?id=OIP.SqBoBkA8Gkl23ZJ0EGVkDgAAAA&pid=Api&P=0&h=180"/>
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



