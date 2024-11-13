
import T from '../Component/logo.png';
import '../Component/Style.css';
import Home from "./Home";
import Brand from "../Component2/Brand-Books";
import Bedtime from '../component3/Bed-Time';
import Comics from '../Component1/Comics';
import Poetry from '../Component4/Poetry-Books';
import Child from '../Component6/Child-Books';
import Self from '../Component8/Self-books';
import Fantasy from '../Component5/fantasy';
import React from 'react';
import { FaSearch } from "react-icons/fa";
import { BiGroup } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input } from 'reactstrap';

 
  class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
      <Router>
        <Navbar color="light" light expand="md">
        <Link to="/" className="Unique">
          <NavbarBrand >
          
          <img src ={T} className ="logo" alt="Books Logo"/>
          <b className="title">Mind Breakers</b>
          </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto heads" navbar>
              <NavItem>
              <Link to="/" className="Unique"><NavLink href="Home">Categories</NavLink></Link>
              </NavItem>
              <NavItem>
              <Link to="/Brand" className="Unique"><NavLink href="/Component2/Brand-Books">Brands</NavLink></Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  what you want?
                </DropdownToggle>   
                <DropdownMenu right>
                  <Link to="/Fantasy" className="Unique">
                  <DropdownItem>
                    Fantasy Fiction
                  </DropdownItem>
                  </Link>
                  <Link to="/Bedtime" className="Unique">
                    <DropdownItem >
                      Bed-Time Stories
                    </DropdownItem>
                  </Link> 
                  <Link to="/Comics" className="Unique">
                  <DropdownItem>
                    Comics
                  </DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <Link to="/Poetry" className="Unique">
                  <DropdownItem>
                    Poetry
                  </DropdownItem>
                  </Link>
                  <Link to="/Child" className="Unique">
                  <DropdownItem>
                    Childrens Books
                  </DropdownItem>
                  </Link>
                  <Link to="/Self" className="Unique">
                  <DropdownItem>
                    Self-help Book
                  </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            
          </Collapse>
          <div>
         <Input  placeholder="Search books" className='textbox'/>
         <FaSearch className='search' />
         <BiGroup className="login_symbol" />
         <SlBasket className="basket"/>
         </div>
        </Navbar>
       

        <Routes> 
                      <Route exact path='/' element={< Home />}></Route> 
                      <Route exact path='/Brand' element={< Brand />}></Route>

                      <Route exact path='/Bedtime' element={< Bedtime />}></Route>
                      <Route exact path='/Comics' element={< Comics />}></Route>
                      <Route exact path='/Poetry' element={< Poetry />}></Route>
                      <Route exact path='/Child' element={< Child />}></Route>
                      <Route exact path='/Self' element={< Self />}></Route>
                      <Route exact path='/Fantasy' element={< Fantasy />}></Route>
        </Routes> 
      </Router>
    
      </div>
    );
  }
}

export default Example;