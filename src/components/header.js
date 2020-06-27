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
           
            <div className="hero">
                <Navbar dark expand="md">
                    <div className='container'>
                    <NavbarBrand className="mr-auto" href="/">Manu Manoj</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar className=" ml-auto">
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
                <div className= "container">
                    <div className= "row row-header">
                        <div className="col-12 col-sm-6 ">
                            <h1>Ristorante con Fusion</h1>
                            <p> We take inspiration from the World's best cuisines, and create a unique fusion experience.
                                Our lipsmacking creations will tickle your culinary senses!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     )
 }
}
export default Head ;