
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
                    <p className="Cate_Poetry6"> CHILDREN - HAPPINESS</p>
                    </div>
                    </Col>
                </Row>
            </container>
            <container className="sidebar">
                <Row className="sidecolor6">
                <Col xs="12" lg="2" md="2" sm="12">
                </Col>
                    <Col xs="12" lg="8" md="8" sm="12">
                    
                        <Nav tabs vertical>
                            <NavItem className="tab16">
                            <NavLink 
                            
                                onClick={() => {
                                this.toggle('1');
                                }}
                            >
                                Child - Books
                            </NavLink>
                            </NavItem>
                            <NavItem className="tab16">
                            <NavLink
                                
                                onClick={() => {
                                this.toggle('2');
                                }}
                            >
                                Above 500 Price
                            </NavLink>
                            </NavItem>
                            <NavItem className="tab16">
                            <NavLink
                                
                                onClick={() => {
                                this.toggle('3');
                                }}
                            >
                                Below 500 Price
                            </NavLink>
                            </NavItem>
                            <NavItem className="tab16">
                            <NavLink
                                
                                onClick={() => {
                                this.toggle('4');
                                }}
                            >
                                Paperback
                            </NavLink>
                            </NavItem>
                            <NavItem className="tab16">
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
             <h1 className="Child_title"> Children Books</h1>       
            </Col>
            </Row>
            <Row>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style26" style={{}}>
                      <img  className="Poetry_img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjKbWil6-Ptcd42UbaAyGrchlk7cEkIs85g&s" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THE MAGIC OF THE LOST TEMPLE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">SUDHA MURTHY</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>About a young girl named 
                      Nooni who discovers an ancient stepwell in her grandparents' village, unraveling its historical secrets and local legends.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">857</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">942</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style46" style={{}}>
                      <img  className="Poetry_img1" src="https://i.etsystatic.com/25126483/r/il/32a1a0/3175424507/il_570xN.3175424507_mkfb.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> CHARLOTTE'S WEB </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">E.B.WHITE</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Heartwarming story about the friendship between a pig named Wilbur and a clever spider named Charlotte, 
                      who saves his life by writing words in her web.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">757</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">1072</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style56" style={{}}>
                      <img  className="Poetry_img1" src="https://raajkart.com/media/catalog/product/cache/ecec20e17625488f6eb4d0c26f956fd2/t/h/the_blue_umbrella_ruskin_bond.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THE BLUE UMBRELLA </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RUSKIN BOND</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>About a young girl named Binya, whose love for a beautiful blue umbrella stirs envy in her village, 
                      leading to lessons in kindness and generosity.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">687</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">842</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
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
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://i.etsystatic.com/17937725/r/il/a7a6e5/6218442363/il_fullxfull.6218442363_mv7a.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> The Little Prince </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ANTOINE DE SAINT-EXUPERY</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> A young prince travels between planets, discovering essential 
                      truths about love and relationships, and reflecting on the nature of human connections. 
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">257</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">452</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://www.madrasshoppe.com/61543-large_default/grandma-s-bag-of-stories-latest-edition-1-january-2015-murty-sudha.jpg"/>
                      <CardBody>
                      <CardTitle tag="h6"> GRANDMA'S BAG OF STORIES </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">SUDHA MURTHY</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> A collection of engaging tales that blend tradition and imagination, 
                      as told by a grandmother to her grandchildren, filled with wisdom and life lessons.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">197</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">272</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://assets.giftalove.com/resources/common/giftimages/productimage2/the-kid-who-came-from-space-by-ross-welford.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THE KID WHO CAME FROM SPACE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ROSS WELFORD</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>The adventure of a boy who arrives from another planet, 
                      sparking a quest that uncovers mysteries and explores the value of friendship and belonging..
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">157</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">242</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
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
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://images-eu.ssl-images-amazon.com/images/I/71Wcm0WWBnS._AC_UL210_SR210,210_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> ALL TIME FAVOURITES </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RUSKIN BOND</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> An all-time favorite book captivates readers with its timeless story, 
                      memorable characters,universal themes and profound insights into the human experience.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">217</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">442</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://imgv2-2-f.scribdassets.com/img/word_document/649980440/original/216x287/fce90a9a4c/1699918695?v=1" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> FLUFFY AND ME </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ANITA KRISHAN</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>A Charming story about a young girl and her beloved pet rabbit, 
                      Fluffy, exploring themes of friendship and imagination. It reveals the joys and challenges of growing up.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">302</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">487</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://mybooksfactory.com/wp-content/uploads/2023/01/81-N1-POIpxw-L.webp" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> AKBAR AND BIRBAL - Tales From India </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6"> Wonder House Books</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Akbar and Birbal features clever tales of Emperor Akbar and his wise advisor Birbal, 
                      highlighting their humorous and insightful problem-solving.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">1057</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">2042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
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
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/913Xkzwq8JL._SY466_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> STORY BOOKS FOR KIDS </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">MAPLE PRESS</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">SET OF 10 Books</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> Some of the classics in this set of storybooks are Heidi, The Jungle Book, Alice in Wonderland, Robinson Crusoe, 
                      Pinocchio, Gulliver's Travels and more.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">357</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">642</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://images-eu.ssl-images-amazon.com/images/I/81BNrA1kNLL._AC_UL210_SR210,210_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> GREAT STORIES FOR CHILDRENS </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RUSKIN BOND</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>a collection of timeless and enchanting tales that 
                      captivate young readers with imaginative plots, moral lessons, and memorable characters.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">557</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">742</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/913JimZWhFL._SY466_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6">8 Adventure Collections BOOKS </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ENID BLYTON</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>His books are beloved for their adventurous plots, magical worlds, 
                      and the spirited children who embark on exciting quests and solve mysteries.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">797</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">1042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
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
             <h1 className="Child_title"> Above 500 Price Children Books</h1>       
            </Col>
            </Row>
              <Row>
            <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style26" style={{}}>
                      <img  className="Poetry_img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjKbWil6-Ptcd42UbaAyGrchlk7cEkIs85g&s" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THE MAGIC OF THE LOST TEMPLE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">SUDHA MURTHY</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>About a young girl named 
                      Nooni who discovers an ancient stepwell in her grandparents' village, unraveling its historical secrets and local legends.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">857</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">942</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>

                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style26" style={{}}>
                      <img  className="Poetry_img1" src="https://i.etsystatic.com/25126483/r/il/32a1a0/3175424507/il_570xN.3175424507_mkfb.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> CHARLOTTE'S WEB </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">E.B.WHITE</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Heartwarming story about the friendship between a pig named Wilbur and a clever spider named Charlotte, 
                      who saves his life by writing words in her web.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">757</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">1072</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style26" style={{}}>
                      <img  className="Poetry_img1" src="https://raajkart.com/media/catalog/product/cache/ecec20e17625488f6eb4d0c26f956fd2/t/h/the_blue_umbrella_ruskin_bond.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THE BLUE UMBRELLA </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RUSKIN BOND</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>About a young girl named Binya, whose love for a beautiful blue umbrella stirs envy in her village, 
                      leading to lessons in kindness and generosity.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">687</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">842</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                  </Row>

                  <Row>
                  <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://mybooksfactory.com/wp-content/uploads/2023/01/81-N1-POIpxw-L.webp" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> AKBAR AND BIRBAL - Tales From India </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6"> Wonder House Books</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Akbar and Birbal features clever tales of Emperor Akbar and his wise advisor Birbal, 
                      highlighting their humorous and insightful problem-solving.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">1057</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">2042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                  
                    
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                     <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://images-eu.ssl-images-amazon.com/images/I/81BNrA1kNLL._AC_UL210_SR210,210_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> GREAT STORIES FOR CHILDRENS </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RUSKIN BOND</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>a collection of timeless and enchanting tales that 
                      captivate young readers with imaginative plots, moral lessons, and memorable characters.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">557</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">742</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>

                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/913JimZWhFL._SY466_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6">8 Adventure Collections BOOKS </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ENID BLYTON</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>His books are beloved for their adventurous plots, magical worlds, 
                      and the spirited children who embark on exciting quests and solve mysteries.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">797</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">1042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
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
                  <p  className="words-self6"> Why Children Need To Read Books</p>
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
                  <p  className="words-self1"> <b><u>Language Development:</u></b> Enhances vocabulary and language skills.</p>
                  <p  className="words-self1"> <b><u>Imagination Growth:</u></b> Stimulates imagination and creativity.</p>
                  <p  className="words-self1"> <b><u>Critical Thinking:</u></b> Develops critical thinking and problem-solving abilities.</p>
                  <p  className="words-self1"> <b><u>Focus Enhancement:</u></b> Improves focus and concentration</p>
                  <p  className="words-self1"> <b><u>Empathy Building:</u></b> Promotes empathy and understanding of others.</p>
                  <p  className="words-self1"> <b><u>Love of Learning:</u></b> Encourages a lifelong love of learning. </p>
                  <p  className="words-self1"> <b><u>Cognitive Development:</u></b> Strengthens memory and cognitive development.</p>
                  <p  className="words-self1"> <b><u>Knowledge Expansion:</u></b> Provides knowledge and expands worldviews.</p>       
                  <p  className="words-self1"> <b><u>Emotional Growth: </u></b>Supports emotional development and self-regulation.</p>       
                  <p  className="words-self1"> <b><u>Academic Foundation:</u></b> Builds a strong foundation for academic success.</p>  
                  <p  className="words-self1"> <b><u>Academic Foundation:</u></b> Builds a strong foundation for acadeic success.</p>                                                                                                                       
                  </div>
                  </Col>
                  </Row>
            </TabPane>

            {/* Below 500 Price Books*/}
            
            <TabPane tabId="3">
            <Row>
            <Col xs="12" lg="12" md="12" sm="12">
             <h1 className="Child_title">Below 500 Price Children Books</h1>       
            </Col>
            </Row>
                <Row>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://i.etsystatic.com/17937725/r/il/a7a6e5/6218442363/il_fullxfull.6218442363_mv7a.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> The Little Prince </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ANTOINE DE SAINT-EXUPERY</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> A young prince travels between planets, discovering essential 
                      truths about love and relationships, and reflecting on the nature of human connections. 
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">257</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">452</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://www.madrasshoppe.com/61543-large_default/grandma-s-bag-of-stories-latest-edition-1-january-2015-murty-sudha.jpg"/>
                      <CardBody>
                      <CardTitle tag="h6"> GRANDMA'S BAG OF STORIES </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">SUDHA MURTHY</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> A collection of engaging tales that blend tradition and imagination, 
                      as told by a grandmother to her grandchildren, filled with wisdom and life lessons.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">197</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">272</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://assets.giftalove.com/resources/common/giftimages/productimage2/the-kid-who-came-from-space-by-ross-welford.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THE KID WHO CAME FROM SPACE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ROSS WELFORD</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>The adventure of a boy who arrives from another planet, 
                      sparking a quest that uncovers mysteries and explores the value of friendship and belonging..
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">157</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">242</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
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
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://images-eu.ssl-images-amazon.com/images/I/71Wcm0WWBnS._AC_UL210_SR210,210_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> ALL TIME FAVOURITES </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RUSKIN BOND</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> An all-time favorite book captivates readers with its timeless story, 
                      memorable characters,universal themes and profound insights into the human experience.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">217</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">442</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>

                   <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://imgv2-2-f.scribdassets.com/img/word_document/649980440/original/216x287/fce90a9a4c/1699918695?v=1" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> FLUFFY AND ME </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ANITA KRISHAN</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>A Charming story about a young girl and her beloved pet rabbit, 
                      Fluffy, exploring themes of friendship and imagination. It reveals the joys and challenges of growing up.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">302</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">487</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    
                     <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/913Xkzwq8JL._SY466_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> STORY BOOKS FOR KIDS </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">MAPLE PRESS</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">SET OF 10 Books</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> Some of the classics in this set of storybooks are Heidi, The Jungle Book, Alice in Wonderland, Robinson Crusoe, 
                      Pinocchio, Gulliver's Travels and more.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">357</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">642</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
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
                  <p  className="words-self6"> Why Children Need To Read Books</p>
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
                  <p  className="words-self1"> <b><u>Language Development:</u></b> Enhances vocabulary and language skills.</p>
                  <p  className="words-self1"> <b><u>Imagination Growth:</u></b> Stimulates imagination and creativity.</p>
                  <p  className="words-self1"> <b><u>Critical Thinking:</u></b> Develops critical thinking and problem-solving abilities.</p>
                  <p  className="words-self1"> <b><u>Focus Enhancement:</u></b> Improves focus and concentration</p>
                  <p  className="words-self1"> <b><u>Empathy Building:</u></b> Promotes empathy and understanding of others.</p>
                  <p  className="words-self1"> <b><u>Love of Learning:</u></b> Encourages a lifelong love of learning. </p>
                  <p  className="words-self1"> <b><u>Cognitive Development:</u></b> Strengthens memory and cognitive development.</p>
                  <p  className="words-self1"> <b><u>Knowledge Expansion:</u></b> Provides knowledge and expands worldviews.</p>       
                  <p  className="words-self1"> <b><u>Emotional Growth: </u></b>Supports emotional development and self-regulation.</p>       
                  <p  className="words-self1"> <b><u>Academic Foundation:</u></b> Builds a strong foundation for academic success.</p>  
