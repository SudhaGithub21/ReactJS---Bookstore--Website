import '../Component/Style.css';
import React from 'react';
import {Row,Col} from "reactstrap";
import B6 from "../images/New_Arrivals/Witch.png";
import B7 from "../images/New_Arrivals/Murder.png";
import B8 from "../images/New_Arrivals/Doors.png";
import B9 from "../images/New_Arrivals/EndLove.png";
import B10 from "../images/New_Arrivals/Dark.png";
import { IoStar } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";
function App() {
    return (
      <div>
         <container>
                <Row>
                    <Col xs="12" lg="12">
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
                    <img src={B6} alt="Atomic Habits" className="books"/>
                    <div className="overlay">
                        <div className="hello">Add to wish list<FaRegHeart/></div>
                    </div>
                    </div>
                    <h5 className="book_name">The Last Murder at the End of the World(Paperback)</h5>
                    <h5 className="Author_name">Stuart Turton</h5>
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
                    <img src={B7} alt="Ikigai" className="books"/>
                    <div className="overlay">
                        <div className="hello">Add to wish list<FaRegHeart/></div>
                    </div>
                    </div>
                    <h5 className="book_name">A Witch's Guide to Magical Innkeeping(Hardcover)</h5>
                    <h5 className="Author_name">Sangu Mandanna</h5>
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
                    <img src={B8} alt="The Pschology of Money" className="books"/>
                    <div className="overlay">
                        <div className="hello">Add to wish list<FaRegHeart/></div>
                    </div>
                    </div>
                    <h5 className="book_name">The Book of Doors: The irresistible Paperback and Hardcover</h5>
                    <h5 className="Author_name">Gareth Brown</h5>
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
                    <FaRegHeart className='wish_list'/>
                    </div>
                    </Col>

                    <Col xs="12" lg="2" md="2" sm="12">
                    <div className="books1">
                    <div className="img1">
                    <img src={B9} alt="The Mountain is You" className="books"/>
                    <div className="overlay">
                        <div className="hello">Add to wish list<FaRegHeart/></div>
                    </div>
                    </div>
                    <h5 className="book_name">How to End a Love Story HardCover and Paperback</h5>
                    <h5 className="Author_name">Yulin Kuang</h5>
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
                    <img src={B10} alt="Courage to be Disliked" className="books"/>
                    <div className="overlay">
                        <div className="hello">Add to wish list<FaRegHeart/></div>
                    </div>
                    </div>
                    <h5 className="book_name">Where the Dark Stands Still: A sweeping,gothic(Hardcover)</h5>
                    <h5 className="Author_name">A.B. Poranek</h5>
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