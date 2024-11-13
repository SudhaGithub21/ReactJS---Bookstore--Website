import '../Component/Style.css';
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,CardBody,CardSubtitle,
    CardImg,CardGroup
 } from 'reactstrap';
import { FaRegHeart } from "react-icons/fa";
import classnames from 'classnames';


export default class Example extends React.Component {
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
                    <div className="head_2">
                    <p className="tab"> <b><span className="sim">Build Your Own Library, just</span>Tab it! Grab it! Store it!</b> </p>
                    </div>
                    </Col>
                </Row>
        </container>
        <container>
        <Nav tabs className="Books_Section">
          <NavItem className="nav_tabs">
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Romance
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Adventures
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Self-Help
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Poetry
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          <container>
                <Row className="main">
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                    <Col xs="12" lg="4" md="4" sm="12">
                    <div>
                    <h4 className="words">People's choice</h4>
                    <h2 className="words"><b>Romance Books</b></h2>
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
            <CardGroup className="card">
                        <Card>
                            <div className="img_card">
                            <CardImg
                            alt="Card image cap"
                            src="https://readerinbookland.in/wp-content/uploads/2023/03/png_20230209_233828_0000.png"
                            top
                            width="100%"
                            className="image"
                            />
                            <div class="middle">
                            <div className="Section"><b>Add to wish list</b><FaRegHeart/></div>
                            </div>
                            </div>
                            <CardBody>
                            <CardTitle tag="h5">
                            TWISTED LOVE
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-danger"
                                tag="h6"
                            >
                                Ana Huang
                            </CardSubtitle>
                            <CardText>
                            Follows the story of two individuals who are polar opposites. She has a heart of gold. He has a heart of ice. Despite their differences,
                            they find themselves drawn together and embark on a journey of exploring the world of love and discovering who they are.
                            </CardText>
                            
                            <button type="button" class="book_btn">Buy a Book</button>
                            
                            
                            </CardBody>
                        </Card>
                        <Card>
                        <div className="img_card">
                            <CardImg
                            alt="Card image cap"
                            src="https://www.bookishly.co.uk/cdn/shop/products/PrideandPrejudice_Personalised_BookCover_Photo-main_1000x1000.jpg?v=1642757901"
                            top
                            width="100%"
                            className="image"
                            />
                            <div class="middle">
                            <div className="Section"><b>Add to wish list</b><FaRegHeart/></div>
                            </div>
                            </div>
                            <CardBody>
                            <CardTitle tag="h5">
                                Pride and Prejudice
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-danger"
                                tag="h6"
                            >
                                Jane Austen
                            </CardSubtitle>
                            <CardText>
                            Focuses on Mr. Darcy and Elizabeth Bennet's initial dislike of each other 
                            and the series of events that leads to their eventual falling in love and happy marriage.
                            Moral: love and family are important, and that pride and prejudice can be dangerous.
                            </CardText>
                            <button type="button" class="book_btn">Buy a Book</button>
                            </CardBody>
                        </Card>
                        <Card>
                        <div className="img_card">
                        <CardImg
                            alt="Card image cap"
                            src="https://www.estorilbooks.co.za/wp-content/uploads/2021/09/FICTION-2023-07-20T182537.301.png"
                            top
                            width="100%"
                            className="image"
                            />
                            <div class="middle">
                            <div className="Section"><b>Add to wish list</b><FaRegHeart/></div>
                            </div>
                            </div>
                            <CardBody>
                            <CardTitle tag="h5">
                                Its Ends with Us
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-danger"
                                tag="h6"
                            >
                                Colleen Hoover
                            </CardSubtitle>
                            <CardText>
                            follows a girl named Lily who has just moved and is ready to start her life after college. Lily then meets a 
                            guy named Ryle and she falls for him.As she is developing feelings for Ryle, Atlas, her first love, reappears 
                            and challenges the relationship between Lily and Ryle.                          
                            </CardText>
                            
                            <button type="button" class="book_btn">Buy a Book</button>
                            
                            </CardBody>
                        </Card>
                        </CardGroup>
          </TabPane>
          <TabPane tabId="2">
          <container>
                <Row className="main">
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                    <Col xs="12" lg="4" md="1" sm="12">
                    <div>
                    <h4 className="words">People's choice</h4>
                    <h2 className="words"><b>Adventures Books</b></h2>
                    </div>
                    </Col>
                    <Col xs="12" lg="4" md="1" sm="12">
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12">
                    <button type="button" class="btn btn-primary btn2">View All</button>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                </Row>
            </container>
            <hr className="horizontal_line"/>
            <CardGroup className="card">
                        <Card>
                            <div className="img_card">
                            <CardImg
                            alt="Card image cap"
                            src="https://i.ebayimg.com/images/g/A3IAAOSwuylh83f5/s-l400.jpg"
                            top
                            width="100%"
                            className="image"
                            />
                            <div class="middle">
                            <div className="Section"><b>Add to wish list</b><FaRegHeart/></div>
                            </div>
                            </div>
                            <CardBody>
                            <CardTitle tag="h5">
                            TREASURE ISLAND
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-danger"
                                tag="h6"
                            >
                                Robert Louis Stevenson
                            </CardSubtitle>
                            <CardText>
                            It is a classic adventure story and a historical fiction set in the mid-18th century. In this book, a boy named Jim Hawkins from Bristol, 
                            England goes on an adventure to a faraway island. He is in quest to bring home something of great value and to gain his own moral adulthood, 
                            a treasure in itself.
                            </CardText>
                            
