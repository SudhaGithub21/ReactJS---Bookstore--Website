import React from 'react';
import '../Component/Style.css';
import {Row,Col} from "reactstrap";

function App() {
    return (
      <div>
        <container>
          
          <h1 className="candle_Poetry"><i><b>We have Merch too!</b></i></h1>
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