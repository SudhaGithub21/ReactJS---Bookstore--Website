import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Component/Style.css';
import {Row,Col} from "reactstrap";
function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <container>
        <Row>
            <Col xs="12" lg="7" md="7" sm="12">
            </Col>
            <Col xs="12" lg="5" md="5" sm="12">
            
              <Button color="danger" className="modal_button" onClick={toggle}>
                    One Surprise! One Deal! One Series!
              </Button>
              
              <Modal isOpen={modal} toggle={toggle} {...args} className="modal_box">
                  <ModalHeader toggle={toggle}>Today's Deals</ModalHeader>
                  <ModalBody>
                    <h6>Harry Potter 1-7 Box Set: A Magical Adventures Begins</h6>
                    <img className="modal_books" src="https://5.imimg.com/data5/SELLER/Default/2020/8/PE/PX/MO/54836353/harry-potter-books-collection-j-k-rowling-bloomsbury-publishing.jpg"/>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" className="modal_button2" onClick={toggle}>
                        Buy a Book at Rs.499
                    </Button>{' '}
                  </ModalFooter> 
                </Modal>
              </Col>
          </Row>
        </container>
      
    </div>
  );
}

export default Example;