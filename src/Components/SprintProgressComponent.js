import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon';
import  '../customCss/SprintProgress.css';
import ExpandableRowContainer from '../Container/ExpandableRowContainer';

const data =[
    {item_id :"1",item_name:"story1"},
    {item_id : "2",item_name :"stor2"},
    {item_id :"3",item_name:"stor4"},
]

export default function SprintProgressComponent(props) {
    return (
        <div>
            <table className="tableProgress">
                <thead>
                   <div className="headingDiv">
                    <tr>
                        <th ></th>
                        <th className="heading"> Item Id</th>
                        <th className="heading">Item Name</th>
                        <th className="heading">Status </th>
                        <th className="heading">Due Date </th>
                        <th className="heading">Lead </th>

                    </tr>
                   </div> 
                </thead>
                <tbody>
                    
                     {
                         data.map((value,index)=>{
                             console.log(props.collapseStatus[index])
                             var indexValue = index;
                             return(
                            <div className="gridrowStyle">
                            <tr  key={index}>
                            <td className="tdCell"><button className="collapsible" onClick={()=>props.collapseStatusChange(indexValue)}></button></td>
                            
                   
                            <td className="tdCell">{value.item_id}</td>
                            <td className="tdCell">{value.item_name}</td>
                            <td className="tdCell">Requrement Gathering</td>
                            <td className="tdCell">20th-Feb-2020</td>
                            <td className="tdCell">Shalini Verma</td>
                          </tr>
                            {
                                props.collapseStatus[index].selected === true ?<tr key={"subRow"+index}><td colSpan="6"><ExpandableRowContainer uniqueRow={index}/></td></tr>:null
                           }
                           </div>
                             );
                         })
                     }
                    
                    
                   
                                  
                   
                </tbody>
            </table>
        </div>
    )
}
