import logo from './logo.svg';
import SampleLogos from './SampleLogo.jpg'
import './App.css';
import React from 'react';
import CoolTabs from 'react-cool-tabs';
import SprintTrackerContainer from './Container/SprintTrackerGridContainer';
import SprintProgressContainer from './Container/SprintProgressGridContainer';
import VerticalTabComponent from './Components/VerticalTabComponent'
import {useSelector } from 'react-redux'
import './customCss/Tab.css'
function App() {
  
 const sprintTrackerState = useSelector((state)=>state.Reducers.sprintTrackerState)
 const sprintProgressState = useSelector((state)=>state.Reducers.sprintProgressState)
   return (
    <div>
      
      <div className="AppBar">
         
        <img src={SampleLogos} className="ImageLogo"/>
        
      </div>
    <div style={{display:"inline"}}>
          {/* <CoolTabs
                  style={{ width:  '100vw', height:  '100vh'}}
                  activeTabStyle={{ background:  '#0f3460', color:  'white' }}
                  unActiveTabStyle={{ background:  '#0f3460', color:  'white' }}
                  activeLeftTabBorderBottomStyle={{ background:  'orange', height:  4 ,}}
                  activeRightTabBorderBottomStyle={{ background:  'orange', height:  4 }}

                  leftContentStyle={{ background:  '#16213e' }}
                  rightContentStyle={{ background:  '#16213e' }}
                  leftTabTitle={'Sprint Tracker'}
                  rightTabTitle= {'Sprint Progress'}
                  leftContent={<SprintTrackerContainer/>}
                  rightContent={"H2"}
                  contentTransitionStyle={'transform 0.6s ease-in'}
                  borderTransitionStyle={'all 0.6s ease-in'}
           ></CoolTabs>  */}

          <VerticalTabComponent/>
           {
             sprintTrackerState === true && sprintProgressState===false?<div className="tabcontent"><SprintTrackerContainer/></div>:<SprintProgressContainer/>
           }
         

         
       </div>
       
       </div>
  );
}

export default App;
