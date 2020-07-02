import React , { Component } from 'react'
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, Button, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Card,CardBody, CardHeader } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Header from './header'
import dp from '../img/dp.jpg'
import { Spring } from 'react-spring/renderprops'
import '../App.css'

class Home extends Component {
 
 toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  description() {
      return(
             <Spring 
             from={{opacity:0}}
             to={{opacity:1}}
             config={{duration:1500, delay:2500}}>
             {
                 props =>(
                 <div style={props}>                                                    
                         <div>
                             <h3 className="">A Quick Intro</h3>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                             </p>
                            <button className="btn offset-md-6"><p>Lets Go</p></button>
                         </div>             
                     
                 </div>
                     )
             }
             </Spring>                            
      );
  }

 render(){
     return(
        <>
          <div className="home">                
              <Header />
              <div className= "container">
                  <div className= "row row-header">
                      <div className="col-12 col-sm-6 offset-sm-6">                           
                          <Spring 
                          from={{opacity:0}}
                          to={{opacity:1}}
                          config={{duration:1500, delay:1000}}>
                          {
                              props =>(
                              <div style={props}>
                                  <div className="row"> 
                                      <img src={dp} alt="Manu Manoj" width="60%" height="60%" className="col-12 col-md-4 test"/>                                                      
                                      <div className="col-12 col-md intro">{this.description()}</div>
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
export default Home ;
                                 
                                    
                                       