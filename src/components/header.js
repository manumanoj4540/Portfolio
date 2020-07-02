import React, { Component } from 'react'
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, Button, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Card,CardBody, CardHeader } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png'


export class Header extends Component {
    constructor (props) {
        super (props) ;
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
           isNavOpen: false
        };
    }
   
    toggleNav() {
       this.setState({ isNavOpen: !this.state.isNavOpen });
     }
    
    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className='container'>
                        <div className="row">
                            <NavbarToggler onClick={this.toggleNav}  className="col-3"/>
                            <NavbarBrand className="mr-auto col" href="/home"><img src={logo} height="50" width="150" alt='Ristorante Con Fusion' /></NavbarBrand>
                        </div>
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar className=" ml-auto">
                                        <NavItem>
                                            <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-sm"></span> Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to='/about'> About Me</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link"  to='/project'> Projects</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to='/contact'> Contact Me</NavLink>
                                        </NavItem>
                                    </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
            </div>
        )
    }
}

export default Header
