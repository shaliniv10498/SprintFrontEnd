import React from 'react'
import cssFile from '../customCss/Modal.css'
export default function CreateModalComponent(props) {
    
    return (
        <div id="modalCreate" className="modal" >
          
            
          
            <div className="modalContent">
           <div className="modalHeader">
             <h5>  Add New Sprint </h5>   
             <div className="close" onClick={()=>{props.close()}}>&times;</div>
           </div>
           <div className="modalBody">
               <div className="Items">
                  <div className="modalLabel">   Sprint Id : </div >
                   <div>
                   <input name="sprint_id" className="inputFieldsCss" onChange={(e)=>{props.saveData(e)}} type="textfield" required/>
                   </div>
                </div>
                <div className="Items">  
                   <div className="modalLabel">
                   Sprint Name :
                   </div> 
                   <div>
                       <input type="textfield" name="sprint_name" onChange={(e)=>{props.saveData(e)}} className="inputFieldsCss" required/>
                   </div>
                 </div>
                 <div className="Items">
                     <div className="modalLabel">
                     Total Items : 
                     </div>
                     <div>
                     <input type="textfield" name="total_items" onChange={(e)=>{props.saveData(e)}} className="inputFieldsCss" required/>
                     </div>
                </div>
                <div className="Items">
                     <div className="modalLabel">
                     Total Completed Items:
                     </div>
                     <div>
                     <input type="textfield" name="no_completed_items" onChange={(e)=>{props.saveData(e)}} className="inputFieldsCss"/>
                     </div> 
                </div>
                <div className="Items">
                     <div className="modalLabel">
                     Total Inprogress Items:
                     </div> 
                     <div>
                         <input type="textfield" name="no_inprogress_items" onChange={(e)=>{props.saveData(e)}} className="inputFieldsCss"/>
                     </div>

                </div>
                <div className="Items"> 
                     <div className="modalLabel">
                      Total Descoped Items: 
                     </div>
                     <div>
                         <input type="textfield" name="no_descoped_items" onChange={(e)=>{props.saveData(e)}} className="inputFieldsCss"/>
                     </div>
                </div>
                <div className="Items">
                     <div className="modalLabel">
                     Sprint Status:
                     </div> 
                     <div>
                         <select name = "sprint_status"  onChange={(e)=>{props.saveData(e)}} className="inputFieldsCss">
                     
                         <option value="Active"> Active</option>
                         <option value="Inactive"> Inactive</option>
                         <option value="Completed"> Completed</option>
                        
                         
                         </select>
                     </div>
                </div>
                <div className="Items">
                    <button type="button" className="buttonStyle" onClick={()=>{props.save(); }}>Save</button>
                    <button type="button" className="buttonStyle" onClick={()=>{props.close()}}>Cancel</button>
                </div>
                
            </div>
            </div>
        </div>
    )
}
