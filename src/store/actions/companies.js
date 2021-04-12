import * as actionTypes from "./actionTypes";

///// ACTION CREATORS /////

// Showing the details for a given company
export const getCompanyDetails = (companyId, fetchedData) => {
    return {
        type: actionTypes.GET_COMPANY_DETAILS,
        companyId: companyId,
        fetchedData: fetchedData
    }
}

export const showCompanyDetails = (id, data) => {
    return (dispatch) => {
        dispatch(getCompanyDetails(id, data))
    }
}
