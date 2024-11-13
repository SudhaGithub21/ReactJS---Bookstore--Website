
import '../Component/Style.css';
import React from 'react';
import {Row,Col} from "reactstrap";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMailOpen } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
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
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div className="first_col">
                    <FaRegCircleDot className="foot_symbols" /><p className="foot_head">Mind Breakers </p>
                    <IoLocationOutline className="foot_loc"/><p className="foot_add">203, loc st.Mountain View<br/>
                    Area,city<br/>capital</p>
                    <IoCall className="foot_loc" /><p className="foot_add"> 91+8987463443</p>
                    <IoMailOpen className="foot_loc" /><p className="foot_add">info@gmail.com</p>
                    <input type="textbox" placeholder="Enter Email Address" className="box"></input>
                    <IoIosSend className="foot_send" />
                    </div>
                    </Col>
                    <Col xs="12" lg="2" md="2" sm="12">
                    <div className="first_col">
                    <IoIosDocument className="foot_symbols" /><p className="foot_head">Information </p>
                    <p className="foot_cate">About</p>
                    <p className="foot_cate">Brands</p>
                    <p className="foot_cate">Authors</p>
                    <p className="foot_cate">Poetry</p>
                    <p className="foot_cate">Comics</p>
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div className="first_col">
                    <TiDocumentText className="foot_symbols" /><p className="foot_head">Categories </p>
                    <p className="foot_cate">Bestseller Books</p>
                    <p className="foot_cate">New Arrivals</p>
                    <p className="foot_cate">Romance</p>
                    <p className="foot_cate">Adventures</p>
                    <p className="foot_cate">Self-Help</p>
                    <p className="foot_cate">Childrens</p>
                    </div>
                    </Col>
                    <Col xs="12" lg="2" md="2" sm="12">
                    <div className="four_col">
                    <RiUserFollowLine className="foot_symbols" /><p className="foot_head">Follow Us </p>
                    <FaInstagram className="follow_symbols" />
                    <ImFacebook2 className="follow_symbols" />
                    <FaTwitterSquare className="follow_symbols"/>
                    <FaSquareYoutube className="follow_symbols"/>
                    <FaSquareWhatsapp  className="follow_symbols"/> 
                    </div>
                    <img className="follow_symbols1" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg"/>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                  
                </Row>
            </container>
      </div>
    );
  }
    
  export default App;

