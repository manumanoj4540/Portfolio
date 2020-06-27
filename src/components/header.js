import React , { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, Button, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Head extends Component {
 constructor (props) {
     super (props) ;
     this.state = {

     };
 }
 render(){
     return(
        <>
            <Navbar dark color='dark' expand="md">
                <div className='container'>
                <NavbarBrand className="mr-auto" href="/">Manu Manoj</NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="try ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-sm"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/menu'> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </div>
            </Navbar>
        </>
     )
 }
}
export default Head ;