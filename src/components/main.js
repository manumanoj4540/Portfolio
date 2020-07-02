import React from 'react';
import Home from './home';
import Contact from './contact';
import About from './about';
import Project from './project';
import { Switch, Route } from 'react-router-dom';
import '../App.css'


const Main = (props) => {
   return(
    <div className="home">
       <Switch>           
           <Route path='/home' component={()=> <Home /> } />
           <Route path='/contact' component={()=> <Contact /> } />
           <Route path='/about' component={()=> <About /> } />
           <Route path='/project' component={()=> <Project /> } />
       </Switch>      
    </div>
        )
    
}
export default Main ;