                            <button type="button" class="book_btn">Buy a Book</button>
                            
                            
                            </CardBody>
                        </Card>
                        <Card>
                        <div className="img_card">
                            <CardImg
                            alt="Card image cap"
                            src="https://preview.redd.it/first-edition-hemingway-the-old-man-and-the-sea-v0-pny15sk1tsgc1.jpg?width=768&format=pjpg&auto=webp&s=7f5d180bfae62fb292bcbbaebd42a001da4df1d0"
                            top
                            width="100%"
                            className="image"
                            />
                            <div class="middle">
                            <div className="Section"><b>Add to wish list</b><FaRegHeart/></div>
                            </div>
                            </div>
                            <CardBody>
                            <CardTitle tag="h5">
                             The old man and the sea 
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-danger"
                                tag="h6"
                            >
                                Ernest Hemingway's
                            </CardSubtitle>
                            <CardText>
                            the story revolves around Santiago, an aging Cuban fisherman, and his epic battle with a giant marlin. Santiago, who hasn't caught
                            a fish in 84 days, sets out on a journey far into the sea. He hooks a massive marlin, marking the zenith of his fishing career.
                            Theme:how perseverance and dignity can help one battle through struggles in life. 
                            </CardText>
                            <button type="button" class="book_btn">Buy a Book</button>
                            </CardBody>
                        </Card>
                        <Card>
                        <div className="img_card">
                        <CardImg
                            alt="Card image cap"
                            src="https://m.media-amazon.com/images/I/61AKusfSxHL._UX250_.jpg"
                            top
                            width="100%"
                            className="image"
                            />
                            <div class="middle">
                            <div className="Section"><b>Add to wish list</b><FaRegHeart/></div>
                            </div>
                            </div>
                            <CardBody>
                            <CardTitle tag="h5">
                            Journey to the Center of the Earth 
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-danger"
                                tag="h6"
                            >
                                Jules Verne
                            </CardSubtitle>
                            <CardText>
                            a geology professor, Otto Lidenbrock, and his nephew Axel discover and decode an ancient document that purports
                            to show that a dormant volcano holds a secret entrance to a series of caverns leading to a subterranean world at the earth's center.                     
                            </CardText>
                            
                            <button type="button" class="book_btn">Buy a Book</button>
                            
                            </CardBody>
                        </Card>
                        </CardGroup>
          </TabPane>
          <TabPane tabId="3">
          <container>
                <Row className="main">
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                    <Col xs="12" lg="4" md="4" sm="12">
                    <div>
                    <h4 className="words">People's choice</h4>
                    <h2 className="words"><b>Self-Help Books</b></h2>
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
            <CardGroup className="card">
                        <Card>
                            <div className="img_card">
                            <CardImg
                            alt="Card image cap"
                            src="https://i0.wp.com/curledmark.in/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-19-at-09.37.11-1.jpeg?fit=1024%2C1280&ssl=1"
                            top
                            width="100%"
                            className="image"
                            />
                            <div class="middle">
                            <div className="Section"><b>Add to wish list</b><FaRegHeart/></div>
                            </div>
                            </div>
                            <CardBody>
                            <CardTitle tag="h5">
                            How to Win Friends and Influence People
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-danger"
                                tag="h6"
                            >
                                Dale Carnegie
                            </CardSubtitle>
                            <CardText>
                            Importance of showing genuine interest in others, listening actively, and making others feel important and appreciated. 
                            It also suggests that to influence others, one should avoid arguments, admit mistakes, and let others take credit for ideas or work.
                            to win people to your way of thinking, you should avoid arguments, because arguments yield no winners. 
                            </CardText>
                            
