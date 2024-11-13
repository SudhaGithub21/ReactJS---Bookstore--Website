
import React from 'react';
import '../Component/Style.css';
import {Nav,NavItem,NavLink,TabContent,TabPane,Row,Col,Card,CardBody,CardTitle,CardSubtitle,CardText} from "reactstrap";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
export default class Navigation extends React.Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        activeTab: '1'
      };
    }

    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }

    render() {
      return (
        <div>
          <container>
                <Row>
                    <Col xs="12" lg="12" md="12" sm="12">
                    <div >
                    <p className="Cate_Poetry4"> POETRY - EMOTION</p>
                    </div>
                    </Col>
                </Row>
            </container>
            <container className="sidebar">
                <Row className="sidecolor4">
                <Col xs="12" lg="2" md="2" sm="12">
                </Col>
                    <Col xs="12" lg="8" md="8" sm="12">
                    
                        <Nav tabs vertical>
                            <NavItem className="tab14">
                            <NavLink 
                            
                                onClick={() => {
                                this.toggle('1');
                                }}
                            >
                                Poetry-Books
                            </NavLink>
                            </NavItem>
                            <NavItem className="tab14">
                            <NavLink
                                
                                onClick={() => {
                                this.toggle('2');
                                }}
                            >
                                Above 500 Price
                            </NavLink>
                            </NavItem>
                            <NavItem className="tab14">
                            <NavLink
                                
                                onClick={() => {
                                this.toggle('3');
                                }}
                            >
                                Below 500 Price
                            </NavLink>
                            </NavItem>
                            <NavItem className="tab14">
                            <NavLink
                                
                                onClick={() => {
                                this.toggle('4');
                                }}
                            >
                                Paperback
                            </NavLink>
                            </NavItem>
                            <NavItem className="tab14">
                            <NavLink
                                
                                onClick={() => {
                                this.toggle('5');
                                }}
                            >
                                Hardcover
                            </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col xs="12" lg="2" md="2" sm="12">
                    </Col>
                  </Row>
            
          
         
          <TabContent activeTab={this.state.activeTab}>
            {/* Poerty - Books */}
            <TabPane tabId="1">
            <Row>
            <Col xs="12" lg="12" md="12" sm="12">
             <h1 className="Poetry_title"> Poetry Books</h1>       
            </Col>
            </Row>
            <Row>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style24" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/71J9x4w8QmL._AC_UF1000,1000_QL80_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> MESMERIZINGLY SADLY BEAUTIFUL </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">Matthew Lippman</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> A profoundly moving tale that enchants with its beauty while weaving a poignant story of loss and longing.
                      It lyrical beauty with the melancholic edges of human experience.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">857</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">942</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style44" style={{}}>
                      <img  className="Poetry_img1" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1702689545i/203232381.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> DISCIPLINE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">DEBRA SPARK</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Intricate dynamics of personal and professional boundaries, 
                      exploring how ambition and self-control shape relationships and identity.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">757</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">1072</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style54" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/818Jkpakl6L._AC_UF1000,1000_QL80_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> HOTEL OBLIVION </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">Cynthia Cruz</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>A poignant exploration of grief and disconnection, 
                      capturing the haunting beauty of a life overshadowed by loss and emotional estrangement.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">687</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">842</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/51pU2hakr9L._AC_UF894,1000_QL80_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> ROSES AND THORNS </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">KANZA KHAN</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> Explores the dual nature of life, symbolized by the beauty of roses and the pain of thorns. 
                      It delves into themes of love, sacrifice, and the balance between joy and suffering. 
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">257</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">452</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/61udIRgBJSL._AC_UF350,350_QL50_.jpg"/>
                      <CardBody>
                      <CardTitle tag="h6"> UNSAID UNHEARD </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">PAAWANI SHARMA</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> The book captures the complexities of human connections, 
                      highlighting how the things left unsaid can shape our experiences and understanding of one another.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">197</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">272</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/71lwMr2NRIL._AC_UF1000,1000_QL80_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> HOME </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">WHITNEY HANSON</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>The journey of finding a sense of belonging within oneself, 
                      navigating the complexities of emotions, and ultimately creating a personal sanctuary, through self-acceptance and growth.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">157</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">242</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                  </Row>
                       <Row>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://images.meesho.com/images/products/400242748/xaaqi_512.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> I DON'T LOVE YOU ANYMORE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RITHVIK SINGH</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> The book provides practical advice and strategies to navigate the emotional turmoil, 
                      rebuild the relationship, or make informed decisions about the future, focusing on self-respect and healing.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">217</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">442</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://www.kamoi.net/wp-content/uploads/2020/11/Milk-and-honey-book-cover.png" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> MILK AND HONEY </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RUPI KAUR</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It addressing different aspects of the human experience, 
                      from heartbreak and abuse to resilience and self-discovery, offering readers a raw and empowering journey through pain and recovery.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">302</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">487</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://rosemaryandreadingglasses.com/wp-content/uploads/2016/04/img_6414.jpg?w=1200" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> CATALOG OF UNABASHED GRATITUDE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ROSS GAY</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>The poems express deep appreciation for nature, community, and the richness of human experience, 
                      focusing on gratitude and the transformative power of acknowledging life's blessings.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">1057</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">2042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://akcdn.detik.net.id/community/media/visual/2020/02/28/5445d590-3611-43ce-97e9-805cd38f01d2.jpeg?q=90&w=480" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> LOVE AND MISADVENTURE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">LANG LEAV</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> The poems reflect on the joys of romance, the pain of heartbreak, 
                      and the journey of self-discovery, capturing the emotional landscape of love's adventures and misadventures.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">357</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">642</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://thefeministbookshop.com/cdn/shop/products/image_f93e60dd-d4f7-4766-a8d1-f41c9e1cdaf0_1400x.heic?v=1676734600" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THE HURTING KIND </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ADA LIMON</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It addressing different aspects of the human experience, 
                      abuse to resilience and self-discovery and empowering journey through pain and recovery.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">557</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">742</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EldiJM4MJXJ3z2ZAeL82_fRJq_64Ey0gCQ&s" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> CALL US WHAT WE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">AMANDA GORMAN</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Through powerful and evocative language, 
                      Gorman explores how individuals and societies navigate challenges and seek meaning in a rapidly changing world.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">797</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">1042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                  </Row>

              
            </TabPane>

            {/* Above 500 Books */}

            <TabPane tabId="2">
            <Row>
            <Col xs="12" lg="12" md="12" sm="12">
             <h1 className="Poetry_title"> Above 500 Price Poetry Books</h1>       
            </Col>
            </Row>
              <Row>
              <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EldiJM4MJXJ3z2ZAeL82_fRJq_64Ey0gCQ&s" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> CALL US WHAT WE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">AMANDA GORMAN</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Through powerful and evocative language, 
                      Gorman explores how individuals and societies navigate challenges and seek meaning in a rapidly changing world.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">757</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">1042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>

                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://thefeministbookshop.com/cdn/shop/products/image_f93e60dd-d4f7-4766-a8d1-f41c9e1cdaf0_1400x.heic?v=1676734600" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THE HURTING KIND </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ADA LIMON</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It addressing different aspects of the human experience, 
                      abuse to resilience and self-discovery and empowering journey through pain and recovery.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">797</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">742</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://rosemaryandreadingglasses.com/wp-content/uploads/2016/04/img_6414.jpg?w=1200" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> CATALOG OF UNABASHED GRATITUDE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ROSS GAY</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>The poems express deep appreciation for nature and the richness of human experience, 
                      focusing on gratitude and the transformative power of acknowledging life's blessings.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">1057</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">2042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                  </Row>

                  <Row>
                  <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/71J9x4w8QmL._AC_UF1000,1000_QL80_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> MESMERIZINGLY SADLY BEAUTIFUL </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">Matthew Lippman</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> A profoundly moving tale that enchants with its beauty while weaving a poignant story of loss and longing.
                      It lyrical beauty with the melancholic edges of human experience.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">857</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">942</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1702689545i/203232381.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> DISCIPLINE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">DEBRA SPARK</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Intricate dynamics of personal and professional boundaries, 
                      exploring how ambition and self-control shape relationships and identity.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">757</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">1072</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/818Jkpakl6L._AC_UF1000,1000_QL80_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> HOTEL OBLIVION </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">Cynthia Cruz</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>A poignant exploration of grief and disconnection, 
                      capturing the haunting beauty of a life overshadowed by loss and emotional estrangement.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">687</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">842</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                  </Row>
                  <Row>
                  <Col xs="12" lg="12" md="12" sm="12">
                  <div>
                  <p  className="words-self4"> 10 Reasons Why We Need Poetry Books</p>
                  </div>
                 </Col>
                  </Row>
                  <Row>
                  <Col xs="12" lg="12" md="12" sm="12">
                  <div>
                  <img  className="img-self" src="https://verraes.net/img/posts/2012-12-23/matilda-roald-dahl.jpg" alt="Brand_img1"/>
                  </div>
                  </Col>
                  </Row>
                  <Row>
                  <Col xs="12" lg="12" md="12" sm="12">
                  <div>
                  <p  className="words-self1"> <b><u>Emotional Expression:</u></b> Captures and expresses complex emotions.</p>
                  <p  className="words-self1"> <b><u>Cultural Preservation: </u></b>Reflects and preserves cultural heritage..</p>
                  <p  className="words-self1"> <b><u>Linguistic Beauty: Highlights the beauty of language.</u></b></p>
                  <p  className="words-self1"> <b><u>Creative Inspiration:</u></b> Encourages creativity and inspiration.</p>
                  <p  className="words-self1"> <b><u>Mindfulness:</u></b> Provides mindfulness and reflection opportunities.</p>
                  <p  className="words-self1"> <b><u>Critical Thinking:</u></b> Enhances critical thinking and interpretation skills.</p>
                  <p  className="words-self1"> <b><u>Perspective:</u></b> Offers a unique perspective on human experiences.</p>
                  <p  className="words-self1"> <b><u>Empathy Building:</u></b> Strengthens empathy and emotional understanding.</p>       
                  <p  className="words-self1"> <b><u>Literary Appreciation:</u></b> Enriches literary and linguistic appreciation.</p>       
                  <p  className="words-self1"> <b><u>Academic Foundation:</u></b> Builds a strong foundation for academic success.</p>  
                  <p  className="words-self1"> <b><u>Artistic Exploration: </u></b>Serves as a tool for personal and artistic exploration.</p>                                                                                                                       
                  </div>
                  </Col>
                  </Row>
    
            </TabPane>

            {/* Below 500 Price Books*/}
            
            <TabPane tabId="3">
            <Row>
            <Col xs="12" lg="12" md="12" sm="12">
             <h1 className="Poetry_title"> Below 500 Price Poetry Books</h1>       
            </Col>
            </Row>
              <Row>
              <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/51pU2hakr9L._AC_UF894,1000_QL80_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> ROSES AND THORNS </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">KANZA KHAN</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> Explores the dual nature of life, symbolized by the beauty of roses and the pain of thorns. 
                      It delves into themes of love, sacrifice, and the balance between joy and suffering. 
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">257</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">452</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/61udIRgBJSL._AC_UF350,350_QL50_.jpg"/>
                      <CardBody>
                      <CardTitle tag="h6"> UNSAID UNHEARD </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">PAAWANI SHARMA</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> The book captures the complexities of human connections, 
                      highlighting how the things left unsaid can shape our experiences and understanding of one another.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">197</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">272</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://akcdn.detik.net.id/community/media/visual/2020/02/28/5445d590-3611-43ce-97e9-805cd38f01d2.jpeg?q=90&w=480" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> LOVE AND MISADVENTURE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">LANG LEAV</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> The poems reflect on the joys of romance, the pain of heartbreak, 
                      and the journey of self-discovery, capturing the emotional landscape of love's adventures and misadventures.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">357</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">642</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                  </Row>
                  <Row>
          
                   
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{ }}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/71lwMr2NRIL._AC_UF1000,1000_QL80_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> HOME </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">WHITNEY HANSON</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>The journey of finding a sense of belonging within oneself, 
                      navigating the complexities of emotions, and ultimately creating a personal sanctuary, through self-acceptance and growth.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">157</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">242</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://images.meesho.com/images/products/400242748/xaaqi_512.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> I DON'T LOVE YOU ANYMORE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RITHVIK SINGH</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> The book provides practical advice and strategies to navigate the emotional turmoil, 
                      rebuild the relationship,focusing on self-respect and healing.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">217</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">442</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://www.kamoi.net/wp-content/uploads/2020/11/Milk-and-honey-book-cover.png" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> MILK AND HONEY </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RUPI KAUR</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It addressing different aspects of the human experience, 
                      abuse to resilience and self-discovery and empowering journey through pain and recovery.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">302</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">487</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                  
                  </Row>
                  <Row>
                  <Col xs="12" lg="12" md="12" sm="12">
                  <div>
                  <p  className="words-self4"> 10 Reasons Why We Need Poetry Books</p>
                  </div>
                 </Col>
                  </Row>
                  <Row>
                  <Col xs="12" lg="12" md="12" sm="12">
                  <div>
                  <img  className="img-self" src="https://verraes.net/img/posts/2012-12-23/matilda-roald-dahl.jpg" alt="Brand_img1"/>
                  </div>
                  </Col>
                  </Row>
                  <Row>
                  <Col xs="12" lg="12" md="12" sm="12">
                  <div>
                  <p  className="words-self1"> <b><u>Emotional Expression:</u></b> Captures and expresses complex emotions.</p>
                  <p  className="words-self1"> <b><u>Cultural Preservation: </u></b>Reflects and preserves cultural heritage..</p>
                  <p  className="words-self1"> <b><u>Linguistic Beauty: Highlights the beauty of language.</u></b></p>
                  <p  className="words-self1"> <b><u>Creative Inspiration:</u></b> Encourages creativity and inspiration.</p>
                  <p  className="words-self1"> <b><u>Mindfulness:</u></b> Provides mindfulness and reflection opportunities.</p>
                  <p  className="words-self1"> <b><u>Critical Thinking:</u></b> Enhances critical thinking and interpretation skills.</p>
                  <p  className="words-self1"> <b><u>Perspective:</u></b> Offers a unique perspective on human experiences.</p>
                  <p  className="words-self1"> <b><u>Empathy Building:</u></b> Strengthens empathy and emotional understanding.</p>       
                  <p  className="words-self1"> <b><u>Literary Appreciation:</u></b> Enriches literary and linguistic appreciation.</p>       
                  <p  className="words-self1"> <b><u>Academic Foundation:</u></b> Builds a strong foundation for academic success.</p>  
                  <p  className="words-self1"> <b><u>Artistic Exploration: </u></b>Serves as a tool for personal and artistic exploration.</p>                                                                                                                       
                  </div>
                  </Col>
                  </Row>
    
            </TabPane>

            {/*Paperback*/}

            <TabPane  tabId="4">
            <Row>
            <Col xs="12" lg="12" md="12" sm="12">
             <h1 className="Poetry_title"> Collections of paperback Poetry Books</h1>       
            </Col>
            </Row>
              <Row>
               <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/51pU2hakr9L._AC_UF894,1000_QL80_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> ROSES AND THORNS </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">KANZA KHAN</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> Explores the dual nature of life, symbolized by the beauty of roses and the pain of thorns. 
                      It delves into themes of love, sacrifice, and the balance between joy and suffering. 
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">257</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">452</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/61udIRgBJSL._AC_UF350,350_QL50_.jpg"/>
                      <CardBody>
                      <CardTitle tag="h6"> UNSAID UNHEARD </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">PAAWANI SHARMA</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> The book captures the complexities of human connections, 
                      highlighting how the things left unsaid can shape our experiences and understanding of one another.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">197</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">272</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/71lwMr2NRIL._AC_UF1000,1000_QL80_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> HOME </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">WHITNEY HANSON</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>The journey of finding a sense of belonging within oneself, 
                      navigating the complexities of emotions, and ultimately creating a personal sanctuary, through self-acceptance and growth.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">157</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">242</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
              </Row>
              <Row>
              <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://images.meesho.com/images/products/400242748/xaaqi_512.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> I DON'T LOVE YOU ANYMORE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RITHVIK SINGH</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> The book provides practical advice and strategies to navigate the emotional turmoil, 
                      rebuild the relationship, focusing on self-respect and healing.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">217</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">442</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>

                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://rosemaryandreadingglasses.com/wp-content/uploads/2016/04/img_6414.jpg?w=1200" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> CATALOG OF UNABASHED GRATITUDE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ROSS GAY</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>The poems express deep appreciation for nature and the richness of human experience, 
                      focusing on gratitude and the transformative power of acknowledging life's blessings.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">1057</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">2042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://thefeministbookshop.com/cdn/shop/products/image_f93e60dd-d4f7-4766-a8d1-f41c9e1cdaf0_1400x.heic?v=1676734600" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THE HURTING KIND </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ADA LIMON</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It addressing different aspects of the human experience, 
                      abuse to resilience and self-discovery and empowering journey through pain and recovery.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">557</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">742</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
              </Row>|
              <Row>
                  <Col xs="12" lg="12" md="12" sm="12">
                  <div>
                  <p  className="words-self4"> 10 Reasons Why We Need Poetry Books</p>
                  </div>
                 </Col>
                  </Row>
                  <Row>
                  <Col xs="12" lg="12" md="12" sm="12">
                  <div>
                  <img  className="img-self" src="https://verraes.net/img/posts/2012-12-23/matilda-roald-dahl.jpg" alt="Brand_img1"/>
                  </div>
                  </Col>
                  </Row>
                  <Row>
                  <Col xs="12" lg="12" md="12" sm="12">
                  <div>
                  <p  className="words-self1"> <b><u>Emotional Expression:</u></b> Captures and expresses complex emotions.</p>
                  <p  className="words-self1"> <b><u>Cultural Preservation: </u></b>Reflects and preserves cultural heritage..</p>
                  <p  className="words-self1"> <b><u>Linguistic Beauty: Highlights the beauty of language.</u></b></p>
                  <p  className="words-self1"> <b><u>Creative Inspiration:</u></b> Encourages creativity and inspiration.</p>
                  <p  className="words-self1"> <b><u>Mindfulness:</u></b> Provides mindfulness and reflection opportunities.</p>
                  <p  className="words-self1"> <b><u>Critical Thinking:</u></b> Enhances critical thinking and interpretation skills.</p>
                  <p  className="words-self1"> <b><u>Perspective:</u></b> Offers a unique perspective on human experiences.</p>
                  <p  className="words-self1"> <b><u>Empathy Building:</u></b> Strengthens empathy and emotional understanding.</p>       
                  <p  className="words-self1"> <b><u>Literary Appreciation:</u></b> Enriches literary and linguistic appreciation.</p>       
                  <p  className="words-self1"> <b><u>Academic Foundation:</u></b> Builds a strong foundation for academic success.</p>  
                  <p  className="words-self1"> <b><u>Artistic Exploration: </u></b>Serves as a tool for personal and artistic exploration.</p>                                                                                                                       
                  </div>
                  </Col>
                  </Row>
    
            </TabPane>
            

            {/*Hardcover Books*/}

            <TabPane  tabId="5">
            <Row>
            <Col xs="12" lg="12" md="12" sm="12">
             <h1 className="Poetry_title"> Collections of Hardcover Poetry Books</h1>       
            </Col>
            </Row>
            <Row>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style24" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/71J9x4w8QmL._AC_UF1000,1000_QL80_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> MESMERIZINGLY SADLY BEAUTIFUL </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">Matthew Lippman</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> A profoundly moving tale that enchants with its beauty while weaving a poignant story of loss and longing.
                      It lyrical beauty with the melancholic edges of human experience.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">857</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">942</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style44" style={{ }}>
                      <img  className="Poetry_img1" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1702689545i/203232381.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> DISCIPLINE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">DEBRA SPARK</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Intricate dynamics of personal and professional boundaries, 
                      exploring how ambition and self-control shape relationships and identity.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">757</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">1072</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style44" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/818Jkpakl6L._AC_UF1000,1000_QL80_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> HOTEL OBLIVION </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">Cynthia Cruz</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>A poignant exploration of grief and disconnection, 
                      capturing the haunting beauty of a life overshadowed by loss and emotional estrangement.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">687</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">842</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                  </Row>
                  <Row>
                  <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://www.kamoi.net/wp-content/uploads/2020/11/Milk-and-honey-book-cover.png" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> MILK AND HONEY </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RUPI KAUR</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It addressing different aspects of the human experience, 
                      abuse to resilience and self-discovery,empowering journey through pain and recovery.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">302</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">487</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
		               <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EldiJM4MJXJ3z2ZAeL82_fRJq_64Ey0gCQ&s" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> CALL US WHAT WE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">AMANDA GORMAN</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Through powerful and evocative language, 
                      Gorman explores how individuals and societies navigate challenges and seek meaning in a rapidly changing world.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">797</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">1042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
		                 <Col xs="12" lg="1" md="1" sm="12"></Col>
		                  <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style34" style={{}}>
                      <img  className="Poetry_img1" src="https://akcdn.detik.net.id/community/media/visual/2020/02/28/5445d590-3611-43ce-97e9-805cd38f01d2.jpeg?q=90&w=480" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> LOVE AND MISADVENTURE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">LANG LEAV</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> The poems reflect on the joys of romance, the pain of heartbreak, 
                      and the journey of self-discovery, capturing the emotional landscape of love's adventures and misadventures.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees4">
                        <FaIndianRupeeSign/><p className="strike24">357</p>
                        <div className="rupees24">
                        <FaIndianRupeeSign/><p className="strike24">642</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn4">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>

                  </Row>
                  <Row>
                  <Col xs="12" lg="12" md="12" sm="12">
                  <div>
                  <p  className="words-self4"> 10 Reasons Why We Need Poetry Books</p>
                  </div>
                 </Col>
                  </Row>
                  <Row>
                  <Col xs="12" lg="12" md="12" sm="12">
                  <div>
                  <img  className="img-self" src="https://verraes.net/img/posts/2012-12-23/matilda-roald-dahl.jpg" alt="Brand_img1"/>
                  </div>
                  </Col>
                  </Row>
                  <Row>
                  <Col xs="12" lg="12" md="12" sm="12">
                  <div>
                  <p  className="words-self1"> <b><u>Emotional Expression:</u></b> Captures and expresses complex emotions.</p>
                  <p  className="words-self1"> <b><u>Cultural Preservation: </u></b>Reflects and preserves cultural heritage..</p>
                  <p  className="words-self1"> <b><u>Linguistic Beauty: Highlights the beauty of language.</u></b></p>
                  <p  className="words-self1"> <b><u>Creative Inspiration:</u></b> Encourages creativity and inspiration.</p>
                  <p  className="words-self1"> <b><u>Mindfulness:</u></b> Provides mindfulness and reflection opportunities.</p>
                  <p  className="words-self1"> <b><u>Critical Thinking:</u></b> Enhances critical thinking and interpretation skills.</p>
                  <p  className="words-self1"> <b><u>Perspective:</u></b> Offers a unique perspective on human experiences.</p>
                  <p  className="words-self1"> <b><u>Empathy Building:</u></b> Strengthens empathy and emotional understanding.</p>       
                  <p  className="words-self1"> <b><u>Literary Appreciation:</u></b> Enriches literary and linguistic appreciation.</p>       
                  <p  className="words-self1"> <b><u>Academic Foundation:</u></b> Builds a strong foundation for academic success.</p>  
                  <p  className="words-self1"> <b><u>Artistic Exploration: </u></b>Serves as a tool for personal and artistic exploration.</p>                                                                                                                       
                  </div>
                  </Col>
                  </Row>
                  
                  
            </TabPane>
          </TabContent> 
          </container>
        </div>
      )
    }
  };