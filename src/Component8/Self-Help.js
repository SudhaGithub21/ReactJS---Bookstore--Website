
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
                    <p className="Cate_Poetry"> SELFHELP - MOTIVATION</p>
                    </div>
                    </Col>
                </Row>
            </container>
            <container className="sidebar">
                <Row className="sidecolor">
                <Col xs="12" lg="2" md="2" sm="12">
                </Col>
                    <Col xs="12" lg="8" md="8" sm="12">
                    
                        <Nav tabs vertical>
                            <NavItem className="tab1">
                            <NavLink 
                            
                                onClick={() => {
                                this.toggle('1');
                                }}
                            >
                                Child - Books
                            </NavLink>
                            </NavItem>
                            <NavItem className="tab1">
                            <NavLink
                                
                                onClick={() => {
                                this.toggle('2');
                                }}
                            >
                                Above 500 Price
                            </NavLink>
                            </NavItem>
                            <NavItem className="tab1">
                            <NavLink
                                
                                onClick={() => {
                                this.toggle('3');
                                }}
                            >
                                Below 500 Price
                            </NavLink>
                            </NavItem>
                            <NavItem className="tab1">
                            <NavLink
                                
                                onClick={() => {
                                this.toggle('4');
                                }}
                            >
                                Paperback
                            </NavLink>
                            </NavItem>
                            <NavItem className="tab1">
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
             <h1 className="Self_title"> Self-Help Books</h1>       
            </Col>
            </Row>
            <Row>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style2" style={{ }}>
                      <img  className="Poetry_img1" src="https://media.licdn.com/dms/image/D5612AQEu9Z2Z7kmbhw/article-cover_image-shrink_720_1280/0/1696519837517?e=2147483647&v=beta&t=dHdz8OnIP_LdDwq2y-gxrPkWD40hCdj6NMDw2YApNuU" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> HOW TO WIN FRIENDS AND INFLUENCE PEOPLE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">DALE CARNEGIE</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Practical advice on improving interpersonal 
                      skills, building strong relationships, and effectively influencing others.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">857</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">942</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style5" >
                      <img  className="Poetry_img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBp7IPVZUgnleS01eD7nsxapdRO99phcRvw&s" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> RICH DAD POOR DAD </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ROBERT KIYOSAKI</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It contrasts two father figures' financial philosophies, 
                      teaching key lessons on wealth-building,financial independence, and the importance of investing
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">757</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">1072</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style4">
                      <img  className="Poetry_img1" src="https://bayareamastermind.com/wp-content/uploads/2023/09/think-and-grow-rich-desk.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THINK AND GROW RICH </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">NAPOLEON HILL</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It outlines principles of success and wealth-building, 
                      focusing on the power of mindset, persistence, and goal-setting to achieve financial and personal success..
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">687</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">842</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
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
                      <Card className="card_style3">
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/61M6KzUbf7L._AC_UF1000,1000_QL80_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> ATOMIC HABITS </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">JAMES CLEAR</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> It teaches how small, incremental changes in habits can lead to significant growth, 
                      offering strategies for building good habits and breaking bad ones.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">257</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">452</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style6">
                      <img  className="Poetry_img1" src="https://i.insider.com/60ba3b3693c6fa00195e5286?width=1136&format=jpeg"/>
                      <CardBody>
                      <CardTitle tag="h6"> THINKING FAST AND SLOW </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">DANIEL KAHNEMAN</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> It explores the two systems of thought that drive human decisions—fast, 
                      intuitive thinking and slow, deliberate thinking—revealing and understand the human mind more deeply.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">197</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">272</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style7">
                      <img  className="Poetry_img1" src="https://5.imimg.com/data5/ECOM/Default/2024/1/380066925/HK/DA/IS/186940191/1-65af015z848-gtmt-de6ca-4dde1d68-115c-4c88-bf11-b108e59f7852.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> ATTIDUDE IS EVERYTHING </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">JEFF KELLER</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> It emphasizes a positive mindset in achieving success, 
                      showing how attitude influences outcomes and offering steps to transform your life by changing thinking.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">157</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">242</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
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
                      <Card className="card_style8">
                      <img  className="Poetry_img1" src="https://studentstore.pk/wp-content/uploads/2024/01/B_2_4-scaled.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THE POWER OF SUBCONSICOUS MIND </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">JOSEPH MURPHY</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> It reveals how harnessing the power of the subconscious 
                      can lead to personal transformation, success, and healing by aligning thoughts with desired outcomes.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">217</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">442</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style9">
                      <img  className="Poetry_img1" src="https://bookbins.in/wp-content/uploads/2024/04/The-Mountain-Is-You-Brianna-Wiest-Buy-Online-Bookbins-1.png" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> The MOUNTAIN IS YOU </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">BRIANNA WEIST</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> It explores how obstacles and self-limiting beliefs can be transformed 
                      into opportunities for growth, emphasizing self-awareness and resilience in overcoming challenges..
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">302</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">487</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style10">
                      <img  className="Poetry_img1" src="https://images.meesho.com/images/products/229907738/ldhsu_512.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> DON'T BELIEVE EVERYTHING YOU THINK </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6"> JOSEPH NGYUEN</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It offers insights into challenging and reframing negative thoughts, 
                      promoting mental clarity and emotional well-being by not accepting every thought as truth.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">1057</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">2042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
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
                      <Card className="card_style11">
                      <img  className="Poetry_img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTmSS34qT8R-V3yIqnbtwvLTZb6nkWhmL2Q&s" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THINK STRAIGHT </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">DARIUS FOROUX</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Paperback</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> It offers practical strategies for clear, rational thinking and decision-making, 
                      helping readers navigate complex situations and improve problem-solving skills.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">357</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">642</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style12">
                      <img  className="Poetry_img1" src="https://miro.medium.com/v2/resize:fit:545/1*h3_BFnffXgAs7newfGCJZA.jpeg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> BUILD DON'T TALK </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RAJ SHAMANI</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Paperback</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It emphasizes the importance of taking action and building tangible results 
                      rather than merely discussing ideas, advocating for a focus on execution and productivity.
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
                        <FaIndianRupeeSign/><p className="strike2">742</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style13">
                      <img  className="Poetry_img1" src="https://images.blinkist.io/images/books/63b53f9487ad2d0008808a23/1_1/470.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6">STOP OVERTHIKING </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">NICK TRENTON</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Techniques to overcome excessive rumination and anxiety, 
                      focusing on strategies to simplify decision-making and cultivate a more balanced, present-minded approach.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">797</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">1042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
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
             <h1 className="Self_title"> Above 500 Price Self-Help Books</h1>       
            </Col>
            </Row>
            <Row>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style2" style={{ }}>
                      <img  className="Poetry_img1" src="https://media.licdn.com/dms/image/D5612AQEu9Z2Z7kmbhw/article-cover_image-shrink_720_1280/0/1696519837517?e=2147483647&v=beta&t=dHdz8OnIP_LdDwq2y-gxrPkWD40hCdj6NMDw2YApNuU" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> HOW TO WIN FRIENDS AND INFLUENCE PEOPLE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">DALE CARNEGIE</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Practical advice on improving interpersonal 
                      skills, building strong relationships, and effectively influencing others.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">857</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">942</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style5" >
                      <img  className="Poetry_img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBp7IPVZUgnleS01eD7nsxapdRO99phcRvw&s" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> RICH DAD POOR DAD </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ROBERT KIYOSAKI</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It contrasts two father figures' financial philosophies, 
                      teaching key lessons on wealth-building,financial independence, and the importance of investing
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">757</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">1072</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style4">
                      <img  className="Poetry_img1" src="https://bayareamastermind.com/wp-content/uploads/2023/09/think-and-grow-rich-desk.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THINK AND GROW RICH </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">NAPOLEON HILL</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It outlines principles of success and wealth-building, 
                      focusing on the power of mindset, persistence, and goal-setting to achieve financial and personal success..
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">687</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">842</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
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
                      <Card className="card_style10">
                      <img  className="Poetry_img1" src="https://images.meesho.com/images/products/229907738/ldhsu_512.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> DON'T BELIEVE EVERYTHING YOU THINK  </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6"> JOSEPH NGYUEN</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Paperback</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> It offers insights into challenging and reframing negative thoughts, 
                      promoting mental clarity and emotional well-being by not accepting every thought as truth.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">1057</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">2042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style12">
                      <img  className="Poetry_img1" src="https://miro.medium.com/v2/resize:fit:545/1*h3_BFnffXgAs7newfGCJZA.jpeg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> BUILD DON'T TALK </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RAJ SHAMANI</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Paperback</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It emphasizes the importance of taking action and building tangible results 
                      rather than merely discussing ideas, advocating for a focus on execution and productivity.

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
                        <FaIndianRupeeSign/><p className="strike2">742</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style13">
                      <img  className="Poetry_img1" src="https://images.blinkist.io/images/books/63b53f9487ad2d0008808a23/1_1/470.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> STOP OVERTHIKING </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">NICK TRENTON</CardSubtitle>
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
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">797</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">1042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
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
                  <p  className="words-self"> Why We Need To Read Selp-Help Books</p>
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
                  <p  className="words-self1"> <b><u>Personal Growth:</u> </b>Self-help books offer strategies for self-improvement and personal development. </p>
                  <p  className="words-self1"> <b><u>Mental Health:</u></b> They provide guidance on managing stress, anxiety, and emotional challenges.</p>
                  <p  className="words-self1"> <b><u>Inspiration:</u></b> These books motivate and inspire through stories of success and resilience. </p>
                  <p  className="words-self1"> <b><u>Practical Advice:</u></b> They offer actionable steps to enhance relationships, productivity, and goal-setting.</p>
                  <p  className="words-self1"> <b><u>Self-Awareness:</u></b> Reading them fosters deeper understanding of one’s strengths and weaknesses. </p>
                  <p  className="words-self1"> <b><u>Resilience:</u></b> They build resilience by showing that others have overcome similar challenges. </p>
                  <p  className="words-self1"> <b><u>Continuous Learning:</u></b> Self-help books encourage the acquisition of new skills and knowledge. </p>
                  <p  className="words-self1"> <b><u>Mindfulness:</u></b> They promote mindfulness and emotional intelligence for balanced living. </p>
                  <p  className="words-self1"> <b><u>Empowerment:</u> </b>These books empower readers to take control of their lives and decisions.</p> 
                  <p  className="words-self1"> <b><u>Lifestyle Changes:</u></b> They guide readers toward adopting healthier habits and a fulfilling life.</p>       
                  <p  className="words-self1"> <b><u>Perspective Broadening:</u></b> Self-help books introduce new viewpoints and philosophies, expanding understanding.</p>       
                  <p  className="words-self1"> <b><u>Community Connection:</u></b>They create a feeling of connection through shared experiences.</p>                                                                                                                       
                  </div>
                  </Col>
                  </Row>

                  
                  
            </TabPane>

            {/* Below 500 Price Books*/}
            
            <TabPane tabId="3">
            <Row>
            <Col xs="12" lg="12" md="12" sm="12">
             <h1 className="Self_title"> Below 500 Price Self-Help Books</h1>       
            </Col>
            </Row>
              <Row>
              <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style3">
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/61M6KzUbf7L._AC_UF1000,1000_QL80_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> ATOMIC HABITS </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">JAMES CLEAR</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Paperback</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> It teaches how small, incremental changes in habits can lead to significant growth, 
                      offering strategies for building good habits and breaking bad ones.
 
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">257</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">452</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style6">
                      <img  className="Poetry_img1" src="https://i.insider.com/60ba3b3693c6fa00195e5286?width=1136&format=jpeg"/>
                      <CardBody>
                      <CardTitle tag="h6"> THINKING FAST AND SLOW </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">DANIEL KAHNEMAN</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Paperback</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> It explores the two systems of thought that drive human decisions—fast, 
                      intuitive thinking and slow, deliberate thinking—revealing how they shape our judgments and behaviors.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">197</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">272</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style7">
                      <img  className="Poetry_img1" src="https://5.imimg.com/data5/ECOM/Default/2024/1/380066925/HK/DA/IS/186940191/1-65af015z848-gtmt-de6ca-4dde1d68-115c-4c88-bf11-b108e59f7852.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> ATTIDUDE IS EVERYTHING </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">JEFF KELLER</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Paperback</CardSubtitle>
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
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">157</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">242</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
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
                      <Card className="card_style8">
                      <img  className="Poetry_img1" src="https://studentstore.pk/wp-content/uploads/2024/01/B_2_4-scaled.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THE POWER OF SUBCONSICOUS MIND </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">JOSEPH MURPHY</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Paperback</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It reveals how harnessing the power of the subconscious 
                      can lead to personal transformation, success, and healing by aligning thoughts with desired outcomes.

                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">157</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">242</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style9">
                      <img  className="Poetry_img1" src="https://bookbins.in/wp-content/uploads/2024/04/The-Mountain-Is-You-Brianna-Wiest-Buy-Online-Bookbins-1.png" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> The MOUNTAIN IS YOU </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">BRIANNA WEIST</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
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
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">302</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">487</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style11">
                      <img  className="Poetry_img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTmSS34qT8R-V3yIqnbtwvLTZb6nkWhmL2Q&s" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THINK STRAIGHT </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">DARIUS FOROUX</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Paperback</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It offers practical strategies for clear, rational thinking and decision-making, 
                      helping readers navigate complex situations and improve problem-solving skills.
                      
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">357</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">642</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
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
                  <p  className="words-self"> Why We Need To Read Selp-Help Books</p>
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
                  <p  className="words-self1"> <b><u>Personal Growth:</u> </b>Self-help books offer strategies for self-improvement and personal development. </p>
                  <p  className="words-self1"> <b><u>Mental Health:</u></b> They provide guidance on managing stress, anxiety, and emotional challenges.</p>
                  <p  className="words-self1"> <b><u>Inspiration:</u></b> These books motivate and inspire through stories of success and resilience. </p>
                  <p  className="words-self1"> <b><u>Practical Advice:</u></b> They offer actionable steps to enhance relationships, productivity, and goal-setting.</p>
                  <p  className="words-self1"> <b><u>Self-Awareness:</u></b> Reading them fosters deeper understanding of one’s strengths and weaknesses. </p>
                  <p  className="words-self1"> <b><u>Resilience:</u></b> They build resilience by showing that others have overcome similar challenges. </p>
                  <p  className="words-self1"> <b><u>Continuous Learning:</u></b> Self-help books encourage the acquisition of new skills and knowledge. </p>
                  <p  className="words-self1"> <b><u>Mindfulness:</u></b> They promote mindfulness and emotional intelligence for balanced living. </p>
                  <p  className="words-self1"> <b><u>Empowerment:</u> </b>These books empower readers to take control of their lives and decisions.</p> 
                  <p  className="words-self1"> <b><u>Lifestyle Changes:</u></b> They guide readers toward adopting healthier habits and a fulfilling life.</p>       
                  <p  className="words-self1"> <b><u>Perspective Broadening:</u></b> Self-help books introduce new viewpoints and philosophies, expanding understanding.</p>       
                  <p  className="words-self1"> <b><u>Community Connection:</u></b>They create a feeling of connection through shared experiences.</p>                                                                                                                       
                  </div>
                  </Col>
                  </Row>

            </TabPane>

            {/*Paperback*/}

            <TabPane  tabId="4">
            <Row>
            <Col xs="12" lg="12" md="12" sm="12">
             <h1 className="Self_title"> Collections of Paperback Self-Help Books</h1>       
            </Col>
            </Row>
              <Row>
               <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style3">
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/61M6KzUbf7L._AC_UF1000,1000_QL80_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> ATOMIC HABITS </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">JAMES CLEAR</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Paperback</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> It teaches how small, incremental changes in habits can lead to significant growth, 
                      offering strategies for building good habits and breaking bad ones.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">257</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">452</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style6">
                      <img  className="Poetry_img1" src="https://i.insider.com/60ba3b3693c6fa00195e5286?width=1136&format=jpeg"/>
                      <CardBody>
                      <CardTitle tag="h6"> THINKING FAST AND SLOW </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">DANIEL KAHNEMAN</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Paperback</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> It explores the two systems of thought that drive human decisions—fast, 
                      intuitive thinking and slow, deliberate thinking—revealing how they shape our judgments and behaviors.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">197</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">272</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style7">
                      <img  className="Poetry_img1" src="https://5.imimg.com/data5/ECOM/Default/2024/1/380066925/HK/DA/IS/186940191/1-65af015z848-gtmt-de6ca-4dde1d68-115c-4c88-bf11-b108e59f7852.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> ATTIDUDE IS EVERYTHING  </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">JEFF KELLER</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Paperback</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It emphasizes a positive mindset in achieving success, 
                      showing how attitude influences outcomes and offering steps to transform your life by changing thinking.

                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">157</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">242</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
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
                      <Card className="card_style8">
                      <img  className="Poetry_img1" src="https://studentstore.pk/wp-content/uploads/2024/01/B_2_4-scaled.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THE POWER OF SUBCONSICOUS MIND</CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">JOSEPH MURPHY</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Paperback</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> TIt reveals how harnessing the power of the subconscious 
                      can lead to personal transformation, success, and healing by aligning thoughts with desired outcomes.

                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">217</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">442</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>

                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style10">
                      <img  className="Poetry_img1" src="https://images.meesho.com/images/products/229907738/ldhsu_512.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> DON'T BELIEVE EVERYTHING YOU THINK </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">JOSEPH NGYUEN</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Paperback</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It offers insights into challenging and reframing negative thoughts, 
                      promoting mental clarity and emotional well-being by not accepting every thought as truth.

                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">1057</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">2042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style11">
                      <img  className="Poetry_img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTmSS34qT8R-V3yIqnbtwvLTZb6nkWhmL2Q&s" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THINK STRAIGHT  </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">DARIUS FOROUX</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Paperback</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It offers practical strategies for clear, rational thinking and decision-making, 
                      helping readers navigate complex situations and improve problem-solving skills.

                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">357</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">642</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
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
                  <p  className="words-self"> Why We Need To Read Selp-Help Books</p>
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
                  <p  className="words-self1"> <b><u>Personal Growth:</u> </b>Self-help books offer strategies for self-improvement and personal development. </p>
                  <p  className="words-self1"> <b><u>Mental Health:</u></b> They provide guidance on managing stress, anxiety, and emotional challenges.</p>
                  <p  className="words-self1"> <b><u>Inspiration:</u></b> These books motivate and inspire through stories of success and resilience. </p>
                  <p  className="words-self1"> <b><u>Practical Advice:</u></b> They offer actionable steps to enhance relationships, productivity, and goal-setting.</p>
                  <p  className="words-self1"> <b><u>Self-Awareness:</u></b> Reading them fosters deeper understanding of one’s strengths and weaknesses. </p>
                  <p  className="words-self1"> <b><u>Resilience:</u></b> They build resilience by showing that others have overcome similar challenges. </p>
                  <p  className="words-self1"> <b><u>Continuous Learning:</u></b> Self-help books encourage the acquisition of new skills and knowledge. </p>
                  <p  className="words-self1"> <b><u>Mindfulness:</u></b> They promote mindfulness and emotional intelligence for balanced living. </p>
                  <p  className="words-self1"> <b><u>Empowerment:</u> </b>These books empower readers to take control of their lives and decisions.</p> 
                  <p  className="words-self1"> <b><u>Lifestyle Changes:</u></b> They guide readers toward adopting healthier habits and a fulfilling life.</p>       
                  <p  className="words-self1"> <b><u>Perspective Broadening:</u></b> Self-help books introduce new viewpoints and philosophies, expanding understanding.</p>       
                  <p  className="words-self1"> <b><u>Community Connection:</u></b>They create a feeling of connection through shared experiences.</p>                                                                                                                       
                  </div>
                  </Col>
                  </Row>

            </TabPane>
            

            {/*Hardcover Books*/}

            <TabPane  tabId="5">
            <Row>
            <Col xs="12" lg="12" md="12" sm="12">
             <h1 className="Self_title"> Collections of Hardcover Self-Help Books</h1>       
            </Col>
            </Row>
            <Row>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style2">
                      <img  className="Poetry_img1" src="https://media.licdn.com/dms/image/D5612AQEu9Z2Z7kmbhw/article-cover_image-shrink_720_1280/0/1696519837517?e=2147483647&v=beta&t=dHdz8OnIP_LdDwq2y-gxrPkWD40hCdj6NMDw2YApNuU" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> HOW TO WIN FRIENDS AND INFLUENCE PEOPLE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">DALE CARNEGIE</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> Practical advice on improving interpersonal 
                      skills, building strong relationships, and effectively influencing others.

                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">857</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">942</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style5">
                      <img  className="Poetry_img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBp7IPVZUgnleS01eD7nsxapdRO99phcRvw&s" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> RICH DAD POOR DAD </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ROBERT KIYOSAKI</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>t contrasts two father figures' financial philosophies, 
                      teaching key lessons on wealth-building,financial independence, and the importance of investing.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">757</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">1072</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style4">
                      <img  className="Poetry_img1" src="https://bayareamastermind.com/wp-content/uploads/2023/09/think-and-grow-rich-desk.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THINK AND GROW RICH </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">NAPOLEON HILL</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It outlines principles of success and wealth-building, 
                      focusing on the power of mindset, persistence, and goal-setting to achieve financial and personal success.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">687</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">842</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
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
                      <Card className="card_style9">
                      <img  className="Poetry_img1" src="https://bookbins.in/wp-content/uploads/2024/04/The-Mountain-Is-You-Brianna-Wiest-Buy-Online-Bookbins-1.png" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> The MOUNTAIN IS YOU </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">BRIANNA WEIST</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>It explores how obstacles and self-limiting beliefs can be transformed 
                      into opportunities for growth, emphasizing self-awareness and resilience in overcoming challenges.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">302</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">487</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
		               <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style13">
                      <img  className="Poetry_img1" src="https://images.blinkist.io/images/books/63b53f9487ad2d0008808a23/1_1/470.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> STOP OVERTHIKING </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">NICK TRENTON</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Techniques to overcome excessive rumination and anxiety, 
                      focusing on strategies to simplify decision-making and cultivate a more balanced, present-minded approach.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">797</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">1042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
		                 <Col xs="12" lg="1" md="1" sm="12"></Col>
		                  <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style12">
                      <img  className="Poetry_img1" src="https://miro.medium.com/v2/resize:fit:545/1*h3_BFnffXgAs7newfGCJZA.jpeg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> BUILD DON'T TALK </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RAJ SHAMANI</CardSubtitle>
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
                        <div className="rupees">
                        <FaIndianRupeeSign/><p className="strike2">557</p>
                        <div className="rupees2">
                        <FaIndianRupeeSign/><p className="strike2">742</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn8">Add to Cart</button>
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
                  <p  className="words-self"> Why We Need To Read Selp-Help Books</p>
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
                  <p  className="words-self1"> <b><u>Personal Growth:</u> </b>Self-help books offer strategies for self-improvement and personal development. </p>
                  <p  className="words-self1"> <b><u>Mental Health:</u></b> They provide guidance on managing stress, anxiety, and emotional challenges.</p>
                  <p  className="words-self1"> <b><u>Inspiration:</u></b> These books motivate and inspire through stories of success and resilience. </p>
                  <p  className="words-self1"> <b><u>Practical Advice:</u></b> They offer actionable steps to enhance relationships, productivity, and goal-setting.</p>
                  <p  className="words-self1"> <b><u>Self-Awareness:</u></b> Reading them fosters deeper understanding of one’s strengths and weaknesses. </p>
                  <p  className="words-self1"> <b><u>Resilience:</u></b> They build resilience by showing that others have overcome similar challenges. </p>
                  <p  className="words-self1"> <b><u>Continuous Learning:</u></b> Self-help books encourage the acquisition of new skills and knowledge. </p>
                  <p  className="words-self1"> <b><u>Mindfulness:</u></b> They promote mindfulness and emotional intelligence for balanced living. </p>
                  <p  className="words-self1"> <b><u>Empowerment:</u> </b>These books empower readers to take control of their lives and decisions.</p> 
                  <p  className="words-self1"> <b><u>Lifestyle Changes:</u></b> They guide readers toward adopting healthier habits and a fulfilling life.</p>       
                  <p  className="words-self1"> <b><u>Perspective Broadening:</u></b> Self-help books introduce new viewpoints and philosophies, expanding understanding.</p>       
                  <p  className="words-self1"> <b><u>Community Connection:</u></b>They create a feeling of connection through shared experiences.</p>                                                                                                                       
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