import React from 'react';
import {useDispatch} from 'react-redux';
import '../customCss/Tab.css';
import history from '../history';

function VerticalTabComponent(props) {
   
    return (
        <div>
        <div className="tab">
        <button class="tablinks" onClick={()=>{history.push('/')}} id="defaultOpen">Sprint Tracker</button>
        <button class="tablinks" onClick={()=>{history.push('/sprintProgress')}}>Sprint Progress</button>
        <button class="tablinks" onClick={()=>{history.push('/sprintDashBoard')}}>Dashboard</button>
        <button class="tablinks" onClick={()=>{history.push('/sprintAnalysis')}}>Analysis</button>

        </div>
        </div>
    )
}





export default (VerticalTabComponent);
