
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
      <div  className="footer2">
             <container>
                <Row>
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                    <Col xs="12" lg="5" md="5" sm="12">
                    <div className="first_col2">
                    <FaRegCircleDot className="foot_symbols2" /><p className="foot_head2">Mind Breakers </p>
                    
                    <IoCall className="foot_loc2" /><p className="foot_add2"> 91+8987463443</p>
                    <IoMailOpen className="foot_loc22" /><p className="foot_mail2">info@gmail.com</p>
                    <p className="foot_cate22">Subsrcibe with us to get book publisher offers and exciting newsletter</p>
                    <input type="textbox" placeholder="Enter Email Address" className="box2"></input>
                    <IoArrowForwardCircleOutline className="foot_send2" />
                   
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div className="first_col2">
                    <TiDocumentText className="foot_symbols2" /><p className="foot_head2">Brands </p>
                    <p className="foot_cate2">Macmillan Publisher</p>
                    <p className="foot_cate2">Happer Collins</p>
                    <p className="foot_cate2">Rupa Publications</p>
                    <p className="foot_cate2">The Walt Disney</p>
                    <p className="foot_cate2">Four Way Books</p>
                    <p className="foot_cate2">Coach House Books</p>
                   
                    </div>
                    </Col>
                    <Col xs="12" lg="2" md="2" sm="12">
                    <div className="four_col2">
                    <RiUserFollowLine className="foot_symbols2" /><p className="foot_head2">Follow Us </p>
                    <FaInstagram className="follow_symbols2" />
                    <ImFacebook2 className="follow_symbols2" />
                    <FaTwitterSquare className="follow_symbols2"/>
                    <FaSquareYoutube className="follow_symbols2"/>
                    <FaSquareWhatsapp  className="follow_symbols2"/> 
                    </div>
                    <img className="follow_symbols12" src="https://www.shutterstock.com/image-vector/brand-assessment-test-public-valuation-260nw-1658379460.jpg"/>
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



