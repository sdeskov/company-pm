import * as actionTypes from "./actionTypes";

///// ACTION CREATORS /////

// Showing the details for a given project
export const getProjectDetails = (projectId, fetchedData) => {
    return {
        type: actionTypes.GET_PROJECT_DETAILS,
        projectId: projectId,
        fetchedData: fetchedData
    }
}

export const showProjectDetails = (id, data) => {
    return (dispatch) => {
        dispatch(getProjectDetails(id, data))
    }
}