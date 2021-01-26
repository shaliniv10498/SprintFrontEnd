import React, { Component } from 'react'
import ModalComponent from '../Components/CreateModalComponent'
import SuccessMsgBox from '../Components/SuccessMessageComponent'
import FailMsgBox from '../Components/FailMsgBox';
export default class CreateModalContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            
            pkId:null,
            sprint_id : null,
            sprint_name:null,
            total_items :null,
            no_completed_items :null,
            no_inprogress_items : null,
            no_descoped_items :null,
            sprint_status : 'Active',
            
            failMsgState : false,
            messageBoxState : false
        }

        
    }

    saveData=(event)=>{
        console.log(event)
        this.setState({
            [event.target.name]:event.target.value
        }, console.log(this.state.sprint_id))
        this.setState({
            pkId : this.props.totalRecords
        })
    }
    save=()=>{
      const axios=require('axios')
     
      var savedData = this.state;
     // console.log(savedData)
      delete savedData['messageBoxState']
      delete savedData['failMsgState']
     // console.log(savedData);
     // console.log("***8")
      //console.log(this.state);
      axios({
          method:'post',
          url :'http://localhost:4000/saveSprintTrackerData.do',
          data : savedData
      })
      .then((res)=>{
        console.log("saved")
         //  var results = JSON.parse(res);
           
              
              this.changeStateMsgBox(); 
              setTimeout(() => {
                this.changeStateMsgBox()
              }, 3000);
           
      })
      .catch((er)=>{
          console.log(er);
          this.changeFailMsgState();
          setTimeout(() => {
            this.changeFailMsgState();
          }, 3000);
          
      })
      
      this.props.Load()
    }

    changeFailMsgState=()=>{
        this.setState({
          failMsgState : !this.state.failMsgState
        })
    }
    changeStateMsgBox = () =>{
       
            this.setState({
                messageBoxState : !this.state.messageBoxState
            },
            )
        
        
    }
    render() {
        
        return (
            <div>
                {
                    this.state.messageBoxState === true ? <SuccessMsgBox
                    message = {"Successfully Saved!!"}/>:null    
                }
                {
                    this.state.failMsgState === true ? <FailMsgBox message={"Could not save it!!"}/>:null
                }
                <ModalComponent
                save={this.save}
                saveData={this.saveData}
                close={this.props.closeCreateModal}
                changeStateMsgBox={this.changeStateMsgBox}/>
            </div>
        )
    }
}
