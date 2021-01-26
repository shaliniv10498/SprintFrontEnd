import * as constants from '../constants/constants';

export const setSprintTrackerGridData = (data) =>({
    type : constants.SPRINT_TRACKER_GRID_DATA,
    payload : data
})

export const setSprintTrackertotalGridData = (data) =>({
    type : constants.SPRINT_TRACKER_TOTAL_DATA,
    payload : data
})


export const setLoader = (data) => ({
    type : constants.LOADER_STATE,
    payload : data
})

export const setSprintTrackerState=(data)=>(
    {
        type : constants.SPRINT_TRACKER_STATE,
        payload : data
    }
)


export const setSprintProgressState=(data)=>(
    {
        type : constants.SPRINT_PROGRESS_STATE,
        payload : data
    }
)

