import React, { Component } from 'react'
import SprintProgress from '../Components/SprintProgressComponent'
export default class SprintProgressGridContainer extends Component {
   constructor(props){
       super(props)
       this.state = {
          
           expandCollapseStatusMap  : [
               {selected : false},
               {selected : false},
               {selected : false}
           ]
       }
   }

   collapseStatusChange =(key) =>{
    const { expandCollapseStatusMap } = this.state;
    console.log(expandCollapseStatusMap)
    console.log(key)
    expandCollapseStatusMap[key].selected = !this.state.expandCollapseStatusMap[key].selected
       this.setState({
        expandCollapseStatusMap
       })
   }

    render() {
        return (
            <div className="tabcontent">
                <SprintProgress collapseStatusChange={this.collapseStatusChange}
                collapseStatus={this.state.expandCollapseStatusMap}/>
            </div>
        )
    }
}
