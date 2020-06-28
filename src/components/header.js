import React , { Component } from 'react'
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, Button, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Card,CardBody, CardHeader } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png'
import dp from '../img/dp.jpg'
import { Spring } from 'react-spring/renderprops'
import '../App.css'

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
                    <NavbarBrand className="mr-auto" href="/"><img src={logo} height="50" width="150" alt='Ristorante Con Fusion' /></NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar className=" ml-auto">
                                    <NavItem>
                                        <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-sm"></span> Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/aboutus'> About Me</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link"  to='/menu'> Projects</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/contactus'> Contact Me</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                    </div>
                </Navbar>
                <div className= "container">
                    <div className= "row row-header">
                        <div className="col-12 col-sm-6 offset-sm-6">                           
                            <Spring 
                            from={{opacity:0}}
                            to={{opacity:1}}
                            config={{duration:1500, delay:900}}>
                            {
                                props =>(
                                <div style={props}>
                                    <div className="row"> 
                                        <img src={dp} alt="Manu Manoj" width="60%" height="60%" className="col-12 col-md-4 test"/>                                                      
                                        <div className="col-12 col-md intro">
                                            <h3 className="">A Quick Intro</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                           <button className="btn offset-md-6"><p>Lets Go</p></button>
                                        </div>             
                                    </div>
                                </div>
                                    )
                            }
                            </Spring>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
     )
 }
}
export default Head ;
                                 
                                    
                                       