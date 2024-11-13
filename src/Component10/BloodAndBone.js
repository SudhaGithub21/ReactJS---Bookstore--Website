import '../Component/Style.css';
import React from 'react';
import {Row,Col} from "reactstrap";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

function App() {
    return (
      <div>
             <container>
                <Row>
                    <Col xs="12" lg="6" md="6" sm="12">
                    <div className="next">
                    <img Src="https://www.cavalierhousebooks.com/sites/cavalierhousebooks.com/files/styles/quick_story_image/public/IMG_6999.jpeg?itok=eCjz-tEv" 
                    alt="Children of blood and bone book"
                    className="nextimg1"/>
                    </div>
                    </Col>
                    <Col xs="12" lg="6" md="6" sm="12" className="next_section">
                    <h2>Children of Blood And Bone</h2>
                    <h4>By Tomi Adeyemi</h4>
                    <h6>(Rating by Good Reads)</h6>
                    <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                    </div>
                    <div className="rupees_next">
                        <p className="strike2"> Rs. 857</p>
                        <div className="rupees2_next">
                        <p className="strike2">Rs. 942</p>
                        </div>
                    </div>
                    <h4>Only 5 left in stock</h4>
                    <h4>Binding:Paperback</h4>
                    <h4>Condition: Gently Used</h4>
                    <button type="button" class="btn_next">Add to Cart</button>
                    <h5> Delivery Within 2-3 days Business Days</h5>
                    <img Src="https://cdn.shopify.com/s/files/1/0302/6927/6291/files/Diamond.png?v=1699967239" className="tinyimg"/>
                    <img src="https://cdn.shopify.com/s/files/1/0302/6927/6291/files/shipping.png?v=1699963834" className="tinyimg"/>
                    <img src="https://cdn.shopify.com/s/files/1/0302/6927/6291/files/100_-Original-Books-Only_cac68066-95bb-4ef2-8258-ebc2e4e8e33c.png?v=1700561925" className="tinyimg"/>
                    <img src="https://cdn.shopify.com/s/files/1/0302/6927/6291/files/Bookmark.png?v=1699963834" className="tinyimg"/>
                  
                    <hr/>
                    <h3>Description:</h3>
                    <p> Follows Zélie Adebola, a young woman in the magical land of Orïsha, as she embarks on a quest to restore magic and 
                        bring justice to her oppressed people. After her mother is killed by the king's soldiers, Zélie, with the help of 
                        a runaway princess and her brother, must defy royal forces and harness her hidden powers. The story is rich with 
                        West African mythology, exploring themes of race, oppression, and resistance.</p>
                    <h3> Other Details</h3>
                    <p>Author - Robert Littell<br/>
                       Publisher - Pan Books<br/>
                       Edition - 2002<br/>
                       Binding - Paperback<br/>
                       Language - English<br/>
                       Pages - 1281<br/>
                       Condition - Gently Used<br/>
                       ISBN: 9780330372893</p>
                    </Col>
                 </Row>
             </container>
             <hr/>

             <container className="demo">
                <Row>
                    <Col md="1" lg="1" xs="12" sm="12"> 
                    </Col>
                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                        <div>
                        <img src="https://thecomicbookstore.in/storage/2024/03/Safe-Secure-Shipping-1.png" alt="Safe & Secure" className="icons_next" />  
                        <h6 className="icons1_next"><b>Safe & Secure </b></h6>
                        <h6 className="text-muted icons1_next"><i>Shipping</i></h6>
                        </div>
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                        <div>
                        <img src="https://thecomicbookstore.in/storage/2024/03/Free-Delivery-on-orders-above-999.png" alt="Free Delivery" className="icons_next" />  
                        <h6 className="icons1_next"><b>Free Delivery on </b></h6>
                        <h6 className="text-muted icons1_next">orders above 999<i></i></h6>
                        </div>
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                        <div>
                        <img src="https://thecomicbookstore.in/storage/2024/03/Buy-Now-Pay-Later-Options.png" alt="Buy Now Pay" className="icons_next" />  
                        <h6 className="icons1_next"><b> Buy Now Pay</b></h6>
                        <h6 className="text-muted icons1_next"><i>Later Options</i></h6>
                        </div>
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                        <div>
                        <img src="https://thecomicbookstore.in/storage/2024/03/Free-Gift-Wrapping.png" alt="Free Gift" className="icons_next" />  
                        <h6 className="icons1_next"><b>Free Gift Wrapping </b></h6>
                        <h6 className="text-muted icons1_next"><i>(select at checkout)</i></h6>
                        </div>
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                        <div>
                        <img src="https://thecomicbookstore.in/storage/2024/03/ALL-MINT-CONDITION.png" alt="All Mint" className="icons_next" />  
                        <h6 className="icons1_next2"><b>All Mint</b></h6>
                        <h6 className="text-muted icons1_next2"><i>Conditions</i></h6>
                        </div>
                    </div>
                    </Col>        
                </Row>
            </container>


      

      </div>
       );
    }
      
    export default App;
  