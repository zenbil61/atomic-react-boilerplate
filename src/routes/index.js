import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import * as Views from './../components/pages'

const Routes = () => (
    <div className="container">
        <Router>
             <Route exact path='/' component={Views.home}  />
             <Route exact path='/company' component={Views.company}  />
             <Route exact path='/contact' component={Views.contact}  />
         </Router>
    </div>
  );


  export default Routes;