import React from 'react';
import Home from './home';
import Header from './header'
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../App.css'


const Main = (props) => {
   return(
    <div className="home">
       <Switch>           
           <Route path='/home' component={()=> <Home /> } />
       </Switch>      
    </div>
        )
    
}
export default Main ;