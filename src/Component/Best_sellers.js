import '../Component/Style.css';
import React from 'react';
import {Row,Col} from "reactstrap";
import B1 from "../images/Atomic.png";
import B2 from "../images/Ikigai.png";
import B3 from "../images/money.jpg";
import B4 from "../images/Mountain.png";
import B5 from "../images/Courage.png";
import { IoStar } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";
function App() {
    return (
      <div>
         <container>
                <Row>
                    <Col xs="12" lg="12" md="12" sm="12">
                    </Col>
                </Row>
            </container>
             <container>
                <Row className="main">
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                    <Col xs="12" lg="4" md="4" sm="12">
                    <div>
                    <h4 className="words">People's choice</h4>
                    <h2 className="words"><b>Bestseller Books</b></h2>
                    </div>
                    </Col>
                    <Col xs="12" lg="4" md="4" sm="12">
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12">
                    <button type="button" class="btn btn-primary btn2">View All</button>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                </Row>
            </container>
            <hr className="horizontal_line"/>
            <container>
                <Row className="main_books">
                
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                    <Col xs="12" lg="2" md="2" sm="12">
                    <div className="books1">
                    <div className="img1">
                    <img src={B1} alt="Atomic Habits" className="books"/>
                    <div className="overlay">
                        <div className="hello">Add to wish list<FaRegHeart/></div>
                    </div>
                    </div>
                    <h5 className="book_name">Atomic Habits:An Easy & Proven Way to Build Good Habits & Break Bad Ones(Paperback)</h5>
                    <h5 className="Author_name">James Clear</h5>
                    <div className="star">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarHalf />
                    </div>
                    <div className="rupees">
                    <FaIndianRupeeSign/><p className="strike2">557</p>
                    <div className="rupees2">
                    <FaIndianRupeeSign/><p className="strike2">342</p>
                    </div>
                    </div>
                    <button type="button" class="book_btn">Add to Cart</button>
                    <FaRegHeart className='wish_list'  />
                    </div>
                    </Col>

                    <Col xs="12" lg="2" md="2" sm="12">
                    <div className="books1">
                    <div className="img1">
                    <img src={B2} alt="Ikigai" className="books"/>
                    <div className="overlay">
                        <div className="hello">Add to wish list<FaRegHeart/></div>
                    </div>
                    </div>
                    <h5 className="book_name">Ikigai:The Japanese Secret to a Long and Happy Life(Hardcover)</h5>
                    <h5 className="Author_name">Héctor García and Francesc Miralles</h5>
                    <div className="star">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarHalf />
                    </div>
                    <div className="rupees">
                    <FaIndianRupeeSign/><p className="strike2">557</p>
                    <div className="rupees2">
                    <FaIndianRupeeSign/><p className="strike2">342</p>
                    </div>
                    </div>
                    <button type="button" class="book_btn">Add to Cart</button>
                    <FaRegHeart className='wish_list'/>
                    </div>
                    </Col>

                    <Col xs="12" lg="2" md="2" sm="12">
                    <div className="books1">
                    <div className="img1">
                    <img src={B3} alt="The Pschology of Money" className="books"/>
                    <div className="overlay">
                        <div className="hello">Add to wish list<FaRegHeart/></div>
                    </div>
                    </div>
                    <h5 className="book_name">The Pschology of Money:Timeless lessons on wealth, greed, and happiness(Hardcover)</h5>
                    <h5 className="Author_name">Morgan Housel</h5>
                    <div className="star">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarHalf />
                    </div>
                    <div className="rupees">
                    <FaIndianRupeeSign/><p className="strike2">317</p>
                    <div className="rupees2">
                    <FaIndianRupeeSign/><p className="strike2">382</p>
                    </div>
                    </div>
                    <button type="button" class="book_btn">Add to Cart</button>
                    <FaRegHeart className='wish_list'  />
                    </div>
                    </Col>
                    

                    <Col xs="12" lg="2" md="2" sm="12">
                    <div className="books1">
                    <div className="img1">
                    <img src={B4} alt="The Mountain is You" className="books"/>
                    <div className="overlay">
                        <div className="hello">Add to wish list<FaRegHeart/></div>
                    </div>
                    </div>
                    <h5 className="book_name">The Mountain is You:Transforming Self-Sabotage Into Self-Mastery(Paperback)</h5>
                    <h5 className="Author_name">Brianna Wiest</h5>
                    <div className="star">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarHalf />
                    </div>
                    <div className="rupees">
                    <p><FaIndianRupeeSign />197</p>
                    <p className="Strike_rupee"><FaIndianRupeeSign/>256</p>
                    </div>
                    <button type="button" class="book_btn">Add to Cart</button>
                    <FaRegHeart className='wish_list'  />
                    </div>
                    </Col>

                    <Col xs="12" lg="2" md="2" sm="12">
                    <div className="books1">
                    <div className="img1">
                    <img src={B5} alt="Courage to be Disliked" className="books"/>
                    <div className="overlay">
                        <div className="hello">Add to wish list<FaRegHeart/></div>
                    </div>
                    </div>
                    <h5 className="book_name">Courage To Be Disliked:How to free yourself(Hardcover)</h5>
                    <h5 className="Author_name">Ichiro Kishimi and Fumitake Koga</h5>
                    <div className="star">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarHalf />
                    </div>
                    <div className="rupees">
                    <p><FaIndianRupeeSign />236</p>
                    <p className="Strike_rupee"><FaIndianRupeeSign/>345</p>
                    </div>
                    <button type="button" class="book_btn">Add to Cart</button>
                    <FaRegHeart className='wish_list'  />
                    </div>
                    </Col>
                    
                    
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                </Row>
            </container>
      </div>
    );
  }
    
  export default App;