import React from 'react'
import { Link } from 'react-router-dom';
import Header from './header'
import dp from '../img/dp.jpg'
import About from './about';
import { Spring } from 'react-spring/renderprops'
import '../App.css'

function Home () {

    function description() {
        return(
            <Spring 
                from={{opacity:0}}
                to={{opacity:1}}
                config={{duration:1000, delay:2000}}>
                {
                    props =>(
                        <div style={props}>                                                    
                        <div>
                            <h3 className="col-12">A Quick Intro</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <Link to='/about'><button className="btn offset-md-6"><p>Contact Me</p></button></Link>
                        </div>                                  
                        </div>
                    )
                }
            </Spring>                            
        );
    }

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
                            config={{duration:1000, delay:1000}}>
                                {
                                    props =>(
                                        <div style={props}>
                                            <div className="row"> 
                                                <img src={dp} alt="Manu Manoj" width="60%" height="60%" className="col-6 col-md-4 test"/>                                                      
                                                <div className="col-12 col-md intro">{description()}</div>
                                            </div>
                                        </div>
                                        )
                                }
                        </Spring>                            
                    </div>
                </div>
            </div>
        </div>
        <About />   
        </>
    ); 
}
export default Home ;                                       