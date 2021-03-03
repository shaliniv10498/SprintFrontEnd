import React, { Component } from 'react'
import { connect } from 'react-redux';
import PagingComponent from '../Components/PaginationComponent';
import {bindActionCreators} from 'redux';
import * as action from '../action/action'

class PagingContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            pageSize : 10,
            currentPage : 1,
           
            nextState :false,
            prevState : true,
        }

    }

   
  
   
    nextClick=()=>{
        console.log("pages")
        console.log(this.state.currentPage+1)
        console.log(this.props.numberOfPages)
        if(this.state.currentPage+1<this.props.numberOfPages){
        this.setState({
            currentPage : this.state.currentPage+1,
            prevState : false,
        }, this.PagingApi)
       }
       if(this.state.currentPage===this.props.numberOfPages){
        this.setState({
            prevState:false,
            nextState:true
        })
    }
              
    }

    lastClick=()=>{
        this.setState({
            currentPage : this.props.numberOfPages,
            prevState : false,
            nextState:true
        }, this.PagingApi)
    }
    prevClick=()=>{
        if(this.state.currentPage-1>1){
        this.setState({
            currentPage : this.state.currentPage-1,
            nextState:false
        }, this.PagingApi)
       }
       if(this.state.currentPage===1){
           this.setState({
               prevState:true,
               nextState:false
           })
       }
    
    }
    firstClick=()=>{
        this.setState({
            currentPage : 1,
            nextState:false,
            prevState:true
        }, this.PagingApi)
    }
    PagingApi=()=>{
        const axios = require('axios');
        this.props.actionDispatch.setLoader(true);
        axios({
            method : 'post',
            url : 'http://localhost:4000/getSprintTrackerGrid.do',
            data : {
                pageSize : this.state.pageSize,
                currentPage : this.state.currentPage
            }
        })
        .then((response)=>{
            
            if(response.data.status === 200){
                this.props.actionDispatch.setSprintTrackerGridData(response.data.result);
                this.props.actionDispatch.setLoader(false);
                
            }
        })
        .catch((err)=>{
            console.log(err);
            this.props.actionDispatch.setLoader(false);
        })
    }
    render() {
        return (
            this.props.numberOfPages === null? <div> </div>:
            <div>
                <PagingComponent
                pageSize = {this.state.pageSize}
                currentPage={this.state.currentPage}
                nextClick={this.nextClick}
                prevClick={this.prevClick}
                nextState={this.state.nextState}
                prevState={this.state.prevState}
                lastClick={this.lastClick}
                firstClick={this.firstClick}
                loaderState={this.props.loaderState}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        loaderState : state.Reducers.loaderState
    }
}
const mapDispatchToProps = (dispatch) => ({
    actionDispatch : bindActionCreators(action, dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(PagingContainer)

