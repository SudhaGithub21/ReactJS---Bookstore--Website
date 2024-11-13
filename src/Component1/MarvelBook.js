import React from 'react';
import {Row,Col} from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/*import { IoStar } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";*/
import { FaRegHeart } from "react-icons/fa";
//import { IoStarHalf } from "react-icons/io5";
function App() {
   
   const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3
    /* <Slider {...settings} className="slider">
     </Slider>
     css code
     slider{
         margin: 0 10px;
         
    }*/
  };
    return (
        <div>
         <container>
         <container>
                <Row>
                    <Col md="1" lg="1" xs="12" sm="12"> 
                    </Col>
                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                        <div>
                        <img src="https://thecomicbookstore.in/storage/2024/03/Safe-Secure-Shipping-1.png" alt="Safe & Secure" className="icons" />  
                        <h6 className="icons1"><b>Safe & Secure </b></h6>
                        <h6 className="text-muted"><i>Shipping</i></h6>
                        </div>
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                        <div>
                        <img src="https://thecomicbookstore.in/storage/2024/03/Free-Delivery-on-orders-above-999.png" alt="Free Delivery" className="icons" />  
                        <h6 className="icons1"><b>Free Delivery on </b></h6>
                        <h6 className="text-muted">orders above 999<i></i></h6>
                        </div>
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                        <div>
                        <img src="https://thecomicbookstore.in/storage/2024/03/Buy-Now-Pay-Later-Options.png" alt="Buy Now Pay" className="icons" />  
                        <h6 className="icons1"><b> Buy Now Pay</b></h6>
                        <h6 className="text-muted"><i>Later Options</i></h6>
                        </div>
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                        <div>
                        <img src="https://thecomicbookstore.in/storage/2024/03/Free-Gift-Wrapping.png" alt="Free Gift" className="icons" />  
                        <h6 className="icons1"><b>Free Gift Wrapping </b></h6>
                        <h6 className="text-muted"><i>(select at checkout)</i></h6>
                        </div>
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                        <div>
                        <img src="https://thecomicbookstore.in/storage/2024/03/ALL-MINT-CONDITION.png" alt="All Mint" className="icons" />  
                        <h6 className="icons1"><b>All Mint</b></h6>
                        <h6 className="text-muted"><i>Conditions</i></h6>
                        </div>
                    </div>
                    </Col>        
                </Row>
            </container>






                <Row>
                    <Col lg="6" md="6" xs="12" sm="12" >
                    </Col>
                </Row>
                <h1 className="topic"><b><i>Shop from our Wide Range of Products</i></b></h1>
            </container>
            <container>
                <Row>
                    <Col md="1" lg="1" xs="12" sm="12">
                    </Col>
                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/e/e0/66acfcb1ae155/portrait_uncanny.jpg" alt="Venom War" className="mr-img" />
                    </div>
                    <h6 className="font2"><b>Venom War (2024) </b></h6>
                    <h6 className="text-primary"><i>Ewing,Coello</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/d/30/66acfcf466f85/portrait_uncanny.jpg" alt="Blood Hunters" className="mr-img" />
                    </div>
                    <h6 className="font2"><b>Blood Hunters (2024) </b></h6>
                    <h6 className="text-primary"><i>Schultz,Gill,Lupacchino</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/b/c0/66acfcb1a1463/portrait_uncanny.jpg" alt="Uncanny X-Men " className="mr-img" />
                    </div>
                    <h6 className="font2"><b>Uncanny X-Men (2024) </b></h6>
                    <h6 className="text-primary"><i>Simone,Marquez</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/f/c0/66acfcd18d6f5/portrait_uncanny.jpg" alt="Black Suit & Blood" className="mr-img" />
                    </div>
                    <h6 className="font2"><b>Black Suit & Blood (2024) </b></h6>
                    <h6 className="text-primary"><i>Dematteis,Casagrande,Yu</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/c/20/66acfcd21830f/portrait_uncanny.jpg" alt=" Reign 2" className="mr-img" />
                    </div>
                    <h6 className="font2"><b>Spider-Man:Reign 2(2024) </b></h6>
                    <h6 className="text-primary"><i>Andrews</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>
                </Row>
            </container>

            <container>
                <Row>
                    <Col md="1" lg="1" xs="12" sm="12">
                    </Col>
                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/c/40/66acfcd17415d/portrait_uncanny.jpg" alt="Inquisitors " className="mr-img" />
                    </div>
                    <h6 className="font2"><b>Star Wars:Inquisitors(2024)  </b></h6>
                    <h6 className="text-primary"><i>Ewing,Coello</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/f/50/66acfcd28b1b8/portrait_uncanny.jpg" alt="Doctor Strange" className="mr-img" />
                    </div>
                    <h6 className="font2"><b> Doctor Strange (2023) </b></h6>
                    <h6 className="text-primary"><i>Mackay,Ferry</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/d/00/66acfcf4b7874/portrait_uncanny.jpg" alt="Daredevil" className="mr-img" />
                    </div>
                    <h6 className="font2"><b> Daredevil (2023) </b></h6>
                    <h6 className="text-primary"><i>Ahmed,Kuder,Romita</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/c/40/66acfcb1a8158/portrait_uncanny.jpg" alt="Ultimate Black Panther" className="mr-img" />
                    </div>
                    <h6 className="font2"><b> Ultimate Black Panther </b></h6>
                    <h6 className="text-primary"><i>Hill,Caselli</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/5/a0/66212bac850d1/portrait_uncanny.jpg" alt=" VENOMOUS" className="mr-img" />
                    </div>
                    <h6 className="font2"><b>Black Widow:VENOMOUS </b></h6>
                    <h6 className="text-primary"><i>Hill,Caselli</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>
                </Row>
                  
                


                  <h1 className="chead"><b><i>Best Selling Digital Comics</i></b></h1>
                <container>
                <Row>
                <Slider {...settings} className="slider">
                
                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/4/00/572a184d97b49/portrait_uncanny.jpg" alt="Civil War" className="mr-img1" />
                    </div>
                    <h6 className="font2"><b>Civil War: Opening Shot  </b></h6>
                    <h6 className="text-primary font3"><i>Hitch</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/2/70/5bc8af0eee0e9/portrait_uncanny.jpg" alt="UNIVERSE X" className="mr-img1" />
                    </div>
                    <h6 className="font2"><b>UNIVERSE X  </b></h6>
                    <h6 className="text-primary font3"><i>#O,Ross</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/c/70/56fbd0e5527fa/portrait_uncanny.jpg" alt="MARVELS" className="mr-img1" />
                    </div>
                    <h6 className="font2"><b>MARVELS (1994) </b></h6>
                    <h6 className="text-primary font3"><i>Jones</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/6/00/5ab00b9b65645/portrait_uncanny.jpg" alt="SPIDER GIRL" className="mr-img1" />
                    </div>
                    <h6 className="font2"><b>SPIDER-GIRL(2006) </b></h6>
                    <h6 className="text-primary font3"><i>Campbell</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/9/70/55ba3e95d3a92/portrait_uncanny.jpg" alt="illuminati" className="mr-img1" />
                    </div>
                    <h6 className="font2"><b> AVENGERS:ILLUMINATI </b></h6>
                    <h6 className="text-primary font3"><i>Bendis</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/3/a0/66212b6b44f79/portrait_uncanny.jpg" alt="X-Force" className="mr-img1" />
                    </div>
                    <h6 className="font2"><b> X-Force (2024) </b></h6>
                    <h6 className="text-primary font3"><i>Thorne,to,Segovia</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>
                    
                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/c/60/66acfcd028e27/portrait_uncanny.jpg" alt="Star Wars" className="mr-img1" />
                    </div>
                    <h6 className="font2"><b> Star Wars: The High Republic </b></h6>
                    <h6 className="text-primary font3"><i>Scott,Towe,Noto</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>

                    <Col md="2" lg="2" xs="12" sm="12">
                    <div>
                    <div>
                    <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/2/90/66acfcec467db/portrait_uncanny.jpg" alt="Incredible Hulk" className="mr-img1" />
                    </div>
                    <h6 className="font2"><b>Incredible Hulk (2023) </b></h6>
                    <h6 className="text-primary font3"><i>Johnson,Earls,Klein</i></h6>
                    <button type="button" class="marvel_btn">BUY NOW</button>
                    <FaRegHeart className='marvel_list'  />
                    </div>
                    </Col>
                    </Slider>
                    </Row>
                 </container>




                 <h1 className="candle"><b><i>Not Just Books</i></b></h1>
                 <h1 className="candle1"><i><b>We have Merch too!</b></i></h1>
                 <Row>
                 <Col md="1" lg="1" xs="12" sm="12"></Col>

                 <Col md="2" lg="2" xs="12" sm="12">
                 <div>
                 <img src="https://kitabay.com/cdn/shop/files/Untitleddesign_1.jpg?crop=center&height=533&v=1703678059&width=400" alt="A Christmas Tale" className="candle_img" />
                    <h6 className="text-primary"><i>A Christmas Tale </i></h6>
                 </div>
                 </Col>
                 
                 <Col md="2" lg="2" xs="12" sm="12">
                 <div>
                 <img src="https://kitabay.com/cdn/shop/files/WhatsAppImage2020-11-13at14.47.04_8ad0a102-6c79-46b9-b3fc-4795f8c242ef.jpg?crop=center&height=600&v=1702364405&width=400" alt="Bookmarks" className="candle_img" />
                    <h6 className="text-primary"><i>Bookmarks (Set of 4)</i></h6>
                 </div>
                 </Col>

                 <Col md="2" lg="2" xs="12" sm="12">
                 <div>
                 <img src="https://kitabay.com/cdn/shop/files/WhatsAppImage2020-11-13at15.26.27_6038a666-e971-4534-84d8-255141ee7883.jpg?crop=center&height=600&v=1702364426&width=400" alt="Bookmarks " className="candle_img" />
                    <h6 className="text-primary"><i>Bookmarks (Set of 6)  </i></h6>
                 </div>
                 </Col>
                 
                 <Col md="2" lg="2" xs="12" sm="12">
                 <div>
                 <img src="https://kitabay.com/cdn/shop/files/WhatsAppImage2020-11-13at15.42.35_9b8401fa-23fb-429a-8743-270d1f27929c.jpg?crop=center&height=600&v=1702364387&width=400" alt="Bookmarks" className="candle_img" />
                    <h6 className="text-primary"><i>Bookmarks (Set of 6)</i></h6>
                 </div>
                 </Col>

                 <Col md="2" lg="2" xs="12" sm="12">
                 <div>
                 <img src="https://kitabay.com/cdn/shop/files/Untitleddesign_14.jpg?v=1703678435&width=1024" alt="Date with the Ocean" className="candle_img" />
                    <h6 className="text-primary"><i>Date with the Ocean </i></h6>
                 </div>
                 </Col>
                 </Row>
        </container>
     </div>
    
    );
    
}

export default App;