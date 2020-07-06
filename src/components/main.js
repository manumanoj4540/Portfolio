import React from 'react';
import Home from './home';
import Contact from './contact';

import Project from './project';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../App.css'


const Main = (props) => {
   return(
    <div>
       <Switch>           
           <Route path='/home' component={()=> <Home /> } />
           <Route path='/contact' component={()=> <Contact /> } />
           
           <Route path='/project' component={()=> <Project /> } />
           <Redirect to="/home" />
       </Switch>   
  
    </div>
        )
    
}
export default Main ;