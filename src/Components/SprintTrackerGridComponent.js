import React, {useState} from 'react';
import '../customCss/SprintGrid.css';
import ReactDOM from "react-dom";
import LoaderComponent  from './LoaderComponent'


function SprintTrackerGridComponent(props)
{
   
    
    return (
        
        props.gridData === undefined || props.gridData === null ? <div></div> : 
        <div>
          
         <React.Fragment>
            {console.log(props.gridData)}
        <div style={{display:"flex"}}>
        <button type="button" className="buttonStyle" onClick={()=>{props.changeState()}}>Create</button>
        <button type="button"   className="buttonStyle">Edit</button>
        <button type="button" className="buttonStyle">Delete</button>
        <button type="button" className="btn" onClick={()=>{props.toCsv()}}></button>
        <button type="button" className="Refreshbtn" onClick={()=>{props.Load()}}></button>
          
        <input type="textbox" className="searchTextField" name="searchText" placeholder="Search for Sprint Id" onInput={props.extractSearchInput}/>
        </div>
        <div >
        <table>
           <thead>
            <tr  key = "headingTag"> 
              <th ><input type="checkbox"/></th>
              <th onClick={(e)=>{props.changeSortState("sprint_id",e)}} name = "sprint_id">Sprint Id</th>
              <th onClick={(e)=>{props.changeSortState("sprint_name",e)}}name = "sprint_name">Sprint Name</th>
              <th onClick={(e)=>{props.changeSortState("total_items",e)}}name = "total_items">Total Items</th>
              <th onClick={(e)=>{props.changeSortState("no_completed_items",e)}} name = "no_completed_items">Total Completed Items </th>
              <th onClick={(e)=>{props.changeSortState("no_inprogress_items",e)}}name = "no_inprogress_items">Total InProgress Items</th>
              <th onClick={(e)=>{props.changeSortState("no_descoped_items",e)}} name = "no_descoped_items">Total Descoped Items</th>
              
             </tr>
            </thead>
             <tbody>
            { 
                
                props.loaderState === true ?<LoaderComponent/> : props.gridData.map((value,index)=>{
                    var checBoxId = index+"sprintCheck"
                    
                    return (
                       
                        <tr className = "rowStyle" key = {index + "sprintRow"} onClick={props.rowSelection}>
                            <td ><input type="checkbox" id = {checBoxId} onChange={props.specificCheckBoxSelection} checked={props.isChecked}/></td>
                            <td id = {index + "sprintdata"}>{value.sprint_id}</td>
                            <td id = {index + "sprintdata"}> {value.sprint_name}</td>
                            <td id = {index + "sprintdata"}> {value.total_items}</td>
                            <td id = {index + "sprintdata"} > {value.no_completed_items}</td>
                            <td id = {index + "sprintdata"}> {value.no_inprogress_items}</td>
                            <td id = {index + "sprintdata"}> {value.no_descoped_items}</td>
                        </tr>
                        
                    )
                })
            }
            </tbody>
        
        </table>
       
       
        
        </div>
       
        </React.Fragment>
        </div>
    );
}

export default SprintTrackerGridComponent;