import T from '../Component/logo.png';
import { FaSearch } from "react-icons/fa";
import { BiGroup } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import './Style.css';
import React from 'react';

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
        
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
          
          <img src ={T} className = 'logo' alt="Books Logo"/>
          <b className="title">Mind Breakers</b>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto heads" navbar>
              <NavItem>
                <NavLink href="/component/">Categories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Brands</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  what you want?
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Romance Fiction
                  </DropdownItem>
                  <DropdownItem>
                    Fantasy Fiction
                  </DropdownItem>
                  <DropdownItem>
                    Adventures Fiction
                  </DropdownItem>
                  <DropdownItem>
                    Comics
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Poetry
                  </DropdownItem>
                  <DropdownItem>
                   Biography
                  </DropdownItem>
                  <DropdownItem>
                    Childrens Books
                  </DropdownItem>
                  <DropdownItem>
                    Self-help Book
                  </DropdownItem>
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
        
    
      </div>
    );
  }
}

export default Example;