<p  className="words-self1"> <b><u>Academic Foundation:</u></b> Builds a strong foundation for acadeic success.</p>                                                                                                                       
                  </div>
                  </Col>
                  </Row>
            </TabPane>

            {/*Paperback*/}

            <TabPane  tabId="4">
            <Row>
            <Col xs="12" lg="12" md="12" sm="12">
             <h1 className="Child_title"> Collections of Paperback Children Books</h1>       
            </Col>
            </Row>
            <Row>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://i.etsystatic.com/17937725/r/il/a7a6e5/6218442363/il_fullxfull.6218442363_mv7a.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> The Little Prince </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ANTOINE DE SAINT-EXUPERY</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> A young prince travels between planets, discovering essential 
                      truths about love and relationships, and reflecting on the nature of human connections. 
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">257</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">452</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://www.madrasshoppe.com/61543-large_default/grandma-s-bag-of-stories-latest-edition-1-january-2015-murty-sudha.jpg"/>
                      <CardBody>
                      <CardTitle tag="h6"> GRANDMA'S BAG OF STORIES </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">SUDHA MURTHY</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> A collection of engaging tales that blend tradition and imagination, 
                      as told by a grandmother to her grandchildren, filled with wisdom and life lessons.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">197</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">272</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://assets.giftalove.com/resources/common/giftimages/productimage2/the-kid-who-came-from-space-by-ross-welford.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THE KID WHO CAME FROM SPACE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ROSS WELFORD</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>The adventure of a boy who arrives from another planet, 
                      sparking a quest that uncovers mysteries and explores the value of friendship and belonging..
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">157</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">242</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
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
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://images-eu.ssl-images-amazon.com/images/I/71Wcm0WWBnS._AC_UL210_SR210,210_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> ALL TIME FAVOURITES </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RUSKIN BOND</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> An all-time favorite book captivates readers with its timeless story, 
                      memorable characters,universal themes and profound insights into the human experience.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">217</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">442</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>


                     <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://mybooksfactory.com/wp-content/uploads/2023/01/81-N1-POIpxw-L.webp" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> AKBAR AND BIRBAL - Tales From India </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6"> Wonder House Books</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Akbar and Birbal features clever tales of Emperor Akbar and his wise advisor Birbal, 
                      highlighting their humorous and insightful problem-solving.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">1057</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">2042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://images-eu.ssl-images-amazon.com/images/I/81BNrA1kNLL._AC_UL210_SR210,210_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> GREAT STORIES FOR CHILDRENS </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RUSKIN BOND</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Papercover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>a collection of timeless and enchanting tales that 
                      captivate young readers with imaginative plots, moral lessons, and memorable characters.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">557</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">742</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
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
                  <p  className="words-self6"> Why Children Need To Read Books</p>
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
                  <p  className="words-self1"> <b><u>Language Development:</u></b> Enhances vocabulary and language skills.</p>
                  <p  className="words-self1"> <b><u>Imagination Growth:</u></b> Stimulates imagination and creativity.</p>
                  <p  className="words-self1"> <b><u>Critical Thinking:</u></b> Develops critical thinking and problem-solving abilities.</p>
                  <p  className="words-self1"> <b><u>Focus Enhancement:</u></b> Improves focus and concentration</p>
                  <p  className="words-self1"> <b><u>Empathy Building:</u></b> Promotes empathy and understanding of others.</p>
                  <p  className="words-self1"> <b><u>Love of Learning:</u></b> Encourages a lifelong love of learning. </p>
                  <p  className="words-self1"> <b><u>Cognitive Development:</u></b> Strengthens memory and cognitive development.</p>
                  <p  className="words-self1"> <b><u>Knowledge Expansion:</u></b> Provides knowledge and expands worldviews.</p>       
                  <p  className="words-self1"> <b><u>Emotional Growth: </u></b>Supports emotional development and self-regulation.</p>       
                  <p  className="words-self1"> <b><u>Academic Foundation:</u></b> Builds a strong foundation for academic success.</p>  
