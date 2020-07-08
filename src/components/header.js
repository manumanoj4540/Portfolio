import React, { useState } from 'react'
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png'

const Header = () => {
    const [isNavOpen,toggleNav] = useState(false);    
    return (
        <div className="navi">
            <Navbar dark expand="md">
                <div className='container'>
                    <div className="row">
                    <NavbarToggler onClick={() => toggleNav(!isNavOpen)}  className="col-3"/>
                    <NavbarBrand className="mr-auto col" href="/home"><img src={logo} height="50" width="150" alt='Manu Manoj' /></NavbarBrand>
                    </div>
                    
                    <Collapse isOpen={isNavOpen} navbar>
                            <Nav navbar className=" ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-sm"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" href="#About"> About Me</a>
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

export default Header