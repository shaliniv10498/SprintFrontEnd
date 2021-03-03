import * as constants from '../constants/constants'


const initialState = {
    gridSprintTrackerData : null,
    totalSprintGridRecords : null,
    pageSize:10,
    loaderState : false,
   
    
}

function sprintTrackerGridReducer(state = initialState,action){
   switch(action.type){
  case   constants.SPRINT_TRACKER_GRID_DATA : return {
                                            ...state,
                                            gridSprintTrackerData : action.payload
                                            }
                                            break;
  case constants.SPRINT_TRACKER_TOTAL_DATA : return{
                                                ...state,
                                                totalSprintGridRecords : action.payload
                                              }
                                              break;

  case constants.LOADER_STATE : return{
                                        ...state,
                                        loaderState : action.payload
                                      }
                                      break;
    default : return initialState
   }

}

export default sprintTrackerGridReducer