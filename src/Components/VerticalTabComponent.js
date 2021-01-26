import React from 'react';
import { shallowEqual, useSelector } from 'react-redux'
import {useDispatch} from 'react-redux';
import * as constants from '../constants/constants'
import '../customCss/Tab.css';


function VerticalTabComponent(props) {
   const dispatch = useDispatch()

    return (
        <div>
        <div className="tab">
        <button class="tablinks" onClick={()=>{dispatch({type:constants.SPRINT_TRACKER_STATE,payload:true}); dispatch({type:constants.SPRINT_PROGRESS_STATE,payload:false})}} id="defaultOpen">Sprint Tracker</button>
        <button class="tablinks" onClick={()=>{dispatch({type:constants.SPRINT_PROGRESS_STATE,payload:true}); dispatch({type:constants.SPRINT_TRACKER_STATE,payload:false})}}>Sprint Progress</button>
    
        </div>
        </div>
    )
}





export default (VerticalTabComponent);