<p  className="words-self1"> <b><u>Academic Foundation:</u></b> Builds a strong foundation for acadeic success.</p>                                                                                                                       
                  </div>
                  </Col>
                  </Row>
            </TabPane>
            

            {/*Hardcover Books*/}

            <TabPane  tabId="5">
            <Row>
            <Col xs="12" lg="12" md="12" sm="12">
             <h1 className="Child_title"> Collections of Hardcover Children Books</h1>       
            </Col>
            </Row>
            <Row>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style26" style={{}}>
                      <img  className="Poetry_img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjKbWil6-Ptcd42UbaAyGrchlk7cEkIs85g&s" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THE MAGIC OF THE LOST TEMPLE </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">SUDHA MURTHY</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>About a young girl named 
                      Nooni who discovers an ancient stepwell in her grandparents' village, unraveling its historical secrets and local legends.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">857</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">942</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style26" style={{}}>
                      <img  className="Poetry_img1" src="https://i.etsystatic.com/25126483/r/il/32a1a0/3175424507/il_570xN.3175424507_mkfb.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> CHARLOTTE'S WEB </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">E.B.WHITE</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>Heartwarming story about the friendship between a pig named Wilbur and a clever spider named Charlotte, 
                      who saves his life by writing words in her web.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">757</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">1072</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style26" style={{}}>
                      <img  className="Poetry_img1" src="https://raajkart.com/media/catalog/product/cache/ecec20e17625488f6eb4d0c26f956fd2/t/h/the_blue_umbrella_ruskin_bond.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> THE BLUE UMBRELLA </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">RUSKIN BOND</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>About a young girl named Binya, whose love for a beautiful blue umbrella stirs envy in her village, 
                      leading to lessons in kindness and generosity.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">687</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">842</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
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
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://imgv2-2-f.scribdassets.com/img/word_document/649980440/original/216x287/fce90a9a4c/1699918695?v=1" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> FLUFFY AND ME </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ANITA KRISHAN</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>A Charming story about a young girl and her beloved pet rabbit, 
                      Fluffy, exploring themes of friendship and imagination. It reveals the joys and challenges of growing up.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">302</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">487</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>

                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/913Xkzwq8JL._SY466_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6"> STORY BOOKS FOR KIDS </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">MAPLE PRESS</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">SET OF 10 Books</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> Some of the classics in this set of storybooks are Heidi, The Jungle Book, Alice in Wonderland, Robinson Crusoe, 
                      Pinocchio, Gulliver's Travels and more.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">357</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">642</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
                        <FaRegHeart className='wish_list'  />
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12"></Col>
  
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style36" style={{}}>
                      <img  className="Poetry_img1" src="https://m.media-amazon.com/images/I/913JimZWhFL._SY466_.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h6">8 Adventure Collections BOOKS </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">ENID BLYTON</CardSubtitle>
                      <CardSubtitle  style={{ marginTop:"5px"}}  tag="h6">Hardcover</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}>His books are beloved for their adventurous plots, magical worlds, 
                      and the spirited children who embark on exciting quests and solve mysteries.
                      <div className="star">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        </div>
                        <div className="rupees6">
                        <FaIndianRupeeSign/><p className="strike26">797</p>
                        <div className="rupees26">
                        <FaIndianRupeeSign/><p className="strike26">1042</p>
                        </div>
                        </div>
                        <button type="button" class="book_btn6">Book Now</button>
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
                  <p  className="words-self6"> Why Children Need To Read Books</p>
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
                  <p  className="words-self1"> <b><u>Language Development:</u></b> Enhances vocabulary and language skills.</p>
                  <p  className="words-self1"> <b><u>Imagination Growth:</u></b> Stimulates imagination and creativity.</p>
                  <p  className="words-self1"> <b><u>Critical Thinking:</u></b> Develops critical thinking and problem-solving abilities.</p>
                  <p  className="words-self1"> <b><u>Focus Enhancement:</u></b> Improves focus and concentration</p>
                  <p  className="words-self1"> <b><u>Empathy Building:</u></b> Promotes empathy and understanding of others.</p>
                  <p  className="words-self1"> <b><u>Love of Learning:</u></b> Encourages a lifelong love of learning. </p>
                  <p  className="words-self1"> <b><u>Cognitive Development:</u></b> Strengthens memory and cognitive development.</p>
                  <p  className="words-self1"> <b><u>Knowledge Expansion:</u></b> Provides knowledge and expands worldviews.</p>       
                  <p  className="words-self1"> <b><u>Emotional Growth: </u></b>Supports emotional development and self-regulation.</p>       
                  <p  className="words-self1"> <b><u>Academic Foundation:</u></b> Builds a strong foundation for academic success.</p>  
                  <p  className="words-self1"> <b><u>Academic Foundation:</u></b> Builds a strong foundation for acadeic success.</p>                                                                                                                       
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