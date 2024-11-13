import '../Component/Style.css';
import React from 'react';
import {Row,Col,Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from "reactstrap";
import BR from '../images/Brand_Names/Brand.png';
import PC from '../images/Brand_Names/Penquin.png';
import DN from '../images/Brand_Names/Disney2.png';
import RB from '../images/Brand_Names/Timely.png';

function App() {
    return (
      <div>
             <container>
                <Row>
                    <Col xs="12" lg="12" md="12" sm="12">
                    <div >
                    <img src={BR} alt="Brand_Books" className="Brand_img"/>
                    
                    </div>
                    </Col>
                </Row>
            </container>
            <container>
                <Row>
                    <Col xs="2" lg="2" md="2" sm="2">
                    </Col>
                    <Col xs="8" lg="8" md="8" sm="8">
                    <div>
                      <p className="Brand_text">Our Visionary Book Curator And Publisher</p>
                    </div>
                    </Col>
                    <Col xs="2" lg="2" md="2" sm="2">
                    </Col>

                </Row>
            </container>
            <container>
                <Row>
                    <Col xs="2" lg="2" md="2" sm="2">
                    </Col>
                    <Col xs="8" lg="8" md="8" sm="8">
                    <div>
                      <p className="Brand_text2">Committed to redefining the literary landscape with a forward-thinking approach. We expertly blend creativity with industry 
                      insight to discover and elevate extraordinary voices, crafting books that captivate, challenge, and inspire readers around the globe.
                      Through our innovative publishing practices, we aim to set new benchmarks in storytelling and offer transformative reading experiences.</p>
                    </div>
                    </Col>
                    <Col xs="2" lg="2" md="2" sm="2">
                    </Col>

                </Row>
            </container>
            <container>
                <Row>
                    <Col xs="12" lg="2" md="2" sm="12">
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style" style={{}}>
                      <img  className="Brand_img1" src="https://macmillan.com/img/macmillan-publishers.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h5"> MACMILLAN PUBLISHERS  </CardTitle>
                      <CardSubtitle  style={{ color: '#f20089'}}  tag="h6">Founded in 1843</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> operates through numerous imprints and divisions worldwide, including Macmillan US, Macmillan UK, 
                      and others, offering a wide array of fiction, non-fiction, and academic titles.Its commitment to innovation and excellence has made it a leading 
                      player in the publishing industry.</CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card  className="card_style" style={{}}>
                      <img className="Brand_img1"  src="https://www.aprimo.com/wp-content/uploads/2024/02/Hachette-Book-Group-Success-Story-Thumbnail-Images.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h5"> HACHETTE PUBLICATIONS  </CardTitle>
                      <CardSubtitle style={{ color: '#f20089'}}   tag="h6">Founded in 1826</CardSubtitle>
                      <hr/>
                      <CardText style={{textAlign:"justify"}}> A leading global publisher, expensive varied catalog with a strong commitment to fostering both emerging established authors,
                      combines rich literary tradition with modern publishing practices to deliver compelling and influential works to readers worldwide.</CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                    <Card className="card_style" style={{}}>
                      <img  className="Brand_img1"  src="https://www.haveagonews.com.au/wp-content/uploads/2022/07/Survey_1600x800_2.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h5"> PENQUIN PUBLICATIONS  </CardTitle>
                      <CardSubtitle style={{ color: '#f20089'}}   tag="h6">Founded in 1935</CardSubtitle>
                      <hr/>
                      <CardText>Penguin is synonymous with literary excellence, offering a wide range of genres including fiction, non-fiction, and children’s books. 
                      Known for its iconic branding and commitment to quality.Penguin continues to champion great storytelling and innovative voices in literature.
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>

                </Row>
            </container>
            <container>
                <Row>
                    <Col xs="12" lg="2" md="2" sm="12">
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style" style={{ }}>
                      <img  className="Brand_img1"  src="https://media.licdn.com/dms/image/C511BAQG5M4YptKVCiQ/company-background_10000/0/1585677190094/roli_books_cover?e=2147483647&v=beta&t=yiMwekQ04hX0hnVg4KCsNcAp4Z-LxsGkCdjZi-hoZhI" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h5"> ROLI PUBLICATION  </CardTitle>
                      <CardSubtitle style={{ color: '#f20089'}}   tag="h6">Founded in 1843</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> operates through numerous imprints and divisions worldwide, including Macmillan US, Macmillan UK, 
                      and others, offering a wide array of fiction, non-fiction, and academic titles.Its commitment to innovation and excellence has made it a leading 
                      player in the publishing industry.</CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card  className="card_style" style={{}}>
                      <img className="Brand_img1"  src="https://external-preview.redd.it/yRKtXAA4iMuU3JPTTNB9o9YZAWxT56BWFLRiDYc-pLA.jpg?auto=webp&s=f54ef7d95a300fb014b4f13a994548ec97424138" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h5"> HARPER COLLINS  </CardTitle>
                      <CardSubtitle style={{ color: '#f20089'}}   tag="h6">Founded in 1826</CardSubtitle>
                    <hr/>
                      <CardText style={{textAlign:"justify"}}> A leading global publisher, expensive varied catalog with a strong commitment to fostering both emerging established authors,
                      combines rich literary tradition with modern publishing practices to deliver compelling and influential works to readers worldwide.</CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                    <Card className="card_style" style={{}}>
                      <img className="Brand_img1"  src="https://rekhtabooks.com/cdn/shop/collections/Thumbnails_Square_019.jpg?v=1674131133" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h5"> RUPA PUBLICATION  </CardTitle>
                      <CardSubtitle style={{ color: '#f20089'}}   tag="h6">Founded in 1935</CardSubtitle>
                      <hr/>
                      <CardText>Penguin is synonymous with literary excellence, offering a wide range of genres including fiction, non-fiction, and children’s books. 
                      Known for its iconic branding and commitment to quality.Penguin continues to champion great storytelling and innovative voices in literature.
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>

                </Row>
            </container>
            <container>
                <Row>
                    <Col xs="12" lg="2" md="2" sm="12">
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style" style={{}}>
                      <img  className="Brand_img1"  src="https://static1.cbrimages.com/wordpress/wp-content/uploads/social_post/timely-social_1.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h5"> TIMELY COMICS  </CardTitle>
                      <CardSubtitle style={{ color: '#f20089'}}   tag="h6">Founded in 1843</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> operates through numerous imprints and divisions worldwide, including Macmillan US, Macmillan UK, 
                      and others, offering a wide array of fiction, non-fiction, and academic titles.Its commitment to innovation and excellence has made it a leading 
                      player in the publishing industry.</CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card  className="card_style" style={{}}>
                      <img className="Brand_img1"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDM5ir8OhXQtg2jpWhsHbgyP7dUbpvualyg&s" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h5"> ATLAS COMICS </CardTitle>
                      <CardSubtitle style={{ color: '#f20089'}}   tag="h6">Founded in 1826</CardSubtitle>
                      <hr/>
                      <CardText style={{textAlign:"justify"}}> A leading global publisher, expensive varied catalog with a strong commitment to fostering both emerging established authors,
                      combines rich literary tradition with modern publishing practices to deliver compelling and influential works to readers worldwide.</CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                    <Card className="card_style" style={{}}>
                      <img className="Brand_img1"  src="https://thewaltdisneycompany.com/app/uploads/081612_Launch_Img2.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h5"> THE WALT DISNEY  </CardTitle>
                      <CardSubtitle style={{ color: '#f20089'}}   tag="h6">Founded in 1935</CardSubtitle>
                      <hr/>
                      <CardText>Penguin is synonymous with literary excellence, offering a wide range of genres including fiction, non-fiction, and children’s books. 
                      Known for its iconic branding and commitment to quality.Penguin continues to champion great storytelling and innovative voices in literature.
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>

                </Row>
            </container>
            <container>
                <Row>
                    <Col xs="12" lg="2" md="2" sm="12">
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card className="card_style" style={{}}>
                      <img  className="Brand_img1"  src="https://linktr.ee/og/image/fourwaybooks.jpg" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h5"> FOUR WAY BOOKS  </CardTitle>
                      <CardSubtitle style={{ color: '#f20089'}}   tag="h6">Founded in 1843</CardSubtitle>
                      <hr/>
                      <CardText style={{ textAlign: 'justify'}}> operates through numerous imprints and divisions worldwide, including Macmillan US, Macmillan UK, 
                      and others, offering a wide array of fiction, non-fiction, and academic titles.Its commitment to innovation and excellence has made it a leading 
                      player in the publishing industry.</CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                      <Card  className="card_style" style={{}}>
                      <img className="Brand_img1"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dQoP6obt69axQS6nHkOJ2r1rK9bbwddy_g&s" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h5"> TUPELO PRESS BOOKS  </CardTitle>
                      <CardSubtitle style={{ color: '#f20089'}}   tag="h6">Founded in 1826</CardSubtitle>
                      <hr/>
                      <CardText style={{textAlign:"justify"}}> A leading global publisher, expensive varied catalog with a strong commitment to fostering both emerging established authors,
                      combines rich literary tradition with modern publishing practices to deliver compelling and influential works to readers worldwide.</CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                    <Card className="card_style" style={{}}>
                      <img className="Brand_img1"  src="GcQorYkDybJPKyzrIYu117LC2OnIve8AiNZeS6OR4zq0xN9JpS6vNvrqVUI0v4nK5qVyGt0&usqp=CAU" alt="Brand_img1"/>
                      <CardBody>
                      <CardTitle tag="h5"> COACH HOUSE BOOKS  </CardTitle>
                      <CardSubtitle style={{ color: '#f20089'}}   tag="h6">Founded in 1935</CardSubtitle>
                      <hr/>
                      <CardText>Penguin is synonymous with literary excellence, offering a wide range of genres including fiction, non-fiction, and children’s books. 
                      Known for its iconic branding and commitment to quality.Penguin continues to champion great storytelling and innovative voices in literature.
                      </CardText>
                      </CardBody>
                      </Card>
                    </div>
                    </Col>
                    <Col xs="12" lg="1" md="1" sm="12">
                    </Col>

                </Row>
            </container>
            <container>
            <Row>
                    <Col xs="12" lg="2" md="2" sm="12">
                    </Col>
                    <Col xs="12" lg="8" md="8" sm="12">
                    <div>
                      <p className="Brand_text3">Today 10% Offers For These Book Brands SHINE IT! </p>
                    </div>
                    </Col>
                    <Col xs="12" lg="2" md="2" sm="12">
                    </Col>

                </Row>
              
            </container>
            <container>
                <Row>
                    <Col xs="12" lg="2" md="2" sm="12">
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                    <img src={DN} className="Brand_img4" alt="Brand_img4"/> 
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                    <img src={PC} className="Brand_img3" alt="Brand_img4"/>
                   
                    </div>
                    </Col>
                    <Col xs="12" lg="3" md="3" sm="12">
                    <div>
                    <img src={RB} className="Brand_img5" alt="Brand_img4"/> 
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