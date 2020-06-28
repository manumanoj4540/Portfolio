import React, { Component } from 'react';
import Head from './header'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render (){
        return(
            <div>
                <Head />
            </div>
        )
    }
}
export default Main ;