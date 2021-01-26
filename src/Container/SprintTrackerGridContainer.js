import React, {Component} from 'react';
import PaginationToolBar from '../Container/PagingContainer';
import SprintTrackerGridComponent from '../Components/SprintTrackerGridComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Action from '../action/action';
import CreateModalContainer from './CreateModalContainer'

class SprintTrackerGridContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            isChecked : false,
            sortState : false, //asc
            createModalState : false
        }
     
       
    }

    componentDidMount(){
       this.props.actionDispatch.setLoader(true);
       this.Load()
    }

    Load=()=>{
        const axios = require('axios');
        axios({
            method : 'post',
            url : 'http://localhost:4000/getSprintTrackerGrid.do',
            data : {
                data :"1"
            }
        })
        .then((response)=>{
            console.log(response.data)
            if(response.data.status === 200){
                this.props.actionDispatch.setSprintTrackerGridData(response.data.result);
                this.props.actionDispatch.setSprintTrackertotalGridData(response.data.count);
                this.props.actionDispatch.setLoader(false);
            }
        })
        .catch((err)=>{
            console.log(err);
            this.props.actionDispatch.setLoader(false);
        })
    }

    extractSearchInput=(event)=>{
      this.setState({
        [event.target.name] : event.target.value
      })
      this.searchApi(event.target.value);

    }
   checktheCheckBoxOnRowSelection=()=>{
    
     this.specificCheckBoxSelection();
   
   }

   specificCheckBoxSelection=()=>{
    this.setState({
        isChecked : !this.state.isChecked
    })
   }
    searchApi=(query)=>{
        this.props.actionDispatch.setLoader(true);
        const axios = require('axios');
        axios({
            method : 'post',
            url : 'http://localhost:4000/getSprintTrackerGrid.do',
            data : {
                formQuery : query
            },
        })
        .then((res)=>{
            this.props.actionDispatch.setSprintTrackerGridData(res.data.result);
            this.props.actionDispatch.setSprintTrackertotalGridData(res.data.count);
            this.props.actionDispatch.setLoader(false);
        })
        .catch((err)=>{
            console.log(err);
            this.props.actionDispatch.setLoader(false);
        })
    }
    changeSortState=(event)=>{
        this.setState({
            sortState : !this.state.sortState
        },()=>{
            if(this.state.sortState === true){
                var descending = -1
                this.sortApi(descending,event);
            }
            else{
                var ascending = 1
                this.sortApi(ascending,event);
            }
        })
    }
    sortApi=(sortKey,event)=>{
        this.props.actionDispatch.setLoader(true);
        const axios = require("axios");
       //    console.log(event.target.name)
        console.log([event])
        var sorting = {
            "sorting":{
            [event] : sortKey 
        }
       }
        axios({
            method:"post",
            url : 'http://localhost:4000/getSprintTrackerGrid.do',
            data : sorting
        })
        .then((res)=>{
            if(res.data.status === 200){
                this.props.actionDispatch.setSprintTrackerGridData(res.data.result);
                this.props.actionDispatch.setSprintTrackertotalGridData(res.data.count);
                this.props.actionDispatch.setLoader(false);

            }
        })
        .catch((err)=>{
            console.log(err);
            this.props.actionDispatch.setLoader(false);
        })
    }

    toCsv=()=>{
        
        var str="";
        for(var i=0;i<this.props.gridSprintTrackerData.length;i++){
            var line = '';
            console.log("kkk");
            for(var key in this.props.gridSprintTrackerData[i]){
                if (line != '') line += ','

                line +=this.props.gridSprintTrackerData[i][key];
                console.log(line);
            }
            str += line + '\r\n';
            console.log(str);
        }
        
      
        var exportedFilenmae =  'export.csv';
        var blob = new Blob([str], { type: 'text/csv;charset=utf-8;' });
       if (navigator.msSaveBlob) { 
        console.log("blob")
        navigator.msSaveBlob(blob, exportedFilenmae);
      } 
      else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }     


    }

    changeState=()=>{
        this.setState({
            createModalState: !this.state.createModalState
        })
    }
    closeModal=()=>{
       this.setState({
        createModalState : !this.state.createModalState
       }, console.log(this.state.modalState))
        
    }
  render(){
     
      return(
          <div className="parentDiv">
               {
                  this.state.createModalState===true?<CreateModalContainer totalRecords={this.props.totalRecords} 
                  closeCreateModal={this.closeModal}
                  modalState={this.state.createModalState}
                  Load={this.Load}/>:null
                }
              <SprintTrackerGridComponent gridData = {this.props.gridSprintTrackerData }
              extractSearchInput={this.extractSearchInput}
              rowSelection={this.checktheCheckBoxOnRowSelection}
              isChecked={this.state.isChecked}
              specificCheckBoxSelection={this.specificCheckBoxSelection}
              changeSortState={this.changeSortState}
              toCsv={this.toCsv}
              Load={this.Load}
              changeState={this.changeState}
              loaderState={this.props.loaderState}/>
             
              <PaginationToolBar
             numberOfPages = {Math.ceil(this.props.totalRecords/this.props.pageSize)}></PaginationToolBar>
          </div>
      )
  }
}

const mapStateToProps = (state) =>{
    console.log("reducer page size")
    console.log(state.Reducers.pageSize)
    return{

        gridSprintTrackerData : state.Reducers.gridSprintTrackerData,
        totalRecords : state.Reducers.totalSprintGridRecords,
        pageSize:state.Reducers.pageSize,
        loaderState : state.Reducers.loaderState
        
    }
}

const mapDispatchToProps = (dispatch) =>(
    {
       actionDispatch :  bindActionCreators(Action, dispatch),
    }
)
export default connect(mapStateToProps,mapDispatchToProps) (SprintTrackerGridContainer);