                            <button type="button" class="book_btn">Buy a Book</button>
                            
                            
                            </CardBody>
                        </Card>
                        <Card>
                        <div className="img_card">
                            <CardImg
                            alt="Card image cap"
                            src="https://nanchi.blog/wp-content/uploads/2020/04/the-power-of-your-subconscious-mind-by-joseph-murphy-book.jpg?w=900"
                            top
                            width="100%"
                            className="image"
                            />
                            <div class="middle">
                            <div className="Section"><b>Add to wish list</b><FaRegHeart/></div>
                            </div>
                            </div>
                            <CardBody>
                            <CardTitle tag="h5">
                            The Power of your Subconscious Mind
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-danger"
                                tag="h6"
                            >
                                Joseph Murphy
                            </CardSubtitle>
                            <CardText>
                            Explores the potential and influence the subconscious mind can have on our lives.
                            It offers techniques to harness the power of your subconscious mind for personal growth and success.
                            It claims that all of your life experiences are the result of the interaction between your conscious and subconscious minds
                            </CardText>
                            <button type="button" class="book_btn">Buy a Book</button>
                            </CardBody>
                        </Card>
                        <Card>
                        <div className="img_card">
                        <CardImg
                            alt="Card image cap"
                            src="https://m.media-amazon.com/images/I/713h6f2BrwL._UX250_.jpg"
                            top
                            width="100%"
                            className="image"
                            />
                            <div class="middle">
                            <div className="Section"><b>Add to wish list</b><FaRegHeart/></div>
                            </div>
                            </div>
                            <CardBody>
                            <CardTitle tag="h5">
                            Thinking, Fast and Slow
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-danger"
                                tag="h6"
                            >
                                Daniel Kahneman
                            </CardSubtitle>
                            <CardText>
                            Our mind combines two systems: System 1, the fast-thinking mode, operates effortlessly and instinctively, relying on intuition and past experiences.
                            In contrast, System 2, the slow-thinking mode, engages in deliberate, logical analysis, often requiring more effort.
                            The understanding of the two systems of thinking that influence our decision-making processes
                            </CardText>
                            
                            <button type="button" class="book_btn">Buy a Book</button>
                            
                            </CardBody>
                        </Card>
                        </CardGroup>
          </TabPane>
          <TabPane tabId="4">
          <container>
                <Row className="main">
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>
                    <Col xs="12" lg="4" md="4" sm="12">
                    <div>
                    <h4 className="words">People's choice</h4>
                    <h2 className="words"><b>Poetry Books</b></h2>
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
            <CardGroup className="card">
                        <Card>
                            <div className="img_card">
                            <CardImg
                            alt="Card image cap"
                            src="https://i2.wp.com/missmaddychats.com/wp-content/uploads/2019/02/201902251688280544.jpg?fit=870%2C1024&ssl=1"
                            top
                            width="100%"
                            className="image"
                            />
                            <div class="middle">
                            <div className="Section"><b>Add to wish list</b><FaRegHeart/></div>
                            </div>
                            </div>
                            <CardBody>
                            <CardTitle tag="h5">
                            The Sun and Her Flowers
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-danger"
                                tag="h6"
                            >
                                Rupi Kaur
                            </CardSubtitle>
                            <CardText>
                            Explores the end of a relationship, her traumas and insecurities, and the people and relationships that inspire her and help her heal.
                            Focuses on themes of love and loss, trauma and abuse, healing, femininity and the body.
                            Wilting touches on the subject of heartbreak and loss.
                            </CardText>
                            
                            <button type="button" class="book_btn">Buy a Book</button>
                            
                            
                            </CardBody>
                        </Card>
                        <Card>
                        <div className="img_card">
                            <CardImg
                            alt="Card image cap"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKyskCbc2jRGDvfBUCp7Au1FY20EgCjobIhdaMIeOJxpIB1x_xkdiD82pjPr6JgF_A50&usqp=CAU"
                            top
                            width="100%"
                            className="image"
                            />
                            <div class="middle">
                            <div className="Section"><b>Add to wish list</b><FaRegHeart/></div>
                            </div>
                            </div>
                            <CardBody>
                            <CardTitle tag="h5">
                            Pillow Thoughts
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-danger"
                                tag="h6"
                            >
                                Courtney Peppernell
                            </CardSubtitle>
                            <CardText>
                            A collection of poetry and prose that delves into the depths of love, heartache, and self-discovery. Through beautifully crafted words, 
                            the book explores the complexities of human emotions and offers comfort and solace to those who have ever felt lost or alone.
                            Theme:Self-Healing
                            </CardText>
                            <button type="button" class="book_btn">Buy a Book</button>
                            </CardBody>
                        </Card>
                        <Card>
                        <div className="img_card">
                        <CardImg
                            alt="Card image cap"
                            src="https://duabookpalace.com/cdn/shop/files/67c5a9ad0189784db1db4fcbbd247d94.jpg?v=1712242314"
                            top
                            width="100%"
                            className="image"
                            />
                            <div class="middle">
                            <div className="Section"><b>Add to wish list</b><FaRegHeart/></div>
                            </div>
                            </div>
                            <CardBody>
                            <CardTitle tag="h5">
                            I Don't Love You Anymore
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-danger"
                                tag="h6"
                            >
                                Rithvik Singh
                            </CardSubtitle>
                            <CardText>
                            To find you if you've ever loved someone who didn't love you back, if you've ever over-invested in the wrong people or if you have a hard time letting go.
                            I Don't Love You Anymore is a book that'll feel like home to you. I promise it'll hold you gently on your worst days.
                            </CardText>
                            
                            <button type="button" class="book_btn">Buy a Book</button>
                            
                            </CardBody>
                        </Card>
                        </CardGroup>
          </TabPane>
        </TabContent>
        </container>
      </div>
    );
  }
}