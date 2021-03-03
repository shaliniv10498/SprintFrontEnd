import SampleLogos from './SampleLogo.jpg'
import './App.css';
import React from 'react';
import SprintTrackerContainer from './Container/SprintTrackerGridContainer';
import SprintProgressContainer from './Container/SprintProgressGridContainer';
import VerticalTabComponent from './Components/VerticalTabComponent'
import {useSelector } from 'react-redux'
import './customCss/Tab.css';
import {Router, Route, Link } from "react-router-dom";
import history from './history'
import profile from './Profile.svg'
import './customCss/Profile.css';
function App() {
  
 const sprintTrackerState = useSelector((state)=>state.Reducers.sprintTrackerState)
 const sprintProgressState = useSelector((state)=>state.Reducers.sprintProgressState)
   return (
    <div>
      
      <div className="AppBar">
         
        <img src={SampleLogos} className="ImageLogo"/>
        <img src={profile} className="svg-icon" alt="logo"/>
        
      </div>
      
         <Router history={history}>
          <VerticalTabComponent/>
          <Route exact path="/" component={SprintTrackerContainer}/>
          <Route path="/sprintProgress" component={SprintProgressContainer}/>
        </Router>
     
       
       
       </div>
  );
}

export default App;
